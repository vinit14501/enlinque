import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: "Services", to: "/#services", isScroll: true },
    { label: "Fractional CxO", to: "/fractionalCxO", isScroll: false },
    { label: "About", to: "/about", isScroll: false },
    {
      label: "Website Development",
      to: "/websitedevelopment",
      isScroll: false,
    },
  ]

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    } else if (location.pathname !== "/") {
      navigate("/#services")
    }
  }

  useEffect(() => {
    if (location.hash === "#services" && location.pathname === "/") {
      setTimeout(() => {
        scrollToServices()
      }, 0)
    }
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleContactClick = () => {
    navigate("/contact")
  }

  const handleNavItemClick = (item) => {
    if (item.isScroll && item.to === "/#services") {
      scrollToServices()
      if (isOpen) toggleMenu()
    }
  }

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo with responsive sizing */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-12 w-auto sm:h-16 lg:h-20 object-contain transition-all duration-200"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-4">
              <div className="flex items-center space-x-1 xl:space-x-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => handleNavItemClick(item)}
                    className="
                      px-2 py-2 text-black font-semibold font-raleway
                      hover:text-blue-600 transition-colors duration-300
                      group relative text-sm xl:text-base tracking-wide
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  px-4 sm:px-5 py-2 sm:py-2.5 bg-[#0b60a0] text-white
                  rounded-lg text-sm sm:text-base font-medium font-raleway
                  hover:bg-blue-700 transition-colors duration-300
                  whitespace-nowrap shadow-lg shadow-blue-600/20
                "
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FaBars
                size={24}
                className="text-gray-800"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Dynamic spacing based on navbar height */}
      <div className="h-16 sm:h-20 lg:h-24 transition-all duration-200"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-xl z-[70] overflow-y-auto"
            >
              <div className="sticky top-0 flex justify-end p-4 bg-white">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                  aria-label="Close menu"
                >
                  <FaTimes
                    size={24}
                    className="text-gray-800"
                  />
                </button>
              </div>

              <div className="px-4 py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => handleNavItemClick(item)}
                    className="
                      block py-3 px-4 text-base sm:text-lg font-medium
                      font-raleway text-gray-800 hover:bg-gray-100
                      rounded-lg transition-colors duration-200
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full mt-4 py-3 bg-[#0b60a0] text-white
                    rounded-lg text-base sm:text-lg font-medium font-raleway
                    hover:bg-blue-700 transition-colors duration-300
                    shadow-lg shadow-blue-600/20
                  "
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
