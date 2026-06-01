import { Suspense } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import ContactCta from "@/components/common/ContactCta";
import { getAllPosts, mapToListPost } from "@/lib/payload-blog";
import type { BlogPost } from "@/components/blog/blogData";

/** Skeleton shown while BlogGrid hydrates (required for useSearchParams) */
function BlogGridSkeleton() {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="h-12 bg-gray-200 rounded-xl animate-pulse mb-8" />
        <div className="flex gap-3 mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-28 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl h-72 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Server component — fetches posts from Payload Local API and passes them
 * down to BlogGrid (client component) as serializable props.
 * BlogGrid handles category filtering and search client-side.
 */
export default async function Blog() {
  let posts: BlogPost[] = [];
  try {
    const docs = await getAllPosts();
    posts = docs.map(mapToListPost);
  } catch {
    // Payload may not be initialised on the very first cold boot before the
    // database connection is ready. Render an empty grid rather than crashing.
    posts = [];
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — navy editorial banner */}
      <BlogHero />

      {/* Category filter + search + featured post + article grid + load more */}
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid posts={posts} />
      </Suspense>

      {/* Site-wide contact CTA */}
      <ContactCta />
    </div>
  );
}
