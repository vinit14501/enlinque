import Image from "next/image";

const columns = [
  [
    "B2B & B2C Lead Generation",
    "Go-to-Market Strategy",
    "Brand Marketing & Positioning",
    "CRM Integration & Lead Nurturing",
  ],
  [
    "Podcast & Webinar Production",
    "Video Creation & Marketing",
    "eBooks & Whitepapers",
    "Graphic Design & Branding",
  ],
  [
    "Copywriting & Content Marketing",
    "Revenue Growth & Conversion Optimization",
    "Analytics & Performance Tracking",
    "Influencer Marketing",
  ],
  [
    "Marketing Collateral Design",
    "Organic & Performance Marketing",
    "Community Management",
    "Email Marketing & Automation",
  ],
];

export default function MarketingComponentsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#000048]">
          Marketing Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-base text-black">
          {columns.map((items, colIndex) => (
            <div key={colIndex} className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-blue-600 md:hidden" />
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-600 hidden md:block" />
              <div className="space-y-4 px-6">
                {items.map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <Image
                      src="/images/arrow.webp"
                      alt=""
                      width={16}
                      height={16}
                      style={{ width: "auto", height: "auto" }}
                      className="transform transition-transform group-hover:translate-x-1"
                    />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
