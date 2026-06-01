import type { Metadata } from "next";
import Blog from "@/components/blog/Blog";

// Fallback ISR — revalidates the listing at most once per hour as a safety
// net.  On-demand revalidation from the Posts afterChange hook is the primary
// mechanism: the page is purged immediately whenever a post is published,
// updated, or unpublished in the Payload admin.
export const revalidate = 360;

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
