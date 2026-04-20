import type { Metadata } from "next";
import FractionalCxO from "@/components/fractionalCxO/FractionalCxO";

export const metadata: Metadata = {
  title: "Fractional CxO Services",
  description:
    "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
  openGraph: {
    title: "Fractional CxO Services | Enlinque Consulting LLC",
    description:
      "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
    url: "https://enlinque.com/fractionalCxO",
    images: [
      {
        url: "/images/fractional.webp",
        width: 1200,
        height: 630,
        alt: "Fractional CxO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CxO Services | Enlinque Consulting LLC",
    description:
      "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
    images: ["/images/fractional.webp"],
  },
  alternates: {
    canonical: "/fractionalCxO",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fractional CxO Services",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
  url: "https://enlinque.com/fractionalCxO",
  serviceType: "Fractional Executive Leadership",
};

export default function FractionalCxOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FractionalCxO />
    </>
  );
}
