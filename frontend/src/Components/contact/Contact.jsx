import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { GrSend } from "react-icons/gr"
import {
  IoPersonOutline,
  IoBusinessOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoChatbubbleOutline,
} from "react-icons/io5"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const validateForm = () => {
    const { name, company, email, phone, message } = formData
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    const newErrors = {
      name: !name.trim() || name.trim().length < 2 ? "Invalid name" : "",
      company: !company.trim() ? "Invalid company" : "",
      email: !email.trim() || !emailRegex.test(email) ? "Invalid email" : "",
      phone: !phone.trim() || !phoneRegex.test(phone) ? "Invalid phone" : "",
      message:
        !message.trim() || message.trim().length < 10
          ? "Message too short"
          : "",
    }

    setFormErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
        setFormErrors({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        alert(errorData.message || "Failed to send message")
      }
    } catch (error) {
      alert("Network error. Please try again.")
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#000048] to-[#0b60a0] min-h-[calc(100vh-144px)]">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 lg:p-8">
        {/* Left Column */}
        <div className="w-full lg:w-6/12 space-y-6 lg:space-y-12 py-4 lg:py-8 lg:-ml-12 relative z-10">
          <div className="space-y-4">
            <h1 className="text-2xl lg:text-3xl font-extralight text-white tracking-wide">
              Pave your way to
            </h1>
            <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight">
              Rapid, Smarter Business and Technology Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8">
            <div className="flex flex-col items-start lg:border-r border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0 lg:pr-4">
              <h3 className="font-bold text-lg text-white mb-2">Strategic</h3>
              <p className="text-sm text-white/90">Growth Solutions</p>
            </div>
            <div className="flex flex-col items-start lg:border-r border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0 lg:pr-4">
              <h3 className="font-bold text-lg text-white mb-2 whitespace-nowrap">
                Value-centric
              </h3>
              <p className="text-sm text-white/90">Approach</p>
            </div>
            <div className="flex flex-col items-start lg:border-r border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0 lg:pr-4">
              <h3 className="font-bold text-lg text-white mb-2">Scalable</h3>
              <p className="text-sm text-white/90">Technology Solutions</p>
            </div>
            <div className="flex flex-col items-start border-b lg:border-b-0 border-white/20 pb-3 lg:pb-0">
              <h3 className="font-bold text-lg text-white mb-2 whitespace-nowrap">
                Customer-centric
              </h3>
              <p className="text-sm text-white/90">Focus</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-xl text-white font-semibold whitespace-nowrap">
                Connect With Us
              </h3>
              <span className="flex-grow border-t-2 border-white/30"></span>
            </div>

            <div className="flex gap-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300 group"
              >
                <IoMailOutline className="text-2xl transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300 group"
              >
                <FaLinkedin className="text-2xl transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column with Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-7/12 lg:pl-6 relative z-0"
        >
          <div className="bg-white shadow-2xl rounded-lg p-6 lg:p-8 lg:ml-16">
            <div className="mb-8">
              <h2 className="text-lg font-light text-[#000048] mb-2">
                Let&apos;s Make Something Great Together!
              </h2>
              <h3 className="text-3xl font-bold text-[#000048] tracking-tight">
                Start a conversation with us
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative flex flex-col group">
                <div className="flex items-center">
                  <IoPersonOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-[#000048] text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={`w-full h-10 pl-8 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                      formErrors.name ? "border-red-500" : "border-gray-200"
                    } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300`}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              <div className="relative flex flex-col group">
                <div className="flex items-center">
                  <IoBusinessOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-[#000048] text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    className={`w-full h-10 pl-8 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                      formErrors.company ? "border-red-500" : "border-gray-200"
                    } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300`}
                  />
                </div>
                {formErrors.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.company}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col group">
                <div className="flex items-center">
                  <IoMailOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-[#000048] text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className={`w-full h-10 pl-8 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                      formErrors.email ? "border-red-500" : "border-gray-200"
                    } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300`}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col group">
                <div className="flex items-center">
                  <IoPhonePortraitOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-[#000048] text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className={`w-full h-10 pl-8 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                      formErrors.phone ? "border-red-500" : "border-gray-200"
                    } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300`}
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col group">
                <div className="flex items-start">
                  <IoChatbubbleOutline className="absolute left-0 top-3 text-[#000048] text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    className={`w-full pl-8 pt-2 text-[#000048] placeholder-[#000048]/60 border-b-2 ${
                      formErrors.message ? "border-red-500" : "border-gray-200"
                    } focus:border-[#0b60a0] focus:outline-none transition-colors duration-300 h-32 resize-none`}
                  />
                </div>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-1/2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group mx-auto"
              >
                <span>Send Message</span>
                <GrSend className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
