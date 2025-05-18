"use client"

import { useEffect, useState, useRef } from "react"
import { useScroll } from "framer-motion"
import Loader from "@/components/Loader"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Process from "@/components/Process"
import Experience from "@/components/Experience"
import About from "@/components/About"
import Contact from "@/components/Contact"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const mainRef = useRef(null)

  // Set active section based on scroll position
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />

      <main ref={mainRef}>
        <ScrollProgress scrollYProgress={scrollYProgress} />

        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="projects" className="min-h-screen py-20 pt-32">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen py-20 pt-32 bg-gray-50">
          <Experience />
        </section>

        <section id="process" className="min-h-screen py-20 pt-32">
          <Process />
        </section>

        <section id="about" className="min-h-screen py-20 pt-32 bg-gray-50">
          <About />
        </section>

        <section id="contact" className="min-h-screen py-20 pt-32">
          <Contact />
        </section>
      </main>
    </div>
  )
}
