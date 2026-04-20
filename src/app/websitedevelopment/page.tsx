import type { Metadata } from "next";
import WebsiteDevelopment from "@/components/services/website-development/WebsiteDevelopment";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Custom website design and development services. Engaging digital experiences for businesses of all sizes.",
  openGraph: {
    title: "Website Development | Enlinque Consulting LLC",
    description:
      "Custom website design and development services. Engaging digital experiences for businesses of all sizes.",
    url: "https://enlinque.com/websitedevelopment",
    images: [
      {
        url: "/images/websitedevelopment.webp",
        width: 1200,
        height: 630,
        alt: "Website Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development | Enlinque Consulting LLC",
    description:
      "Custom website design and development services. Engaging digital experiences for businesses of all sizes.",
    images: ["/images/websitedevelopment.webp"],
  },
  alternates: {
    canonical: "/websitedevelopment",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Custom website design and development services. Engaging digital experiences for businesses of all sizes.",
  url: "https://enlinque.com/websitedevelopment",
  serviceType: "Website Design and Development",
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebsiteDevelopment />
    </>
  );
}
