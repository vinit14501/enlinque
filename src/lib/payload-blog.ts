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
  });
  return docs as unknown as PayloadPost[];
}

/** Fetch a single post by slug. Returns null if not found. */
export async function getPostBySlug(slug: string): Promise<PayloadPost | null> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
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
  });

  return [...sameCategory, ...others].slice(
    0,
    limit,
  ) as unknown as PayloadPost[];
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
    // Use the Payload-served media URL; null when no image is set (cards render a placeholder)
    coverImage: doc.coverImage?.url || null,
    coverImageAlt: doc.coverImageAlt,
    featured: doc.featured,
  };
}
