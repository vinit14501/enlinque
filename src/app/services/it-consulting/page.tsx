import type { Metadata } from "next";
import ItConsulting from "@/components/services/it-consulting/ItConsulting";

export const metadata: Metadata = {
  title: "IT Consulting",
  description:
    "Strategic IT consulting services — cloud strategy, infrastructure planning, cybersecurity, and technology advisory for startups and growing businesses.",
  openGraph: {
    title: "IT Consulting | Enlinque Consulting LLC",
    description:
      "Strategic IT consulting services — cloud strategy, infrastructure planning, cybersecurity, and technology advisory for startups and growing businesses.",
    url: "https://enlinque.com/services/it-consulting",
    images: [
      {
        url: "/images/itconsulting-hero.jpg",
        width: 1920,
        height: 1280,
        alt: "IT Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting | Enlinque Consulting LLC",
    description:
      "Strategic IT consulting services — cloud strategy, infrastructure planning, cybersecurity, and technology advisory for startups and growing businesses.",
    images: ["/images/itconsulting-hero.jpg"],
  },
  alternates: {
    canonical: "/services/it-consulting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT Consulting",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Strategic IT consulting services — cloud strategy, infrastructure planning, cybersecurity, and technology advisory for startups and growing businesses.",
  url: "https://enlinque.com/services/it-consulting",
  serviceType: "IT Consulting",
};

export default function ItConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ItConsulting />
    </>
  );
}
