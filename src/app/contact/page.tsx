import type { Metadata } from "next";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Enlinque Consulting for strategic business and technology solutions.",
  openGraph: {
    title: "Contact Us | Enlinque Consulting LLC",
    description:
      "Get in touch with Enlinque Consulting for strategic business and technology solutions.",
    url: "https://enlinque.com/contact",
    images: [
      {
        url: "/images/logo.webp",
        width: 512,
        height: 512,
        alt: "Contact Enlinque Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Enlinque Consulting LLC",
    description:
      "Get in touch with Enlinque Consulting for strategic business and technology solutions.",
    images: ["/images/logo.webp"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
