/**
 * Payload CMS Seed Script
 *
 * Migrates the 9 existing hardcoded blog posts from blogData.ts into the
 * Payload "posts" collection via the Local API.  Also seeds the Payload
 * "media" collection by uploading each post's cover image from public/images/
 * using Payload's Local API `filePath` upload — the authoritative way to
 * programmatically import files into Payload without using the REST API.
 *
 * Run:  npm run seed   (→ payload seed)
 *
 * IMPORTANT: Set PAYLOAD_SECRET and MONGO_URI in your .env / .env.local
 * before running.  The script is fully idempotent — it skips posts/media that
 * already exist and patches existing posts that are missing their cover image.
 *
 * Architecture note
 * -----------------
 * This file uses Payload's `bin` script API (export const script) rather than
 * `payload run`.  The `payload run` approach uses tsx in ESM mode, which calls
 * Node's built-in ESM resolver with the bare specifier `@payload-config`.  Node
 * rejects it at the `parsePackageName` stage (before tsx's tsconfig-paths hook
 * can intercept) because `@something` without a slash is not a valid npm scoped
 * package name.  The `bin` API is Payload's own mechanism and resolves the
 * config object *before* calling this script, completely sidestepping the issue.
 */

import fs from "fs";
import path from "path";
import type { SanitizedConfig } from "payload";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { getPayload } from "payload";
import {
  blogPostsFull,
  type ContentBlock,
  type BlogPostFull,
} from "./components/blog/blogData.ts";

// ─── Lexical Conversion ───────────────────────────────────────────────────────

type LexicalNode = Record<string, unknown>;

function makeText(text: string): LexicalNode {
  return {
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    text,
    type: "text",
    version: 1,
  };
}

function makeParagraph(text: string): LexicalNode {
  return {
    children: [makeText(text)],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
    textFormat: 0,
  };
}

function makeHeading(text: string, tag: "h2" | "h3"): LexicalNode {
  return {
    children: [makeText(text)],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag,
  };
}

function makeListItem(text: string, value: number): LexicalNode {
  return {
    children: [makeText(text)],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "listitem",
    version: 1,
    value,
    checked: undefined,
  };
}

function makeList(items: string[], listType: "bullet" | "number"): LexicalNode {
  return {
    children: items.map((item, i) => makeListItem(item, i + 1)),
    direction: "ltr",
    format: "",
    indent: 0,
    type: "list",
    version: 1,
    listType,
    start: 1,
    tag: listType === "bullet" ? "ul" : "ol",
  };
}

function makeQuote(text: string): LexicalNode {
  return {
    children: [makeText(text)],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "quote",
    version: 1,
  };
}

function makeHorizontalRule(): LexicalNode {
  return {
    type: "horizontalrule",
    version: 1,
  };
}

/**
 * Converts a ContentBlock[] (legacy format) into a Payload Lexical
 * SerializedEditorState JSON object.
 */
function contentBlocksToLexical(blocks: ContentBlock[]): SerializedEditorState {
  const children: LexicalNode[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case "h2":
        if (block.text) children.push(makeHeading(block.text, "h2"));
        break;
      case "h3":
        if (block.text) children.push(makeHeading(block.text, "h3"));
        break;
      case "p":
        if (block.text) children.push(makeParagraph(block.text));
        break;
      case "ul":
        if (block.items?.length) children.push(makeList(block.items, "bullet"));
        break;
      case "ol":
        if (block.items?.length) children.push(makeList(block.items, "number"));
        break;
      case "blockquote":
      case "callout":
        if (block.text) children.push(makeQuote(block.text));
        break;
      case "divider":
        children.push(makeHorizontalRule());
        break;
      case "image":
        // Images that were embedded in content are skipped — they can be
        // re-added via the Payload admin Media upload after seeding.
        // We insert a paragraph noting where the image was so editors know.
        if (block.caption)
          children.push(makeParagraph(`[Image: ${block.caption}]`));
        break;
    }
  }

  // Lexical requires at least one root child
  if (children.length === 0) {
    children.push(makeParagraph(""));
  }

  return {
    root: {
      children,
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  } as SerializedEditorState;
}

// ─── Media Seeding ────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PayloadInstance = any;

/**
 * Ensures a Payload media document exists for the given blog post's cover
 * image.  Uploads the file from public/images/ using Payload's `filePath` API
 * if no document with that filename already exists.
 *
 * Returns the media document ID, or null if the source file is not present on
 * disk (e.g. a dev machine that hasn't pulled all assets).
 */
