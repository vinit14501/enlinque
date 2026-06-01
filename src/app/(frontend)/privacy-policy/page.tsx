import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Enlinque Consulting privacy policy and data handling practices.",
  openGraph: {
    title: "Privacy Policy | Enlinque Consulting LLC",
    description:
      "Enlinque Consulting privacy policy and data handling practices.",
    url: "https://enlinque.com/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Enlinque Consulting LLC",
    description:
      "Enlinque Consulting privacy policy and data handling practices.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
