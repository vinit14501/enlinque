import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  RefreshCcw,
  Workflow,
  CloudUpload,
  Users,
  Database,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/common/Button";
import ContactCta from "@/components/common/ContactCta";
import ArrowIcon from "@/components/common/ArrowIcon";
import FaqSection from "@/components/common/FaqSection";
import { digitalTransformationServices } from "@/components/services/digital-transformation/digitalTransformationServices";

const faqs = [
  {
    question: "How does Enlinque support digital transformation?",
    answer:
      "Enlinque helps businesses modernize operations, optimize technology infrastructure, improve workflows, and implement scalable digital strategies that support long-term growth.",
  },
  {
    question: "Can Enlinque help align technology with business goals?",
    answer:
      "Yes. Enlinque works closely with businesses to ensure technology investments support operational efficiency, innovation, scalability, and profitability.",
  },
  {
    question: "Does Enlinque help with IT infrastructure management?",
    answer:
      "Yes. Services include IT strategy development, infrastructure optimization, cybersecurity planning, and digital operations management.",
  },
  {
    question: "Can Enlinque support business process optimization?",
    answer:
      "Yes. Enlinque identifies operational inefficiencies and implements systems, workflows, and automation strategies to improve productivity and performance.",
  },
  {
    question: "Do you provide technology roadmaps for businesses?",
    answer:
      "Yes. Enlinque creates strategic technology roadmaps that help businesses scale efficiently while staying competitive in changing markets.",
  },
];

const keyBenefits = [
  {
    icon: RefreshCcw,
    text: "Business Process Modernization",
    description:
      "Digitize and streamline core operations to eliminate inefficiencies, reduce manual effort, and create faster, more reliable workflows.",
  },
  {
    icon: Workflow,
    text: "Workflow Automation & Optimization",
    description:
      "Deploy intelligent automation to handle repetitive tasks, minimize errors, and free your teams to focus on high-value strategic work.",
  },
  {
    icon: CloudUpload,
    text: "Cloud Migration & Integration",
    description:
      "Move critical workloads to the cloud with minimal disruption, maximum efficiency, and a clear roadmap for ongoing optimization.",
  },
  {
    icon: Users,
    text: "Improved Customer Experience",
    description:
      "Build personalized, data-driven customer journeys that enhance engagement, increase satisfaction, and strengthen brand loyalty.",
  },
  {
    icon: Database,
    text: "Data-Driven Digital Strategies",
    description:
      "Harness BI platforms, advanced analytics, and AI-driven insights to make faster, smarter decisions across your entire organization.",
  },
  {
    icon: TrendingUp,
    text: "Enhanced Scalability & Business Agility",
    description:
      "Build a future-ready digital ecosystem that adapts quickly to market changes and scales seamlessly with your business ambitions.",
  },
];

export default function DigitalTransformation() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src="/images/cta.webp"
          alt="Digital transformation empowering businesses with modern technology and automation"
          fill
          className="object-cover object-center"
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
                Digital Transformation
              </h1>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-white">
                  Modernize operations, adopt advanced technologies, and
                  streamline workflows to improve efficiency, customer
                  experience, and business performance.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  From process automation and cloud migration to AI-driven
                  insights and enterprise modernization - we build your
                  future-ready digital ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-black tracking-wide leading-relaxed max-w-4xl mx-auto font-raleway">
            <span className="text-[#0b60a0] font-bold">
              Accelerate innovation
            </span>{" "}
            and stay competitive - modernizing operations with{" "}
            <span className="text-[#0b60a0] font-bold">
              advanced technologies
            </span>{" "}
            that build a{" "}
            <span className="text-[#0b60a0] font-bold">
              future-ready digital ecosystem
            </span>
            .
          </p>
        </div>
      </div>

      {/* Mid-Page Gradient CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#000048] via-blue-600 to-[#0b60a0]" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-linear-to-t from-[#000048]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-between items-center">
            <div className="max-w-2xl animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-md">
                Process Automation, Cloud Migration & Enterprise Modernization
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/90">
                We work closely with organizations to identify digital
                opportunities and implement scalable solutions
              </p>
            </div>

            <Link href="/contact" className="inline-block">
              <Button variant="secondary" icon={ArrowRight}>
                Reach out to us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#000048]">
            Our Transformation Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {digitalTransformationServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <service.icon className="text-3xl md:text-4xl mb-4 text-[#0b60a0] transition-colors" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0b60a0]">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-base text-black"
                    >
                      <ArrowIcon className="mt-1 shrink-0 w-4 h-4 text-[#0b60a0]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image CTA Banner */}
      <div className="relative w-full h-75 sm:h-87.5 md:h-100 overflow-hidden">
        <Image
          src="/images/digitaltransformation-cta.webp"
          alt="Digital transformation with AI technology and innovation"
          fill
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center animate-fade-in-up">
          <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/85 p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
                Build a Future-Ready Digital Ecosystem
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
                By combining strategy, technology, and innovation, we help
                businesses adapt to changing market demands and build a
                future-ready digital ecosystem.
              </p>
              <Link href="/contact" className="inline-block">
                <Button icon={ArrowRight}>Start Your Transformation</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#000048]">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {keyBenefits.map((benefit) => (
              <div
                key={benefit.text}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <benefit.icon className="text-3xl md:text-4xl mb-4 text-[#0b60a0] transition-colors" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0b60a0]">
                  {benefit.text}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* Connect Section */}
      <ContactCta />
    </div>
  );
}
