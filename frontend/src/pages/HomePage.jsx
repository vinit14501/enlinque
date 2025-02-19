import Services from "../Components/home/Services"
import Testimonials from "../Components/home/Testimonials"
import Quotes from "../Components/home/Quotes"
import Text from "../Components/home/Text"
import Hero from "../Components/home/Hero"
import Cta from "../Components/home/Cta"
import Cta3 from "../Components/home/Cta3"
import Faq from "../Components/home/Faq"
import ContactCta from "../Components/contact cta/ContactCta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Text />
      <Cta />
      <Services />
      <Cta3 />
      <Faq />
      <Quotes />
      <Testimonials />
      <ContactCta />
    </>
  )
}
