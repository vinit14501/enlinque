import Image from "next/image";
import { CircleCheck, RefreshCw, Lightbulb, Handshake } from "lucide-react";

const valueDetails = [
  {
    icon: CircleCheck,
    title: "Reliability",
    description:
      "Consistent and dependable delivery of high-quality services with accuracy and timely completion.",
  },
  {
    icon: RefreshCw,
    title: "Flexibility",
    description:
      "Adapting seamlessly to changing business needs and market demands with scalable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    description:
      "Bringing specialized skills and industry knowledge to tackle complex tasks efficiently.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Promoting open communication, transparency, and teamwork for shared goals and success.",
  },
];

export default function ValuesSection() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-green-800 mb-12">Our Values</h2>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl px-4 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl relative min-h-80">
          <Image
            src="/images/value.webp"
            alt="Company Values"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
          {valueDetails.map((value, index) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow-md border border-green-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <value.icon className="text-green-700 h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {value.title}
              </h3>
              <p className="text-green-900 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
