import Image from "next/image";
import { CircleCheck, RefreshCw, Lightbulb, Handshake } from "lucide-react";
import ContactCta from "@/components/common/ContactCta";

const valueDetails = [
  {
    icon: CircleCheck,
    title: "Reliability",
    description:
      "Consistent and dependable delivery of high-quality services with accuracy and timely completion.",
  },
  {
    icon: RefreshCw,
    title: "Flexibility",
    description:
      "Adapting seamlessly to changing business needs and market demands with scalable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    description:
      "Bringing specialized skills and industry knowledge to tackle complex tasks efficiently.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Promoting open communication, transparency, and teamwork for shared goals and success.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <Image
            src="/images/about.webp"
            alt="Hero Background"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-2xl w-full animate-fade-in-up">
              <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4 md:mb-6">
                About Us
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 md:mb-6">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-lg sm:text-xl text-center text-white">
                Innovative solutions for modern business challenges. We help
                companies navigate digital transformation with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-stretch relative animate-fade-in animate-delay-300">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 hidden md:block" />

            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000048]">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-black">
                Enlinque was founded on the belief that every great idea
                deserves the chance to thrive. We understand the challenges
                startups face—from navigating speed-to-market pressures to
                scaling operations efficiently.
              </p>
              <p className="text-base sm:text-lg text-black">
                We are a team of seasoned professionals with diverse expertise
                in technology, strategy, marketing, and leadership. Together, we
                bring a blend of innovation, strategy, and execution to help
                businesses like yours overcome obstacles and achieve measurable
                results.
              </p>
            </div>

            <div className="p-8 md:p-12 lg:p-16 space-y-6 bg-[#0b60a0]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Our Approach
              </h2>
              <p className="text-base sm:text-lg text-white">
                At Enlinque, we don&apos;t believe in one-size-fits-all
                solutions. We take the time to understand your unique
                challenges, goals, and vision, and we craft tailored strategies
                that deliver real impact.
              </p>
              <p className="text-base sm:text-lg text-white">
                From concept to execution, we work as an extension of your team,
                ensuring transparency, collaboration, and measurable success
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in animate-delay-400">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000048]">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-black max-w-3xl mx-auto">
                At Enlinque, we bring together diverse perspectives and
                cutting-edge skills to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              <div className="bg-[#0b60a0] p-6 rounded-lg h-auto sm:h-80 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Innovation That Inspires
                </h3>
                <p className="text-white overflow-y-auto">
                  We envision a future where businesses of all sizes harness
                  cutting-edge technology and innovative strategies to drive
                  growth and transformation. At Enlinque, we strive to be the
                  catalyst that sparks creativity and pushes boundaries.
                </p>
              </div>
              <div className="bg-[#000048] p-6 rounded-lg h-auto sm:h-80 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Empowering Startups Globally
                </h3>
                <p className="text-white overflow-y-auto">
                  Our vision is to create an ecosystem where startups around the
                  world have access to the resources, expertise, and support
                  they need to thrive and scale, regardless of their industry or
                  location.
                </p>
              </div>
              <div className="bg-[#0b60a0] p-6 rounded-lg h-auto sm:h-80 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Sustainable Growth
                </h3>
                <p className="text-white overflow-y-auto">
                  We are committed to fostering long-term success for our
                  clients by promoting sustainable business practices, efficient
                  processes, and strategic decision-making that drives
                  meaningful impact.
                </p>
              </div>
              <div className="bg-[#000048] p-6 rounded-lg h-auto sm:h-80 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Leadership Excellence
                </h3>
                <p className="text-white overflow-y-auto">
                  We aim to redefine what it means to lead by providing
                  businesses with expert fractional leadership that ensures
                  agility, strategic alignment, and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0b60a0] py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white animate-fade-in animate-delay-500">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-white">
              Enlinque is more than a consulting firm—we are your partners in
              growth. With a proven track record of helping startups and
              businesses succeed, we bring the expertise, dedication, and
              agility needed to turn your vision into reality. Let us help you
              navigate the path to success with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000048] text-center mb-12 md:mb-16">
            Our Values
          </h2>
          <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-xl relative h-64 lg:h-auto lg:min-h-100">
              <Image
                src="/images/value.webp"
                alt="Company Values"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueDetails.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <value.icon className="text-[#0b60a0] h-8 w-8 sm:h-12 sm:w-12 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-[#000048] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <ContactCta />
    </div>
  );
}
