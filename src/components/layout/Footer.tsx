import Link from "next/link";
import { Mail } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import FooterServiceLink from "@/components/common/FooterServiceLink";

const services = [
  { label: "Website Development", path: "/services/website-development" },
  { label: "Digital Marketing", path: "/services/digital-marketing" },
  { label: "Fractional CxO", path: "/fractionalCxO" },
  { label: "IT Consulting", path: "/services/it-consulting" },
  { label: "Software Development", path: "/services/software-development" },
  { label: "E-Commerce", path: "/services/ecommerce-solution" },
  { label: "Digital Transformation", path: "/services/digital-transformation" },
  { label: "Agile Implementation", path: "/services/agile-implementation" },
];

const resources = [
  { label: "About", path: "/about" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of service", path: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000048] text-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-4 space-y-3 animate-fade-in-up animate-stagger-1">
            <p className="text-2xl font-bold">Enlinque Consulting</p>
            <p className="text-white text-lg font-medium">
              Where speed meets strategy
            </p>
          </div>

          {/* Right side sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
            {/* Services */}
            <div className="space-y-4 animate-fade-in-up animate-stagger-2">
              <h3 className="text-2xl font-bold tracking-wide">Services</h3>
              <ul className="space-y-2.5">
                {services.map((service, index) => (
                  <li key={index} className="text-sm">
                    {service.path.startsWith("/#") ? (
                      <FooterServiceLink
                        path={service.path}
                        className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-200"
                      >
                        {service.label}
                      </FooterServiceLink>
                    ) : (
                      <Link
                        href={service.path}
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        {service.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4 animate-fade-in-up animate-stagger-3">
              <h3 className="text-2xl font-bold tracking-wide">Company</h3>
              <ul className="space-y-2.5">
                {resources.map((resource, index) => (
                  <li key={index} className="text-sm">
                    <Link
                      href={resource.path}
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 animate-fade-in-up animate-stagger-4">
              <h3 className="text-2xl font-bold tracking-wide">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="text-white text-xl shrink-0" />
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@enlinque.com"}`}
                    className="text-white hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
                      "contact@enlinque.com"}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <LinkedinIcon className="text-white text-xl shrink-0" />
                  <a
                    href={
                      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                      "https://linkedin.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Enlinque Consulting LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
