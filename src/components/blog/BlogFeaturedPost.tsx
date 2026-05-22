import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/components/blog/blogData";
import AuthorAvatar from "@/components/blog/AuthorAvatar";

// Static category color map — full class names required so Tailwind includes them
const CATEGORY_COLORS: Record<string, string> = {
  "Business Strategy": "bg-blue-50 text-[#0b60a0]",
  "Digital Marketing": "bg-amber-50 text-amber-700",
  "Web Development": "bg-teal-50 text-teal-700",
  Leadership: "bg-purple-50 text-purple-700",
  Technology: "bg-slate-100 text-slate-700",
};

interface BlogFeaturedPostProps {
  post: BlogPost;
}

export default function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  const categoryColor =
    CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700";

  return (
    <div className="mb-12">
      {/* FEATURED label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block bg-[#0b60a0] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
          Featured
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Cover Image — takes 3/5 on desktop; omitted when no image is available */}
          {post.coverImage ? (
            <div className="relative lg:col-span-3 min-h-65 sm:min-h-80 lg:min-h-105 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              {/* Gradient overlay on mobile bottom edge */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent lg:hidden" />
            </div>
          ) : null}

          {/* Content — full-width when no image, otherwise takes 2/5 on desktop */}
          <div
            className={`${post.coverImage ? "lg:col-span-2" : "lg:col-span-5"} flex flex-col justify-center p-6 sm:p-8 lg:p-10`}
          >
            {/* Category badge */}
            <span
              className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColor}`}
            >
              {post.category}
            </span>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#000048] mb-3 leading-snug">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Author + meta row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <div className="flex items-center gap-2">
                <AuthorAvatar author={post.author} size="xs" />
                <span className="text-sm font-medium text-gray-600">
                  {post.author.name}
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                {post.readTime}
              </span>
            </div>

            {/* CTA */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b60a0] hover:text-[#000048] transition-colors duration-200 group/link"
            >
              Read Article
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
