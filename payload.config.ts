import path from "path";
import sharp from "sharp";
import { buildConfig } from "payload";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import {
  BlocksFeature,
  lexicalEditor,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";
import { CalloutBlock } from "./src/blocks/CalloutBlock.ts";
import { Users } from "./src/collections/Users.ts";
import { Media } from "./src/collections/Media.ts";
import { Posts } from "./src/collections/Posts.ts";

export default buildConfig({
  // Public-facing URL — used by Payload admin for absolute links and OAuth redirects
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",

  // Allow same-origin requests from the frontend (required for local API + live preview postMessage)
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"],
  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"],

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— Enlinque CMS",
    },
    // Keep admin session alive during long editing sessions
    autoRefresh: true,
    components: {
      // Patches window.open so Payload's live-preview "popout" button opens
      // a new tab (like the red Preview link) instead of a popup window.
      providers: ["/src/components/admin/WindowOpenPatch.tsx#WindowOpenPatch"],
    },
    // Live Preview: renders the blog page in an iframe inside the admin panel
    livePreview: {
      // Route through the same /preview handler used by the Preview button.
      // That handler validates PREVIEW_SECRET + Payload auth, calls
      // draftMode().enable(), then redirects to the blog page so the page
      // fetches with { draft: true } and shows unpublished content.
      // Without this, the iframe loads /blog/:slug directly without draft mode,
      // access.read filters out _status:'draft' posts, and the page 404s.
      url: ({ data }) => {
        const slug = (data as { slug?: string })?.slug;
        if (!slug) return null;
        const previewSecret = process.env.PREVIEW_SECRET;
        if (!previewSecret) return `/blog/${slug}`; // fallback: shows only published
        const params = new URLSearchParams({
          slug,
          collection: "posts",
          path: `/blog/${slug}`,
          previewSecret,
        });
        const baseURL =
          process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";
        return `${baseURL}/preview?${params.toString()}`;
      },
      collections: ["posts"],
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },

  // Lexical is Payload's default rich-text editor
  // FixedToolbarFeature keeps the formatting toolbar visible at all times
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      // Custom on-brand blocks available in every richText field.
      // Insert via the "+" button in the editor toolbar → Block → Callout.
      BlocksFeature({ blocks: [CalloutBlock] }),
    ],
  }),

  collections: [Users, Media, Posts],

  // 32-byte random secret — generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  secret: process.env.PAYLOAD_SECRET || "",

  db: mongooseAdapter({
    // Reuse the same MongoDB Atlas cluster as the existing Mongoose connection.
    // Payload manages its own collections (users, media, posts, payload-*)
    // independently from the existing contactforms and planforms collections.
    url: process.env.MONGO_URI || "",
  }),

  // Payload v3 requires an explicit email adapter — without it every auth
  // email (password reset, user verification) is silently dropped and the
  // server emits a WARN on every startup.  nodemailerAdapter reads the same
  // SMTP env vars already used by the custom transporter in src/lib/email.ts,
  // so no new secrets are needed.  Payload creates its own internal transport
  // via the adapter's bundled nodemailer; the adapter verifies the SMTP
  // connection on startup and surfaces any misconfiguration immediately.
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_USER || "",
    defaultFromName: "Enlinque",
    transportOptions: {
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || "",
        pass: process.env.EMAIL_PASS || "",
      },
    },
  }),

  // ── Startup migration: stamp legacy posts ──────────────────────────────────
  // When versions/drafts are enabled on an existing collection, Payload does
  // NOT back-fill `_status` on pre-existing documents.  The Admin panel list
  // view only shows documents that carry `_status`, so all legacy posts appear
  // invisible in the CMS.
  //
  // This `onInit` hook runs ONCE per server startup, AFTER Payload has already
  // established its MongoDB connection, and uses that same live connection to
  // set `_status: 'published'` on every post that still lacks the field.
  // It is fully idempotent — once all posts are stamped the updateMany matches
  // zero documents and costs a single fast indexed scan on every subsequent boot.
  //
  // A formal migration file also lives at
  //   src/migrations/20260524000000_stamp_existing_posts_published_status.ts
  // for running against production via `npm run payload migrate` in CI.
  onInit: async (payload) => {
    // console.warn is used intentionally — payload.logger.info is suppressed
    // by Payload's default WARN log level in dev and would be invisible.
    console.warn("[Payload onInit] Checking legacy posts...");
    try {
      // ── Phase 1: stamp _status on any posts that still lack it ────────────
      // Fast path via native MongoDB — no Payload overhead.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nativeDb = (payload.db as any)?.connection?.db;
      if (nativeDb) {
        const stampResult = await nativeDb
          .collection("posts")
          .updateMany(
            { _status: { $exists: false } },
            { $set: { _status: "published" } },
          );
        if (stampResult.modifiedCount > 0) {
          console.warn(
            `[Payload onInit] Stamped _status on ${stampResult.modifiedCount} post(s).`,
          );
        }
      }

      // ── Phase 2: create initial version entries in _posts_v ───────────────
      // Payload's admin list view requires at least one entry in _posts_v per
      // document (the "version history"). Documents created before drafts was
      // enabled have zero version entries and are invisible in the admin list
      // even though they exist in the posts collection and are publicly
      // accessible. Calling payload.update() triggers Payload's version-
      // creation logic for each affected document.
      //
      // This phase only runs when _posts_v is completely empty (first boot
      // after enabling drafts). Subsequent restarts short-circuit immediately.
      const { totalDocs: existingVersions } = await payload.findVersions({
        collection: "posts",
        limit: 1,
        overrideAccess: true,
      });

      if (existingVersions > 0) {
        console.warn(
          `[Payload onInit] ✓ Version history already exists (${existingVersions} version(s) found) — nothing to do.`,
        );
        return;
      }

      // _posts_v is empty — find all legacy posts and create an initial version
      const { docs: legacyPosts, totalDocs: totalPosts } = await payload.find({
        collection: "posts",
        overrideAccess: true,
        depth: 0,
        limit: 1000,
      });

      if (totalPosts === 0) {
        console.warn("[Payload onInit] No posts found — nothing to do.");
        return;
      }

      console.warn(
        `[Payload onInit] Creating initial version entries for ${totalPosts} legacy post(s)…`,
      );

      for (const post of legacyPosts) {
        await payload.update({
          collection: "posts",
          id: post.id,
          data: { _status: "published" },
          overrideAccess: true,
        });
      }

      console.warn(
        `[Payload onInit] ✓ Done. Created version entries for ${totalPosts} post(s). ` +
          `Refresh the Admin panel to see them.`,
      );
    } catch (err) {
      console.error("[Payload onInit] Failed:", err);
    }
  },

  // sharp is used for server-side image resizing during upload
  sharp,

  typescript: {
    // Auto-generated types file — import as @/payload-types in components
    outputFile: path.resolve(process.cwd(), "src/payload-types.ts"),
  },

  // Opt out of Payload's anonymous usage telemetry
  telemetry: false,

  // ── CLI bin scripts ────────────────────────────────────────────────────────
  // Register seed as a Payload bin command so Payload resolves and passes the
  // SanitizedConfig directly — bypassing the tsx ESM @payload-config alias
  // resolution that fails on Node.js 24 (ERR_INVALID_MODULE_SPECIFIER).
  // Run with: npm run seed   →   payload seed
  bin: [
    {
      scriptPath: path.resolve(process.cwd(), "src/seed.ts"),
      key: "seed",
    },
  ],
});
