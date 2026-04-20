import Image from "next/image";

const panels = [
  {
    title: "Social media platforms",
    image: "/images/social.webp",
    alt: "Corporate Branding",
  },
  { title: "SEO", image: "/images/seo.webp", alt: "Hotel Branding" },
  {
    title: "Content writing",
    image: "/images/writing.webp",
    alt: "eCommerce Branding",
  },
  {
    title: "Analytics",
    image: "/images/analytics.webp",
    alt: "Healthcare Branding",
  },
  {
    title: "Branding",
    image: "/images/branding.webp",
    alt: "Construction Company Branding",
  },
];

export default function SocialMediaDesktop() {
  return (
    <div className="relative w-full hidden md:block">
      <div className="relative w-full" style={{ clipPath: "url(#wave-clip)" }}>
        <div className="flex flex-row">
          {panels.map((panel, index) => (
            <div key={index} className="w-1/5 relative">
              <div className="h-125 lg:h-150 xl:h-175 relative">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#000048] text-center mb-32">
                    {panel.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg className="absolute -bottom-1 w-0 h-0">
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.1 L0,0.1 Q0.5,0.2 1,0.1 L1,0.9 Q0.5,0.8 0,0.9 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
