import {
  slugifyHeading,
  getRelatedPosts,
  type BlogPostFull,
} from "@/components/blog/blogData";
import ArticleReadingProgress from "@/components/blog/article/ArticleReadingProgress";
import ArticleHero from "@/components/blog/article/ArticleHero";
import ArticleTableOfContents from "@/components/blog/article/ArticleTableOfContents";
import ArticleMobileToc from "@/components/blog/article/ArticleMobileToc";
import ArticleBody from "@/components/blog/article/ArticleBody";
import ArticleShareBar from "@/components/blog/article/ArticleShareBar";
import ArticleRelated from "@/components/blog/article/ArticleRelated";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import ContactCta from "@/components/common/ContactCta";

interface ArticleProps {
  post: BlogPostFull;
}

export default function Article({ post }: ArticleProps) {
  // Extract headings for the Table of Contents — server-side, no client cost
  const headings = post.content
    .filter((block) => block.type === "h2" || block.type === "h3")
    .map((block) => ({
      id: slugifyHeading(block.text ?? ""),
      text: block.text ?? "",
      level: (block.type === "h2" ? 2 : 3) as 2 | 3,
    }));

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      {/* Fixed reading progress bar — client component */}
      <ArticleReadingProgress />

      {/* Dark hero: breadcrumb + title + meta + cover image */}
      <ArticleHero post={post} />

      {/* ── Main article area: prose + sticky TOC sidebar ─────────── */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile TOC — collapses to accordion on < lg screens */}
          <ArticleMobileToc headings={headings} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 xl:gap-16 items-start">
            {/* Article body — capped at 720px for optimal reading line-length */}
            <main className="min-w-0 max-w-180">
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

      {/* Newsletter CTA */}
      <BlogNewsletter />

      {/* Site-wide contact CTA */}
      <ContactCta />
    </>
  );
}
