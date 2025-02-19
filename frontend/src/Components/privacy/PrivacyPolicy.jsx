import { motion } from "framer-motion"
import { privacyPolicyData } from "./PrivacyPolicyData"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-16 md:px-24 lg:px-32 py-12 max-w-5xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold text-[#000048] mb-4">
            Privacy Policy
          </h1>

          <p className="text-[#0b60a0] text-lg font-normal mb-6 leading-7">
            {privacyPolicyData.introduction}
          </p>

          <div className="space-y-7">
            {privacyPolicyData.sections.map((section, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-[#000048] mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-[#0b60a0] text-lg font-normal mb-4 leading-7 max-w-3xl">
                    {section.content}
                  </p>
                )}

                {section.subsections?.map((subsection, subIndex) => (
                  <div
                    key={subIndex}
                    className="mb-4"
                  >
                    <h3 className="text-2xl font-medium text-[#000048] mb-4">
                      {subsection.subtitle}
                    </h3>
                    <p className="text-[#0b60a0] mb-4 leading-7 max-w-3xl">
                      {subsection.content}
                    </p>
                    {subsection.list && (
                      <ul className="list-disc pl-6 space-y-3 text-[#0b60a0] max-w-3xl">
                        {subsection.list.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="leading-7"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-[#0b60a0] max-w-3xl">
                    {section.list.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="leading-7"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.additional && (
                  <p className="text-[#0b60a0] mt-4 leading-7 max-w-3xl">
                    {section.additional}
                  </p>
                )}

                {section.contact && (
                  <div className="mt-4 flex flex-col text-[#0b60a0] space-y-2">
                    <p className="leading-7">{section.contact.company}</p>
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="hover:text-[#000048] transition-colors duration-300"
                    >
                      {section.contact.email}
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
