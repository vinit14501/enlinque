import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/components/blog/blogData";
import BlogPostCard from "@/components/blog/BlogPostCard";

interface ArticleRelatedProps {
  posts: BlogPost[];
}

export default function ArticleRelated({ posts }: ArticleRelatedProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#000048]">
              Continue Reading
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              More insights from the Enlinque team
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b60a0] hover:text-[#000048] transition-colors duration-200 shrink-0"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b60a0] hover:text-[#000048] transition-colors duration-200"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
