"use client"

import { motion } from "framer-motion"
import { Lightbulb, PenTool, Code } from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    id: 1,
    title: "CONCEPT",
    icon: <Lightbulb size={24} />,
    description:
      "Say goodbye to the hassle of managing multiple providers and get an all-in-one website solution that covers design, development, and content creation.",
    details: ["Reviewing any existing branding", "Target audience and competitors research", "Developing a strategy"],
  },
  {
    id: 2,
    title: "DESIGN",
    icon: <PenTool size={24} />,
    description:
      "Say goodbye to the hassle of managing multiple providers and get an all-in-one website solution that covers design, development, and content creation.",
    details: ["Reviewing any existing branding", "Target audience and competitors research", "Developing a strategy"],
  },
  {
    id: 3,
    title: "DEVELOPMENT",
    icon: <Code size={24} />,
    description:
      "Say goodbye to the hassle of managing multiple providers and get an all-in-one website solution that covers design, development, and content creation.",
    details: ["Reviewing any existing branding", "Target audience and competitors research", "Developing a strategy"],
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
