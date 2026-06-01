"use client";

import { useEffect, useState } from "react";
import { slugifyHeading } from "@/components/blog/blogData";

interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface ArticleTableOfContentsProps {
  headings: TocHeading[];
}

export default function ArticleTableOfContents({
  headings,
}: ArticleTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Track the active heading via IntersectionObserver
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Trigger when the heading enters the top 15% of the viewport
      { rootMargin: "-10% 0px -80% 0px" },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          On this page
        </p>
        <nav>
          <ul className="space-y-1">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={`block py-1.5 text-sm leading-snug transition-all duration-150 border-l-2 ${
                      heading.level === 3 ? "pl-5" : "pl-3"
                    } ${
                      isActive
                        ? "border-[#0b60a0] text-[#0b60a0] font-semibold"
                        : "border-transparent text-gray-500 hover:text-[#000048] hover:border-gray-300"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(heading.id);
                      if (el) {
                        // scrollIntoView respects the CSS scroll-padding-top
                        // defined on <html>, which accounts for the fixed navbar.
                        // No hardcoded pixel offsets needed here.
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

// Re-export for use in Article orchestrator
export type { TocHeading };
export { slugifyHeading };
