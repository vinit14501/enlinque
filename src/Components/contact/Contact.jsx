import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import {
  IoPersonOutline,
  IoBusinessOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoChatbubbleOutline,
  IoSendOutline,
} from "react-icons/io5"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
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
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center py-12 md:py-16">
      <div className="w-full max-w-6xl flex flex-col md:flex-row space-y-8 md:space-y-0 px-4">
        <div className="w-full md:w-1/2 md:pr-8 text-white">
          <h1 className="text-3xl font-light mb-2 text-blue-200">
            Pave your way to
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 animate-gradient-x">
            Rapid, Smarter Business and Technology Solutions
          </h2>

          <div className="flex justify-start my-6 relative">
            <div className="text-left flex-1 pr-2">
              <h3 className="font-semibold text-lg mb-1 text-green-300">
                Strategic
              </h3>
              <p className="text-sm opacity-80">Growth Solutions</p>
            </div>
            <div className="text-left flex-1 px-2 relative">
              <div className="absolute -left-[1px] top-0 bottom-0 w-[1px] bg-white/30"></div>
              <div className="absolute -right-[1px] top-0 bottom-0 w-[1px] bg-white/30"></div>
              <h3 className="font-semibold text-lg mb-1 text-yellow-300">
                Value-Centric
              </h3>
              <p className="text-sm opacity-80">Approach</p>
            </div>
            <div className="text-left flex-1 px-2 relative">
              <div className="absolute -left-[1px] top-0 bottom-0 w-[1px] bg-white/30"></div>
              <div className="absolute -right-[1px] top-0 bottom-0 w-[1px] bg-white/30"></div>
              <h3 className="font-semibold text-lg mb-1 text-red-300">
                Scalable
              </h3>
              <p className="text-sm opacity-80">Technology Solutions</p>
            </div>
            <div className="text-left flex-1 pl-2">
              <h3 className="font-semibold text-lg mb-1 text-purple-300">
                Customer-Centric
              </h3>
              <p className="text-sm opacity-80">Focus</p>
            </div>
          </div>

          <div className="flex items-center mt-6">
            <h3 className="text-2xl mr-4">Connect With Me</h3>
            <span className="w-20 border-t-2 border-white"></span>
          </div>

          <div className="flex space-x-6 mt-4">
            <a
              href="mailto:hello@example.com"
              className="flex items-center space-x-2 hover:text-blue-200 transition"
            >
              <IoMailOutline className="text-xl" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center space-x-2 hover:text-blue-200 transition"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-white shadow-2xl p-8 md:p-12 w-full rounded-none">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-gray-600 mb-2">
                Contact Form
              </h2>
              <h3 className="text-4xl font-bold text-gray-900">
                Send a Message
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative flex items-center border-b border-gray-300 pb-2">
                <IoPersonOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 mr-3" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full pl-8 text-gray-800 placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div className="relative flex items-center border-b border-gray-300 pb-2">
                <IoBusinessOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 mr-3" />
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name *"
                  className="w-full pl-8 text-gray-800 placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div className="relative flex items-center border-b border-gray-300 pb-2">
                <IoMailOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 mr-3" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full pl-8 text-gray-800 placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div className="relative flex items-center border-b border-gray-300 pb-2">
                <IoPhonePortraitOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 mr-3" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="w-full pl-8 text-gray-800 placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div className="relative flex items-center border-b border-gray-300 pb-2">
                <IoChatbubbleOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 mr-3" />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  className="w-full pl-8 text-gray-800 placeholder-gray-600 focus:outline-none h-32 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-2">
                  <IoSendOutline className="inline-flex self-center" />
                  <span className="inline-flex items-center">Send Message</span>
                </div>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
