import Link from "next/link";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import type { PayloadPost } from "@/lib/payload-blog";
import AuthorAvatar from "@/components/blog/AuthorAvatar";

// Static category color map — full class names required for Tailwind to include them
const CATEGORY_COLORS: Record<string, string> = {
  "Business Strategy": "bg-blue-50 text-[#0b60a0]",
  "Digital Marketing": "bg-amber-50 text-amber-700",
  "Web Development": "bg-teal-50 text-teal-700",
  Leadership: "bg-purple-50 text-purple-700",
  Technology: "bg-slate-100 text-slate-700",
};

interface ArticleHeroProps {
  post: PayloadPost;
}

/**
 * Format an ISO-8601 date string (as stored by Payload CMS) into a
 * human-readable date like "April 20, 2026". Using timeZone:"UTC" prevents
 * the date from shifting one day back/forward due to local timezone offsets.
 */
function formatPostDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return isoDate; // graceful fallback
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  const categoryColor =
    CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700";

  // Normalise author to satisfy AuthorAvatar's non-nullable avatarUrl requirement
  const author = {
    name: post.author.name,
    role: post.author.role,
    avatarUrl: post.author.avatarUrl ?? "",
    linkedIn: post.author.linkedIn ?? undefined,
  };

  return (
    <header className="bg-[#000048] px-4 sm:px-8 lg:px-12 pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 animate-fade-in-up animate-stagger-1"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>
        </nav>

        {/* Category + Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-5 animate-fade-in-up animate-stagger-2">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`}
          >
            {post.category}
          </span>
          {post.tags.slice(0, 2).map(({ tag, id }) => (
            <span
              key={id}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 animate-fade-in-up animate-stagger-3">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 animate-fade-in-up animate-stagger-4">
          {post.excerpt}
        </p>

        {/* Author + meta */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 animate-fade-in-up animate-stagger-5">
          <div className="flex items-center gap-2.5">
            <AuthorAvatar author={author} size="sm" />
            <div>
              <p className="text-sm font-semibold text-white leading-tight">
                {author.name}
              </p>
              <p className="text-xs text-white/50 leading-tight">
                {author.role}
              </p>
            </div>
          </div>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="flex items-center gap-1.5 text-sm text-white/60">
            <Calendar className="w-4 h-4 shrink-0" />
            {formatPostDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-white/60">
            <Clock className="w-4 h-4 shrink-0" />
            {post.readTime}
          </span>
        </div>
      </div>
    </header>
  );
}
