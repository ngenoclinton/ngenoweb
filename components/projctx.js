"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Lock, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Agri Marketplace",
    description: "A B2B digital marketplace where fair food trade is made easy, fast and transparent.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=Agri+Dashboard",
      "/placeholder.svg?height=600&width=1200&text=Agri+Mobile",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview: "A digital B2B market solution that brings together Farmers and Industrial Buyers.",
      features: [
        "Global marketplace for agricultural products",
        "Secure online payment processing",
        "Product quality verification",
        "End-to-end logistics services",
        "Real-time bidding and negotiation",
        "Verified buyer and seller profiles",
      ],
      challenges:
        "Implemented a secure bidding system with real-time updates using WebSockets. Developed a logistics tracking system that integrates with multiple service providers while maintaining data consistency.",
    },
  },
  {
    id: 2,
    title: "Construction Management Platform",
    description: "A comprehensive project management solution for real estate and construction projects.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=Construction+Timeline",
      "/placeholder.svg?height=600&width=1200&text=Budget+Dashboard",
    ],
    technologies: ["React", "Next.js", "Firebase", "TailwindCSS", "Chart.js"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: false,
    details: {
      overview:
        "From Concept to Closeout, a complete project management solution to plan, execute, monitor, control, and close projects on time and on budget.",
      features: [
        "Real-time project collaboration",
        "Automated approval workflows",
        "Document management system",
        "Budget tracking and forecasting",
        "Interactive Gantt charts",
        "Mobile-friendly site inspections",
      ],
      challenges:
        "Created a system for complex approval hierarchies and document versioning. Developed intuitive visualization tools for project timelines and budget tracking.",
    },
  },
  {
    id: 3,
    title: "Fitness Community Platform",
    description: "A global fitness community with studio finder, training programs, and wellness solutions.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=Fitness+Classes",
      "/placeholder.svg?height=600&width=1200&text=Nutrition+Planner",
    ],
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview:
        "A global fitness community that brings complete wellness solutions from functional training and HIIT, to nutrition, challenges and accountability.",
      features: [
        "Studio location finder",
        "Membership management",
        "Franchise opportunity portal",
        "Workout tracking and analytics",
        "Nutrition planning tools",
        "Community challenges and events",
      ],
      challenges:
        "Built a scalable location-based search system for studios worldwide. Implemented secure membership management with recurring payments.",
    },
  },
  {
    id: 4,
    title: "Fintech Payment Solution",
    description: "A modern financial technology platform for seamless digital payments and transactions.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=Payment+Dashboard",
      "/placeholder.svg?height=600&width=1200&text=Analytics+View",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: false,
    details: {
      overview:
        "A comprehensive fintech solution that enables businesses and individuals to send, receive, and manage money digitally with enhanced security and convenience.",
      features: [
        "Instant payment processing",
        "Multi-currency support",
        "Advanced fraud detection",
        "Financial analytics dashboard",
        "API integration for businesses",
        "Automated reconciliation",
      ],
      challenges:
        "Implemented bank-grade security while maintaining a smooth user experience. Created a scalable architecture for high-volume transactions.",
    },
  },
  {
    id: 5,
    title: "Bulk SMS Platform",
    description: "An enterprise messaging platform for businesses to communicate with customers at scale.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=SMS+Campaign+Manager",
      "/placeholder.svg?height=600&width=1200&text=Analytics+Dashboard",
    ],
    technologies: ["React", "Node.js", "Redis", "PostgreSQL", "Twilio API"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview:
        "A robust messaging platform that allows businesses to send personalized SMS campaigns to thousands of customers simultaneously.",
      features: [
        "Campaign management",
        "Contact list segmentation",
        "Message scheduling",
        "Delivery reports",
        "A/B testing",
        "API for integration",
      ],
      challenges:
        "Designed a system to handle high message throughput while maintaining delivery reliability. Created a flexible templating system for personalized messages.",
    },
  },
  {
    id: 6,
    title: "Little Nursery",
    description: "A comprehensive management system for childcare centers and nurseries.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=Child+Profiles",
      "/placeholder.svg?height=600&width=1200&text=Parent+Portal",
    ],
    technologies: ["React", "Firebase", "TailwindCSS", "Node.js", "Express"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview:
        "A digital solution for nurseries to manage children's records, staff schedules, parent communications, and daily activities.",
      features: [
        "Child attendance tracking",
        "Staff management",
        "Parent communication portal",
        "Activity planning",
        "Health and incident reporting",
        "Billing and payments",
      ],
      challenges:
        "Built a secure system that protects sensitive child data while providing convenient access to authorized users. Created an intuitive interface for busy staff members.",
    },
  },
  {
    id: 7,
    title: "Pallets Management System",
    description: "An inventory and logistics system for pallet tracking and management.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200&text=Inventory+View",
      "/placeholder.svg?height=600&width=1200&text=Logistics+Dashboard",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Barcode API"],
    liveLink: "#",
    githubLink: "#",
    isPrivateRepo: true,
    details: {
      overview:
        "A specialized system for tracking pallets throughout the supply chain, from warehouse to distribution to retail and back.",
      features: [
        "Barcode/QR code scanning",
        "Real-time inventory tracking",
        "Transfer management",
        "Condition reporting",
        "Analytics and reporting",
        "Mobile app for field workers",
      ],
      challenges:
        "Developed a reliable tracking system that works across different environments with varying connectivity. Created a flexible data model to accommodate different pallet types and use cases.",
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

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
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
              </div>

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
