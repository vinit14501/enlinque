import type { Metadata } from "next";
import FaqPage from "@/components/faq/FaqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Enlinque Consulting services.",
  openGraph: {
    title: "FAQ | Enlinque Consulting LLC",
    description:
      "Frequently asked questions about Enlinque Consulting services.",
    url: "https://enlinque.com/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ | Enlinque Consulting LLC",
    description:
      "Frequently asked questions about Enlinque Consulting services.",
  },
  alternates: {
    canonical: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Enlinque offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enlinque provides IT consulting, marketing consulting, e-commerce solutions, speed-to-market solutions tailored for startups and businesses in various industries to name a few.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, while we specialize in helping startups and provide fractional CxO services, we also work with businesses of all sizes and industries to address their IT and marketing needs.",
      },
    },
    {
      "@type": "Question",
      name: "Where are you located, and do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enlinque is headquartered in Pittsburgh, PA, USA, and partners with clients worldwide, ensuring smooth communication and effective collaboration across borders.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help us choose the right technology stack for our startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we analyze your business needs and recommend the most suitable, scalable, and cost-effective technology stack to support your growth.",
      },
    },
    {
      "@type": "Question",
      name: "What marketing consulting services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive marketing consulting, including growth strategy development, ROI-focused campaigns, content marketing, SEO, digital advertising, and performance analytics.",
      },
    },
    {
      "@type": "Question",
      name: "How does your consulting process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow a proven success path: Pinpoint, Prioritize, Plan, Propel, and Perfect. This ensures clarity, alignment, and tangible results at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have experience working with e-commerce, technology, healthcare, and various other industries, but we adapt to the needs of any business.",
      },
    },
  ],
};

export default function FaqRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqPage />
    </>
  );
}
