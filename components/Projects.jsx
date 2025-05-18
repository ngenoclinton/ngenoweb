"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Lock, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Little Market Nursery & School Club",
    description:
      "A modern, responsive website for a children's nursery featuring online registration, parent resources, and administrative tools.",
    images: [
      "/projects/little-market-2.jpeg",
      // "/projects/little-market-2.jpeg?text=Registration+Form",
      // "/projects/little-market-2.jpeg?text=Parent+Portal",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "EmailJS", "Vercel"],
    liveLink: "https://little-market-nursery.vercel.app/",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview:
        "A comprehensive digital solution for a children's nursery, providing parents with easy access to registration, resources, and school information.",
      features: [
        "Online registration system",
        "Digital document submission",
        "Staff profiles and photo gallery",
        "Unified email template system",
        "Club registration and management",
      ],
      challenges:
        "Implemented a secure document handling system while ensuring an intuitive interface for parents with varying technical abilities. Created a unified email template system for consistent communication.",
    },
  },
  {
    id: 2,
    title: "Pellets Analytics",
    description:
      "A comprehensive data analytics landing page for a client company, featuring consultation and employee training services.",
    images: [
      "/projects/pellets-landing.jpeg",
      // "/projects/pelltes-landing.jpeg?text=Services+Section",
      // "/projects/pelltes-landing.jpeg?text=Team+Profiles",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "EmailJS",
      "Vercel",
    ],
    liveLink: "https://pelletsdata.co.ke/",
    githubLink: "#",
    isPrivateRepo: true,
    liveStatus: "Active",
    details: {
      overview:
        "A professional data analytics platform designed for Pellets Data Analysts, a client company specializing in transforming complex data into actionable business insights.",
      features: [
        "Responsive contact and consultation system",
        "Service showcase with animated elements",
        "Team member profiles highlighting expertise",
        "Client testimonials and case studies section",
        "Comprehensive contact form with validation",
      ],
      challenges:
        "Balanced visual appeal with performance optimization while making complex data concepts accessible to non-technical users. Designed responsive components that maintain functionality across all devices.",
    },
  },
  {
    id: 3,
    title: "Bulk SMS Web Platform",
    description: "A robust messaging platform for sending customized bulk SMS and managing voice call campaigns.",
    images: [
      "/projects/bulksms_LP.jpeg",
      "/projects/Bulk_dash.jpeg",
      // "/projects/bulksms_LP.jpeg?text=Analytics+Dashboard",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion","JavaScript",],
    liveLink: "https://bulk-manager-fdpt6ialn-ngenoclintons-projects.vercel.app/",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview:
        "An enterprise-grade communication tool enabling businesses to reach clients via SMS and voice calls with efficiency and scalability.",
      features: [
        "SMS scheduling and delivery status tracking",
        "Voice call campaign interface with reporting",
        "User-friendly dashboard with real-time insights",
        "Contact list import/export and management",
        "Secure user authentication and role management",
      ],
      challenges:
        "Developed reliable message delivery systems with asynchronous processing for voice calls. Created an intuitive UX for complex campaign setup and analytics reporting.",
    },
  },
]

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-1">
              {/* <div className="relative h-64 md:h-auto">
                <img
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex}`}
                  className="w-full h-full object-cover"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(idx)
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div> */}

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-gray-600">{project.details.overview}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {project.details.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenges & Solutions</h4>
                  <p className="text-gray-600">{project.details.challenges}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#009689] text-white px-4 py-2 rounded-md hover:bg-[#027e6f] transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>

                  {project.isPrivateRepo ? (
                    <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md opacity-75 cursor-not-allowed">
                      Private Repo <Lock size={16} />
                    </div>
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [visibleProjects, setVisibleProjects] = useState(4)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Lock scroll
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "" // Unlock scroll
  }

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-[#55e6a5] mx-auto"></div>
      </motion.div>

      <div className="space-y-24">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[70vh] md:h-[60vh] rounded-xl overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 z-10 transition-opacity duration-500 ${
                hoveredProject === project.id ? "opacity-50" : "opacity-80"
              }`}
            ></div>

            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.images[0]})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />

            <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-md p-8 rounded-xl max-w-md w-full mb-12 ml-0 md:ml-8"
              >
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-200 mb-8">{project.description}</p>

                <motion.button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-2 bg-[#55e6a5] text-[#121212] font-medium px-6 py-3 rounded-md transition-all hover:bg-[#009689] hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project <ExternalLink size={18} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-16">
          <motion.button
            onClick={loadMoreProjects}
            className="inline-flex items-center gap-2 bg-[#121212] text-white font-medium px-8 py-4 rounded-md transition-all hover:bg-[#333]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </div>
      )}

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Projects
