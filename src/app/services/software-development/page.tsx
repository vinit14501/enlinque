import type { Metadata } from "next";
import SoftwareDevelopment from "@/components/services/software-development/SoftwareDevelopment";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom software development services — web applications, mobile apps, SaaS platforms, APIs, and enterprise solutions built for scale and performance.",
  openGraph: {
    title: "Software Development | Enlinque Consulting LLC",
    description:
      "Custom software development services — web applications, mobile apps, SaaS platforms, APIs, and enterprise solutions built for scale and performance.",
    url: "https://enlinque.com/services/software-development",
    images: [
      {
        url: "/images/softwaredevelopment-hero.webp",
        width: 1920,
        height: 1280,
        alt: "Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development | Enlinque Consulting LLC",
    description:
      "Custom software development services — web applications, mobile apps, SaaS platforms, APIs, and enterprise solutions built for scale and performance.",
    images: ["/images/softwaredevelopment-hero.webp"],
  },
  alternates: {
    canonical: "/services/software-development",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Development",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "Custom software development services — web applications, mobile apps, SaaS platforms, APIs, and enterprise solutions built for scale and performance.",
  url: "https://enlinque.com/services/software-development",
  serviceType: "Software Development",
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareDevelopment />
    </>
  );
}
