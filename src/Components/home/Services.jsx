import { motion } from "framer-motion"
import {
  HiComputerDesktop,
  HiChartBar,
  HiCommandLine,
  HiShoppingCart,
  HiDeviceTablet,
  HiCubeTransparent,
} from "react-icons/hi2"
import { MdArrowForward } from "react-icons/md"

export default function Services() {
  const services = [
    {
      title: "IT Consulting",
      icon: <HiComputerDesktop className="w-8 h-8 text-blue-600" />,
      description:
        "Strategic IT consulting to align technology with your business objectives. We help organizations optimize their IT infrastructure, improve security, and implement best practices.",
      tools: [
        "Enterprise Architecture",
        "Cloud Solutions",
        "IT Strategy",
        "Security Assessment",
        "Infrastructure Planning",
      ],
    },
    {
      title: "Marketing Consulting",
      icon: <HiChartBar className="w-8 h-8 text-blue-600" />,
      description:
        "Data-driven marketing strategies to boost your brand presence and drive growth. We specialize in digital marketing, brand development, and market analysis.",
      tools: [
        "Market Research Tools",
        "Analytics Platforms",
        "CRM Systems",
        "SEO Tools",
        "Social Media Management",
      ],
    },
    {
      title: "Software Development",
      icon: <HiCommandLine className="w-8 h-8 text-blue-600" />,
      description:
        "Custom software solutions built with cutting-edge technologies. From web applications to mobile apps, we deliver scalable and maintainable software.",
      tools: [
        "React",
        "Node.js",
        "Python",
        "Java",
        "Mobile Development",
        "Cloud Services",
      ],
    },
    {
      title: "eCommerce Solutions",
      icon: <HiShoppingCart className="w-8 h-8 text-blue-600" />,
      description:
        "End-to-end eCommerce solutions to help you succeed in the digital marketplace. We build robust online stores with seamless user experiences.",
      tools: [
        "Shopify",
        "WooCommerce",
        "Payment Gateway Integration",
        "Inventory Management",
        "Analytics",
      ],
    },
    {
      title: "Digital Transformation",
      icon: <HiDeviceTablet className="w-8 h-8 text-blue-600" />,
      description:
        "Guide your organization through digital transformation with our comprehensive solutions. We help modernize processes and implement digital solutions.",
      tools: [
        "Cloud Migration",
        "Process Automation",
        "Digital Workflow",
        "Enterprise Systems",
        "Data Analytics",
      ],
    },
    {
      title: "Agile Implementation",
      icon: <HiCubeTransparent className="w-8 h-8 text-blue-600" />,
      description:
        "Transform your project management with Agile methodologies. We help teams adopt Agile practices for better efficiency and delivery.",
      tools: [
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
        "Agile Project Management",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div
      className="min-h-screen bg-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business in the
            digital age
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200 shadow-md"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  Tools & Technologies
                  <MdArrowForward className="ml-2 text-blue-600" />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
