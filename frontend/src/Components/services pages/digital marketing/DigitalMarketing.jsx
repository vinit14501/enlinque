import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"
import ctaBackground from "../../../assets/digitalmarketingbanner1.webp"
import cta3 from "../../../assets/digitalmarketingbanner2.webp"
import arrow from "../../../assets/arrow.webp"
import ContactCta from "../../contact cta/ContactCta"
import { digitalMarketingServices } from "./digitalMarketingServices"
import { useNavigate } from "react-router-dom"
import SocialMediaSection from "./social media/SocialMediaSection"
import MarketingComponentsSection from "./MarketingComponentsSection"

const DigitalMarketing = () => {
  const navigate = useNavigate()

  const scrollToServices = () => {
    const pricingSection = document.getElementById("services-section")
    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(80vh-4rem)] sm:h-[calc(80vh-5rem)] lg:h-[calc(80vh-6rem)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ctaBackground})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
                Digital Marketing
              </h1>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-white">
                  Our expert digital marketing solutions help you increase
                  visibility, generate high-quality leads, and boost
                  conversions.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  We optimize the customer journey to ensure your brand stands
                  out in a <span>competitive market.</span>
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 md:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Explore our Services
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-black tracking-wide leading-relaxed max-w-4xl mx-auto font-raleway">
            <span className="text-[#0b60a0] font-bold">Build a brand</span> that
            stands out. From awareness to advocacy - we craft tailored{" "}
            <span className="text-[#0b60a0] font-bold">digital strategies</span>{" "}
            that create{" "}
            <span className="text-[#0b60a0] font-bold">lasting impact</span>.
          </p>
        </div>
      </div>

      {/* First CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000048] via-blue-600 to-[#0b60a0]" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000048]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-md">
                Webinars, Podcasts & Videos
              </h2>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/90">
                Strategic Content Creation to maximize outreach
              </h2>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold font-raleway text-[#000048] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2"
              onClick={() => navigate("/contact")}
            >
              <span>Reach out to us</span>
              <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#000048]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {digitalMarketingServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <service.icon className="text-3xl md:text-4xl mb-4 text-[#0b60a0] group-hover:text-[#0b60a0] transition-colors" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0b60a0]">
                  {service.title}
                </h3>

                <div className="mt-4">
                  <ul className="space-y-3">
                    {service.points &&
                      service.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-2 text-base text-black"
                        >
                          <img
                            src={arrow}
                            alt="arrow"
                            className="w-4 h-4 mt-1 flex-shrink-0"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA Banner */}
      <div
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${cta3})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center"
        >
          <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/80 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
                Digital Marketing Strategy
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
                Want to grow your brand but not sure where to start? Let us
                craft a tailored digital marketing strategy that drives results
                and sets you up for success.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold font-raleway py-2 px-4 sm:px-5 rounded-lg inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Request a Quote{" "}
                <FaArrowRight className="text-base sm:text-base" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marketing Components Section */}
      <MarketingComponentsSection />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Second Text Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-black tracking-wide leading-relaxed max-w-4xl mx-auto font-raleway">
            Custom Branding for{" "}
            <span className="text-[#0b60a0] font-bold">
              Businesses of All Sizes
            </span>{" "}
            Transforming businesses with{" "}
            <span className="text-[#0b60a0] font-bold">strategic branding</span>{" "}
            that stands out and{" "}
            <span className="text-[#0b60a0] font-bold">drives growth</span>.
          </p>
        </div>
      </div>

      {/* More Space Area */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10"></div>
      </div>

      {/* Connect Section */}
      <ContactCta />
    </div>
  )
}

export default DigitalMarketing
