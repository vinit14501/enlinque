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
        url: "/images/logo.webp",
        width: 512,
        height: 512,
        alt: "Enlinque Consulting LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CxO & Business Consulting | Enlinque Consulting LLC",
    description:
      "Senior executive leadership on demand — fractional CMO, CTO, and CEO services plus web development for growing businesses.",
    images: ["/images/logo.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
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
