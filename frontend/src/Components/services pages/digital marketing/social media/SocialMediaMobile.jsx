import seo from "../../../../assets/seo.webp"
import writing from "../../../../assets/writing.webp"
import branding from "../../../../assets/branding.webp"
import analytics from "../../../../assets/analytics.webp"
import social from "../../../../assets/social.webp"

const SocialMediaMobile = () => {
  const panels = [
    {
      title: "Social media platforms",
      image: social,
      alt: "Corporate Branding",
    },
    {
      title: "SEO",
      image: seo,
      alt: "Hotel Branding",
    },
    {
      title: "Content writing",
      image: writing,
      alt: "eCommerce Branding",
    },
    {
      title: "Analytics",
      image: analytics,
      alt: "Healthcare Branding",
    },
    {
      title: "Branding",
      image: branding,
      alt: "Construction Company Branding",
    },
  ]

  return (
    <div className="relative w-full block md:hidden">
      <div className="flex flex-col">
        {panels.map((panel, index) => (
          <div
            key={index}
            className="w-full relative mb-4"
          >
            <div
              className="h-48 relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${panel.image})`,
              }}
            >
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
  )
}

export default SocialMediaMobile
