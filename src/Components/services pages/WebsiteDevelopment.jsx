import { motion } from "framer-motion"
import {
  FaServer,
  FaPaintBrush,
  FaGoogle,
  FaAddressBook,
  FaCloudUploadAlt,
  FaCheck,
} from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import websitedevelopment from "../../assets/websitedevelopment2.jpg"
import digitalmarketing from "../../assets/digitalmarketing2.jpg"

const WebsiteDevelopment = () => {
  const Services = [
    {
      icon: FaServer,
      title: "Hosting Platform Selection",
      description:
        "Choosing a hosting platform that aligns with your website's performance, scalability, and budget requirements.",
    },
    {
      icon: FaPaintBrush,
      title: "Custom Web Design",
      description:
        "Crafting unique, visually stunning designs tailored to reflect your brand's identity and captivate your audience.",
    },
    {
      icon: FaGoogle,
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimizing your website to rank higher on search engines and drive targeted traffic to your business.",
    },
    {
      icon: FaAddressBook,
      title: "CRM Integration",
      description:
        "Seamlessly connecting your website with CRM tools to streamline customer management and enhance business efficiency.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Ongoing Website Enhancement & Maintenance",
      description:
        "Ensuring your website stays updated, secure, and optimized for peak performance with regular enhancements and maintenance.",
    },
  ]

  const PricingPlans = [
    {
      name: "Basic",
      price: 50,
      features: [
        "Responsive Website Design",
        "Basic SEO Optimization",
        "3 Page Website",
        "Mobile Friendly",
        "Standard Support",
      ],
    },
    {
      name: "Standard",
      price: 100,
      features: [
        "Custom Design",
        "Advanced SEO",
        "Up to 10 Pages",
        "E-commerce Integration",
        "Performance Optimization",
        "Monthly Analytics Report",
      ],
    },
    {
      name: "Premium",
      price: 250,
      features: [
        "Full Custom Design",
        "Enterprise SEO",
        "Unlimited Pages",
        "Advanced E-commerce",
        "Priority Support",
        "Quarterly Strategy Session",
        "Content Management System",
      ],
    },
  ]

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${websitedevelopment})`,
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-[#0b60a0]">
            Custom Website Design and Development
          </h1>
          <div className="max-w-2xl mx-auto space-y-3 md:space-y-4 mb-6 md:mb-8">
            <p className="text-lg md:text-xl font-semibold text-white">
              Looking to launch a new website or redesign your existing one? We
              craft engaging digital experiences tailored for businesses of all
              sizes and industries.
            </p>
            <p className="text-lg md:text-xl font-semibold text-white">
              Our comprehensive approach ensures your online presence is both
              visually stunning and strategically effective.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#000048] text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Check Pricing Packages
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-12 md:py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
          Components of Web Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {Services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <service.icon className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#000048] group-hover:text-[#0b60a0] transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-black">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="relative py-12 md:py-20 px-4 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${digitalmarketing})`,
          }}
        ></div>

        <div className="relative z-10 text-center container mx-auto text-black px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Looking to build a strong online presence?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-base md:text-xl">
            Your website is just the beginning. Leverage powerful digital
            marketing strategies to boost visibility, drive traffic, and
            increase conversions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white font-semibold text-[#000048] px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-gray-100 transition-all"
          >
            Digital Media Marketing
          </motion.button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-12 md:py-20 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Pricing Plans
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-gray-200 p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black group-hover:text-blue-600 transition-colors">
                {plan.name} Plan
              </h3>
              <p className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-blue-600">
                ${plan.price}
                <span className="text-sm text-gray-500">/month</span>
              </p>
              <ul className="space-y-2 md:space-y-3 text-gray-600 mb-4 md:mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm md:text-base"
                  >
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#000048] text-white py-2 rounded-lg hover:opacity-90 text-sm md:text-base">
                Choose {plan.name} Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b60a0] py-12 md:py-20 px-4 text-white">
        <div className="text-center container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-base md:text-xl">
            We&apos;re excited to help you bring your digital vision to life.
            Let&apos;s discuss your project and how we can help you succeed.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#000048] px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-100 inline-flex items-center gap-2 font-semibold text-sm md:text-base"
          >
            Contact Us <BsArrowRight className="text-lg md:text-xl" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
