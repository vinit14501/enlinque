"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  blogPosts,
  BLOG_CATEGORIES,
  type BlogPost,
  type BlogCategory,
} from "@/components/blog/blogData";
import BlogFeaturedPost from "@/components/blog/BlogFeaturedPost";
import BlogPostCard from "@/components/blog/BlogPostCard";

// Number of posts to show before "Load More"
const INITIAL_VISIBLE = 6;

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>(
    "All",
  );
  const [showAll, setShowAll] = useState(false);

  // Derive filtered lists from state
  const filteredPosts: BlogPost[] =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost: BlogPost | null =
    activeCategory === "All"
      ? (blogPosts.find((p) => p.featured) ?? null)
      : null;

  // Posts that go into the card grid (exclude the featured post when shown)
  const gridPosts: BlogPost[] = featuredPost
    ? filteredPosts.filter((p) => !p.featured)
    : filteredPosts;

  const visiblePosts: BlogPost[] = showAll
    ? gridPosts
    : gridPosts.slice(0, INITIAL_VISIBLE);

  const hasMore = !showAll && gridPosts.length > INITIAL_VISIBLE;

  // Reset "load more" state when category changes
  const handleCategoryChange = (cat: "All" | BlogCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* ── Category Filter Pills ─────────────────────────────── */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#0b60a0] text-white shadow-md"
                  : "bg-white text-[#000048] border border-gray-200 hover:border-[#0b60a0] hover:text-[#0b60a0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured Post (only when "All" is selected) ──────── */}
        {featuredPost && <BlogFeaturedPost post={featuredPost} />}

        {/* ── Post Grid ─────────────────────────────────────────── */}
        {gridPosts.length > 0 ? (
          <>
            {/* Section label when a specific category is active */}
            {activeCategory !== "All" && (
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-[#000048]">
                  {activeCategory}
                </h2>
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-400">
                  {gridPosts.length}{" "}
                  {gridPosts.length === 1 ? "article" : "articles"}
                </span>
              </div>
            )}

            {activeCategory === "All" && gridPosts.length > 0 && (
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-[#000048]">
                  Latest Articles
                </h2>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visiblePosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* ── Load More ─────────────────────────────────────── */}
            {hasMore && (
              <div className="mt-10 sm:mt-12 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#000048] text-sm font-semibold border border-gray-200 rounded-lg hover:border-[#0b60a0] hover:text-[#0b60a0] hover:shadow-md transition-all duration-200"
                >
                  Load More Articles
                  <ChevronDown className="w-4 h-4" />
                </button>
                <p className="mt-2 text-xs text-gray-400">
                  Showing {visiblePosts.length} of {gridPosts.length} articles
                </p>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="text-center py-16 sm:py-20">
            <p className="text-lg font-medium text-gray-400">
              No articles in this category yet.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Check back soon — we publish new insights regularly.
            </p>
            <button
              onClick={() => handleCategoryChange("All")}
              className="mt-6 px-5 py-2.5 bg-[#0b60a0] text-white text-sm font-semibold rounded-lg hover:bg-[#000048] transition-colors duration-200"
            >
              View all articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
