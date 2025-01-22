import { useState } from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
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

  return (
    <div className="min-h-screen w-full relative pt-16 lg:pt-20">
      {/* Split Background Layout */}
      <div className="absolute inset-0">
        <div className="w-1/3 md:w-1/2 h-full bg-blue-600 absolute left-0" />
        <div
          className="w-2/3 md:w-1/2 h-full absolute right-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('hero1.jpg')",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          <div className="relative">
            {/* Contact Info Section */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-72 bg-black text-white p-8 shadow-2xl z-10 transition-all duration-300 hover:translate-x-2">
              <div className="relative">
                <h2 className="text-2xl font-semibold mb-8">Contact Info</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <FaMapMarkerAlt className="text-base" />
                    </div>
                    <div>
                      <p className="text-sm text-white/90">
                        2912 Meadowbrook Road
                      </p>
                      <p className="text-sm text-white/90">Los Angeles, CA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <FaEnvelope className="text-base" />
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-white/90">lorem@ipsum.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <FaPhone className="text-base" />
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-white/90">310-386-1623</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="flex space-x-3">
                    {[
                      FaFacebookF,
                      FaTwitter,
                      FaInstagram,
                      FaPinterestP,
                      FaLinkedinIn,
                    ].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white shadow-xl ml-8 md:ml-16 pl-48 md:pl-64 pr-8 py-12 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-black mb-8">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-xs text-black uppercase mb-2 block font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full border-b-2 border-black py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="text-xs text-black uppercase mb-2 block font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full border-b-2 border-black py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs text-black uppercase mb-2 block font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@xyz.com"
                    className="w-full border-b-2 border-black py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div className="group">
                  <label className="text-xs text-black uppercase mb-2 block font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="123456789"
                    className="w-full border-b-2 border-black py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div className="group">
                  <label className="text-xs text-black uppercase mb-2 block font-medium">
                    Write your message here...
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={3}
                    className="w-full border-b-2 border-black py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 text-sm font-medium hover:bg-black transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
