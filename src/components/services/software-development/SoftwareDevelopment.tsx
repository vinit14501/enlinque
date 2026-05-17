import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Building2,
  Zap,
  Cloud,
  Shield,
  Settings2,
} from "lucide-react";
import Button from "@/components/common/Button";
import ContactCta from "@/components/common/ContactCta";
import ArrowIcon from "@/components/common/ArrowIcon";
import { softwareDevelopmentServices } from "@/components/services/software-development/softwareDevelopmentServices";

const keyBenefits = [
  {
    icon: Globe,
    text: "Custom Web & Mobile Application Development",
    description:
      "Tailored web apps, mobile experiences, and enterprise portals built for performance, scalability, and lasting business impact.",
  },
  {
    icon: Building2,
    text: "Scalable SaaS & Enterprise Solutions",
    description:
      "From multi-tenant SaaS platforms to complex enterprise systems, we architect for scale, reliability, and high-volume workloads from day one.",
  },
  {
    icon: Zap,
    text: "Agile & Rapid Development Process",
    description:
      "Iterative sprints, continuous delivery, and adaptive planning ensure faster time-to-market without sacrificing code quality or stability.",
  },
  {
    icon: Cloud,
    text: "API Integration & Cloud Solutions",
    description:
      "Seamlessly connect systems, automate workflows, and deploy cloud-native architectures that grow with your business demands.",
  },
  {
    icon: Shield,
    text: "Secure & High-Performance Architecture",
    description:
      "Clean code, robust security standards, and optimized performance form the non-negotiable foundation of every solution we build.",
  },
  {
    icon: Settings2,
    text: "End-to-End Software Support & Maintenance",
    description:
      "From UI/UX design through deployment and beyond, we provide comprehensive lifecycle support to keep your software running at its best.",
  },
];

export default function SoftwareDevelopment() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src="/images/softwaredevelopment-hero.webp"
          alt="Software development team building custom applications and digital solutions"
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
                Software Development
              </h1>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-white">
                  Expert software development services - from MVP and web apps
                  to enterprise-grade platforms built for scale and performance.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  We follow agile methodologies to deliver clean, secure, and
                  high-performance software aligned with your business goals.
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
              Build powerful, scalable software
            </span>{" "}
            - from MVP to{" "}
            <span className="text-[#0b60a0] font-bold">
              enterprise-grade applications
            </span>{" "}
            that deliver{" "}
            <span className="text-[#0b60a0] font-bold">
              lasting business growth
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
                Web Applications, Mobile Apps & SaaS Platforms
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/90">
                Agile development methodologies to ensure faster delivery,
                flexibility, and continuous improvement
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
            Our Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {softwareDevelopmentServices.map((service) => (
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
          src="/images/softwaredevelopment-cta.webp"
          alt="Software developers collaborating on custom applications"
          fill
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center animate-fade-in-up">
          <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/85 p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
                Custom Software Solutions Tailored to Your Business
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
                Our experienced development team specializes in web
                applications, mobile apps, SaaS platforms, enterprise software,
                APIs, and cloud-based systems.
              </p>
              <Link href="/contact" className="inline-block">
                <Button icon={ArrowRight}>Start Your Project</Button>
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
