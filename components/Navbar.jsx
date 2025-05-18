"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "process", label: "Process" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#121212]/90 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/#home" className="flex items-center space-x-2">
              <div className="bg-[#55e6a5] w-10 h-10 flex items-center justify-center text-[#121212] font-bold text-xl rounded">
                C
              </div>
              <span className={`text-xl font-bold ${scrolled ? "text-white" : "text-white"}`}>Clinton</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={`nav-link text-white hover:text-[#55e6a5] transition-colors ${
                        activeSection === item.id ? "text-[#55e6a5]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex space-x-4">
              <a
                href="https://github.com/ngenoclinton/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#55e6a5] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kipkoech-clinton-1b5b60354/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#55e6a5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-white md:hidden focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[#121212] pt-20"
        >
          <div className="container mx-auto px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-medium ${
                      activeSection === item.id ? "text-[#55e6a5]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#55e6a5] transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#55e6a5] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
