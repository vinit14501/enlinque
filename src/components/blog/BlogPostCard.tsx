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

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const categoryColor =
    CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700";

  return (
    <article className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      {/* Cover image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-video overflow-hidden shrink-0"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Category badge */}
        <span
          className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColor}`}
        >
          {post.category}
        </span>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="group/title mb-2">
          <h3 className="text-base sm:text-lg font-bold text-[#000048] leading-snug group-hover/title:text-[#0b60a0] transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          {/* Author + meta */}
          <div className="flex items-center gap-2 min-w-0">
            <AuthorAvatar author={post.author} size="xs" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-gray-600 truncate">
                {post.author.name}
              </span>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="flex items-center gap-0.5">
                  <Calendar className="w-3 h-3 shrink-0" />
                  {post.date}
                </span>
                <span className="flex items-center gap-0.5">
                  <Clock className="w-3 h-3 shrink-0" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Read more */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0b60a0] hover:text-[#000048] transition-colors duration-200 shrink-0 ml-2 group/arrow"
          >
            Read
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/arrow:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
