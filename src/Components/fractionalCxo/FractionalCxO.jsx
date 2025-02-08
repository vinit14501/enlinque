import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"
import cmo from "../../assets/CMO.png"
import cto from "../../assets/cto.png"
import cfo from "../../assets/CFO.png"
import coo from "../../assets/COO.png"
import cio from "../../assets/CIO.png"
import fractional from "../../assets/fractional.jpg"

const services = [
  {
    id: "cto",
    title: "Chief Technology Officer (CTO)",
    shortTitle: "CTO",
    description:
      "Drive technological innovation and digital transformation with our experienced CTOs. We help align technology strategy with business goals, manage tech teams, and implement cutting-edge solutions.",
    image: cto,
    points: [
      "Oversee IT infrastructure and operations",
      "Develop and implement technology roadmaps",
      "Manage software development and deployment",
      "Foster a culture of innovation and continuous improvement",
    ],
  },
  {
    id: "cmo",
    title: "Chief Marketing Officer (CMO)",
    shortTitle: "CMO",
    description:
      "Enhance your market presence and drive growth with strategic marketing leadership. Our CMOs develop comprehensive marketing strategies, build strong brands, and optimize customer acquisition.",
    image: cmo,
    points: [
      "Create and execute integrated marketing campaigns",
      "Develop brand positioning and messaging",
      "Analyze market trends and customer insights",
      "Optimize digital and traditional marketing channels",
    ],
  },
  {
    id: "cfo",
    title: "Chief Financial Officer (CFO)",
    shortTitle: "CFO",
    description:
      "Optimize your financial strategy and operations with expert CFO guidance. We provide financial planning, risk management, and strategic decision-making support to drive business success.",
    image: cfo,
    points: [
      "Manage financial planning and budgeting",
      "Implement robust financial controls and reporting",
      "Assess and mitigate financial risks",
      "Support strategic decision-making and growth",
    ],
  },
  {
    id: "coo",
    title: "Chief Operating Officer (COO)",
    shortTitle: "COO",
    description:
      "Streamline your operations and improve organizational efficiency with seasoned COO leadership. Our COOs optimize business processes, manage resource allocation, and drive operational excellence.",
    image: coo,
    points: [
      "Develop and oversee operational strategies",
      "Optimize workflows and business processes",
      "Manage resource allocation and utilization",
      "Enhance organizational efficiency and productivity",
    ],
  },
  {
    id: "cio",
    title: "Chief Information Officer (CIO)",
    shortTitle: "CIO",
    description:
      "Leverage strategic IT leadership to transform your digital capabilities and drive business innovation. Our CIOs align information technology with business objectives, manage digital infrastructure, and ensure technological competitiveness.",
    image: cio,
    points: [
      "Develop and execute comprehensive IT strategies",
      "Manage and optimize digital infrastructure",
      "Drive digital transformation initiatives",
      "Ensure cybersecurity and technological compliance",
    ],
  },
]

export default function FractionalCxO() {
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
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight"
            >
              Fractional CxO Services
            </motion.h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-white font-light">
              Access world-class executive leadership without the full-time
              commitment. Our fractional CxOs bring decades of experience to
              elevate your business.
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white font-light">
              CTO | CMO | CFO | COO | CIO
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
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
                          <FaCheckCircle className="text-indigo-500 mr-3 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 md:space-y-6 pr-0 md:pr-4 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
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
                          <FaCheckCircle className="text-indigo-500 mr-3 flex-shrink-0" />
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
