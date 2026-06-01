"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import ContactCta from "@/components/common/ContactCta";
import FaqSection from "@/components/common/FaqSection";
import { cioFaqs } from "./cioFaqs";
import { ctoFaqs } from "./ctoFaqs";
import { cmoFaqs } from "./cmoFaqs";
import { cfoFaqs } from "./cfoFaqs";
import { cooFaqs } from "./cooFaqs";

const services = [
  {
    id: "cio",
    title: "Chief Information Officer (CIO)",
    shortTitle: "CIO",
    headline: "Aligning IT Infrastructure with Global Business Ambitions.",
    sectionHeader: "The Role of the Enlinque CIO",
    description:
      'In many organizations, IT is seen as a "support" function. Our Fractional CIOs shift that paradigm, transforming technology into a core driver of business innovation. We provide the high-level governance required to ensure your tech spend is an investment, not just an expense.',
    image: "/images/cio.webp",
    pillars: [
      {
        title: "Strategic IT Governance",
        description:
          "We establish a 12-to-36-month IT roadmap. This includes hardware lifecycles, software consolidation, and ensuring your technology stack supports your projected headcount growth.",
      },
      {
        title: "Cybersecurity & Compliance Excellence",
        description:
          "We conduct deep-tier risk assessments. For companies operating internationally, we ensure compliance with GDPR, ISO 27001, and the Digital Personal Data Protection Act (DPDP).",
      },
      {
        title: "Cloud Strategy & Migration",
        description:
          "Moving away from expensive on-premise servers. We architect hybrid or multi-cloud environments (AWS, Azure, Google Cloud) that offer maximum uptime and disaster recovery.",
      },
      {
        title: "IT Audit & Cost Optimization",
        description:
          'We perform a "vampire cost" audit, identifying redundant SaaS subscriptions and negotiating enterprise-level contracts to slash monthly overhead.',
      },
    ],
    faqs: cioFaqs,
  },
  {
    id: "cto",
    title: "Chief Technology Officer (CTO)",
    shortTitle: "CTO",
    headline: "Building Scalable Architecture for the Next Generation of Tech.",
    sectionHeader: "The Technical Visionary",
    description:
      'A Fractional CTO from Enlinque isn\'t just a lead developer; they are the architect of your company\'s future. We bridge the gap between "business ideas" and "shippable code," ensuring your product is built on a foundation that won\'t crumble under the weight of 10x growth.',
    image: "/images/cto.webp",
    pillars: [
      {
        title: "Architectural Audits & Design",
        description:
          "We evaluate your current codebase to identify technical debt. We design scalable microservices architectures and ensure your database logic is optimized for high-volume transactions.",
      },
      {
        title: "Engineering Leadership & Mentorship",
        description:
          "We implement Agile and Scrum frameworks that actually work. We mentor your lead devs, optimize sprint velocities, and establish rigorous CI/CD (Continuous Integration/Continuous Deployment) pipelines.",
      },
      {
        title: "Emerging Tech Integration",
        description:
          "We help you navigate the noise of AI/ML. Whether it's integrating Large Language Models (LLMs) or implementing Graph Neural Networks for security, we ensure tech adoption is purpose-driven.",
      },
      {
        title: "Product Roadmap Execution",
        description:
          "We act as the translator between stakeholders and the dev team, turning abstract features into detailed technical specifications (PRDs).",
      },
    ],
    faqs: ctoFaqs,
  },
  {
    id: "cmo",
    title: "Chief Marketing Officer (CMO)",
    shortTitle: "CMO",
    headline: "Turning Marketing into a Predictable Revenue Engine.",
    sectionHeader: "Strategic Growth Leadership",
    description:
      "Marketing at Enlinque isn't about \"likes\"—it's about ROI, LTV, and CAC. Our Fractional CMOs provide the executive oversight needed to build a multi-channel growth engine that works while you sleep.",
    image: "/images/cmo.webp",
    pillars: [
      {
        title: "Full-Funnel Growth Strategy",
        description:
          'We map the entire customer journey, from cold awareness to post-purchase advocacy. We identify "leaks" in your sales funnel where potential revenue is being lost.',
      },
      {
        title: "Performance Marketing & ROI Optimization",
        description:
          "We manage high-budget campaigns across Google Ads, Meta, and LinkedIn. Our focus is on ROAS (Return on Ad Spend) and reducing your Customer Acquisition Cost.",
      },
      {
        title: "Brand Authority & Narrative",
        description:
          'We refine your brand\'s "voice" to ensure it commands authority in your industry. This includes content strategy, PR direction, and high-level positioning against competitors.',
      },
      {
        title: "MarTech Stack Management",
        description:
          "We implement and optimize your marketing technology, including CRM (HubSpot/Salesforce), marketing automation, and advanced attribution modeling to see exactly where your leads come from.",
      },
    ],
    faqs: cmoFaqs,
  },
  {
    id: "cfo",
    title: "Chief Financial Officer (CFO)",
    shortTitle: "CFO",
    headline: "Financial Integrity for High-Growth Enterprises.",
    sectionHeader: "Fiscal Leadership & Risk Management",
    description:
      "A bookkeeper records what happened; an Enlinque CFO tells you what will happen. We provide the financial sophistication needed to navigate fundraising, manage cash flow, and ensure long-term profitability.",
    image: "/images/cfo.webp",
    pillars: [
      {
        title: "Financial Modeling & Predictive Analysis",
        description:
          'We build 3-year financial models that allow you to run "what-if" scenarios: What if we hire 10 more devs? What if we pivot to a SaaS model?',
      },
      {
        title: "Fundraising & Exit Readiness",
        description:
          'We prepare your "Data Room" for VCs or private equity. We clean up your Cap Table, refine your financial pitch, and lead the due diligence process.',
      },
      {
        title: "Cash Flow & Burn Rate Governance",
        description:
          'We implement strict controls to manage your runway. We ensure you have enough capital to scale aggressively without hitting a "cash crunch."',
      },
      {
        title: "Unit Economics Deep-Dive",
        description:
          "We analyze your margins at a granular level. We ensure your business model is sustainable by analyzing contribution margins and payback periods.",
      },
    ],
    faqs: cfoFaqs,
  },
  {
    id: "coo",
    title: "Chief Operating Officer (COO)",
    shortTitle: "COO",
    headline: "Operational Excellence: The Machinery of Scaling.",
    sectionHeader: "The Execution Specialist",
    description:
      'The CEO has the vision; the COO builds the system to achieve it. Enlinque Fractional COOs focus on the "internal plumbing" of your business, removing friction and ensuring that every department is aligned with the company\'s North Star.',
    image: "/images/coo.webp",
    pillars: [
      {
        title: "Process Engineering & SOP Development",
        description:
          'We document and automate the "tribal knowledge" in your company. We build Standard Operating Procedures (SOPs) that make the business founder-independent.',
      },
      {
        title: "Organizational Design & Culture",
        description:
          "We help design team structures that prevent silos. We create performance-based compensation plans and KPIs (Key Performance Indicators) that drive actual results.",
      },
      {
        title: "Cross-Functional Alignment",
        description:
          "We ensure that Sales, Marketing, and Tech are not working at cross-purposes. We implement EOS (Entrepreneurial Operating System) or OKR (Objectives and Key Results) frameworks.",
      },
      {
        title: "Supply Chain & Vendor Ecosystem",
        description:
          "We optimize your external operations, managing vendor relationships and streamlining procurement to increase your operational efficiency.",
      },
    ],
    faqs: cooFaqs,
  },
];

