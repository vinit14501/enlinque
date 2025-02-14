import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose, IoCheckmarkCircleOutline } from "react-icons/io5"
import {
  IoPersonOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5"
import { FaRegPaperPlane } from "react-icons/fa"
import axios from "axios"

const SuccessView = ({ selectedPlan, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="p-12 flex flex-col items-center text-center"
  >
    <div className="relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
        className="w-28 h-28 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mb-8 shadow-lg shadow-green-100"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <IoCheckmarkCircleOutline className="w-16 h-16 text-green-500" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.4,
        }}
        className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-md"
      >
        ${selectedPlan.price}/mo
      </motion.div>
    </div>

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-3xl font-semibold text-gray-900 mb-3"
    >
      Welcome Aboard! 🎉
    </motion.h3>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-4 max-w-md"
    >
      <p className="text-lg text-gray-700">
        Thank you for choosing our{" "}
        <span className="font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {selectedPlan.name}
        </span>{" "}
        plan
      </p>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600">
          We've sent all the details to your email. Our team will reach out
          shortly to help you get started on your journey with us.
        </p>
      </div>
    </motion.div>

    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={onClose}
      className="mt-8 px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow group"
    >
      Close Window
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: [0, 5, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="inline-block ml-2"
      >
        👋
      </motion.span>
    </motion.button>
  </motion.div>
)

const PlanModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/forms/plan`,
        {
          ...formData,
          selectedPlan,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.data.success) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", phone: "" })
      }
    } catch (error) {
      console.error("Submission error:", error)
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to submit plan subscription"
      alert(errorMessage) // Fallback error handling
    } finally {
      setIsSubmitting(false)
    }
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

  const handleClose = () => {
    onClose()
    // Reset success state after animation completes
    setTimeout(() => {
      setIsSuccess(false)
    }, 200)
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] font-raleway"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute right-5 top-5 text-gray-500 hover:text-gray-700 z-20 transition-colors disabled:opacity-50"
            >
              <IoClose className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <>
                <div className="relative px-8 pt-8 pb-6 border-b border-gray-100 bg-blue-50/50">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl text-gray-900 font-medium">
                      {selectedPlan.name} Plan Subscription
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Complete your subscription details below
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 p-8">
                  <div className="md:pr-12 md:border-r border-gray-100">
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-7"
                    >
                      {[
                        {
                          icon: IoPersonOutline,
                          name: "name",
                          type: "text",
                          placeholder: "Your Name *",
                        },
                        {
                          icon: IoMailOutline,
                          name: "email",
                          type: "email",
                          placeholder: "Your Email *",
                        },
                        {
                          icon: IoPhonePortraitOutline,
                          name: "phone",
                          type: "tel",
                          placeholder: "Phone Number *",
                        },
                      ].map((field) => (
                        <div
                          key={field.name}
                          className="relative flex flex-col group"
                        >
                          <div className="flex items-center">
                            <field.icon className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-blue-600 transition-colors duration-300" />
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              placeholder={field.placeholder}
                              disabled={isSubmitting}
                              className="w-full h-10 pl-7 text-gray-900 placeholder-gray-500 border-b border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                              required
                            />
                          </div>
                        </div>
                      ))}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white px-6 py-2.5 font-medium rounded shadow-sm hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting
                          ? "Processing..."
                          : "Complete Subscription"}
                        <FaRegPaperPlane className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>

                  <div className="md:pl-12 mt-8 md:mt-0">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-4">
                        SUBSCRIPTION SUMMARY
                      </h4>
                      <div className="p-5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-medium text-gray-900">
                            ${selectedPlan.price}
                          </span>
                          {/* <span className="text-gray-600">/month</span> */}
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                          {selectedPlan.name} Package
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <SuccessView
                selectedPlan={selectedPlan}
                onClose={handleClose}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PlanModal