async function seedCoverImage(
  payload: PayloadInstance,
  post: BlogPostFull,
  publicDir: string,
): Promise<string | null> {
  if (!post.coverImage) return null;

  // post.coverImage is "/images/cmo.webp" — strip the leading /images/ prefix
  const filename = path.basename(post.coverImage);
  const filePath = path.resolve(publicDir, "images", filename);

  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  Source image not found, skipping: ${filePath}`);
    return null;
  }

  // Idempotency check — avoid creating duplicate media documents on re-runs
  const existing = await payload.find({
    collection: "media",
    where: { filename: { equals: filename } },
    limit: 1,
    depth: 0,
  });

  if (existing.totalDocs > 0) {
    const id = existing.docs[0].id as string;
    console.log(`  📷  Media already exists: "${filename}" (id: ${id})`);
    return id;
  }

  // Upload the image file via the Payload Local API filePath mechanism.
  // Payload reads the file from disk, generates resized variants (thumbnail /
  // card / feature), stores everything in the configured staticDir, and creates
  // the media document in MongoDB — identical to an admin-panel upload.
  const media = await payload.create({
    collection: "media",
    data: {
      alt: post.coverImageAlt,
    },
    filePath,
  });

  console.log(`  📷  Uploaded media: "${filename}" (id: ${media.id})`);
  return media.id as string;
}

// ─── Script Entry Point (Payload bin API) ────────────────────────────────────

/**
 * Called by `payload seed` after Payload has resolved and sanitized the config.
 * The `config` argument is the SanitizedConfig — no need to import or
 * re-initialise Payload ourselves.
 */
export const script = async (config: SanitizedConfig): Promise<void> => {
  // Apply the same DNS fix used in instrumentation.ts: on Windows dev machines
  // with WSL2/Docker, Node.js c-ares uses 127.0.0.1 as DNS but nothing listens
  // there, causing ECONNREFUSED on mongodb+srv:// SRV lookups.
  const dns = await import("dns");
  const dnsServers: string[] = dns.default.getServers();
  if (
    dnsServers.length > 0 &&
    dnsServers.every((s) => s === "127.0.0.1" || s === "::1")
  ) {
    dns.default.setServers(["1.1.1.1", "8.8.8.8", "1.0.0.1", "8.8.4.4"]);
    console.info(
      "[seed] DNS was localhost-only; overriding to Cloudflare + Google.",
    );
  }

  const payload = await getPayload({ config });

  // Ensure the Payload media staticDir exists on disk before any upload.
  // Payload creates it automatically on first upload, but an explicit mkdir
  // prevents a race condition when seeding fresh environments.
  const mediaDir = path.resolve(process.cwd(), "media");
  if (!fs.existsSync(mediaDir)) {
    fs.mkdirSync(mediaDir, { recursive: true });
    console.log(`\n📁 Created media directory: ${mediaDir}`);
  }

  const publicDir = path.resolve(process.cwd(), "public");

  console.log(
    `\n🌱 Seeding ${blogPostsFull.length} posts into Payload CMS...\n`,
  );

  let created = 0;
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const post of blogPostsFull as BlogPostFull[]) {
    try {
      // ── 1. Ensure the cover image exists in the Payload media collection ──
      //    seedCoverImage uploads from public/images/ if no matching media
      //    document is found, then returns the media document ID.
      const coverMediaId = await seedCoverImage(payload, post, publicDir);

      // ── 2. Create or patch the post document ──────────────────────────────
      const existing = await payload.find({
        collection: "posts",
        where: { slug: { equals: post.slug } },
        limit: 1,
        depth: 0,
      });

      if (existing.totalDocs > 0) {
        const existingDoc = existing.docs[0] as {
          id: string;
          coverImage?: unknown;
        };

        // Patch cover image on previously-seeded posts that are missing it.
        // This makes the script safe to re-run after adding media seeding.
        if (!existingDoc.coverImage && coverMediaId) {
          await payload.update({
            collection: "posts",
            id: existingDoc.id,
            data: { coverImage: coverMediaId },
          });
          console.log(`  🔄  Patched  "${post.title}" — cover image added`);
          updated++;
        } else {
          console.log(`  ⏭  Skipped  "${post.title}" (already complete)`);
          skipped++;
        }
        continue;
      }

      await payload.create({
        collection: "posts",
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          category: post.category,
          // Convert legacy "May 10, 2026" string to ISO date string
          date: new Date(post.date).toISOString(),
          readTime: post.readTime,
          featured: post.featured ?? false,
          // Link the Payload media document — null when the source file is
          // missing on disk (the post renders a placeholder in that case).
          coverImage: coverMediaId ?? undefined,
          coverImageAlt: post.coverImageAlt,
          author: {
            name: post.author.name,
            role: post.author.role,
            avatarUrl: post.author.avatarUrl ?? "",
            linkedIn: post.author.linkedIn ?? "",
          },
          tags: (post.tags as string[]).map((tag) => ({ tag })),
          // contentBlocksToLexical returns SerializedEditorState which is
          // structurally compatible with Payload's content type at runtime.
          // Payload's generated type adds a deeply-nested index signature that
          // TypeScript can't reconcile with SerializedEditorState structurally.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          content: contentBlocksToLexical(post.content) as any,
        },
      });

      console.log(`  ✅  Created  "${post.title}"`);
      created++;
    } catch (err) {
      console.error(`  ❌  Error    "${post.title}":`, err);
      errors++;
    }
  }

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Created : ${created}
  Updated : ${updated}
  Skipped : ${skipped}
  Errors  : ${errors}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

  if (errors > 0) process.exit(1);
  process.exit(0);
};
