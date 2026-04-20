"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface FooterServiceLinkProps {
  path: string;
  children: ReactNode;
  className?: string;
}

export default function FooterServiceLink({
  path,
  children,
  className,
}: FooterServiceLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    if (path === "/#services") {
      if (pathname === "/") {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          const nav = document.querySelector("nav");
          const navHeight = nav ? nav.offsetHeight : 0;
          const elementPosition = servicesSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        router.push("/#services");
      }
    }
  }, [pathname, router, path]);

  return (
    <span onClick={handleClick} className={className}>
      {children}
    </span>
  );
}