export default function FractionalCxO() {
  const [activeId, setActiveId] = useState("cio");
  const active = services.find((s) => s.id === activeId)!;

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] text-white animate-fade-in">
        <Image
          src="/images/fractional.webp"
          alt="Fractional CxO Services"
          fill
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-raleway tracking-tight animate-fade-in-up">
            Fractional CxO Services
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto text-white font-light leading-relaxed">
            Access world-class executive leadership without the full-time
            commitment. Our fractional CxOs bring decades of experience to
            elevate your business.
          </p>
          <Link href="/contact" className="inline-block mt-7">
            <Button variant="secondary" icon={ArrowRight}>
              Schedule a Consultation Today
            </Button>
          </Link>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        id="cxo-tabs"
        className="sticky top-16 sm:top-20 lg:top-24 z-30 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center overflow-x-auto no-scrollbar">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`px-5 md:px-8 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeId === s.id
                    ? "border-[#0b60a0] text-[#0b60a0]"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                <span className="md:hidden">{s.shortTitle}</span>
                <span className="hidden md:inline">
                  Fractional {s.shortTitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Panel */}
      <div id="cxo-panel" className="py-14 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Role Header */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center mb-10 md:mb-14">
            {/* Text */}
            <div className="md:col-span-3 space-y-4 order-2 md:order-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b60a0]/60">
                Fractional {active.shortTitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {active.title}
              </h2>
              <p className="text-lg md:text-xl text-[#0b60a0] italic font-medium leading-snug">
                {active.headline}
              </p>
              <div className="hidden md:block w-12 h-1 bg-[#0b60a0] rounded-full" />
              <h3 className="text-sm md:text-base font-bold text-gray-700 uppercase tracking-wider">
                {active.sectionHeader}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Image */}
            <div className="md:col-span-2 relative order-1 md:order-2">
              <div className="absolute -right-3 -bottom-3 w-full h-full bg-linear-to-br from-blue-600 to-blue-950 rounded-xl z-0" />
              <div className="relative z-10 w-full aspect-video md:aspect-4/3 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Service Pillars */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Detailed Service Pillars
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {active.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 md:p-6 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#0b60a0]/30 hover:shadow-md transition-all duration-200"
                >
                  <h4 className="text-sm md:text-base font-bold text-[#0b60a0] mb-1.5 md:mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {active.faqs.length > 0 && <FaqSection faqs={active.faqs} />}

      {/* Connect Section */}
      <ContactCta />
    </div>
  );
}
