import { FaCloudDownloadAlt, FaShippingFast, FaCloud } from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: FaCloudDownloadAlt,
      iconColor: "text-blue-500",
      title: "Assess Modernization Viability",
      description:
        "Assess your portfolio and cloud readiness to create a migrate to modernize roadmap",
    },
    {
      icon: FaShippingFast,
      iconColor: "text-orange-500",
      title: "Move to Container",
      description:
        "Migrate your application with the best fit from the 7R migration strategy",
    },
    {
      icon: FaCloud,
      iconColor: "text-green-500",
      title: "Move to Cloud Native Architecture",
      description:
        "Transform your legacy applications with cloud modernization",
    },
  ]

  return (
    <div className="bg-white py-16">
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
