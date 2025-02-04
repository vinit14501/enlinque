import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"
import hero1 from "../../assets/hero1.jpg"
import cmo from "../../assets/cmo.jpg"

const services = [
  {
    title: "Chief Technology Officer (CTO)",
    description:
      "Drive technological innovation and digital transformation with our experienced CTOs. We help align technology strategy with business goals, manage tech teams, and implement cutting-edge solutions.",
    image: hero1,
    points: [
      "Oversee IT infrastructure and operations",
      "Develop and implement technology roadmaps",
      "Manage software development and deployment",
      "Foster a culture of innovation and continuous improvement",
    ],
  },
  {
    title: "Chief Marketing Officer (CMO)",
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
    title: "Chief Financial Officer (CFO)",
    description:
      "Optimize your financial strategy and operations with expert CFO guidance. We provide financial planning, risk management, and strategic decision-making support to drive business success.",
    image: hero1,
    points: [
      "Manage financial planning and budgeting",
      "Implement robust financial controls and reporting",
      "Assess and mitigate financial risks",
      "Support strategic decision-making and growth",
    ],
  },
  {
    title: "Chief Operating Officer (COO)",
    description:
      "Streamline your operations and improve organizational efficiency with seasoned COO leadership. Our COOs optimize business processes, manage resource allocation, and drive operational excellence.",
    image: hero1,
    points: [
      "Develop and oversee operational strategies",
      "Optimize workflows and business processes",
      "Manage resource allocation and utilization",
      "Enhance organizational efficiency and productivity",
    ],
  },
  {
    title: "Chief Information Officer (CIO)",
    description:
      "Leverage strategic IT leadership to transform your digital capabilities and drive business innovation. Our CIOs align information technology with business objectives, manage digital infrastructure, and ensure technological competitiveness.",
    image: hero1,
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
        className="relative py-16 bg-[#000048] text-white overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 tracking-tight"
          >
            Fractional CxO Services
          </motion.h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-200 font-light">
            Access world-class executive leadership without the full-time
            commitment. Our fractional CxOs bring decades of experience to
            elevate your business.
          </p>
        </div>
      </motion.div>

      {/* CxO Sections */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-stretch"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative group flex flex-col">
                    <div className="absolute -left-4 -bottom-4 w-full h-full bg-[#000048] z-0"></div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative z-10 flex-grow"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[90%] object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="space-y-6 pl-4 flex flex-col justify-start">
                    <h2 className="text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-gray-700 flex-grow">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-base"
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
                  <div className="space-y-6 pr-4 flex flex-col justify-start">
                    <h2 className="text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-gray-700 flex-grow">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-base"
                        >
                          <FaCheckCircle className="text-indigo-500 mr-3 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative group flex flex-col">
                    <div className="absolute -right-4 -bottom-4 w-full h-full bg-[#000048] z-0"></div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative z-10 flex-grow"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[90%] object-cover"
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
