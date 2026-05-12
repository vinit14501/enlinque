type PrivacySection = {
  title: string;
  content?: string;
  list?: string[];
  contact?: { email: string; address: string; company?: string };
  subsections?: { subtitle: string; content: string; list?: string[] }[];
  additional?: string;
};

export const privacyPolicyData: {
  sections: PrivacySection[];
} = {
  sections: [
    {
      title: "1. Introduction",
      content:
        "At Enlinque, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our services.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.",
      list: [
        "Personal Data: Name, email address, phone number, and company name provided via contact forms.",
        "Log Data: IP addresses, browser types, and pages visited (collected automatically for security and analytical purposes).",
        "Cookies: Small files stored on your device to improve the site's performance and user experience.",
      ],
    },
    {
      title: "3. Use of Your Information",
      content: "We use the information we collect to:",
      list: [
        "Respond to client inquiries and provide requested services.",
        "Send administrative information, such as project updates or changes to our terms.",
        "Optimize our website performance and marketing strategies.",
        "Ensure the security and integrity of our digital platforms.",
      ],
    },
    {
      title: "4. Ad Compliance & Digital Tracking",
      content:
        "Enlinque adheres to global standards for digital advertising and transparency.",
      list: [
        "Third-Party Pixels: We may use tracking pixels (such as the Meta Pixel or Google Ads Tag) to measure the effectiveness of our advertising campaigns and to serve relevant advertisements to visitors based on their past activity on our Site.",
        "Remarketing: You may see Enlinque advertisements on third-party websites (like Google or Facebook) after visiting our Site.",
        "Opt-Out: Users can opt out of targeted advertising by visiting the Network Advertising Initiative (NAI) opt-out page or adjusting their browser's cookie settings.",
      ],
    },
    {
      title: "5. Data Disclosure",
      content:
        "We do not sell, trade, or rent your personal identification information to third parties. We may share information with trusted third-party service providers (e.g., cloud hosting or email services) who assist us in operating our business, so long as those parties agree to keep this information confidential.",
    },
    {
      title: "6. Security",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
    },
    {
      title: "7. Your Data Rights",
      content:
        "Under the Digital Personal Data Protection (DPDP) Act and other relevant regulations, you have the right to:",
      list: [
        "Request access to the personal data we hold about you.",
        "Request the correction of inaccurate data.",
        "Request the deletion of your data when it is no longer necessary for the purposes for which it was collected.",
      ],
    },
    {
      title: "8. Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
      contact: {
        email: "contact@enlinque.com",
        address: "Pennsylvania, USA",
      },
    },
  ],
};
