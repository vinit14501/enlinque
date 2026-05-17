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

export default function DigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalMarketing />
    </>
  );
}
