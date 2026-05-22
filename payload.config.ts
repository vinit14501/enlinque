import path from "path";
import sharp from "sharp";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./src/collections/Users.ts";
import { Media } from "./src/collections/Media.ts";
import { Posts } from "./src/collections/Posts.ts";

export default buildConfig({
  // Public-facing URL — used by Payload admin for absolute links and OAuth redirects
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— Enlinque CMS",
    },
  },

  // Lexical is Payload's default rich-text editor
  editor: lexicalEditor(),

  collections: [Users, Media, Posts],

  // 32-byte random secret — generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  secret: process.env.PAYLOAD_SECRET || "",

  db: mongooseAdapter({
    // Reuse the same MongoDB Atlas cluster as the existing Mongoose connection.
    // Payload manages its own collections (users, media, posts, payload-*)
    // independently from the existing contactforms and planforms collections.
    url: process.env.MONGO_URI || "",
  }),

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
