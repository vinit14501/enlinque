/**
 * Payload CMS Blog Data Access Layer
 *
 * All server-side functions for fetching blog content via the Payload Local API.
 * Only import these in React Server Components or server-side functions.
 * Client components must receive this data as props.
 */

import type {
  BlogCategory,
  BlogPost,
  Author,
} from "@/components/blog/blogData";

// ─── Payload Document Types ─────────────────────────────────────────────────

export type PayloadMedia = {
  id: string;
  url: string;
  alt: string;
  filename: string;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: { url: string; width: number; height: number } | null;
    card?: { url: string; width: number; height: number } | null;
    feature?: { url: string; width: number; height: number } | null;
  } | null;
};

export type PayloadPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  featured: boolean;
  coverImage: PayloadMedia | null;
  coverImageAlt: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string | null;
    linkedIn?: string | null;
  };
  tags: Array<{ tag: string; id: string }>;
  // SerializedEditorState — Lexical JSON, rendered by <RichText> from @payloadcms/richtext-lexical/react
  content: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

// ─── Payload Client ──────────────────────────────────────────────────────────

/** Lazily initialise the Payload Local API (singleton per process). */
async function getPayloadClient() {
  const { getPayload } = await import("payload");
  const { default: config } = await import("@payload-config");
  return getPayload({ config });
}

/**
 * Options for draft-mode queries (used during live preview).
 * Only pass `draft: true` — overrideAccess is determined internally.
 */
interface FetchOptions {
  /** When true, fetches the latest draft version from the versions table. */
  draft?: boolean;
}

// ─── Query Functions ─────────────────────────────────────────────────────────

/** Fetch all published posts sorted newest-first. Depth 1 populates coverImage. */
export async function getAllPosts(): Promise<PayloadPost[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    sort: "-date",
    depth: 1,
    limit: 1000,
    pagination: false,
    // Enforce access.read so only published / migrated docs are returned publicly.
    // The Posts collection access.read returns a _status constraint for unauthenticated requests.
    overrideAccess: false,
  });
  return docs as unknown as PayloadPost[];
}

/**
 * Fetch a single post by slug. Returns null if not found.
 *
 * - Normal mode (opts = {}): enforces access.read so only published/migrated
 *   documents are returned to unauthenticated callers.
 * - Draft mode (opts.draft = true): bypasses access and reads the latest version
 *   from the versions table, enabling live preview of unpublished content.
 */
export async function getPostBySlug(
  slug: string,
  opts: FetchOptions = {},
): Promise<PayloadPost | null> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
    // Draft mode: read latest version from versions table, bypass access control.
    // Public mode: enforce access.read to filter by _status (published only).
    ...(opts.draft
      ? { draft: true, overrideAccess: true }
      : { overrideAccess: false }),
  });
  return docs.length > 0 ? (docs[0] as unknown as PayloadPost) : null;
}

/** Fetch only slugs — used by generateStaticParams at build time. */
export async function getAllPostSlugs(): Promise<string[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    depth: 0,
    limit: 1000,
    pagination: false,
    select: { slug: true },
    // Only pre-render slugs for published content; drafts are served dynamically.
    overrideAccess: false,
  });
  return docs.map((doc) => (doc as { slug: string }).slug);
}

/**
 * Fetch up to `limit` related posts — same category first, falling back to
 * most recent. Excludes the current post by ID.
 */
export async function getRelatedPosts(
  currentId: string,
  category: string,
  limit = 3,
): Promise<PayloadPost[]> {
  const payload = await getPayloadClient();

  // Same-category results first
  const { docs: sameCategory } = await payload.find({
    collection: "posts",
    where: {
      and: [
        { category: { equals: category } },
        { id: { not_equals: currentId } },
      ],
    },
    sort: "-date",
    depth: 1,
    limit,
    overrideAccess: false,
  });

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit) as unknown as PayloadPost[];
  }

  // Backfill from other categories if needed
  const needed = limit - sameCategory.length;
  const sameCategoryIds = sameCategory.map((d) => d.id);

  const { docs: others } = await payload.find({
    collection: "posts",
    where: {
      and: [
        { category: { not_equals: category } },
        { id: { not_equals: currentId } },
        ...(sameCategoryIds.length > 0
          ? sameCategoryIds.map((id) => ({ id: { not_equals: id } }))
          : []),
      ],
    },
    sort: "-date",
    depth: 1,
    limit: needed,
    overrideAccess: false,
  });

  return [...sameCategory, ...others].slice(
    0,
    limit,
  ) as unknown as PayloadPost[];
}

// ─── Utilities ──────────────────────────────────────────────────────────────

/**
 * Payload always prepends serverURL to every media url field, producing an
 * absolute URL like https://enlinque.com/api/media/file/cmo.webp.
 *
 * next/image refuses any absolute URL whose hostname is not listed under
 * images.remotePatterns in next.config.ts.  Because these images are served
 * from the same Next.js process there is no reason to involve an external
 * hostname at all — a root-relative path (/api/media/file/cmo.webp) resolves
 * against the current origin automatically and is always permitted by
 * next/image with zero configuration.
 *
 * This function strips the serverURL origin so callers receive a
 * root-relative path regardless of the environment:
 *   - localhost dev  (NEXT_PUBLIC_SERVER_URL=http://localhost:3000)
 *   - production VPS (NEXT_PUBLIC_SERVER_URL=https://enlinque.com)
 */
export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? "";
  if (serverUrl && url.startsWith(serverUrl)) {
    return url.slice(serverUrl.length) || null;
  }
  // Already root-relative or an unrelated origin — return unchanged.
  return url;
}

// ─── Mappers ─────────────────────────────────────────────────────────────────

/**
 * Convert a PayloadPost to the BlogPost summary type expected by BlogGrid,
 * BlogPostCard, and ArticleRelated. These components are typed against the
 * legacy BlogPost interface and require no further changes.
 */
export function mapToListPost(doc: PayloadPost): BlogPost {
  const author: Author = {
    name: doc.author?.name ?? "Enlinque Team",
    role: doc.author?.role ?? "Enlinque Consulting",
    avatarUrl: doc.author?.avatarUrl ?? "",
    linkedIn: doc.author?.linkedIn ?? undefined,
  };

  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    author,
    date: doc.date
      ? new Date(doc.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    readTime: doc.readTime,
    // Strip the serverURL origin so next/image receives a root-relative path.
    // See resolveMediaUrl for the full rationale.
    coverImage: doc.coverImage ? resolveMediaUrl(doc.coverImage.url) : null,
    coverImageAlt: doc.coverImageAlt,
    featured: doc.featured,
  };
}
