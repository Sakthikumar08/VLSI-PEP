"use client"

import { motion } from "framer-motion"

const Hero = ({ isDark }) => {
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
          className="flex justify-center space-x-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <i className="fas fa-microchip text-5xl text-white"></i>
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-5 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
          >
            <i className="fas fa-memory text-5xl text-white"></i>
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 p-5 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <i className="fas fa-cogs text-5xl text-white"></i>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className={`text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent ${
            isDark ? "from-blue-400 via-purple-400 to-emerald-400" : ""
          }`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          VLSI Design
          <span className="block">Centre</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Pioneering the Future of Integrated Circuit Design and Semiconductor Technology
        </motion.p>

        {/* Description */}
        <motion.p
          className={`text-lg mb-12 max-w-4xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Very-large-scale integration (VLSI) is the process of creating integrated circuits by combining millions of
          MOS transistors onto a single chip. Join us in shaping the future of electronics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group">
            <span>Explore Programs</span>
            <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </button>
          <button
            className={`inline-flex items-center gap-3 border-2 border-blue-600 ${isDark ? "text-blue-400 hover:bg-blue-600/20" : "text-blue-600 hover:bg-blue-600/10"} font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group`}
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
              <div className={`text-3xl font-bold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                {stat.number}
              </div>
              <div className={isDark ? "text-gray-400" : "text-gray-600"}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
