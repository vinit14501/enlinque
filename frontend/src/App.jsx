import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./common/Navbar"
import Footer from "./common/Footer"
import { Toaster } from "react-hot-toast"

const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const FractionalCxoPage = lazy(() => import("./pages/FractionalCxoPage"))
const WebsiteDevelopmentPage = lazy(() => import("./pages/WebsiteDevelopmentPage"))
const DigitalMarketingPage = lazy(() => import("./pages/DigitalMarketingPage"))
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"))
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage"))

export default function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/fractionalCxO" element={<FractionalCxoPage />} />
                <Route path="/websitedevelopment" element={<WebsiteDevelopmentPage />} />
                <Route path="/digitalmarketing" element={<DigitalMarketingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsConditionsPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}
