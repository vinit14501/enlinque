import Image from "next/image";
import { CircleCheck, RefreshCw, Lightbulb, Handshake } from "lucide-react";
import ContactCta from "@/components/common/ContactCta";

const visionDetails = [
  {
    icon: CircleCheck,
    title: "Innovation That Inspires",
    description:
      "We envision a future where businesses of all sizes can leverage high-end technology to spark creativity and redefine their industries.",
  },
  {
    icon: RefreshCw,
    title: "Empowering the Global Startup Ecosystem",
    description:
      "Our goal is to democratize access to elite-level expertise, giving startups—regardless of location—the resources they need to compete on a global stage.",
  },
  {
    icon: Lightbulb,
    title: "Sustainable Growth & Scalability",
    description:
      "We are committed to fostering long-term success through efficient processes and strategic decision-making that drives meaningful, lasting impact.",
  },
  {
    icon: Handshake,
    title: "Leadership Redefined",
    description:
      "We aim to be the premier provider of fractional leadership, ensuring that agility and strategic alignment are accessible to every growing organization.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <Image
            src="/images/about.webp"
            alt="Enlinque team driving business and technology transformation"
            fill
            className="object-cover scale-105"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-2xl w-full animate-fade-in-up">
              <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4 md:mb-6">
                About Us
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 md:mb-6">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-lg sm:text-xl text-center text-white">
                Innovative solutions for modern business challenges. We help
                companies navigate digital transformation with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-stretch relative animate-fade-in animate-delay-300">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 hidden md:block" />

            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000048]">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-black">
                We are more than just a service provider; we are a collective of
                seasoned technology architects, strategic marketers, and
                operational leaders. Our team understands the high-stakes
                environment of the startup world and the complex demands of
                scaling an enterprise.
              </p>
              <p className="text-base sm:text-lg text-black">
                We don’t just offer advice—we offer a partnership. By
                integrating ourselves into your mission, we bring a blend of
                innovation, tactical execution, and visionary leadership to help
                you overcome roadblocks and achieve measurable, high-ROI
                results.
              </p>
            </div>

            <div className="p-8 md:p-12 lg:p-16 space-y-6 bg-[#0b60a0]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Our Approach
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Where Speed Meets Strategy
              </h2>
              <p className="text-base sm:text-lg text-white">
                At Enlinque, we believe that in the modern business landscape,
                you shouldn&apos;t have to choose between moving fast and moving
                correctly. Many startups have the speed but lack the roadmap;
                many established firms have the strategy but lack the agility.
              </p>
              <p className="text-base sm:text-lg text-white">
                Enlinque was founded to bridge that gap. We are a high-impact
                consulting and execution firm designed to help businesses
                navigate digital transformation with precision and momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in animate-delay-400">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000048]">
                Our 5-Step Framework
              </h2>
              <p className="text-base sm:text-lg text-black max-w-3xl mx-auto">
                We move away from &ldquo;one-size-fits-all&rdquo; solutions.
                Every project we undertake follows our proprietary framework to
                ensure total alignment with your business goals:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <div className="bg-[#0b60a0] p-6 rounded-lg flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Pinpoint
                </h3>
                <p className="text-white">
                  We conduct a deep-dive analysis of your current operations to
                  identify hidden bottlenecks and untapped opportunities.
                </p>
              </div>
              <div className="bg-[#000048] p-6 rounded-lg flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Prioritize
                </h3>
                <p className="text-white">
                  We rank initiatives based on their potential for immediate
                  impact and long-term value.
                </p>
              </div>
              <div className="bg-[#0b60a0] p-6 rounded-lg flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Plan
                </h3>
                <p className="text-white">
                  We design a custom strategic roadmap that balances your budget
                  with your scaling ambitions.
                </p>
              </div>
              <div className="bg-[#000048] p-6 rounded-lg flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Propel
                </h3>
                <p className="text-white">
                  Our technical and marketing teams execute the plan with rapid,
                  high-quality delivery.
                </p>
              </div>
              <div className="bg-[#0b60a0] p-6 rounded-lg flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Perfect
                </h3>
                <p className="text-white">
                  We continuously monitor, optimize, and iterate to ensure
                  sustainable growth and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-[#0b60a0] py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base sm:text-lg md:text-xl text-white">
            We proudly serve startups across a wide range of industries, helping
            them leverage technology, strategy, and innovation to achieve their
            business goals. Our customized solutions are built to support growth
            at every stage of the startup journey.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in animate-delay-500">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000048]">
              Why Partners Choose Enlinque
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-black">
              Businesses choose us because we treat their challenges as our own.
              We bring the dedication of an in-house team with the specialized
              expertise of a global consultancy.
            </p>
            <ul className="text-left space-y-4 mt-2">
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-black">
                <CircleCheck className="text-[#0b60a0] h-6 w-6 mt-0.5 shrink-0" />
                <span>
                  <span className="font-bold text-[#000048]">Reliability:</span>{" "}
                  We deliver high-quality, accurate results on time, every time.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-black">
                <CircleCheck className="text-[#0b60a0] h-6 w-6 mt-0.5 shrink-0" />
                <span>
                  <span className="font-bold text-[#000048]">Flexibility:</span>{" "}
                  Our solutions scale with you, adapting seamlessly to shifting
                  market demands.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-black">
                <CircleCheck className="text-[#0b60a0] h-6 w-6 mt-0.5 shrink-0" />
                <span>
                  <span className="font-bold text-[#000048]">
                    Multi-Domain Expertise:
                  </span>{" "}
                  From AI-driven software development to high-conversion digital
                  marketing, we cover the entire digital spectrum.
                </span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-black">
                <CircleCheck className="text-[#0b60a0] h-6 w-6 mt-0.5 shrink-0" />
                <span>
                  <span className="font-bold text-[#000048]">
                    Transparent Collaboration:
                  </span>{" "}
                  We promote open communication and radical honesty, ensuring
                  you are never in the dark about your project&apos;s progress.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto =px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000048] text-center mb-12 md:mb-16">
            Our Vision for the Future
          </h2>
          <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-10">
            <div className="w-full lg:w-5/12 overflow-hidden rounded-lg shadow-xl relative h-64 lg:h-auto lg:min-h-100">
              <Image
                src="/images/value.webp"
                alt="Enlinque team embodying our values of reliability, flexibility, expertise, and collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visionDetails.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <value.icon className="text-[#0b60a0] h-8 w-8 sm:h-12 sm:w-12 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-[#000048] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <ContactCta />
    </div>
  );
}
