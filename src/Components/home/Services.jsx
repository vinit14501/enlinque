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
      title: "IT Consulting",
      description:
        "Optimize your technology strategy to align with business goals, ensuring faster time-to-market and scalable growth",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
      description:
        "Craft and execute data-driven marketing strategies that maximize ROI and drive customer acquisition for startups",
    },
    {
      icon: FaCode,
      title: "Software Development",
      description:
        "Deliver custom software solutions tailored to your business needs, from MVP to full-scale applications",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Solution",
      description:
        "Launch and grow your e-commerce business with end-to-end support, from platform selection to optimization",
    },
    {
      icon: FaDigitalTachograph,
      title: "Digital Transformation",
      description:
        "Modernize your business operations with innovative digital solutions that enhance efficiency and competitiveness",
    },
    {
      icon: FaTasks,
      title: "Agile Implementation",
      description:
        "Adopt agile methodologies to streamline processes, improve collaboration, and accelerate project delivery",
    },
  ]

  return (
    <div
      id="services"
      className="bg-gray-50 text-black py-16 scroll-mt-24 lg:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000048] mb-4">
            Our Services
          </h2>
          <p className="text-black text-lg">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <service.icon className="text-3xl md:text-4xl mb-4 text-[#0b60a0] group-hover:text-[#0b60a0] transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0b60a0]">
                {service.title}
              </h3>
              <p className="text-base text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
