import Image from "next/image";
import { CircleCheck } from "lucide-react";
import ContactCta from "@/components/common/ContactCta";
import ScrollLink from "@/components/common/ScrollLink";

const services = [
  {
    id: "cio",
    title: "Chief Information Officer (CIO)",
    shortTitle: "CIO",
    description:
      "Leverage strategic IT leadership to transform digital capabilities and drive business innovation. Our CIOs align technology with business objectives, optimize digital infrastructure, and ensure long-term technological competitiveness.",
    image: "/images/cio.webp",
    points: [
      "Develop and execute comprehensive IT strategies",
      "Optimize and manage digital infrastructure",
      "Lead digital transformation and innovation initiatives",
      "Ensure cybersecurity, compliance, and risk management",
    ],
  },
  {
    id: "cto",
    title: "Chief Technology Officer (CTO)",
    shortTitle: "CTO",
    description:
      "Accelerate innovation and digital transformation with strategic technology leadership. Our CTOs align technology with business objectives, oversee IT and engineering teams, and drive the adoption of cutting-edge solutions for sustainable growth.",
    image: "/images/cto.webp",
    points: [
      "Define and execute technology roadmaps",
      "Oversee IT infrastructure, architecture, and operations",
      "Lead software development, deployment, and scalability",
      "Foster a culture of innovation and continuous improvement",
    ],
  },
  {
    id: "cmo",
    title: "Chief Marketing Officer (CMO)",
    shortTitle: "CMO",
    description:
      "Elevate your brand and accelerate growth with strategic marketing leadership. Our CMOs craft data-driven marketing strategies, strengthen brand positioning, and optimize customer acquisition for long-term success.",
    image: "/images/cmo.webp",
    points: [
      "Develop and execute integrated marketing strategies",
      "Define brand positioning, messaging, and market differentiation",
      "Analyze market trends and customer insights to drive decision-making",
      "Optimize digital and traditional marketing channels for maximum ROI",
    ],
  },
  {
    id: "cfo",
    title: "Chief Financial Officer (CFO)",
    shortTitle: "CFO",
    description:
      "Strengthen financial strategy and drive sustainable growth with expert CFO leadership. Our CFOs provide financial planning, risk management, and strategic insights to optimize business performance and profitability.",
    image: "/images/cfo.webp",
    points: [
      "Oversee financial planning, budgeting, and forecasting.",
      "Implement robust financial controls, compliance, and reporting.",
      "Assess and mitigate financial and operational risks.",
      "Provide data-driven insights to support strategic decision-making and growth.",
    ],
  },
  {
    id: "coo",
    title: "Chief Operating Officer (COO)",
    shortTitle: "COO",
    description:
      "Streamline operations and boost organizational efficiency with experienced COO leadership. Our COOs excel at optimizing business processes, managing resource allocation, and driving operational excellence.",
    image: "/images/coo.webp",
    points: [
      "Develop and implement operational strategies",
      "Streamline workflows and optimize business processes",
      "Manage resource allocation and utilization",
      "Enhance organizational efficiency and productivity",
    ],
  },
];

export default function FractionalCxO() {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] text-white overflow-hidden animate-fade-in">
        <Image
          src="/images/fractional.webp"
          alt="Fractional CxO Services"
          fill
          sizes="100vw"
          preload={true}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="h-full max-w-5xl mx-auto px-4 text-center relative z-10 flex items-center justify-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-raleway tracking-tight animate-fade-in-up">
              Fractional CxO Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-white font-light">
              Access world-class executive leadership without the full-time
              commitment. Our fractional CxOs bring decades of experience to
              elevate your business.
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white font-bold tracking-widest">
              <ScrollLink
                targetId="cio"
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CIO
              </ScrollLink>{" "}
              |{" "}
              <ScrollLink
                targetId="cto"
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CTO
              </ScrollLink>{" "}
              |{" "}
              <ScrollLink
                targetId="cmo"
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CMO
              </ScrollLink>{" "}
              |{" "}
              <ScrollLink
                targetId="cfo"
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CFO
              </ScrollLink>{" "}
              |{" "}
              <ScrollLink
                targetId="coo"
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                COO
              </ScrollLink>
            </p>
          </div>
        </div>
      </div>

      {/* CxO Sections */}
      <div className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={service.title}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col justify-center">
                    <div className="relative w-full h-62.5 md:h-87.5">
                      <div className="absolute -left-2 md:-left-4 -bottom-2 md:-bottom-4 w-full h-full bg-linear-to-r from-blue-950 via-blue-800 to-blue-600 z-0"></div>
                      <div className="relative z-10 w-full h-full overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 md:space-y-6 pl-0 md:pl-4 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b60a0]">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 md:space-y-3 text-gray-700 grow">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm md:text-base"
                        >
                          <CircleCheck className="text-[#0b60a0] mr-3 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 md:space-y-6 pr-0 md:pr-4 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b60a0]">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 md:space-y-3 text-gray-700 grow">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm md:text-base"
                        >
                          <CircleCheck className="text-[#0b60a0] mr-3 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="relative w-full h-62.5 md:h-87.5">
                      <div className="absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 w-full h-full bg-linear-to-r from-blue-600 via-blue-800 to-blue-950 z-0"></div>
                      <div className="relative z-10 w-full h-full overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <ContactCta />
    </div>
  );
}
