"use client";

import { useState, useCallback, useDeferredValue } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, ChevronDown } from "lucide-react";
import {
  blogPosts,
  BLOG_CATEGORIES,
  type BlogPost,
  type BlogCategory,
} from "@/components/blog/blogData";
import BlogFeaturedPost from "@/components/blog/BlogFeaturedPost";
import BlogPostCard from "@/components/blog/BlogPostCard";

const INITIAL_VISIBLE = 6;

// ── URL ↔ Category helpers ───────────────────────────────────────────────────
function toCategorySlug(cat: "All" | BlogCategory): string {
  return cat === "All" ? "" : cat.toLowerCase().replace(/\s+/g, "-");
}

function fromCategorySlug(slug: string | null): "All" | BlogCategory {
  if (!slug) return "All";
  const match = BLOG_CATEGORIES.find(
    (cat) => cat !== "All" && cat.toLowerCase().replace(/\s+/g, "-") === slug,
  );
  return (match as BlogCategory | undefined) ?? "All";
}

export default function BlogGrid() {
  const router = useRouter();
  const params = useSearchParams();

  const activeCategory = fromCategorySlug(params.get("category"));

  // Local state for immediate input feedback; URL is the source of truth for filtering
  const [searchInput, setSearchInput] = useState(params.get("q") ?? "");
  const deferredSearch = useDeferredValue(searchInput);

  const [showAll, setShowAll] = useState(false);

  // ── Event handlers ──────────────────────────────────────────────────────────
  const handleCategoryChange = useCallback(
    (cat: "All" | BlogCategory) => {
      setShowAll(false);
      const next = new URLSearchParams(params.toString());
      if (cat === "All") {
        next.delete("category");
      } else {
        next.set("category", toCategorySlug(cat));
      }
      const qs = next.toString();
      router.push(qs ? `/blog?${qs}` : "/blog", { scroll: false });
    },
    [router, params],
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      setShowAll(false);
      const next = new URLSearchParams(params.toString());
      if (value.trim()) {
        next.set("q", value.trim());
      } else {
        next.delete("q");
      }
      const qs = next.toString();
      router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
    },
    [router, params],
  );

  // ── Derived data ────────────────────────────────────────────────────────────
  const categoryFiltered: BlogPost[] =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const filteredPosts: BlogPost[] = deferredSearch.trim()
    ? categoryFiltered.filter(
        (p) =>
          p.title.toLowerCase().includes(deferredSearch.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(deferredSearch.toLowerCase()),
      )
    : categoryFiltered;

  // Featured post is only surfaced on the default "All" view with no search
  const featuredPost: BlogPost | null =
    activeCategory === "All" && !deferredSearch.trim()
      ? (blogPosts.find((p) => p.featured) ?? null)
      : null;

  const gridPosts: BlogPost[] = featuredPost
    ? filteredPosts.filter((p) => !p.featured)
    : filteredPosts;

  const visiblePosts: BlogPost[] = showAll
    ? gridPosts
    : gridPosts.slice(0, INITIAL_VISIBLE);

  const hasMore = !showAll && gridPosts.length > INITIAL_VISIBLE;

  const countFor = (cat: "All" | BlogCategory): number =>
    cat === "All"
      ? blogPosts.length
      : blogPosts.filter((p) => p.category === cat).length;

  const sectionLabel = deferredSearch.trim()
    ? `Search results for "${deferredSearch.trim()}"`
    : activeCategory !== "All"
      ? activeCategory
      : "Latest Articles";

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* ── Search bar ──────────────────────────────────────────────── */}
        <div className="relative mb-8">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b60a0]/30 focus:border-[#0b60a0] transition-colors duration-200"
          />
          {searchInput && (
            <button
              onClick={() => handleSearchChange("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-150"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* ── Category filter pills ────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const count = countFor(cat);
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[#0b60a0] text-white shadow-md"
                    : "bg-white text-[#000048] border border-gray-200 hover:border-[#0b60a0] hover:text-[#0b60a0]"
                }`}
              >
                {cat}
                <span
                  className={`text-xs font-medium tabular-nums ${
                    isActive ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Featured post (All + no search only) ────────────────────── */}
        {featuredPost && <BlogFeaturedPost post={featuredPost} />}

        {/* ── Grid area ───────────────────────────────────────────────── */}
        {gridPosts.length > 0 ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-[#000048]">
                {sectionLabel}
              </h2>
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400 tabular-nums shrink-0">
                {gridPosts.length}{" "}
                {gridPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visiblePosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

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
          /* ── Empty state ───────────────────────────────────────────── */
          <div className="text-center py-16 sm:py-20">
            <p className="text-lg font-medium text-gray-500">
              {deferredSearch.trim()
                ? `No articles match "${deferredSearch.trim()}".`
                : "No articles in this category yet."}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {deferredSearch.trim()
                ? "Try a different search term or browse all articles."
                : "Check back soon — we publish new insights regularly."}
            </p>
            <button
              onClick={() => {
                handleCategoryChange("All");
                handleSearchChange("");
              }}
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
