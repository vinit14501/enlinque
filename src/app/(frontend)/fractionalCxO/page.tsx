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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Fractional CxO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractional CxO services give businesses access to experienced executive leadership on a part-time or project basis without the cost of hiring a full-time executive. Enlinque provides strategic leadership through Fractional CIO, CTO, CMO, CFO, and COO services.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Fractional CIO and how can it help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CIO helps businesses align technology with business goals. They oversee IT strategy, digital transformation, cybersecurity, infrastructure optimization, and long-term technology planning.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Fractional CTO do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CTO focuses on technology innovation, software strategy, system architecture, IT operations, and scalable technology solutions that support business growth.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Fractional CMO improve marketing performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CMO develops data-driven marketing strategies, strengthens brand positioning, improves customer acquisition, and helps businesses maximize marketing ROI.",
      },
    },
    {
      "@type": "Question",
      name: "What support does a Fractional CFO provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CFO helps businesses with financial planning, forecasting, budgeting, compliance, risk management, and profitability improvement.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of hiring a Fractional COO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional COO improves operational efficiency, streamlines workflows, manages business processes, and helps organizations scale effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Why should businesses choose fractional leadership instead of full-time executives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fractional leadership gives businesses access to experienced executives at a lower cost while providing flexibility, faster execution, and strategic guidance when needed.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries can benefit from Fractional CxO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Startups, growing businesses, SMEs, technology companies, service businesses, and enterprises undergoing transformation can all benefit from fractional leadership.",
      },
    },
  ],
};

export default function FractionalCxOPage() {
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
      <FractionalCxO />
    </>
  );
}
