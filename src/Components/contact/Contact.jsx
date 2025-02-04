import { useState } from "react"
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
    <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 min-h-[calc(100vh-144px)]">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 p-16">
        <div className="w-full lg:w-1/2 space-y-16">
          <div>
            <h1 className="text-3xl font-extralight mb-2 text-blue-100 tracking-wide">
              Pave your way to
            </h1>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 animate-gradient-x leading-tight">
              Rapid, Smarter Business and Technology Solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-left space-y-1 border-r border-white/20">
              <h3 className="font-bold text-xl mb-1 text-green-300">
                Strategic
              </h3>
              <p className="text-sm text-white/80">Growth Solutions</p>
            </div>
            <div className="text-left space-y-1 border-r border-white/20">
              <h3 className="font-bold text-xl mb-1 text-yellow-300">
                Value-Centric
              </h3>
              <p className="text-sm text-white/80">Approach</p>
            </div>
            <div className="text-left space-y-1 border-r border-white/20">
              <h3 className="font-bold text-xl mb-1 text-red-300">Scalable</h3>
              <p className="text-sm text-white/80">Technology Solutions</p>
            </div>
            <div className="text-left space-y-1">
              <h3 className="font-bold text-xl mb-1 text-purple-300">
                Customer-Centric
              </h3>
              <p className="text-sm text-white/80">Focus</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl text-white font-semibold">
                Connect With Me
              </h3>
              <span className="flex-grow border-t-2 border-white/30"></span>
            </div>

            <div className="flex gap-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300"
              >
                <IoMailOutline className="text-2xl" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white shadow-2xl p-16">
            <div className="mb-16">
              <h2 className="text-2xl font-light text-gray-600 mb-2">
                Contact Form
              </h2>
              <h3 className="text-4xl font-black text-gray-900 tracking-tight">
                Send a Message
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="relative flex items-center">
                <IoPersonOutline className="absolute left-0 top-0 text-gray-500 text-xl" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full h-10 pl-8 text-gray-800 placeholder-gray-500 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative flex items-center">
                <IoBusinessOutline className="absolute left-0 top-0 text-gray-500 text-xl" />
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name *"
                  className="w-full h-10 pl-8 text-gray-800 placeholder-gray-500 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative flex items-center">
                <IoMailOutline className="absolute left-0 top-0 text-gray-500 text-xl" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full h-10 pl-8 text-gray-800 placeholder-gray-500 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative flex items-center">
                <IoPhonePortraitOutline className="absolute left-0 top-0 text-gray-500 text-xl" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="w-full h-10 pl-8 text-gray-800 placeholder-gray-500 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <IoChatbubbleOutline className="absolute left-0 top-0 text-gray-500 text-xl" />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  className="w-full pl-8 pt-2 text-gray-800 placeholder-gray-500 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 h-32 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <IoSendOutline className="text-xl" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
