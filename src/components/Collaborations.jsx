"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const Collaborations = () => {
  const { isDark } = useTheme()
  const collaborations = [
    { name: "Entuple Technologies", description: "Leading VLSI design services" },
    { name: "CoreEl Technologies", description: "Embedded systems and FPGA solutions" },
    { name: "Edveon Technologies", description: "Advanced electronics R&D" },
    { name: "ISVE", description: "Indian Society for VLSI Education" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="collaborations" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Industry Collaborations
          </h2>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Building strong industry-academia partnerships for real-world impact
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {collaborations.map((collab, index) => (
            <motion.div key={index} className="card-hover group" variants={itemVariants} whileHover={{ y: -10 }}>
              <div
                className="rounded-xl p-8 text-center h-full border-2 transition-all duration-300 shadow-2xl bg-white/10 dark:bg-gray-800/30 border-gray-300/30 dark:border-gray-600/30 group-hover:border-blue-500 group-hover:shadow-blue-500/50"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-building text-3xl text-white"></i>
                </motion.div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{collab.name}</h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{collab.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center inline-flex items-center gap-3 px-8 py-4 rounded-full mx-auto block shadow-xl bg-white/20 dark:bg-gray-800/30 text-emerald-700 dark:text-emerald-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-handshake text-2xl"></i>
          <span className="font-semibold">Strong Industry Partnerships for Student Success</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Collaborations
