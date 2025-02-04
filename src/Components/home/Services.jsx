import {
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaShoppingCart,
  FaDigitalTachograph,
  FaTasks,
} from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: FaLaptopCode,
      iconColor: "text-blue-500",
      title: "IT consulting",
      description:
        "Optimize your technology strategy to align with business goals, ensuring faster time-to-market and scalable growth",
    },
    {
      icon: FaBullhorn,
      iconColor: "text-orange-500",
      title: "Digital marketing",
      description:
        "Craft and execute data-driven marketing strategies that maximize ROI and drive customer acquisition for startups",
    },
    {
      icon: FaCode,
      iconColor: "text-purple-500",
      title: "Software development",
      description:
        "Deliver custom software solutions tailored to your business needs, from MVP to full-scale applications",
    },
    {
      icon: FaShoppingCart,
      iconColor: "text-red-500",
      title: "eCommerce solution",
      description:
        "Launch and grow your e-commerce business with end-to-end support, from platform selection to optimization",
    },
    {
      icon: FaDigitalTachograph,
      iconColor: "text-indigo-500",
      title: "Digital Transformation",
      description:
        "Modernize your business operations with innovative digital solutions that enhance efficiency and competitiveness",
    },
    {
      icon: FaTasks,
      iconColor: "text-emerald-500",
      title: "Agile implementation",
      description:
        "Adopt agile methodologies to streamline processes, improve collaboration, and accelerate project delivery",
    },
  ]

  return (
    <div
      id="services"
      className="bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-sm overflow-hidden"
            >
              {/* Upper section with icon */}
              <div
                className={` p-6 flex justify-center items-center ${service.iconColor}`}
              >
                <service.icon size={36} />
              </div>
              {/* Lower section with content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
