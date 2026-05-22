import type { Metadata } from "next";
import DigitalMarketing from "@/components/services/digital-marketing/DigitalMarketing";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Expert digital marketing solutions — SEO, content marketing, social media, and performance analytics.",
  openGraph: {
    title: "Digital Marketing | Enlinque Consulting LLC",
    description:
      "Expert digital marketing solutions — SEO, content marketing, social media, and performance analytics.",
    url: "https://enlinque.com/services/digital-marketing",
    images: [
      {
        url: "/images/digitalmarketing.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing | Enlinque Consulting LLC",
    description:
      "Expert digital marketing solutions — SEO, content marketing, social media, and performance analytics.",
    images: ["/images/digitalmarketing.webp"],
  },
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Expert digital marketing solutions — SEO, content marketing, social media, and performance analytics.",
  url: "https://enlinque.com/services/digital-marketing",
  serviceType: "Digital Marketing",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What marketing services does Enlinque provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enlinque provides strategic marketing leadership, brand positioning, customer acquisition planning, marketing optimization, and growth-focused business strategies.",
      },
    },
    {
      "@type": "Question",
      name: "How can Enlinque help improve customer acquisition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through market analysis, customer insights, marketing strategy, and performance optimization, Enlinque helps businesses attract and retain high-value customers.",
      },
    },
    {
      "@type": "Question",
      name: "Does Enlinque help businesses improve brand positioning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enlinque develops clear brand messaging, market positioning strategies, and differentiation plans to help businesses stand out.",
      },
    },
    {
      "@type": "Question",
      name: "Can Enlinque help with data-driven marketing decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The team analyzes market trends, customer behavior, and performance metrics to create informed marketing strategies.",
      },
    },
    {
      "@type": "Question",
      name: "How does Enlinque improve marketing ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By optimizing marketing channels, improving targeting strategies, refining campaigns, and aligning marketing with business objectives.",
      },
    },
  ],
};

export default function DigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DigitalMarketing />
    </>
  );
}
