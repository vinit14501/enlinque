"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

export default function Cta3() {
  return (
    <div className="relative w-full h-75 sm:h-87.5 md:h-100 overflow-hidden">
      <Image
        src="/images/cta3.webp"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 flex justify-center"
      >
        <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/85 p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="text-left text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
              Building Websites with Purpose and Performance
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
              That Elevate Brands and Engage Audiences
            </p>
            <Link href="/websitedevelopment" className="inline-block">
              <Button icon={ArrowRight}>Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
