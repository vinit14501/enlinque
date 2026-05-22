import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
  mapToListPost,
} from "@/lib/payload-blog";
import Article from "@/components/blog/article/Article";

// ─── ISR — revalidate every 60 seconds ───────────────────────────────────────
// Pages are pre-rendered at build time for known slugs and ISR-regenerated
// within 60 seconds of a new or updated post being saved in the CMS.
export const revalidate = 60;
export const dynamicParams = true;

// ─── Static Params ────────────────────────────────────────────────────────────
// Pre-render published articles at build time.
// If PAYLOAD_SECRET / MONGO_URI are not available in the build environment,
// we return an empty list and rely on ISR (dynamicParams = true) to render
// each page on first request and cache it, instead of crashing the build.
export async function generateStaticParams() {
  if (!process.env.PAYLOAD_SECRET || !process.env.MONGO_URI) {
    return [];
  }
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Enlinque" };
  }

  const coverUrl = post.coverImage?.url
    ? `https://enlinque.com${post.coverImage.url}`
    : undefined;

  return {
    title: `${post.title} | Enlinque`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Enlinque`,
      description: post.excerpt,
      url: `https://enlinque.com/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author.name],
      ...(coverUrl && {
        images: [
          { url: coverUrl, width: 1200, height: 630, alt: post.coverImageAlt },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Enlinque`,
      description: post.excerpt,
      ...(coverUrl && { images: [coverUrl] }),
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(post.id, post.category);
  const relatedPosts = related.map(mapToListPost);

  // ── BlogPosting JSON-LD for Google rich results ─────────────────────────
  const coverUrl = post.coverImage?.url
    ? `https://enlinque.com${post.coverImage.url}`
    : undefined;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.updatedAt ?? post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://enlinque.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Enlinque Consulting LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://enlinque.com/images/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://enlinque.com/blog/${post.slug}`,
    },
    keywords: post.tags.map((t: { tag: string }) => t.tag).join(", "),
    articleSection: post.category,
  };

  if (coverUrl) {
    jsonLd.image = coverUrl;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article post={post} relatedPosts={relatedPosts} />
    </>
  );
}
