"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

// LinkedIn's official logo SVG — not available in lucide-react@1.14.0
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SITE_BASE = "https://enlinque.com";

interface ArticleShareBarProps {
  title: string;
  slug: string;
}

export default function ArticleShareBar({ title, slug }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const articleUrl = `${SITE_BASE}/blog/${slug}`;

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for browsers that block clipboard access without HTTPS
      const el = document.createElement("textarea");
      el.value = articleUrl;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-6 border-t border-gray-200 mt-10">
      <span className="text-sm font-semibold text-gray-500 shrink-0">
        Share this article:
      </span>

      <div className="flex items-center gap-2">
        {/* LinkedIn */}
        <a
          href={linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share "${title}" on LinkedIn`}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0077b5] rounded-lg hover:bg-[#005f8d] transition-colors duration-200"
        >
          <LinkedinIcon className="w-4 h-4" />
          LinkedIn
        </a>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          aria-label="Copy link to article"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#000048] bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-700">Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              Copy link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
