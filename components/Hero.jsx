"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Code, Layers, Zap } from "lucide-react"

const Hero = () => {
  const canvasRef = useRef(null)

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = []
    const particleCount = 50

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: i % 3 === 0 ? "#55e6a5" : i % 3 === 1 ? "#009689" : "#027e6f",
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      })
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121212]">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#121212]/90 to-[#121212]/80 z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#009689]/20 blur-3xl z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#55e6a5]/10 blur-3xl z-10"></div>

      <div className="absolute top-1/4 right-1/4 w-1 h-20 bg-[#ff2143]/30 z-10"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-1 bg-[#55e6a5]/30 z-10"></div>

      {/* Content container */}
      <div className="container relative mx-auto px-6 md:px-12 pt-32 pb-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffffff]/5 text-[#55e6a5] text-sm font-medium mb-6">
              <span className="animate-pulse mr-2">●</span> Available for freelance work
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#55e6a5] to-[#009689]">
                Clinton
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
              Building <span className="text-[#ff2143]">exceptional</span> digital experiences
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              A passionate Web Developer focused on creating intuitive, responsive, and high-performance web
              applications that deliver outstanding user experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-[#55e6a5] text-[#121212] font-medium px-6 py-3 rounded-md transition-all hover:bg-[#55e6a5]/90"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-transparent text-white border border-[#55e6a5]/30 font-medium px-6 py-3 rounded-md transition-all hover:border-[#55e6a5]"
                >
                  Download CV <Download size={18} />
                </a>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right column - Visual elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Code block decoration */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-10 top-0 p-6 bg-[#1a1a1a] rounded-lg border border-[#333] shadow-xl"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff2143] mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#55e6a5]"></div>
                </div>
                <pre className="text-[#55e6a5] text-sm">
                  <code>
                    {`const developer = {
  name: 'Clinton',
  skills: ['React', 'Next.js', 'TailwindCSS'],
  passion: 'Building amazing web experiences'
};`}
                  </code>
                </pre>
              </motion.div>

              {/* Skill cards */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute right-0 top-20 p-4 bg-[#1a1a1a] rounded-lg border border-[#333] shadow-xl"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-[#009689]/20 rounded-lg mr-3">
                    <Code size={20} className="text-[#009689]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Clean Code</h3>
                    <p className="text-white/50 text-sm">Maintainable & efficient</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute right-20 bottom-20 p-4 bg-[#1a1a1a] rounded-lg border border-[#333] shadow-xl"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-[#55e6a5]/20 rounded-lg mr-3">
                    <Layers size={20} className="text-[#55e6a5]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Modern Design</h3>
                    <p className="text-white/50 text-sm">Beautiful interfaces</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute left-20 bottom-0 p-4 bg-[#1a1a1a] rounded-lg border border-[#333] shadow-xl"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-[#ff2143]/20 rounded-lg mr-3">
                    <Zap size={20} className="text-[#ff2143]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Performance</h3>
                    <p className="text-white/50 text-sm">Lightning fast apps</p>
                  </div>
                </div>
              </motion.div>

              {/* Central element */}
              <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-[#009689] to-[#55e6a5] opacity-20 blur-2xl"></div>
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-dashed border-[#55e6a5]/30 flex items-center justify-center animate-spin-slow">
                <div className="w-48 h-48 rounded-full border-4 border-[#009689]/40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#55e6a5]">C</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-4 rounded-lg bg-[#ffffff]/5">
            <h3 className="text-3xl font-bold text-[#55e6a5] mb-1">5+</h3>
            <p className="text-white/70">Years Experience</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-[#ffffff]/5">
            <h3 className="text-3xl font-bold text-[#55e6a5] mb-1">50+</h3>
            <p className="text-white/70">Projects Completed</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-[#ffffff]/5">
            <h3 className="text-3xl font-bold text-[#55e6a5] mb-1">30+</h3>
            <p className="text-white/70">Happy Clients</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-[#ffffff]/5">
            <h3 className="text-3xl font-bold text-[#55e6a5] mb-1">100%</h3>
            <p className="text-white/70">Client Satisfaction</p>
          </div>
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <p className="text-white/50 text-sm mb-2">Scroll Down</p>
          <div className="w-5 h-10 rounded-full border border-white/20 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-[#55e6a5] mt-1"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
