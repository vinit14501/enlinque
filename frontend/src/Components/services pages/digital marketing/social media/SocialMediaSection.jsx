import SocialMediaDesktop from "./SocialMediaDesktop"
import SocialMediaMobile from "./SocialMediaMobile"

const SocialMediaSection = () => {
  return (
    <div className="relative w-full bg-white">
      <SocialMediaMobile />
      <SocialMediaDesktop />
    </div>
  )
}

export default SocialMediaSection
