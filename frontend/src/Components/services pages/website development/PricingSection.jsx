import { useState } from "react"
import { motion } from "framer-motion"
import { FaCheck, FaPlus } from "react-icons/fa"
import { pricingPlans } from "./pricingPlans"
import PlanModal from "../../modal/PlanModal"

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <section
      id="pricing-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000048] tracking-tight">
            Pricing Plans
          </h2>
          {/* <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full group"
            >
              {/* Top Section with Enhanced Background */}
              <div className="bg-gray-50 p-8 rounded-t-lg border-b border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#000048] group-hover:text-blue-600 transition-colors">
                  {plan.name}
                </h3>
                <p className="text-black mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">
                    ${plan.price}
                  </p>
                  {/* <span className="text-gray-500 ml-2">/month</span> */}
                </div>
              </div>

              {/* Button Section */}
              <div className="px-8 py-6 bg-white border-b border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePlanSelection(plan)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 group-hover:shadow-blue-200"
                >
                  Choose {plan.name} Plan
                </motion.button>
              </div>

              {/* Features List with Enhanced Styling */}
              <div className="bg-white px-8 py-6">
                <h4 className="font-semibold text-lg mb-6 text-[#000048] border-b border-gray-100 pb-3">
                  Features
                </h4>
                <ul className="space-y-4 text-black">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-base group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <FaCheck className="text-blue-600 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Services with Enhanced Styling */}
              <div className="bg-gray-50 px-8 py-6 mt-auto rounded-b-lg">
                <h4 className="font-semibold text-lg mb-6 text-[#000048] border-b border-gray-100 pb-3">
                  Additional Services
                </h4>
                <ul className="space-y-4 text-black">
                  {plan.additionalServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-center text-base group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <FaPlus className="text-blue-600 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <PlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  )
}

export default PricingSection
