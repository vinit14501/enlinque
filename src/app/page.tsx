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
  title: "Professional Business Solutions",
  description:
    "Enlinque Consulting LLC offers Fractional CxO services, website development, and digital marketing solutions to help your business grow.",
  openGraph: {
    title: "Enlinque Consulting LLC - Professional Business Solutions",
    description:
      "Fractional CxO services, website development, and digital marketing solutions to help your business grow.",
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
    title: "Enlinque Consulting LLC - Professional Business Solutions",
    description:
      "Fractional CxO services, website development, and digital marketing solutions.",
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
