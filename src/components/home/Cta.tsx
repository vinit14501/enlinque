"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

export default function Cta() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <Image
        src="/images/cta.webp"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Explore Our Fractional CxO Services
          </h2>
          <Link href="/fractionalCxO" className="inline-block mx-auto">
            <Button icon={ArrowRight}>Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
