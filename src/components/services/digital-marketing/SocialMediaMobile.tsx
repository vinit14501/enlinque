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

export default function SocialMediaMobile() {
  return (
    <div className="relative w-full block md:hidden">
      <div className="flex flex-col">
        {panels.map((panel, index) => (
          <div key={index} className="w-full relative mb-4">
            <div className="h-48 relative">
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-xl font-bold text-white text-center z-10">
                  {panel.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
