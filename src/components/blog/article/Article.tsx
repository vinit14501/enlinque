import Image from "next/image";
import { slugifyHeading, type BlogPost } from "@/components/blog/blogData";
import type { PayloadPost } from "@/lib/payload-blog";
import ArticleReadingProgress from "@/components/blog/article/ArticleReadingProgress";
import ArticleHero from "@/components/blog/article/ArticleHero";
import ArticleTableOfContents from "@/components/blog/article/ArticleTableOfContents";
import ArticleMobileToc from "@/components/blog/article/ArticleMobileToc";
import ArticleBody from "@/components/blog/article/ArticleBody";
import ArticleShareBar from "@/components/blog/article/ArticleShareBar";
import ArticleRelated from "@/components/blog/article/ArticleRelated";
import ContactCta from "@/components/common/ContactCta";

interface ArticleProps {
  post: PayloadPost;
  relatedPosts: BlogPost[];
}

type TocHeading = { id: string; text: string; level: 2 | 3 };

/**
 * Extract h2 and h3 headings from a Payload Lexical editor state JSON.
 * The Lexical document is a tree: root → children nodes.
 * Heading nodes have type "heading" and a tag property ("h2" | "h3").
 */
function extractHeadingsFromLexical(
  content: Record<string, unknown>,
): TocHeading[] {
  type LexicalNode = {
    type?: string;
    tag?: string;
    children?: Array<LexicalNode & { text?: string }>;
  };

  const root = content?.root as LexicalNode | undefined;
  if (!root?.children) return [];

  const headings: TocHeading[] = [];
  for (const node of root.children) {
    if (node.type === "heading" && (node.tag === "h2" || node.tag === "h3")) {
      const text = (node.children ?? []).map((c) => c.text ?? "").join("");
      if (text.trim()) {
        headings.push({
          id: slugifyHeading(text),
          text,
          level: node.tag === "h2" ? 2 : 3,
        });
      }
    }
  }
  return headings;
}

export default function Article({ post, relatedPosts }: ArticleProps) {
  const headings = extractHeadingsFromLexical(post.content);

  const coverUrl = post.coverImage?.url ?? null;

  return (
    <>
      {/* Fixed reading progress bar — client component */}
      <ArticleReadingProgress />

      {/* Dark hero: breadcrumb + title + meta + cover image */}
      <ArticleHero post={post} />

      {/* ── Main article area: prose + sticky TOC sidebar ─────────── */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Mobile TOC — collapses to accordion on < lg screens */}
          <ArticleMobileToc headings={headings} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 xl:gap-10">
            {/* Article body — capped at 720px for optimal reading line-length */}
            <main className="min-w-0 max-w-180">
              {/* Cover image — full article column width, Medium-style */}
              {coverUrl && (
                <figure className="not-prose mb-8 sm:mb-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={coverUrl}
                      alt={post.coverImageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 320px), 720px"
                      priority
                    />
                  </div>
                </figure>
              )}

              <ArticleBody content={post.content} />
              <ArticleShareBar title={post.title} slug={post.slug} />
            </main>

            {/* Sticky table of contents — visible desktop only */}
            <ArticleTableOfContents headings={headings} />
          </div>
        </div>
      </div>

      {/* Related articles */}
      <ArticleRelated posts={relatedPosts} />

      {/* Site-wide contact CTA */}
      <ContactCta />
    </>
  );
}
