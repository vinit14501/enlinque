// No "use client" needed — native <details>/<summary> works without JavaScript.
// Google and all crawlers index content inside <details> elements.
// CSS class "faq-item" drives the open animation (defined in globals.css).
import { ChevronDown, ClipboardCheck } from "lucide-react";
const faqData = [
  {
    title: "What services does Enlinque offer?",
    content:
      "Enlinque provides IT consulting, marketing consulting, e-commerce solutions, speed-to-market solutions tailored for startups and businesses in various industries to name a few.",
  },
  {
    title: "Do you only work with startups?",
    content:
      "No, while we specialize in helping startups and provide fractional CxO services, we also work with businesses of all sizes and industries to address their IT and marketing needs.",
  },
  {
    title: "Where are you located, and do you work with international clients?",
    content:
      "Enlinque is headquartered at 1597 Washington Pike STE A38-151, Bridgeville, PA 15017, USA, and partners with clients worldwide, ensuring smooth communication and effective collaboration across borders.",
  },
  {
    title: "Can you help us choose the right technology stack for our startup?",
    content:
      "Yes, we analyze your business needs and recommend the most suitable, scalable, and cost-effective technology stack to support your growth.",
  },
  {
    title: "What marketing consulting services do you provide?",
    content:
      "We offer comprehensive marketing consulting, including growth strategy development, ROI-focused campaigns, content marketing, SEO, digital advertising, and performance analytics. Our goal is to build and execute tailored strategies that drive measurable results, such as increased traffic, conversions, and customer retention.",
  },
  {
    title: "How does your consulting process work?",
    content:
      "We follow a proven success path: Pinpoint, Prioritize, Plan, Propel, and Perfect. This ensures clarity, alignment, and tangible results at every stage.",
  },
  {
    title: "What industries do you specialize in?",
    content:
      "We have experience working with e-commerce, technology, healthcare, and various other industries, but we adapt to the needs of any business.",
  },
];

export default function FaqPage() {
  return (
    <div className="pt-24 pb-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ClipboardCheck className="w-6 h-6 text-blue-600" />
          <span className="text-base font-medium text-blue-600">
            Pre-Service Questions
          </span>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-base text-gray-600 mb-8">
          Have questions? We&apos;re here to help! Check out our most commonly
          asked questions below.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            /*
             * <details>/<summary> provides full keyboard/screen-reader support and
             * works entirely without JavaScript. Google indexes content inside
             * <details> regardless of open/closed state (confirmed by Google 2024).
             * The CSS class "faq-item" hooks into the open animation in globals.css.
             */
            <details
              key={index}
              className="group border border-blue-100 rounded-lg overflow-hidden hover:border-blue-200 transition-colors duration-300 faq-item open:border-blue-200"
            >
              <summary className="p-4 flex justify-between items-center cursor-pointer bg-white list-none">
                <h3 className="text-base font-medium text-gray-800 group-open:text-blue-600 transition-colors duration-300 pr-4">
                  {faq.title}
                </h3>
                <div className="text-blue-500 transition-transform duration-300 group-open:rotate-180 shrink-0">
                  <ChevronDown size={24} />
                </div>
              </summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed bg-white faq-content">
                {faq.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
