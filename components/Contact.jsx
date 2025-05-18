"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, ExternalLink } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // This will be replaced with EmailJS integration
      // For now, we'll simulate the form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          message: "",
        })

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1500)
    }
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-[#55e6a5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center"
              >
                <svg
                  className="w-12 h-12 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-input w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#009689]/20`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-input w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#009689]/20`}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`contact-input w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#009689]/20`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#009689] text-white font-medium px-6 py-3 rounded-md transition-all hover:bg-[#027e6f] flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center bg-[#121212] p-4 rounded-md">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-md mr-4">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium">Phone</h4>
                <p className="text-[#55e6a5]">+254 (070) 776-3494</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-center bg-[#121212] p-4 rounded-md">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-md mr-4">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium">Mail</h4>
                <p className="text-[#55e6a5]">clintonkipkoechngeno@gmail.com</p>
              </div>
            </div>

            {/* Visit My Studio */}
            <div className="flex items-center bg-[#121212] p-4 rounded-md">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-md mr-4">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium">Location</h4>
                <p className="text-[#55e6a5]">Roysambu, Near Thika Road Mall (TRM), Nairobi, Kenya.</p>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative mt-6 rounded-md overflow-hidden border border-gray-200">
            <div className="bg-white py-2 px-3 text-sm font-medium flex justify-between items-center">
              <span>Thika Road Mall (TRM)</span>
              <a
                href="https://www.google.com/maps/place/Thika+Road+Mall/@-1.2191264,36.8881767,17z/data=!3m1!4b1!4m6!3m5!1s0x182f3f34a28c3c8f:0x7cf0d1b6f9cd4512!8m2!3d-1.2191318!4d36.8907516!16s%2Fm%2F0wbjcj4?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-xs"
              >
                View larger map
              </a>
            </div>
            <a
              href="https://www.google.com/maps/place/Thika+Road+Mall/@-1.2191264,36.8881767,17z/data=!3m1!4b1!4m6!3m5!1s0x182f3f34a28c3c8f:0x7cf0d1b6f9cd4512!8m2!3d-1.2191318!4d36.8907516!16s%2Fm%2F0wbjcj4?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTNkzW-tUFXOZj1kglRZmroWbqrZp42jPRg&s"
                alt="Map showing Thika Road Mall location"
                className="w-full h-[250px] object-cover group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="bg-white/90 rounded-full p-3">
                  <ExternalLink size={24} className="text-[#121212]" />
                </div>
              </div>
            </a>
            <div className="absolute bottom-3 right-3 z-10">
              <div className="flex flex-col gap-2">
                <button className="bg-white rounded-sm p-1 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="bg-white rounded-sm p-1 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
