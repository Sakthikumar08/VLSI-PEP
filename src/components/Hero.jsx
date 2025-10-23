"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Hero = () => {
  const { isDark } = useTheme()
  const navigate = useNavigate()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Icons */}
        <motion.div
          className="flex justify-center space-x-4 md:space-x-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="icon-container icon-gradient p-3 md:p-6 rounded-2xl shadow-2xl"
          >
            <i className="fas fa-microchip text-3xl md:text-5xl text-white icon-styled"></i>
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            className="icon-container p-3 md:p-6 rounded-2xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <i className="fas fa-memory text-3xl md:text-5xl text-white icon-styled"></i>
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="icon-container p-3 md:p-6 rounded-2xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #EC4899, #DB2777)',
              boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <i className="fas fa-cogs text-3xl md:text-5xl text-white icon-styled"></i>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight px-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
            VLSI Design
          </span>
          <span className="block bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Centre
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium text-gray-700 dark:text-gray-200 px-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Pioneering the Future of Integrated Circuit Design and Semiconductor Technology
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg mb-12 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 px-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Very-large-scale integration (VLSI) is the process of creating integrated circuits by combining millions of
          MOS transistors onto a single chip. Join us in shaping the future of electronics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <button 
            onClick={() => navigate('/about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 dark:shadow-blue-400/30 transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore Programs</span>
            <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 group"
          >
            <span>View Projects</span>
            <i className="fas fa-project-diagram group-hover:rotate-12 transition-transform duration-300"></i>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: "24+", label: "Years Experience" },
            { number: "20+", label: "Publications" },
            { number: "100+", label: "Students Trained" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
