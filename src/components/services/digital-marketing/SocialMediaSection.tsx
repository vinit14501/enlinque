import SocialMediaDesktop from "@/components/services/digital-marketing/SocialMediaDesktop";
import SocialMediaMobile from "@/components/services/digital-marketing/SocialMediaMobile";

export default function SocialMediaSection() {
  return (
    <div className="relative w-full bg-white">
      <SocialMediaMobile />
      <SocialMediaDesktop />
    </div>
  );
}
