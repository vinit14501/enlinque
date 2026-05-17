import type { Metadata } from "next";
import DigitalTransformation from "@/components/services/digital-transformation/DigitalTransformation";

export const metadata: Metadata = {
  title: "Digital Transformation",
  description:
    "Accelerate innovation with digital transformation services — process automation, cloud migration, AI integration, and enterprise modernization for competitive advantage.",
  openGraph: {
    title: "Digital Transformation | Enlinque Consulting LLC",
    description:
      "Accelerate innovation with digital transformation services — process automation, cloud migration, AI integration, and enterprise modernization for competitive advantage.",
    url: "https://enlinque.com/services/digital-transformation",
    images: [
      {
        url: "/images/digitaltransformation-hero.jpg",
        width: 1920,
        height: 1280,
        alt: "Digital Transformation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation | Enlinque Consulting LLC",
    description:
      "Accelerate innovation with digital transformation services — process automation, cloud migration, AI integration, and enterprise modernization for competitive advantage.",
    images: ["/images/digitaltransformation-hero.jpg"],
  },
  alternates: {
    canonical: "/services/digital-transformation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Transformation",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Accelerate innovation with digital transformation services — process automation, cloud migration, AI integration, and enterprise modernization for competitive advantage.",
  url: "https://enlinque.com/services/digital-transformation",
  serviceType: "Digital Transformation",
};

export default function DigitalTransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalTransformation />
    </>
  );
}
