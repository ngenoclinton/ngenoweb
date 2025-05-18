"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Briefcase, User, Mail, Menu, X, Github, Linkedin } from "lucide-react"

const Sidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={20} /> },
    { id: "about", label: "About Me", icon: <User size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-[#121212] text-white md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar for desktop */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 h-full w-[250px] bg-[#121212] text-white z-40 hidden md:block"
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link href="/#home" className="flex items-center space-x-2">
              <div className="bg-[#55e6a5] w-10 h-10 flex items-center justify-center text-[#121212] font-bold text-xl">
                C
              </div>
              <span className="text-xl font-bold">Clinton</span>
            </Link>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`nav-link flex items-center space-x-4 p-2 ${
                      activeSection === item.id ? "text-[#55e6a5]" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-700">
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#121212] z-40 md:hidden"
        >
          <div className="flex flex-col h-full pt-16">
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`nav-link flex items-center space-x-4 p-2 ${
                        activeSection === item.id ? "text-[#55e6a5]" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-6 border-t border-gray-700">
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Sidebar
