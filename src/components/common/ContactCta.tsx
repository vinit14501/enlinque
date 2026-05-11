import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

export default function ContactCta() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 bg-[#0b60a0] relative animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-raleway text-white mb-3 sm:mb-4 animate-fade-in-up animate-stagger-1">
          Ready to Transform Your Vision Into Reality?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/90 font-raleway mb-4 sm:mb-5 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
          Your idea deserves a partner that can keep up with your ambition. Let’s build something extraordinary together
        </p>

        <Link
          href="/contact"
          className="inline-block animate-fade-in-up animate-stagger-3"
        >
          <Button variant="secondary" icon={ArrowRight}>
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
