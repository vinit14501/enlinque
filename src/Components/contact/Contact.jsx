import { useState } from "react"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect with us",
      link: "https://linkedin.com/company/example",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="hero-pattern"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="4"
                cy="4"
                r="1"
                fill="currentColor"
                className="text-white"
              />
            </pattern>
            <rect
              width="100"
              height="100"
              fill="url(#hero-pattern)"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center justify-center text-white p-4 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl text-blue-100">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </motion.div>
      </div>

      {/* Main content section */}
      <div className="flex-grow bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Info section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-xl bg-white/90 rounded-3xl p-6 shadow-xl border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target={item.icon === FaLinkedin ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-blue-50/50 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-md shadow-blue-100/50">
                        <item.icon className="text-lg text-blue-600 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900 mb-1">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-blue-600">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-xl bg-white/90 rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
