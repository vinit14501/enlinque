import { motion } from "framer-motion"
import { HiDocument } from "react-icons/hi"
import { privacyPolicyData } from "./privacyPolicyData"

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 bg-gradient-to-r from-[#000048] to-[#0b60a0]"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <HiDocument className="text-4xl text-white" />
          <h1 className="text-4xl font-bold text-white">
            {privacyPolicyData.title}
          </h1>
        </div>
        <p className="text-white/90 max-w-3xl mx-auto px-4">
          {privacyPolicyData.introduction}
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {privacyPolicyData.sections.map((section) => (
          <motion.section
            key={section.id}
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-[#000048] mb-4">
              {section.title}
            </h2>

            {section.subsections ? (
              section.subsections.map((subsection, index) => (
                <div
                  key={index}
                  className="mb-6"
                >
                  <h3 className="text-xl font-medium text-[#0b60a0] mb-3">
                    {subsection.title}
                  </h3>
                  <p className="text-black mb-2">{subsection.content}</p>
                  {subsection.items && (
                    <ul className="list-disc pl-6 space-y-2">
                      {subsection.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-black"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <>
                <p className="text-black mb-2">{section.content}</p>
                {section.items && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.additional && (
                  <p className="text-black mt-4">{section.additional}</p>
                )}
                {section.contact && (
                  <div className="mt-4">
                    <p className="font-bold">{section.contact.company}</p>
                    <p>{section.contact.email}</p>
                  </div>
                )}
              </>
            )}
          </motion.section>
        ))}
      </motion.div>
    </div>
  )
}
