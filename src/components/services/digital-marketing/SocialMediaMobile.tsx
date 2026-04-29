import Image from "next/image";
import { socialMediaPanels } from "@/components/services/digital-marketing/socialMediaPanels";

export default function SocialMediaMobile() {
  return (
    <div className="relative w-full block md:hidden">
      <div className="flex flex-col">
        {socialMediaPanels.map((panel, index) => (
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
