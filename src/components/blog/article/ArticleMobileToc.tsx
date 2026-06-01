"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MobileTocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface ArticleMobileTocProps {
  headings: MobileTocHeading[];
}

export default function ArticleMobileToc({ headings }: ArticleMobileTocProps) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) return null;

  const handleHeadingClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // scrollIntoView respects the CSS scroll-padding-top on <html>,
      // which accounts for the fixed navbar at every breakpoint.
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="lg:hidden mb-8 border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-toc-list"
        className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 text-left"
      >
        <span className="text-sm font-bold text-[#000048] tracking-wide">
          In this article
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <nav id="mobile-toc-list" aria-label="Article sections">
          <ul className="px-5 py-4 space-y-2.5 bg-white">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "pl-4" : ""}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleHeadingClick(e, heading.id)}
                  className="text-sm text-gray-600 hover:text-[#0b60a0] transition-colors duration-150 leading-snug"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
