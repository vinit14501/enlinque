import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, blogPostsFull } from "@/components/blog/blogData";
import Article from "@/components/blog/article/Article";

// ─── Static Params ────────────────────────────────────────────────────────────
// Pre-render all 9 article pages at build time (SSG)
export function generateStaticParams() {
  return blogPostsFull.map((post) => ({ slug: post.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Enlinque",
    };
  }

  return {
    title: `${post.title} | Enlinque`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Enlinque`,
      description: post.excerpt,
      url: `https://enlinque.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://enlinque.com${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Enlinque`,
      description: post.excerpt,
      images: [`https://enlinque.com${post.coverImage}`],
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
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <Article post={post} />;
}
