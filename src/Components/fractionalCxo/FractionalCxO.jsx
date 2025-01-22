import { useState } from "react"
import {
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
  FaCogs,
  FaCheck,
} from "react-icons/fa"
import { motion } from "framer-motion"

const FractionalCxO = () => {
  const services = [
    {
      title: "Fractional CIO",
      icon: FaLaptopCode,
      image: "hero1.jpg",
      tagline: "Technology Leadership",
      description: "Transform your IT infrastructure with expert guidance",
      overview: {
        title: "Strategic Technology Leadership",
        description:
          "Our Fractional CIO service provides expert IT leadership to align technology initiatives with business objectives. We focus on optimizing infrastructure, ensuring security compliance, and driving digital transformation while managing costs effectively.",
        benefits: [
          "Reduced IT operational costs",
          "Enhanced security posture",
          "Accelerated digital transformation",
          "Improved technology ROI",
        ],
      },
      capabilities: [
        {
          title: "Infrastructure Management",
          points: [
            "Cloud Migration",
            "Security Implementation",
            "System Integration",
            "Performance Optimization",
          ],
        },
        {
          title: "Strategic Planning",
          points: [
            "Technology Roadmap",
            "Budget Planning",
            "Risk Management",
            "Innovation Strategy",
          ],
        },
        {
          title: "Team Development",
          points: [
            "Skills Assessment",
            "Training Programs",
            "Process Implementation",
            "Culture Building",
          ],
        },
      ],
      metrics: [
        "Average 30% reduction in IT costs",
        "99.9% system uptime achievement",
        "40% faster project delivery",
        "100% compliance maintenance",
      ],
    },
    {
      title: "Fractional CFO",
      icon: FaChartLine,
      image: "hero1.jpg",
      tagline: "Financial Strategy",
      description: "Optimize financial performance and growth",
      overview: {
        title: "Strategic Financial Management",
        description:
          "Our Fractional CFO service delivers strategic financial leadership to optimize cash flow, manage budgets, and develop sustainable growth strategies. We help businesses make data-driven financial decisions and improve their bottom line.",
        benefits: [
          "Improved cash flow management",
          "Strategic financial planning",
          "Enhanced profitability",
          "Better financial controls",
        ],
      },
      capabilities: [
        {
          title: "Financial Planning",
          points: [
            "Budgeting",
            "Forecasting",
            "Investment Strategy",
            "Risk Assessment",
          ],
        },
        {
          title: "Performance Management",
          points: [
            "KPI Development",
            "Reporting Systems",
            "Analysis Tools",
            "Benchmarking",
          ],
        },
        {
          title: "Growth Strategy",
          points: [
            "M&A Advisory",
            "Funding Strategy",
            "Market Expansion",
            "Cost Optimization",
          ],
        },
      ],
      metrics: [
        "25% average profit margin increase",
        "40% improvement in cash flow",
        "35% reduction in operational costs",
        "90% accuracy in financial forecasts",
      ],
    },
    {
      title: "Fractional CMO",
      icon: FaBullhorn,
      image: "hero1.jpg",
      tagline: "Marketing Excellence",
      description: "Drive market presence and customer acquisition",
      overview: {
        title: "Strategic Marketing Leadership",
        description:
          "Our Fractional CMO service provides data-driven marketing leadership to build brand authority, optimize campaigns, and deliver measurable results. We help businesses expand their market presence and acquire customers efficiently.",
        benefits: [
          "Increased market share",
          "Higher customer acquisition",
          "Improved brand visibility",
          "Better marketing ROI",
        ],
      },
      capabilities: [
        {
          title: "Brand Strategy",
          points: [
            "Positioning",
            "Messaging",
            "Visual Identity",
            "Voice Development",
          ],
        },
        {
          title: "Digital Marketing",
          points: [
            "Campaign Management",
            "Content Strategy",
            "SEO Optimization",
            "Social Media",
          ],
        },
        {
          title: "Analytics",
          points: [
            "Performance Tracking",
            "Market Research",
            "Customer Insights",
            "ROI Analysis",
          ],
        },
      ],
      metrics: [
        "200% average ROI on campaigns",
        "45% increase in lead generation",
        "60% improvement in conversion rates",
        "85% customer engagement growth",
      ],
    },
    {
      title: "Fractional COO",
      icon: FaCogs,
      image: "hero1.jpg",
      tagline: "Operational Efficiency",
      description: "Streamline operations for scalable growth",
      overview: {
        title: "Strategic Operations Management",
        description:
          "Our Fractional COO service provides operational expertise to improve efficiency, streamline processes, and align operations with business goals. We help organizations scale effectively while maintaining quality and performance.",
        benefits: [
          "Streamlined operations",
          "Improved productivity",
          "Enhanced quality control",
          "Efficient resource allocation",
        ],
      },
      capabilities: [
        {
          title: "Process Optimization",
          points: [
            "Workflow Design",
            "Automation",
            "Quality Control",
            "Efficiency Metrics",
          ],
        },
        {
          title: "Team Management",
          points: [
            "Performance Systems",
            "Training Programs",
            "Culture Building",
            "Resource Planning",
          ],
        },
        {
          title: "Strategic Planning",
          points: [
            "Growth Strategy",
            "Risk Management",
            "Change Management",
            "KPI Development",
          ],
        },
      ],
      metrics: [
        "40% improvement in productivity",
        "50% reduction in process time",
        "30% decrease in operational costs",
        "95% employee satisfaction rate",
      ],
    },
  ]

  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="min-h-screen pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
            Executive Leadership Solutions
          </span>
          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Fractional Executive Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business with experienced executive leadership,
            without the full-time commitment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.title}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer rounded-xl p-5 border transition-all ${
                  selectedService.title === service.title
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 hover:border-blue-600"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      selectedService.title === service.title
                        ? "bg-white/10"
                        : "bg-blue-50"
                    }`}
                  >
                    <service.icon
                      className={
                        selectedService.title === service.title
                          ? "text-white"
                          : "text-blue-600"
                      }
                      size={24}
                    />
                  </div>
                  <div>
                    <h3
                      className={
                        selectedService.title === service.title
                          ? "text-white"
                          : "text-gray-900"
                      }
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        selectedService.title === service.title
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="h-64 relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 text-white/90">
                      <selectedService.icon size={20} />
                      <span className="font-medium">
                        {selectedService.tagline}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mt-2">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {selectedService.overview.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedService.overview.description}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {selectedService.overview.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaCheck className="text-blue-600 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {selectedService.capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="space-y-3"
                    >
                      <h4 className="font-semibold text-gray-900">
                        {capability.title}
                      </h4>
                      <ul className="space-y-2">
                        {capability.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Performance Metrics
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 border border-gray-100 rounded-lg p-4"
                      >
                        <span className="text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FractionalCxO
