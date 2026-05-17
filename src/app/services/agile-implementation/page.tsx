import type { Metadata } from "next";
import AgileImplementation from "@/components/services/agile-implementation/AgileImplementation";

export const metadata: Metadata = {
  title: "Agile Implementation",
  description:
    "Expert agile implementation services — Scrum, Kanban, agile coaching, sprint planning, and team transformation for faster delivery and improved collaboration.",
  openGraph: {
    title: "Agile Implementation | Enlinque Consulting LLC",
    description:
      "Expert agile implementation services — Scrum, Kanban, agile coaching, sprint planning, and team transformation for faster delivery and improved collaboration.",
    url: "https://enlinque.com/services/agile-implementation",
    images: [
      {
        url: "/images/agile-hero.jpg",
        width: 1920,
        height: 1280,
        alt: "Agile Implementation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Implementation | Enlinque Consulting LLC",
    description:
      "Expert agile implementation services — Scrum, Kanban, agile coaching, sprint planning, and team transformation for faster delivery and improved collaboration.",
    images: ["/images/agile-hero.jpg"],
  },
  alternates: {
    canonical: "/services/agile-implementation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agile Implementation",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Expert agile implementation services — Scrum, Kanban, agile coaching, sprint planning, and team transformation for faster delivery and improved collaboration.",
  url: "https://enlinque.com/services/agile-implementation",
  serviceType: "Agile Implementation",
};

export default function AgileImplementationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgileImplementation />
    </>
  );
}
