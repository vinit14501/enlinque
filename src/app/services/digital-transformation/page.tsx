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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Enlinque support digital transformation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enlinque helps businesses modernize operations, optimize technology infrastructure, improve workflows, and implement scalable digital strategies that support long-term growth.",
      },
    },
    {
      "@type": "Question",
      name: "Can Enlinque help align technology with business goals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enlinque works closely with businesses to ensure technology investments support operational efficiency, innovation, scalability, and profitability.",
      },
    },
    {
      "@type": "Question",
      name: "Does Enlinque help with IT infrastructure management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Services include IT strategy development, infrastructure optimization, cybersecurity planning, and digital operations management.",
      },
    },
    {
      "@type": "Question",
      name: "Can Enlinque support business process optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enlinque identifies operational inefficiencies and implements systems, workflows, and automation strategies to improve productivity and performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide technology roadmaps for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enlinque creates strategic technology roadmaps that help businesses scale efficiently while staying competitive in changing markets.",
      },
    },
  ],
};

export default function DigitalTransformationPage() {
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
      <DigitalTransformation />
    </>
  );
}
