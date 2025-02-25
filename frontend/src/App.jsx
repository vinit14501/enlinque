import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FractionalCxoPage from "./pages/FractionalCxoPage"
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage"
import { Toaster } from "react-hot-toast"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsConditionsPage from "./pages/TermsConditionsPage"
import DigitalMarketingPage from "./pages/DigitalMarketingPage"
// import FaqPage from "./pages/FaqPage"

export default function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/about"
                element={<AboutPage />}
              />
              {/* <Route
              path="/faq"
              element={<FaqPage />}
            /> */}
              <Route
                path="/contact"
                element={<ContactPage />}
              />
              <Route
                path="/fractionalCxO"
                element={<FractionalCxoPage />}
              />
              <Route
                path="/websitedevelopment"
                element={<WebsiteDevelopmentPage />}
              />
              <Route
                path="/digitalmarketing"
                element={<DigitalMarketingPage />}
              />
              <Route
                path="/privacy-policy"
                element={<PrivacyPolicyPage />}
              />
              <Route
                path="/terms-of-service"
                element={<TermsConditionsPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}
