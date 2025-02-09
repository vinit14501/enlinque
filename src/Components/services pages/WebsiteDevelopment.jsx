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
import { useNavigate } from "react-router-dom"
import websitedevelopment from "../../assets/websitedevelopment7.jpg"
import digitalmarketing from "../../assets/digitalmarketing3.jpg"

const WebsiteDevelopment = () => {
  const navigate = useNavigate()

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(80vh-4rem)] sm:h-[calc(80vh-5rem)] lg:h-[calc(80vh-6rem)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${websitedevelopment})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
                Custom Website Design and Development
              </h1>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Looking to launch a new website or redesign your existing one?
                  We craft engaging digital experiences tailored for businesses
                  of all sizes and industries.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Our comprehensive approach ensures your online presence is
                  both visually stunning and strategically effective.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 md:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Check Pricing
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#000048]">
            Components of Web Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {Services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <service.icon className="text-3xl md:text-4xl mb-4 text-[#000048] group-hover:text-[#0b60a0] transition-colors" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-base text-black">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="relative py-16 md:py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${digitalmarketing})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
            Looking to build a strong online presence?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white">
            Your website is just the beginning. Leverage powerful digital
            marketing strategies to boost visibility, drive traffic, and
            increase conversions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white font-semibold text-[#000048] px-6 py-3 text-lg rounded-lg hover:bg-gray-100 transition-all"
          >
            Digital Media Marketing
          </motion.button>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing-section"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000048]">
              Pricing Plans
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {PricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="inline-block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all group p-6"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#000048] group-hover:text-blue-600 transition-colors">
                  {plan.name} Plan
                </h3>
                <p className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                  ${plan.price}
                  <span className="text-sm text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-base"
                    >
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Choose {plan.name} Plan
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b60a0] py-16 md:py-24 px-4 sm:px-6 text-white sticky top-0 z-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl">
            We&apos;re excited to help you bring your digital vision to life.
            Let&apos;s discuss your project and how we can help you succeed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold font-raleway text-[#000048] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <BsArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
