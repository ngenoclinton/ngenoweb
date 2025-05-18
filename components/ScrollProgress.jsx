"use client"

import { motion } from "framer-motion"

const ScrollProgress = ({ scrollYProgress }) => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Back to top"
    >
      <svg className="w-16 h-16" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-[#55e6a5] stroke-[8px] fill-none"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div className="absolute text-sm font-medium text-gray-800">TOP</div>
    </motion.div>
  )
}

export default ScrollProgress
