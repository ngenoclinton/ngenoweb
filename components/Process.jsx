"use client"

import { motion } from "framer-motion"
import { Lightbulb, PenTool, Code } from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    id: 1,
    title: "Plan",
    icon: <Lightbulb size={24} />,
    description:
      "I start by understanding your requirements, researching your industry, and planning the architecture of your project.",
    details: ["Requirement gathering", "Market research", "Architecture planning"],
  },
  {
    id: 2,
    title: "Design",
    icon: <PenTool size={24} />,
    description:
      "I create wireframes and design mockups that align with your brand identity and provide the best user experience.",
    details: ["Wireframing", "UI/UX design", "Responsive layouts"],
  },
  {
    id: 3,
    title: "Develop",
    icon: <Code size={24} />,
    description:
      "I build your application using modern technologies and best practices to ensure scalability, performance, and security.",
    details: ["Clean code architecture", "Performance optimization", "Testing and debugging"],
  },
]
const Process = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Heading and intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-medium text-[#009689] uppercase tracking-wider mb-4">MY PROCESS</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Transform your website dreams into a reality in just a few simple steps.
          </h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#121212] text-white px-6 py-3 rounded-md transition-all hover:bg-[#333]"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 1L15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column - Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 p-2 bg-gray-100 rounded-md mr-4">{step.icon}</div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>

              <p className="text-gray-600 mb-4">{step.description}</p>

              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#55e6a5] mr-2">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Process
