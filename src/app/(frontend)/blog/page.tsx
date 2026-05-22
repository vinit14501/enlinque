import type { Metadata } from "next";
import Blog from "@/components/blog/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and updates from Enlinque Consulting on business strategy, technology, and digital marketing.",
  openGraph: {
    title: "Blog | Enlinque Consulting LLC",
    description:
      "Insights, tips, and updates from Enlinque Consulting on business strategy, technology, and digital marketing.",
    url: "https://enlinque.com/blog",
  },
  twitter: {
    card: "summary",
    title: "Blog | Enlinque Consulting LLC",
    description:
      "Insights, tips, and updates from Enlinque Consulting on business strategy, technology, and digital marketing.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <Blog />;
}
