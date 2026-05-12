export type Subsection = {
  label: string;
  title: string;
  content: string[];
};

export type TermsSection = {
  id: number;
  title: string;
  intro?: string;
  content: string[];
  subsections?: Subsection[];
};

export const termsData = {
  title: "Terms of Service",
  metadata: {
    effectiveDate: "05/12/2026",
    lastUpdated: "05/12/2026",
  },
  introduction:
    'These Terms of Service ("Terms") govern the relationship between Enlinque Consulting LLC ("Company," "we," "us") and the client ("Client," "you") regarding the professional services provided. By engaging our services or using our website, you agree to these terms in full.',
  sections: [
    {
      id: 1,
      title: "Service-Specific Terms",
      intro:
        "Enlinque provides a range of startup and enterprise solutions. Each service category is subject to the following specific terms:",
      content: [],
      subsections: [
        {
          label: "A",
          title: "Fractional CxO Services (CIO, CTO, CMO, CFO, COO)",
          content: [
            "Nature of Service: Enlinque provides executive-level advisory and leadership on a part-time or project basis. This is a consulting relationship and does not constitute a full-time employment contract.",
            "Decision Making: While our CxOs provide strategic direction, the final authority for corporate decisions remains with the Client's Board of Directors or CEO.",
            "Access: Client must provide the Fractional CxO with necessary access to internal data, financial records, and team members to perform the role effectively.",
          ],
        },
        {
          label: "B",
          title: "Software & Website Development",
          content: [
            'Scope of Work: Services are limited to the features and functionality defined in the signed Statement of Work (SOW). Any additions are considered "Scope Creep" and will require a change order.',
            "Client Review: The Client is responsible for timely feedback during milestone reviews. Delays in feedback exceeding 5 business days may result in project timeline shifts.",
            'Post-Launch Support: Unless a maintenance retainer is active, Enlinque provides a 30-day "Bug Fix" period post-launch. Subsequent updates are billable.',
          ],
        },
        {
          label: "C",
          title: "Digital Marketing & SEO",
          content: [
            "Performance: While we use data-driven strategies to maximize ROI, Enlinque does not guarantee specific search engine rankings or conversion rates, as these are subject to third-party algorithm changes (Google, Meta, etc.).",
            "Ad Spend: Client is responsible for paying advertising platforms (Google Ads, Meta Ads) directly. Enlinque's fee covers management and strategy only.",
          ],
        },
        {
          label: "D",
          title: "IT Consulting & Digital Transformation",
          content: [
            "Implementation: Enlinque provides the roadmap and technical strategy. The Client is responsible for the internal cultural adoption of new technologies and processes.",
            "Third-Party Tools: Recommendations for third-party software are based on current market data. Enlinque is not liable for the service uptime or performance of third-party vendors.",
          ],
        },
        {
          label: "E",
          title: "Agile Implementation",
          content: [
            "Participation: For Agile methodologies to succeed, the Client's team must participate in scheduled ceremonies (Sprint Planning, Retrospectives). Lack of participation voids performance timelines.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Client Conditions & Agreements",
      intro:
        'To ensure the "Speed meets Strategy" promise, the Client must agree to the following conditions:',
      content: [
        "Point of Contact: The Client shall designate one primary decision-maker to streamline communication and approvals.",
        "Data Accuracy: The Client agrees to provide accurate, complete, and timely information regarding their business operations, finances, and technical hurdles.",
        "Resource Availability: The Client must ensure that their internal team is available for necessary meetings and has the authority to provide required assets (logos, content, API keys).",
        "Timely Payments: Work on any project phase will only commence or continue upon receipt of the agreed-upon deposit or milestone payment.",
      ],
    },
    {
      id: 3,
      title: "Financial Terms",
      content: [
        "Invoicing: Invoices are sent electronically and are due within 15 days of receipt unless otherwise specified.",
        "Late Fees: Late payments may be subject to a fee of 1.5% per month on the outstanding balance.",
        "Refunds: Due to the service-based nature of consulting and development, payments for work already completed are non-refundable.",
      ],
    },
    {
      id: 4,
      title: "Intellectual Property",
      content: [
        "Work Product: Upon final payment, the Client owns the end-deliverables (the website code, the marketing copy, the strategy docs).",
        'Company Property: Enlinque retains ownership of its proprietary "Success Path" frameworks, pre-existing code snippets, and general consulting methodologies used to create the work product.',
      ],
    },
    {
      id: 5,
      title: "Confidentiality & Non-Disclosure",
      content: [
        "Both Enlinque and the Client agree to keep all proprietary business information, trade secrets, and technical data strictly confidential. This obligation extends for a period of 3 years following the termination of services.",
      ],
    },
    {
      id: 6,
      title: "Limitation of Liability",
      content: [
        "Enlinque's total liability for any claim arising out of these Terms or our services shall not exceed the total amount of fees paid by the Client to Enlinque during the 6 months preceding the claim. We are not liable for lost profits, data loss, or indirect damages.",
      ],
    },
    {
      id: 7,
      title: "Termination",
      content: [
        "Either party may terminate the agreement with 30 days' written notice. Upon termination, the Client shall pay for all work performed up to the effective date of termination.",
      ],
    },
    {
      id: 8,
      title: "Governing Law",
      content: [
        "These Terms are governed by the laws of Pennsylvania, USA. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Pennsylvania, USA.",
      ],
    },
  ] as TermsSection[],
};
