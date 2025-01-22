import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] min-h-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img
          src="hero1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80">
          <div className="h-full max-w-7xl mx-auto px-4 flex items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Businesses Through Technology
              </h1>
              <p className="text-xl text-white">
                Innovative solutions for modern business challenges. We help
                companies navigate digital transformation with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Two Column Section */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 items-stretch relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-300 hidden md:block" />

            <div className="p-16 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="text-lg text-slate-700">
                Based in Pittsburgh, PA, Enlinque is a dynamic consulting firm
                that combines technical expertise with strategic insight. We
                specialize in helping businesses leverage technology to achieve
                their goals and stay ahead in the digital age.
              </p>
              <p className="text-lg text-slate-700">
                Our approach combines cutting-edge technology with practical,
                results-driven strategies. We understand the challenges of
                modern businesses because we've faced them ourselves.
              </p>
            </div>

            <div className="p-16 space-y-6 bg-slate-900">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-lg text-slate-200">
                We're committed to delivering exceptional consulting services
                that drive real business growth. Our mission is to empower
                organizations with the tools and strategies they need to thrive
                in today's competitive landscape.
              </p>
              <p className="text-lg text-slate-200">
                Through innovative solutions and dedicated support, we help our
                clients navigate complex technological challenges and achieve
                their business objectives with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Our Expertise
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                At Enlinque, we bring together diverse perspectives and
                cutting-edge skills to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-50 p-10 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  Technical Excellence
                </h3>
                <p className="text-slate-600">
                  Our expertise spans across IT infrastructure, digital
                  transformation, and strategic consulting, ensuring
                  comprehensive solutions for our clients.
                </p>
              </div>
              <div className="bg-slate-900 p-10 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Strategic Innovation
                </h3>
                <p className="text-slate-200">
                  We combine innovative thinking with practical implementation
                  to deliver solutions that drive real business results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Our Approach
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We believe in building lasting partnerships with our clients
                through a collaborative and results-driven approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {["Discovery", "Strategy", "Implementation"].map(
                (phase, index) => (
                  <div
                    key={phase}
                    className="bg-white p-10 rounded-lg"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">
                      {phase}
                    </h3>
                    <p className="text-slate-600">
                      {index === 0 &&
                        "We start by understanding your unique challenges and goals."}
                      {index === 1 &&
                        "Develop a tailored strategy aligned with your business objectives."}
                      {index === 2 &&
                        "Execute the plan with precision and ongoing support."}
                    </p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-slate-300">
              Let's work together to bring your vision to life with our
              innovative solutions and expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
