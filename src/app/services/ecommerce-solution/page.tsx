import type { Metadata } from "next";
import EcommerceSolution from "@/components/services/ecommerce-solution/EcommerceSolution";

export const metadata: Metadata = {
  title: "E-Commerce Solution",
  description:
    "End-to-end e-commerce solutions — custom store development, Shopify, WooCommerce, payment integration, and conversion optimization for online business growth.",
  openGraph: {
    title: "E-Commerce Solution | Enlinque Consulting LLC",
    description:
      "End-to-end e-commerce solutions — custom store development, Shopify, WooCommerce, payment integration, and conversion optimization for online business growth.",
    url: "https://enlinque.com/services/ecommerce-solution",
    images: [
      {
        url: "/images/ecommerce-hero.jpg",
        width: 1920,
        height: 1280,
        alt: "E-Commerce Solution Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Solution | Enlinque Consulting LLC",
    description:
      "End-to-end e-commerce solutions — custom store development, Shopify, WooCommerce, payment integration, and conversion optimization for online business growth.",
    images: ["/images/ecommerce-hero.jpg"],
  },
  alternates: {
    canonical: "/services/ecommerce-solution",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Commerce Solution",
  provider: {
    "@type": "Organization",
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
  },
  description:
    "End-to-end e-commerce solutions — custom store development, Shopify, WooCommerce, payment integration, and conversion optimization for online business growth.",
  url: "https://enlinque.com/services/ecommerce-solution",
  serviceType: "E-Commerce Solutions",
};

export default function EcommerceSolutionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommerceSolution />
    </>
  );
}
