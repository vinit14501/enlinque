import arrow from "../../../assets/arrow.webp"

export default function MarketingComponentsSection() {
  return (
    <>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#000048]">
            Marketing Components
          </h2>
          {/* First section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-base text-black">
            <div className="relative">
              {/* Vertical line for mobile - appears at start */}
              <div className="absolute left-0 top-0 w-px h-full bg-blue-600 md:hidden"></div>
              {/* Vertical line for desktop - left */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-600 hidden md:block"></div>
              <div className="space-y-4 px-6">
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>B2B & B2C Lead Generation</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Go-to-Market Strategy</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Brand Marketing & Positioning</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>CRM Integration & Lead Nurturing</span>
                </p>
              </div>
            </div>

            {/* Second Section */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-blue-600 md:hidden"></div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-600 hidden md:block"></div>
              <div className="space-y-4 px-6">
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Podcast & Webinar Production</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Video Creation & Marketing</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>eBooks & Whitepapers</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Graphic Design & Branding</span>
                </p>
              </div>
            </div>

            {/* Third Section */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-blue-600 md:hidden"></div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-600 hidden md:block"></div>
              <div className="space-y-4 px-6">
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Copywriting & Content Marketing</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Revenue Growth & Conversion Optimization</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Analytics & Performance Tracking</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Influencer Marketing</span>
                </p>
              </div>
            </div>

            {/* Fourth Section */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-blue-600 md:hidden"></div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-600 hidden md:block"></div>
              <div className="space-y-4 px-6">
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Marketing Collateral Design</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Organic & Performance Marketing</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Community Management</span>
                </p>
                <p className="flex items-center gap-3 group cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                  <span>Email Marketing & Automation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
