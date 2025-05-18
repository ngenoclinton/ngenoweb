"use client"

import { motion } from "framer-motion"
import { Code, Globe, Server, Sparkles, GitBranch } from "lucide-react"

const skills = [
  { name: "JavaScript", icon: <Code size={20} /> },
  { name: "React", icon: <Sparkles size={20} /> },
  { name: "HTML/CSS", icon: <Globe size={20} /> },
  { name: "Next.js", icon: <Server size={20} /> },
  { name: "TailwindCSS", icon: <Sparkles size={20} /> },
  { name: "Git & GitHub", icon: <GitBranch size={20} /> },
]

const testimonials = [
  {
    id: 1,
    name: "Handa Robinson",
    role: "Founder / CEO, iRob Tech",
    quote:
      "Clinton delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made our project a success.",
  },
  // {
  //   id: 2,
  //   name: "Michael Chen",
  //   role: "Marketing Director, GrowthLabs",
  //   quote:
  //     "Working with Clinton was a pleasure. He understood our requirements perfectly and delivered a high-quality solution on time and within budget.",
  // },
  // {
  //   id: 3,
  //   name: "Emily Rodriguez",
  //   role: "Founder, DesignHub",
  //   quote:
  //     "Clinton's technical skills and creativity helped transform our vision into reality. He's responsive, professional, and delivers outstanding work.",
  // },
]

const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-[#55e6a5] mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/about/campus_0.jpg"
            alt="Clinton"
            className="w-full h-3/4 rounded-lg shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">About Clinton Ngeno</h3>
          <p className="text-gray-600 mb-6">
            I'm Clinton, a software developer passionate about building modern, scalable web applications with seamless
            user experiences. With a strong foundation in front-end and back-end technologies, I create solutions that
            are not only visually appealing but also performant and accessible.
          </p>
          <p className="text-gray-600 mb-6">
            My approach combines technical expertise with creative problem-solving to deliver projects that exceed
            expectations. I'm constantly learning and exploring new technologies to stay at the forefront of web
            development.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#009689] text-white font-medium px-6 py-3 rounded-md transition-all hover:bg-[#027e6f]"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold mb-8 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="skill-item flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="text-[#009689] mb-2">{skill.icon}</div>
              <span className="font-medium text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Praise from Clients</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="mb-4 text-[#55e6a5]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.5 8.5H6.5C5.4 8.5 4.5 9.4 4.5 10.5V13.5C4.5 14.6 5.4 15.5 6.5 15.5H8.5C9.6 15.5 10.5 14.6 10.5 13.5V6.5C10.5 4.3 8.7 2.5 6.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 8.5H16.5C15.4 8.5 14.5 9.4 14.5 10.5V13.5C14.5 14.6 15.4 15.5 16.5 15.5H18.5C19.6 15.5 20.5 14.6 20.5 13.5V6.5C20.5 4.3 18.7 2.5 16.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </div>
  )
}

export default About
