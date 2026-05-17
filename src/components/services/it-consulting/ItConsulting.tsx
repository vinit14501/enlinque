import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Server,
  Cloud,
  Shield,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import Button from "@/components/common/Button";
import ScrollButton from "@/components/common/ScrollButton";
import ContactCta from "@/components/common/ContactCta";
import ArrowIcon from "@/components/common/ArrowIcon";
import { itConsultingServices } from "@/components/services/it-consulting/itConsultingServices";

const keyBenefits = [
  {
    icon: Lightbulb,
    text: "Strategic Technology Planning",
    description:
      "We build customized IT roadmaps aligned to your business goals, ensuring every technology investment drives measurable operational value and long-term growth.",
  },
  {
    icon: Server,
    text: "IT Infrastructure Optimization",
    description:
      "Scale your IT infrastructure with confidence — from legacy modernization and network performance tuning to capacity planning and disaster recovery.",
  },
  {
    icon: Cloud,
    text: "Cloud & Digital Transformation Consulting",
    description:
      "Navigate cloud migration, hybrid architectures, and full digital transformation with expert guidance tailored to your business maturity and goals.",
  },
  {
    icon: Shield,
    text: "Cybersecurity & Risk Management",
    description:
      "Protect your operations with comprehensive security audits, vulnerability assessments, risk mitigation strategies, and compliance frameworks.",
  },
  {
    icon: TrendingUp,
    text: "Scalable Business Technology Solutions",
    description:
      "From vendor selection and software evaluation to IT audits, we ensure your technology stack supports long-term scalability and business continuity.",
  },
  {
    icon: BarChart3,
    text: "Improved Operational Efficiency & ROI",
    description:
      "Reduce costs, eliminate bottlenecks, and improve time-to-market through optimized IT operations and strategic technology planning.",
  },
];

export default function ItConsulting() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src="/images/itconsulting-hero.jpg"
          alt="IT consulting team planning technology strategy for business growth"
          fill
          className="object-cover object-center"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
                IT Consulting
              </h1>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-white">
                  Strategic IT consulting services designed to align technology
                  with your long-term business goals and accelerate growth.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  From cloud strategy and system modernization to cybersecurity
                  and technology advisory — customized solutions for your needs.
                </p>
              </div>
              <ScrollButton targetId="services-section">
                Learn More
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-black tracking-wide leading-relaxed max-w-4xl mx-auto font-raleway">
            Make{" "}
            <span className="text-[#0b60a0] font-bold">
              smarter technology investments
            </span>{" "}
            — from IT audits and cloud strategy to cybersecurity and vendor
            management, we align{" "}
            <span className="text-[#0b60a0] font-bold">
              IT with your business strategy
            </span>{" "}
            to drive scalable growth and{" "}
            <span className="text-[#0b60a0] font-bold">
              reduce operational risk
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
                Cloud Strategy, System Modernization & Technology Advisory
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/90">
                Our experts deliver customized solutions tailored to your
                business needs
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
            Our IT Consulting Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {itConsultingServices.map((service) => (
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
          src="/images/itconsulting-cta.jpg"
          alt="IT consulting team collaborating on technology strategy"
          fill
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center animate-fade-in-up">
          <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/85 p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
                Strategic IT Consulting for Scalable Business Growth
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
                Our IT consulting solutions focus on identifying the right
                technologies, reducing operational bottlenecks, improving
                cybersecurity, and creating a roadmap for sustainable digital
                success.
              </p>
              <Link href="/contact" className="inline-block">
                <Button icon={ArrowRight}>Request a Consultation</Button>
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

      {/* Connect Section */}
      <ContactCta />
    </div>
  );
}
