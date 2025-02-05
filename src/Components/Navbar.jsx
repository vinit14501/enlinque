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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          {/* Logo - Made even larger */}
          <Link
            to="/"
            className="flex-shrink-0"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="h-20 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>

          {/* Centered Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => handleNavItemClick(item)}
                  className="
                    text-black font-semibold font-raleway hover:text-blue-600 
                    transition-colors duration-300 
                    group relative text-base tracking-wide
                    whitespace-nowrap
                  "
                >
                  {item.label}
                  <span
                    className="
                      absolute -bottom-1 left-0 w-0 h-0.5 
                      bg-blue-600 transition-all duration-300 
                      group-hover:w-full
                    "
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button - Right aligned */}
          <div className="hidden lg:block flex-shrink-0">
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                px-5 py-2.5 bg-[#0b60a0] text-white 
                rounded-lg text-base font-medium font-raleway
                hover:bg-blue-700 transition-colors duration-300
                whitespace-nowrap shadow-lg shadow-blue-600/20
              "
            >
              Contact Us
            </motion.button>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <FaBars
              size={24}
              className="text-gray-800"
            />
          </button>
        </div>
      </nav>

      {/* Significantly reduced the spacing below navbar */}
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]"></div>

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
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-[70]"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
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
                    className="block py-3 px-4 text-lg font-medium font-raleway text-gray-800 hover:bg-gray-100 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}

                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full mt-4 py-3 bg-blue-600 text-white 
                    rounded-lg font-medium font-raleway hover:bg-blue-700 
                    transition-colors duration-300
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
