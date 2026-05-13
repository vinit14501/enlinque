import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Text from "@/components/home/Text";
import Services from "@/components/home/Services";
import Cta from "@/components/home/Cta";
import Cta3 from "@/components/home/Cta3";
import Faq from "@/components/home/Faq";
import Quotes from "@/components/home/Quotes";
import Testimonials from "@/components/home/Testimonials";
import ContactCta from "@/components/common/ContactCta";

export const metadata: Metadata = {
  title: "Fractional CxO & Business Consulting",
  description:
    "Enlinque helps growing businesses access senior executive leadership — fractional CMO, CTO, and CEO services plus web development. Flexible. Cost-effective. Results-driven. Get started today.",
  openGraph: {
    title: "Fractional CxO & Business Consulting | Enlinque Consulting LLC",
    description:
      "Senior executive leadership on demand — fractional CMO, CTO, and CEO services plus web development for growing businesses.",
    url: "https://enlinque.com",
    images: [
      {
        url: "/images/cta.webp",
        width: 1200,
        height: 630,
        alt: "Enlinque Consulting LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CxO & Business Consulting | Enlinque Consulting LLC",
    description:
      "Senior executive leadership on demand — fractional CMO, CTO, and CEO services plus web development for growing businesses.",
    images: ["/images/cta.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  // FAQPage structured data mirrors the FAQ section content exactly.
  // Google uses this to generate Featured Snippets and rich results,
  // directly increasing organic click-through rate for question-based searches.
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
          text: "Enlinque is headquartered at 1597 Washington Pike STE A38-151, Bridgeville, PA 15017, USA, and partners with clients worldwide, ensuring smooth communication and effective collaboration across borders.",
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
          text: "We offer comprehensive marketing consulting, including growth strategy development, ROI-focused campaigns, content marketing, SEO, digital advertising, and performance analytics. Our goal is to build and execute tailored strategies that drive measurable results, such as increased traffic, conversions, and customer retention.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Text />
      <Cta />
      <Services />
      <Cta3 />
      <Faq />
      <Quotes />
      <Testimonials />
      <ContactCta />
    </>
  );
}
