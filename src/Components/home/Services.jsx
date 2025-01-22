import {
  HiComputerDesktop,
  HiChartBar,
  HiCommandLine,
  HiShoppingCart,
  HiDeviceTablet,
  HiCubeTransparent,
} from "react-icons/hi2"

export default function Services() {
  const services = [
    {
      title: "IT Consulting",
      icon: (
        <HiComputerDesktop className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
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
      icon: <HiChartBar className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
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
      icon: (
        <HiCommandLine className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
      description:
        "Custom software solutions built with cutting-edge technologies. From web applications to mobile apps, we deliver scalable and maintainable software.",
      tools: [
        "React",
        "Node.js",
        "Python",
        "Java",
        "Mobile Development (iOS/Android)",
        "Cloud Services",
      ],
    },
    {
      title: "eCommerce Solutions",
      icon: (
        <HiShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
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
      icon: (
        <HiDeviceTablet className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
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
      icon: (
        <HiCubeTransparent className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
      description:
        "Transform your project management with Agile methodologies. We help teams adopt Agile practices for better efficiency and delivery.",
      tools: [
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
        "Agile Project Management Tools",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-center justify-center mb-6 bg-blue-50 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto">
                {service.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
                {service.description}
              </p>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-blue-50 text-blue-700 text-xs md:text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
