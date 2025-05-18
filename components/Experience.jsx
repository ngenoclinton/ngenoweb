"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "iRrob Technologies",
    // position: "Web Developer Intern",
    period: "Sep 2024 - Dec 2024",
    duration: "3 months",
    description:
      "Worked as a web development intern, collaborating with senior developers on various client projects. Gained hands-on experience with modern web technologies and development workflows.",
    responsibilities: [
      "Assisted in developing responsive web applications using React and Next.js",
      "Collaborated with the design team to implement UI/UX designs",
      "Participated in code reviews and team meetings",
      "Optimized website performance and fixed bugs",
      "Learned version control with Git and GitHub",
    ],
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Git"],
    link: "#",
  },
  {
    id: 2,
    company: "Freelance Web Developer",
    // position: "Independent Contractor",
    period: "Jan 2025 - Present",
    duration: "Ongoing",
    description:
      "Working as an independent contractor on various short-term, project-based contracts. Developing custom websites for clients across different industries.",
    responsibilities: [
      // "Building custom websites and web applications from scratch",
      "Building custom websites from scratch",
      "Consulting with clients to understand their requirements and objectives",
      "Creating responsive, mobile-first designs",
      "Implementing modern frontend frameworks and libraries",
      "Providing ongoing maintenance and support",
    ],
    // projects: [
    //   {
    //     name: "E-commerce Platform",
    //     description: "Built a custom e-commerce solution for a local retail business",
    //   },
    //   {
    //     name: "Portfolio Website",
    //     description: "Designed and developed professional portfolios for creative professionals",
    //   },
    //   {
    //     name: "Business Landing Page",
    //     description: "Created high-converting landing pages for small businesses",
    //   },
    // ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
  },
]

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-[#55e6a5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My professional journey in web development, from internship to freelance projects.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 z-0"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#55e6a5] border-4 border-white z-10"></div>

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div
                  className={`bg-white p-6 rounded-lg shadow-lg border border-gray-100 ${
                    expandedId === exp.id ? "mb-4" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <div className="flex items-center text-[#009689] mt-1 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar size={14} className="mr-2" />
                        <span>
                          {exp.period} · {exp.duration}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label={expandedId === exp.id ? "Collapse details" : "Expand details"}
                    >
                      {expandedId === exp.id ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="text-[#009689] hover:text-[#027e6f] text-sm font-medium flex items-center transition-colors"
                  >
                    {expandedId === exp.id ? "Show less" : "Show more"}
                    {expandedId === exp.id ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                </div>

                {/* Expanded content */}
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>

                    {exp.projects && (
                      <>
                        <h4 className="font-semibold text-gray-900 mb-3">Notable Projects</h4>
                        <div className="space-y-3 mb-6">
                          {exp.projects.map((project, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-md">
                              <h5 className="font-medium text-gray-900">{project.name}</h5>
                              <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {/* {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#009689] hover:text-[#027e6f] font-medium transition-colors"
                      >
                        Visit company website <ExternalLink size={16} className="ml-1" />
                      </a>
                    )} */}
                  </motion.div>
                )}
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}

          {/* Final dot */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 rounded-full bg-[#55e6a5] border-4 border-white z-10"></div>
        </div>
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#009689] text-white font-medium px-8 py-3 rounded-md transition-all hover:bg-[#027e6f]"
          >
            Get In Touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M8 1L15 8L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience
