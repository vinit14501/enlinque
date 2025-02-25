import { motion } from "framer-motion"
import {
  FaServer,
  FaPaintBrush,
  FaGoogle,
  FaAddressBook,
  FaCloudUploadAlt,
  FaArrowRight,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import React from "react"
import websitedevelopment from "../../../assets/websitedevelopment.webp"
import digitalmarketing from "../../../assets/digitalmarketing.webp"
import PlanModal from "../../modal/PlanModal"
import PricingSection from "./PricingSection"
import ContactCta from "../../contact cta/ContactCta"

const WebsiteDevelopment = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState(null)

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
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
                <p className="text-base sm:text-lg md:text-xl text-white">
                  Looking to launch a new website or redesign your existing one?
                  We craft engaging digital experiences tailored for businesses
                  of all sizes and industries.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white">
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
                <service.icon className="text-3xl md:text-4xl mb-4 text-[#0b60a0] group-hover:text-[#0b60a0] transition-colors" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0b60a0]">
                  {service.title}
                </h3>
                <p className="text-base text-black">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <div
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${digitalmarketing})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center"
        >
          <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/80 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
                Looking to build a strong online presence?
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
                Your website is just the beginning. Leverage powerful digital
                marketing strategies to boost visibility, drive traffic, and
                increase conversions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold font-raleway py-2 px-4 sm:px-5 rounded-lg inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base transition-all duration-300"
                onClick={() => navigate("/digitalmarketing")}
              >
                Digital Marketing{" "}
                <FaArrowRight className="text-base sm:text-base" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* Connect Section */}
      <ContactCta />

      {/* Modal Component */}
      <PlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  )
}

export default WebsiteDevelopment
