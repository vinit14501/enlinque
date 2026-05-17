import Link from "next/link";
import {
  Laptop,
  Megaphone,
  Code,
  ShoppingCart,
  Gauge,
  ListChecks,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "IT Consulting",
    description:
      "Optimize your technology strategy to align with business goals, ensuring faster time-to-market and scalable growth",
    path: "/services/it-consulting",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Craft and execute data-driven marketing strategies that maximize ROI and drive customer acquisition for startups",
    path: "/services/digital-marketing",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Deliver custom software solutions tailored to your business needs, from MVP to full-scale applications",
    path: "/services/software-development",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solution",
    description:
      "Launch and grow your e-commerce business with end-to-end support, from platform selection to optimization",
    path: "/services/ecommerce-solution",
  },
  {
    icon: Gauge,
    title: "Digital Transformation",
    description:
      "Modernize your business operations with innovative digital solutions that enhance efficiency and competitiveness",
    path: "/services/digital-transformation",
  },
  {
    icon: ListChecks,
    title: "Agile Implementation",
    description:
      "Adopt agile methodologies to streamline processes, improve collaboration, and accelerate project delivery",
    path: "/services/agile-implementation",
  },
];

export default function Services() {
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
            <Link
              key={index}
              href={service.path}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group block"
            >
              <service.icon className="text-3xl md:text-4xl mb-4 text-[#0b60a0] group-hover:text-[#0b60a0] transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0b60a0]">
                {service.title}
              </h3>
              <p className="text-base text-black">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
