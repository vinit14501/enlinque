import type { Metadata } from "next";

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
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000048] mb-6">
          Blog
        </h1>
        <p className="text-lg text-gray-600">
          Coming soon — stay tuned for insights and updates from our team.
        </p>
      </div>
    </section>
  );
}
