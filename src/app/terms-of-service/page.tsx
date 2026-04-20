import type { Metadata } from "next";
import TermsConditions from "@/components/terms/TermsConditions";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Enlinque Consulting terms and conditions of service.",
  openGraph: {
    title: "Terms of Service | Enlinque Consulting LLC",
    description: "Enlinque Consulting terms and conditions of service.",
    url: "https://enlinque.com/terms-of-service",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Enlinque Consulting LLC",
    description: "Enlinque Consulting terms and conditions of service.",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return <TermsConditions />;
}
