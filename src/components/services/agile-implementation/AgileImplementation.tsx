import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ListChecks,
  LayoutGrid,
  Zap,
  Users,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";
import Button from "@/components/common/Button";
import ContactCta from "@/components/common/ContactCta";
import ArrowIcon from "@/components/common/ArrowIcon";
import { agileServices } from "@/components/services/agile-implementation/agileServices";

const keyBenefits = [
  {
    icon: ListChecks,
    text: "Agile Transformation & Consulting",
    description:
      "Assess your current practices and build a customized agile transformation roadmap that aligns frameworks to your team structure and goals.",
  },
  {
    icon: LayoutGrid,
    text: "Scrum & Kanban Implementation",
    description:
      "Deploy the right agile framework \u2014 structured Scrum sprints or continuous Kanban flow \u2014 tailored to your team's delivery model.",
  },
  {
    icon: Zap,
    text: "Faster Project Delivery Cycles",
    description:
      "Iterative delivery, rapid feedback loops, and continuous integration drive faster, more predictable outcomes with fewer surprises.",
  },
  {
    icon: Users,
    text: "Improved Collaboration & Communication",
    description:
      "Transparent workflows, shared backlogs, and regular ceremonies keep teams aligned, dependencies visible, and stakeholders informed.",
  },
  {
    icon: TrendingUp,
    text: "Increased Team Productivity & Transparency",
    description:
      "Empower teams with clear goals, accountability structures, and performance metrics that build momentum and drive continuous improvement.",
  },
  {
    icon: RefreshCcw,
    text: "Continuous Improvement & Scalability",
    description:
      "Build a culture of adaptation and learning that scales agile practices sustainably across teams, departments, and the whole organization.",
  },
];

export default function AgileImplementation() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src="/images/agile-hero.webp"
          alt="Agile team collaboration and sprint planning session"
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
                Agile Implementation
              </h1>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-white">
                  Transform how your teams work - with Scrum, Kanban, and custom
                  agile frameworks that accelerate delivery and improve
                  collaboration.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  From agile coaching and team training to sprint planning and
                  continuous improvement - we build adaptive, high-performing
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-black leading-relaxed max-w-4xl mx-auto font-raleway">
            Move faster,{" "}
            <span className="text-[#0b60a0] font-bold">deliver better</span> -
            with agile methodologies that build{" "}
            <span className="text-[#0b60a0] font-bold">
              adaptive, high-performing teams
            </span>{" "}
            aligned to your{" "}
            <span className="text-[#0b60a0] font-bold">business goals</span>.
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
                Scrum, Kanban & Agile Coaching
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/90">
                From agile coaching and team training to workflow optimization
                and project management support
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
            Our Agile Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {agileServices.map((service) => (
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
          src="/images/agile-cta.webp"
          alt="Agile team whiteboard collaboration and sprint planning"
          fill
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center animate-fade-in-up">
          <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/85 p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
                Enable Faster Delivery and Higher-Quality Outcomes
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
                With agile implementation, businesses can respond faster to
                market changes, improve product quality, and accelerate
                innovation.
              </p>
              <Link href="/contact" className="inline-block">
                <Button icon={ArrowRight}>Begin Your Agile Journey</Button>
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
