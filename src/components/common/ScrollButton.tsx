"use client";

import type { ReactNode } from "react";

interface ScrollButtonProps {
  targetId: string;
  offset?: number;
  children: ReactNode;
  className?: string;
}

export default function ScrollButton({
  targetId,
  offset = 0,
  children,
  className,
}: ScrollButtonProps) {
  const handleClick = () => {
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
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
