import type { Metadata } from "next";
import About from "@/components/about/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Enlinque Consulting — transforming businesses through technology, strategy, and innovation.",
  openGraph: {
    title: "About Us | Enlinque Consulting LLC",
    description:
      "Learn about Enlinque Consulting — transforming businesses through technology, strategy, and innovation.",
    url: "https://enlinque.com/about",
    images: [
      {
        url: "/images/about.webp",
        width: 1200,
        height: 630,
        alt: "About Enlinque Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Enlinque Consulting LLC",
    description:
      "Learn about Enlinque Consulting — transforming businesses through technology, strategy, and innovation.",
    images: ["/images/about.webp"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
