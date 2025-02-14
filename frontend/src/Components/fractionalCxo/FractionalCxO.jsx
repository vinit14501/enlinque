import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"
import cmo from "../../assets/CMO.png"
import cto from "../../assets/cto.png"
import cfo from "../../assets/CFO.png"
import coo from "../../assets/COO.png"
import cio from "../../assets/CIO.png"
import fractional from "../../assets/fractional2.jpg"

const services = [
  {
    id: "cio",
    title: "Chief Information Officer (CIO)",
    shortTitle: "CIO",
    description:
      "Leverage strategic IT leadership to transform digital capabilities and drive business innovation. Our CIOs align technology with business objectives, optimize digital infrastructure, and ensure long-term technological competitiveness.",
    image: cio,
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
    image: cto,
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
    image: cmo,
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
    image: cfo,
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
    image: coo,
    points: [
      "Develop and implement operational strategies",
      "Streamline workflows and optimize business processes",
      "Manage resource allocation and utilization",
      "Enhance organizational efficiency and productivity",
    ],
  },
]

export default function FractionalCxO() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    const offset = 100 // Adjust this value to control how far from the top the section should stop
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  return (
    <div className="font-sans bg-white">
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url(${fractional})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="h-full max-w-5xl mx-auto px-4 text-center relative z-10 flex items-center justify-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-raleway tracking-tight"
            >
              Fractional CxO Services
            </motion.h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-white font-light">
              Access world-class executive leadership without the full-time
              commitment. Our fractional CxOs bring decades of experience to
              elevate your business.
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white font-bold tracking-[0.1em]">
              <a
                href="#cio"
                onClick={(e) => handleScroll(e, "cio")}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CIO
              </a>{" "}
              |{" "}
              <a
                href="#cto"
                onClick={(e) => handleScroll(e, "cto")}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CTO
              </a>{" "}
              |{" "}
              <a
                href="#cmo"
                onClick={(e) => handleScroll(e, "cmo")}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CMO
              </a>{" "}
              |{" "}
              <a
                href="#cfo"
                onClick={(e) => handleScroll(e, "cfo")}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                CFO
              </a>{" "}
              |{" "}
              <a
                href="#coo"
                onClick={(e) => handleScroll(e, "coo")}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                COO
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* CxO Sections */}
      <div className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative group flex flex-col justify-center">
                    <div className="absolute -left-2 md:-left-4 -bottom-2 md:-bottom-4 w-full h-full bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 z-0"></div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative z-10 flex-grow overflow-hidden"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[250px] md:h-[350px] object-cover object-center"
                      />
                    </motion.div>
                  </div>
                  <div className="space-y-4 md:space-y-6 pl-0 md:pl-4 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b60a0]">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 md:space-y-3 text-gray-700 flex-grow">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm md:text-base"
                        >
                          <FaCheckCircle className="text-[#0b60a0] mr-3 flex-shrink-0" />
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
                    <ul className="space-y-2 md:space-y-3 text-gray-700 flex-grow">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm md:text-base"
                        >
                          <FaCheckCircle className="text-[#0b60a0] mr-3 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative group flex flex-col justify-center">
                    <div className="absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 w-full h-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 z-0"></div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative z-10 flex-grow overflow-hidden"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[250px] md:h-[350px] object-cover object-center"
                      />
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
