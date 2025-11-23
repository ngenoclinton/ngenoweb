"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Lock, ChevronLeft, ChevronRight, Clock, CheckCircle, Zap } from "lucide-react"

const projects = [
  {
  id: 5,
  title: "Reserv — Space Booking",
  description: "A booking platform that combines lightning-fast M-Pesa STK Push and international card payments with instant feedback, smart availability, and seamless room management.",
  images: [
    "/projects/reserve/reserv_home.jpg",
    "/projects/reserve/reserv_rooms.png",
    "/projects/reserve/reserv_calendar.png",    // Future admin/user dashboard
    "/projects/reserve/reserv_mpesa.png",
    "/projects/reserve/reserv_dashboard.jpg",    // Future admin/user dashboard
  ],
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Shadcn/ui",
    "Appwrite (Auth + Database + Storage)",
    "M-Pesa Daraja API (STK Push)",
    "Stripe / Paystack (Card Payments – In Progress)",
    "Zod",
    "React Hook Form",
    "Framer Motion",
    "Sonner",
    "Vercel"
  ],
  liveLink: "https://reser-app-alpha.vercel.app/",
  githubLink: "https://github.com/ngenoclinton/reser.app",
  isPrivateRepo: false,
  status: "development",
  details: {
    overview: "Reserv is a space booking platform built for the African and global market. It delivers instant M-Pesa payments with perfect success/failure/timeout handling, while actively adding seamless card payments (Stripe/Paystack) — creating a true dual-payment powerhouse. Built with Next.js 14 + Appwrite and deployed on Vercel.",

    features: [
      "Instant M-Pesa STK Push with 100% accurate real-time feedback (success in less than 1s, wrong PIN, cancel, timeout)",
      "International card payments via Stripe/Paystack (In Progress)",
      "Smart room availability & calendar booking",
      "Beautiful instant success/failure/cancelled modals",
      "Admin room management with image upload (working in production)",
      "User dashboard & booking history (coming next)",
      "Multi-payment method selection at checkout",
      "Fully responsive + mobile-first experience",
    ],

    challenges: "Taming M-Pesa’s callback system to deliver instant UI updates regardless of user action (correct PIN, wrong PIN, cancel, timeout) while keeping the database 100% accurate — all while fixing classic Vercel deployment traps (leaked API keys, 413 errors, broken server actions). Now laying the foundation for dual-payment (M-Pesa + Card) with a clean, scalable architecture that will support future features like wallets, subscriptions, and team accounts."
  }
},
  {
    id: 1,
    title: "Data Safi Analytics",
    description:
      "A comprehensive data analytics landing page for a client company, featuring consultation and employee training services.",
    images: ["/projects/datasafi_home.jpeg"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "EmailJS",
      "cPanel",
    ],
    liveLink: "https://datasafi.netlify.app/",
    githubLink: "https://github.com/ngenoclinton/datasafi",
    isPrivateRepo: false,
    status: "live",
    details: {
      overview:
        "A professional data analytics platform designed for Data Safi Data Analysts, a client company specializing in transforming complex data into actionable business insights.",
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
    id: 2,
    title: "SkySpikers Volleyball Academy",
    description:
      "A modern, comprehensive volleyball academy website featuring training programs, coach profiles, and academy facilities with a focus on youth development and competitive training.",
    images: [
      "/projects/skyspikers/skyspikers_desktop.jpeg",
      "/projects/skyspikers/skypikers_desktop2.jpeg",
      "/projects/skyspikers/skyspikers_desktop3.jpeg",
    ],
    technologies: [
      "Next.js 14",
      "Tailwind CSS",
      "Shadcn/ui",
      "Lucide React",
      "React Hook Form",
      "Framer Motion",
      "Next.js App Router",
    ],
    liveLink: "https://skyspikers.netlify.app/",
    githubLink: "https://github.com/ngenoclinton/skyspikers",
    isPrivateRepo: false,
    status: "live",
    details: {
      overview:
        "A professional volleyball academy website designed for SkySpikers, featuring comprehensive training programs for all skill levels, from youth development to elite performance. The platform showcases world-class coaching staff, state-of-the-art facilities, and a strong community focus with the motto 'Play with Heart. Train with Purpose.'",
      features: [
        "Multi-level training program showcase with detailed pricing",
        "Professional coach profiles with qualifications and specialties",
        "Interactive academy gallery with photo and video content",
        "Comprehensive contact system with multiple communication channels",
        "Responsive design optimized for mobile-first experience",
        "Program enrollment and inquiry management system",
        "Facility showcase with virtual tour capabilities",
        "Testimonials and success stories from players and parents",
        "FAQ section addressing common enrollment questions",
        "Social media integration for community engagement",
      ],
      challenges:
        "Created a cohesive brand identity that appeals to both youth and adult demographics while maintaining professional credibility. Implemented a complex navigation system that seamlessly connects multiple program types and age groups. Balanced visual appeal with performance optimization across all device types, ensuring fast loading times for image-heavy content like the academy gallery.",
    },
  },
  {
    id: 3,
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
    status: "development",
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
    id: 4,
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
    status: "development",
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
]

const StatusBadge = ({ status }) => {
  const statusConfig = {
    live: {
      icon: <CheckCircle size={14} />,
      text: "Live",
      className: "bg-green-500/10 text-green-600 border-green-500/20",
    },
    development: {
      icon: <Clock size={14} />,
      text: "Under Development",
      className: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    },
    coming: {
      icon: <Zap size={14} />,
      text: "Coming Soon",
      className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
  }

  const config = statusConfig[status] || statusConfig.live

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}
    >
      {config.icon}
      {config.text}
    </div>
  )
}

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            {project.images && project.images.length > 0 && (
              <div className="relative h-64 md:h-80 bg-gray-100 rounded-t-2xl overflow-hidden">
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
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

                {/* Status badge overlay */}
                <div className="absolute top-4 left-4">
                  <StatusBadge status={project.status} />
                </div>
              </div>
            )}

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  {!project.images?.length && <StatusBadge status={project.status} />}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{project.details.overview}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#55e6a5] mr-2 mt-1">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenges & Solutions</h4>
                  <p className="text-gray-600 leading-relaxed">{project.details.challenges}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.status === "live" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#009689] text-white px-6 py-3 rounded-lg hover:bg-[#027e6f] transition-colors font-medium"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}

                  {project.isPrivateRepo ? (
                    <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg opacity-75 cursor-not-allowed font-medium">
                      Private Repo <Lock size={16} />
                    </div>
                  ) : (
                    project.status === "live" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                      >
                        GitHub <Github size={16} />
                      </a>
                    )
                  )}

                  {project.status === "development" && (
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-lg font-medium">
                      <Clock size={16} />
                      Coming Soon
                    </div>
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
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = ""
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
        <div className="w-20 h-1 bg-[#55e6a5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of my recent work, from live client projects to innovative solutions currently in development.
        </p>
      </motion.div>

      <div className="space-y-20">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[70vh] md:h-[63vh] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => openModal(project)}
          >
            {/* Enhanced gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10 transition-all duration-500 ${
                hoveredProject === project.id ? "from-black/80 via-black/40 to-black/20" : ""
              }`}
            />

            {/* Background image with enhanced hover effect */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${project.images[0]})` }}
              whileHover={{ scale: 1.08 }}
            />

            {/* Status badge */}
            <div className="absolute top-6 left-6 z-30">
              <StatusBadge status={project.status} />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-end p-8 md:p-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/30 backdrop-blur-md p-8 rounded-2xl max-w-lg w-full border border-white/10"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <motion.button
                  className="inline-flex items-center gap-2 bg-[#55e6a5] text-[#121212] font-medium px-6 py-3 rounded-lg transition-all hover:bg-white hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details <ExternalLink size={18} />
                </motion.button>
              </motion.div>
            </div>

            {/* Hover effect overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#55e6a5]/10 to-[#009689]/10 z-5 transition-opacity duration-500 ${
                hoveredProject === project.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-20">
          <motion.button
            onClick={loadMoreProjects}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009689] to-[#55e6a5] text-white font-medium px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              →
            </motion.div>
          </motion.button>
        </div>
      )}

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Projects
