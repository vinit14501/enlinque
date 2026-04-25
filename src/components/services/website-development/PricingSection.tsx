"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { pricingPlans } from "@/components/services/website-development/pricingPlans";
import PlanModal from "@/components/common/PlanModal";
import Button from "@/components/common/Button";

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    description: string;
    price: number;
    isStartingPrice?: boolean;
  } | null>(null);

  const handlePlanSelection = (plan: {
    name: string;
    description: string;
    price: number;
    isStartingPrice?: boolean;
  }) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section
      id="pricing-section"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000048] tracking-tight">
            Pricing Plans
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full group"
            >
              <div className="bg-gray-50 p-8 rounded-t-lg border-b border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#000048] group-hover:text-blue-600 transition-colors">
                  {plan.name}
                </h3>
                <p className="text-black mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex flex-col h-14 justify-end">
                  {plan.isStartingPrice && (
                    <span className="text-sm text-gray-600 mb-1">
                      Starting at
                    </span>
                  )}
                  {!plan.isStartingPrice && <div className="mb-1" />}
                  <div className="flex items-baseline">
                    <p className="text-3xl md:text-4xl font-bold text-blue-600">
                      ${plan.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 bg-white border-b border-gray-100 flex justify-center">
                {/*
                 * href="/contact" gives crawlers and ad-platform bots a valid,
                 * resolvable destination. JavaScript intercepts the click to open
                 * the plan modal instead, providing the richer UX when JS is on.
                 */}
                <Link
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePlanSelection(plan);
                  }}
                >
                  <Button>Choose Plan</Button>
                </Link>
              </div>

              <div className="bg-white px-8 py-6">
                <h4 className="font-semibold text-lg mb-6 text-[#000048] border-b border-gray-100 pb-3">
                  Features
                </h4>
                <ul className="space-y-4 text-black">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-base group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <Check
                        className="text-blue-600 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 px-8 py-6 mt-auto rounded-b-lg">
                <h4 className="font-semibold text-lg mb-6 text-[#000048] border-b border-gray-100 pb-3">
                  Additional Services
                </h4>
                <ul className="space-y-4 text-black">
                  {plan.additionalServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-center text-base group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <Plus className="text-blue-600 mr-3 shrink-0" size={16} />
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}
