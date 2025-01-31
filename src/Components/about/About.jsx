import { motion } from "framer-motion"
import { FaCheckCircle, FaSync, FaLightbulb, FaHandshake } from "react-icons/fa"
import hero1 from "../../assets/hero1.jpg"
import { BsArrowRight } from "react-icons/bs"

const About = () => {
  const valueDetails = [
    {
      icon: FaCheckCircle,
      title: "Reliability",
      description:
        "Consistent and dependable delivery of high-quality services with accuracy and timely completion.",
    },
    {
      icon: FaSync,
      title: "Flexibility",
      description:
        "Adapting seamlessly to changing business needs and market demands with scalable solutions.",
    },
    {
      icon: FaLightbulb,
      title: "Expertise",
      description:
        "Bringing specialized skills and industry knowledge to tackle complex tasks efficiently.",
    },
    {
      icon: FaHandshake,
      title: "Collaboration",
      description:
        "Promoting open communication, transparency, and teamwork for shared goals and success.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src={hero1}
            alt="Hero Background"
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full">
          <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6">
                Transforming Businesses Through Technology
              </h1>
              <p className="text-xl text-center text-white">
                Innovative solutions for modern business challenges. We help
                companies navigate digital transformation with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 items-stretch relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-300 hidden md:block" />

            <div className="p-16 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="text-lg text-slate-700">
                Enlinque was founded on the belief that every great idea
                deserves the chance to thrive. We understand the challenges
                startups face—from navigating speed-to-market pressures to
                scaling operations efficiently.
              </p>
              <p className="text-lg text-slate-700">
                We are a team of seasoned professionals with diverse expertise
                in technology, strategy, marketing, and leadership. Together, we
                bring a blend of innovation, strategy, and execution to help
                businesses like yours overcome obstacles and achieve measurable
                results.
              </p>
            </div>

            <div className="p-16 space-y-6 bg-[#000048]">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Approach
              </h2>
              <p className="text-lg text-slate-200">
                At Enlinque, we don&apos;t believe in one-size-fits-all
                solutions. We take the time to understand your unique
                challenges, goals, and vision, and we craft tailored strategies
                that deliver real impact.
              </p>
              <p className="text-lg text-slate-200">
                From concept to execution, we work as an extension of your team,
                ensuring transparency, collaboration, and measurable success
                every step of the way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                At Enlinque, we bring together diverse perspectives and
                cutting-edge skills to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <div className="bg-slate-50 p-8 rounded-lg h-72">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Innovation That Inspires
                </h3>
                <p className="text-black">
                  We envision a future where businesses of all sizes harness
                  cutting-edge technology and innovative strategies to drive
                  growth and transformation. At Enlinque, we strive to be the
                  catalyst that sparks creativity and pushes boundaries.
                </p>
              </div>
              <div className="bg-[#000048] p-8 rounded-lg text-white h-72">
                <h3 className="text-xl font-semibold mb-4">
                  Empowering Startups Globally
                </h3>
                <p className="text-slate-200">
                  Our vision is to create an ecosystem where startups around the
                  world have access to the resources, expertise, and support
                  they need to thrive and scale, regardless of their industry or
                  location.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg h-72">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  Sustainable Growth
                </h3>
                <p className="text-slate-600">
                  We are committed to fostering long-term success for our
                  clients by promoting sustainable business practices, efficient
                  processes, and strategic decision-making that drives
                  meaningful impact.
                </p>
              </div>
              <div className="bg-[#000048] p-8 rounded-lg text-white h-72">
                <h3 className="text-xl font-semibold mb-4">
                  Leadership Excellence
                </h3>
                <p className="text-slate-200">
                  We aim to redefine what it means to lead by providing
                  businesses with expert fractional leadership that ensures
                  agility, strategic alignment, and operational excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl mb-6 text-slate-300">
              Enlinque is more than a consulting firm—we are your partners in
              growth. With a proven track record of helping startups and
              businesses succeed, we bring the expertise, dedication, and
              agility needed to turn your vision into reality. Let us help you
              navigate the path to success with confidence and clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Our Values
          </h2>
          <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={hero1}
                alt="Company Values"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
              {valueDetails.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-green-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                >
                  <value.icon className="text-blue-600 h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-black text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-6 text-slate-300">
              Let&apos;s work together to bring your vision to life with our
              innovative solutions and expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get in Touch
              <BsArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
