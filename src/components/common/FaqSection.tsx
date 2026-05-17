import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  heading?: string;
}

export default function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
}: FaqSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#000048] mb-12">
          {heading}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-blue-100 rounded-lg overflow-hidden hover:border-blue-200 transition-colors duration-300 faq-item open:border-blue-200"
            >
              <summary className="p-4 flex justify-between items-center cursor-pointer bg-white list-none">
                <h3 className="text-base font-medium text-gray-800 group-open:text-blue-600 transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className="text-blue-500 transition-transform duration-300 group-open:rotate-180 shrink-0">
                  <ChevronDown size={24} />
                </div>
              </summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed bg-white faq-content">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}