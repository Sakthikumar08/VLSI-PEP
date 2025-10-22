"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const Projects = () => {
  const { isDark } = useTheme()
  const certifications = [
    {
      provider: "ISVE",
      title: "CHIP DESIGN AND FPGA SYSTEM DESIGN (CDFD-2024)",
      icon: "fa-award",
    },
    {
      provider: "MICROCHIP UNIVERSITY",
      title: "Programmable Logic, FPGAs and SoC",
      icon: "fa-graduation-cap",
    },
  ]

  const nptelCertifications = [
    "System Design Through Verilog",
    "VLSI Design Flow: RTL to GDS",
    "Hardware Modeling Using Verilog",
    "VLSI Signal Processing",
    "CMOS Digital VLSI Design",
    "Introduction to Semiconductor Devices",
    "Digital Design with Verilog",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Projects & Certifications
          </h2>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Comprehensive training and industry-recognized certifications
          </p>
        </motion.div>

        {/* Main Certifications */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="card-hover rounded-xl p-8 shadow-2xl border group bg-white/10 dark:bg-gray-800/30 border-gray-300/30 dark:border-gray-600/30"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${cert.icon} text-4xl text-white`}></i>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                {cert.provider}
              </h3>
              <h4 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{cert.title}</h4>
              <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                <i className="fas fa-check-circle mr-2 text-xl"></i>
                <span className="font-semibold">Course Completion Certificate</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NPTEL Certifications */}
        <motion.div
          className="rounded-2xl p-8 shadow-2xl bg-white/10 dark:bg-gray-800/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
              <i className="fas fa-book-reader text-3xl text-white"></i>
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>NPTEL Certifications</h3>
          </div>
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nptelCertifications.map((course, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 bg-white/20 dark:bg-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-600/50"
                variants={itemVariants}
              >
                <i className="fas fa-certificate text-blue-600 dark:text-blue-400"></i>
                <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>{course}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Industry-Standard EDA Tools",
              description: "Complete VLSI design flow training",
            },
            {
              title: "Modern Curriculum",
              description: "Designed for VLSI industry demands",
            },
            {
              title: "Research Focus",
              description: "Digital & Analog IC Design, Semiconductor Devices",
            },
          ].map((highlight, index) => (
            <motion.div key={index} className="text-center p-6" variants={itemVariants}>
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-award text-3xl text-white"></i>
              </motion.div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{highlight.title}</h4>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
