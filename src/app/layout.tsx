import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enlinque.com"),
  title: {
    default: "Fractional CxO & Business Consulting | Enlinque Consulting LLC",
    template: "%s | Enlinque Consulting LLC",
  },
  description:
    "Enlinque helps growing businesses access senior executive leadership — fractional CMO, CTO, and CEO services plus web development. Flexible. Cost-effective. Results-driven. Get started today.",
  keywords: [
    "Fractional CxO",
    "Website Development",
    "Digital Marketing",
    "Digital Transformation",
    "Business Consulting",
    "IT Consulting",
    "Startup Solutions",
  ],
  authors: [{ name: "Enlinque Consulting LLC" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enlinque.com",
    siteName: "Enlinque Consulting LLC",
    title: "Fractional CxO & Business Consulting | Enlinque Consulting LLC",
    description:
      "Enlinque helps growing businesses access senior executive leadership — fractional CMO, CTO, and CEO services plus web development. Flexible. Cost-effective. Results-driven.",
    images: [
      {
        // Use a large banner image (1200×630) — the minimum required by
        // LinkedIn Ads, Meta Ads, and Google Ads for proper creative rendering.
        // Replace with a professionally designed branded OG image when available.
        url: "/images/cta.webp",
        width: 1200,
        height: 630,
        alt: "Enlinque Consulting LLC — Fractional CxO & Business Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CxO & Business Consulting | Enlinque Consulting LLC",
    description:
      "Enlinque helps growing businesses access senior executive leadership — fractional CMO, CTO, and CEO services plus web development. Flexible. Cost-effective. Results-driven.",
    images: ["/images/cta.webp"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", type: "image/x-icon" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "theme-color": "#0d9488",
    "msapplication-TileColor": "#0d9488",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    // ProfessionalService is a LocalBusiness sub-type; using both types lets
    // Google surface the business in local results AND knowledge panels.
    "@type": ["Organization", "ProfessionalService"],
    name: "Enlinque Consulting LLC",
    url: "https://enlinque.com",
    logo: "https://enlinque.com/images/logo.webp",
    description:
      "Enlinque helps growing businesses access senior executive leadership — fractional CMO, CTO, and CEO services plus web development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pittsburgh",
      addressRegion: "PA",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "IT Consulting",
      "Digital Marketing",
      "Fractional CxO",
      "Website Development",
      "Software Development",
      "E-Commerce Solutions",
      "Digital Transformation",
      "Agile Implementation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@enlinque.com",
      availableLanguage: "English",
    },
    sameAs: ["https://linkedin.com/company/enlinque"],
  };

  return (
    <html lang="en" dir="ltr">
      <body className={`${raleway.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
