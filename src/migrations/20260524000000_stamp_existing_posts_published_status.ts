/**
 * Migration: stamp_existing_posts_published_status
 *
 * Root cause
 * ----------
 * Versions / Drafts were enabled on the Posts collection AFTER documents
 * already existed in MongoDB. Payload injects a `_status` field
 * ('draft' | 'published') when drafts are active, but it does NOT back-fill
 * that field on pre-existing documents.
 *
 * The Payload Admin panel list view filters the collection to only show
 * documents that have `_status` set. Any document without the field is
 * invisible in the Admin UI — even though it is readable on the public site
 * via an `{ _status: { exists: false } }` access-control query constraint.
 *
 * Fix
 * ---
 * Set `_status: 'published'` on every Posts document that currently has no
 * `_status` field. Payload will then surface these documents in the Admin
 * panel and treat them as published content going forward.
 *
 * From the official Payload 3.x docs (Versions → Drafts):
 *   "If you already have a collection with documents, and you opt in to draft
 *    functionality after you have already created existing documents, all of
 *    your old documents will not have a `_status` field until you resave them."
 *
 * Run
 * ---
 *   npm run payload migrate
 *
 * Roll back
 * ---------
 *   npm run payload migrate:down
 */

import type { MigrateUpArgs, MigrateDownArgs } from "@payloadcms/db-mongodb";

// ─── UP ──────────────────────────────────────────────────────────────────────

export async function up({ session, payload }: MigrateUpArgs): Promise<void> {
  // Direct MongoDB access — use the native collection so we bypass Payload's
  // draft write logic (which would create unneeded version entries at this
  // stage) and keep the migration atomic within the provided session.
  const col = payload.db.collections["posts"].collection;

  const result = await col.updateMany(
    // Only target documents that pre-date draft mode (no _status field)
    { _status: { $exists: false } },
    { $set: { _status: "published" } },
    { session },
  );

  payload.logger.info(
    `[migrate up] stamp_existing_posts_published_status: ` +
      `stamped ${result.modifiedCount} legacy post(s) with _status: 'published'`,
  );
}

// ─── DOWN ────────────────────────────────────────────────────────────────────

export async function down({
  session,
  payload,
}: MigrateDownArgs): Promise<void> {
  // Remove _status from posts that were stamped by this migration.
  //
  // CAUTION: after running `up`, editors may have published additional posts
  // through the CMS.  Those posts will also carry `_status: 'published'` but
  // were NOT affected by this migration.  The `down` below is intentionally
  // conservative: it only removes `_status` from posts that still have
  // `_status: 'published'` AND have NO corresponding entry in the versions
  // collection (indicating the document was never saved through the CMS after
  // the migration ran, so its status is purely migration-derived).
  //
  // If every post has already been re-saved through the Admin UI, this `down`
  // becomes a no-op, which is the correct and safe outcome.

  const col = payload.db.collections["posts"].collection;
  const versionsCol = payload.db.collections["_posts_versions"]?.collection;

  if (!versionsCol) {
    // Versions collection does not exist — safe to remove all migration-stamped
    // statuses (no editor-published posts can exist without it)
    const result = await col.updateMany(
      { _status: "published" },
      { $unset: { _status: "" } },
      { session },
    );
    payload.logger.info(
      `[migrate down] stamp_existing_posts_published_status: ` +
        `reverted ${result.modifiedCount} post(s)`,
    );
    return;
  }

  // Find IDs of posts that HAVE a version entry (published by editors, not migration)
  const versionedIds = await versionsCol
    .distinct("parent", {}, { session })
    .then((ids: unknown[]) => ids.map(String));

  // Revert only posts that have NO version entry → were stamped purely by migration
  const result = await col.updateMany(
    {
      _status: "published",
      ...(versionedIds.length > 0 ? { _id: { $nin: versionedIds } } : {}),
    },
    { $unset: { _status: "" } },
    { session },
  );

  payload.logger.info(
    `[migrate down] stamp_existing_posts_published_status: ` +
      `reverted ${result.modifiedCount} post(s) (preserved ${versionedIds.length} editor-published)`,
  );
}
