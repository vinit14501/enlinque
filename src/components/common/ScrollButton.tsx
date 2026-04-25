"use client";

import type { ReactNode } from "react";

interface ScrollButtonProps {
  targetId: string;
  offset?: number;
  children: ReactNode;
  className?: string;
}

/**
 * Renders as a native <a href="#targetId"> so search engine crawlers and
 * ad-platform compliance bots see a valid, resolvable link.
 * JavaScript intercepts the click to add smooth scrolling with offset support.
 * When JavaScript is unavailable, the browser performs a standard anchor jump.
 */
export default function ScrollButton({
  targetId,
  offset = 0,
  children,
  className,
}: ScrollButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
