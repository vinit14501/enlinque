import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { FaUser, FaEnvelope, FaPhone, FaRegPaperPlane } from "react-icons/fa"

const PlanModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, plan: selectedPlan })
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!selectedPlan) return null

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-[#000048] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Simplified Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#000048] via-[#0b60a0]/20 to-[#000048]" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/40 hover:text-white z-20 transition-colors"
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Header Section */}
            <div className="relative p-6 md:p-8 text-white border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-light mb-2">
                Ready to <span className="font-semibold">elevate</span> your
                digital presence?
              </h2>
              <p className="text-sm md:text-base text-white/60">
                Join our {selectedPlan.name} plan and unlock a world of
                possibilities.
              </p>
            </div>

            {/* Content Section */}
            <div className="relative grid md:grid-cols-2 gap-6 md:gap-0 p-6 md:p-8">
              {/* Form Section */}
              <div className="md:pr-8 md:border-r border-white/10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {[
                    {
                      icon: FaUser,
                      name: "name",
                      placeholder: "Full Name",
                      type: "text",
                    },
                    {
                      icon: FaEnvelope,
                      name: "email",
                      placeholder: "Email Address",
                      type: "email",
                    },
                    {
                      icon: FaPhone,
                      name: "phone",
                      placeholder: "Phone Number",
                      type: "tel",
                    },
                  ].map((field) => (
                    <div
                      key={field.name}
                      className="relative group"
                    >
                      <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-white/60 transition-colors text-lg" />
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 text-white placeholder-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-blue-500/20 transition-colors text-base"
                        required
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 gap-2"
                  >
                    <span>Complete Subscription</span>
                    <FaRegPaperPlane />
                  </button>
                </form>
              </div>

              {/* Package Details */}
              <div className="md:pl-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-white/60 uppercase tracking-wider text-xs font-medium mb-2">
                      Selected Plan
                    </p>
                    <h3 className="text-xl md:text-2xl text-white font-light">
                      {selectedPlan.name}{" "}
                      <span className="font-semibold">Package</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-light text-white">
                          ${selectedPlan.price}
                        </span>
                        <span className="text-sm md:text-base text-white/60">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PlanModal
