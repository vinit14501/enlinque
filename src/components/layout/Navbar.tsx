"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Laptop,
  Megaphone,
  Code,
  ShoppingCart,
  Gauge,
  ListChecks,
} from "lucide-react";
import Button from "@/components/common/Button";

const services = [
  {
    label: "IT Consulting",
    to: "/services/it-consulting",
    icon: Laptop,
    description: "Technology strategy aligned to your business goals",
  },
  {
    label: "Digital Marketing",
    to: "/services/digital-marketing",
    icon: Megaphone,
    description: "Data-driven campaigns that maximize ROI",
  },
  {
    label: "Software Development",
    to: "/services/software-development",
    icon: Code,
    description: "Custom software from MVP to full-scale",
  },
  {
    label: "E-commerce Solution",
    to: "/services/ecommerce-solution",
    icon: ShoppingCart,
    description: "End-to-end e-commerce launch and growth",
  },
  {
    label: "Digital Transformation",
    to: "/services/digital-transformation",
    icon: Gauge,
    description: "Modernize operations with innovative digital solutions",
  },
  {
    label: "Agile Implementation",
    to: "/services/agile-implementation",
    icon: ListChecks,
    description: "Streamline processes and accelerate delivery",
  },
];

const navLinks = [
  { label: "Fractional CxO", to: "/fractionalCxO" },
  { label: "Website Development", to: "/websitedevelopment" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Adjust state during render instead of inside an effect to avoid cascading
  // renders. React docs: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
  }

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const scrollToServices = useCallback(() => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 0;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else if (pathname !== "/") {
      router.push("/#services");
    }
  }, [pathname, router]);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) window.scrollTo(0, 0);
    if (hash === "#services" && pathname === "/") {
      setTimeout(() => scrollToServices(), 100);
    }
  }, [pathname, scrollToServices]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleContactClick = () => {
    router.push("/contact");
    window.scrollTo(0, 0);
    if (isOpen) setIsOpen(false);
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    if (isOpen) setIsOpen(false);
  };

  const handleServiceClick = () => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo(0, 0);
    if (isOpen) setIsOpen(false);
  };

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 flex items-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative h-12 sm:h-16 lg:h-20 aspect-5/2 transition-all duration-200">
                <Image
                  src="/images/logo.webp"
                  alt="Enlinque Consulting logo"
                  fill
                  className="object-contain"
                  unoptimized
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-4">
              <div className="flex items-center space-x-1 xl:space-x-3">
                {/* Services Dropdown */}
                <div
                  className="relative"
                  ref={servicesRef}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className="flex items-center gap-1 px-2 py-2 text-black font-semibold font-raleway hover:text-blue-600 transition-colors duration-300 group relative text-sm xl:text-base tracking-wide whitespace-nowrap focus:outline-none"
                  >
                    Services
                    <ChevronDown
                      size={15}
                      className={`mt-px transition-transform duration-200 ${servicesOpen ? "rotate-180 text-blue-600" : ""}`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        role="menu"
                        aria-label="Services menu"
                        className="absolute top-full left-0 pt-2 w-125 z-50"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 grid grid-cols-2 gap-1.5">
                          {services.map((service) => (
                            <Link
                              key={service.label}
                              href={service.to}
                              onClick={handleServiceClick}
                              role="menuitem"
                              className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group/item"
                            >
                              <service.icon
                                size={18}
                                className="text-[#0b60a0] shrink-0 mt-0.5"
                              />
                              <span>
                                <span className="block text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors font-raleway leading-tight">
                                  {service.label}
                                </span>
                                <span className="block text-xs text-gray-500 mt-0.5 leading-snug">
                                  {service.description}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other nav links */}
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.to}
                    onClick={handleNavLinkClick}
                    className="px-2 py-2 text-black font-semibold font-raleway hover:text-blue-600 transition-colors duration-300 group relative text-sm xl:text-base tracking-wide whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button onClick={handleContactClick}>Contact Us</Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 sm:h-20 lg:h-24 transition-all duration-200" />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black bg-opacity-50 z-60"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-70 sm:w-[320px] bg-white shadow-xl z-70 overflow-y-auto"
            >
              <div className="sticky top-0 flex justify-end p-4 bg-white">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-800" />
                </button>
              </div>

              <div className="px-4 py-2">
                {/* Services accordion */}
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  aria-expanded={mobileServicesOpen}
                  className="w-full flex items-center justify-between py-3 px-4 text-base sm:text-lg font-medium font-raleway text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-blue-600" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-1 mb-2 flex flex-col gap-0.5">
                        {services.map((service) => (
                          <Link
                            key={service.label}
                            href={service.to}
                            onClick={handleServiceClick}
                            className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm font-medium font-raleway text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            <service.icon size={15} className="text-[#0b60a0] shrink-0" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Other nav links */}
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.to}
                    onClick={handleNavLinkClick}
                    className="block py-3 px-4 text-base sm:text-lg font-medium font-raleway text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}

                <Button onClick={handleContactClick} className="w-full mt-4">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
