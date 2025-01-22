export default function Services() {
  const services = [
    {
      title: "IT Consulting",
      description:
        "Strategic IT consulting to align technology with your business objectives. We help organizations optimize their IT infrastructure, improve security, and implement best practices.",
      tools: [
        "Enterprise Architecture",
        "Cloud Solutions",
        "IT Strategy",
        "Security Assessment",
        "Infrastructure Planning",
      ],
      imageUrl: "hero1.jpg",
    },
    {
      title: "Marketing Consulting",
      description:
        "Data-driven marketing strategies to boost your brand presence and drive growth. We specialize in digital marketing, brand development, and market analysis.",
      tools: [
        "Market Research Tools",
        "Analytics Platforms",
        "CRM Systems",
        "SEO Tools",
        "Social Media Management",
      ],
      imageUrl: "hero1.jpg",
    },
    {
      title: "Software Development",
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
      imageUrl: "hero1.jpg",
    },
    {
      title: "eCommerce Solutions",
      description:
        "End-to-end eCommerce solutions to help you succeed in the digital marketplace. We build robust online stores with seamless user experiences.",
      tools: [
        "Shopify",
        "WooCommerce",
        "Payment Gateway Integration",
        "Inventory Management",
        "Analytics",
      ],
      imageUrl: "hero1.jpg",
    },
    {
      title: "Digital Transformation",
      description:
        "Guide your organization through digital transformation with our comprehensive solutions. We help modernize processes and implement digital solutions.",
      tools: [
        "Cloud Migration",
        "Process Automation",
        "Digital Workflow",
        "Enterprise Systems",
        "Data Analytics",
      ],
      imageUrl: "hero1.jpg",
    },
    {
      title: "Agile Implementation",
      description:
        "Transform your project management with Agile methodologies. We help teams adopt Agile practices for better efficiency and delivery.",
      tools: [
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
        "Agile Project Management Tools",
      ],
      imageUrl: "hero1.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-black">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-sm border overflow-hidden "
            >
              {/* Upper section with image */}
              <div className="h-48 bg-blue-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lower section with content */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-black mb-4 text-left">
                  {service.title}
                </h2>
                <p className="text-black mb-6 text-left">
                  {service.description}
                </p>
                <div>
                  {/* <h3 className="text-lg font-semibold text-blue-600 mb-3">
                    Tools & Technologies
                  </h3> */}
                  {/* <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
