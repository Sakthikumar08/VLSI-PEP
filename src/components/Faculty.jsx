"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const Faculty = () => {
  const { isDark } = useTheme()
  const facultyInfo = {
    name: "Dr. P. LATHA",
    experience: "24+ Years",
    specialization:
      "VLSI Design, Reconfigurable System on Chip, Wireless Sensor Network, Image Processing, IoT and Cloud Computing",
    achievements: [
      "Published 20+ papers in National/International Conferences and Journals",
      "Received ₹13,67,000 MODROB PROJECT grant from AICTE",
      "Resource person for VLSI Design and FPGA Technology workshops",
    ],
    contact: {
      email: "drplatha@example.com",
      phone: "+91-XXXXXXXXXX",
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="faculty" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Faculty Profile</h2>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Meet our experienced and dedicated faculty member
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-emerald-500 dark:from-blue-700 dark:to-emerald-600 rounded-2xl p-8 text-white card-hover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Faculty Image Placeholder */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center shadow-2xl">
                  <i className="fas fa-user-graduate text-7xl text-white/80"></i>
                </div>
              </motion.div>

              {/* Faculty Details */}
              <motion.div
                className="md:col-span-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 className="text-3xl font-bold mb-2" variants={itemVariants}>
                  {facultyInfo.name}
                </motion.h3>
                <motion.div className="flex items-center gap-2 mb-4" variants={itemVariants}>
                  <i className="fas fa-award text-xl"></i>
                  <span className="text-lg">{facultyInfo.experience} of Experience</span>
                </motion.div>

                <motion.p className="text-white/90 mb-6 leading-relaxed" variants={itemVariants}>
                  {facultyInfo.specialization}
                </motion.p>

                {/* Contact Information */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg"
                    variants={itemVariants}
                  >
                    <i className="fas fa-envelope"></i>
                    <span>{facultyInfo.contact.email}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg"
                    variants={itemVariants}
                  >
                    <i className="fas fa-phone"></i>
                    <span>{facultyInfo.contact.phone}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="mt-8 rounded-2xl p-8 shadow-2xl bg-white/10 dark:bg-gray-800/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              <i className="fas fa-trophy text-3xl"></i>
              Key Achievements
            </h4>
            <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
              {facultyInfo.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/20 dark:bg-gray-700/50"
                  variants={itemVariants}
                >
                  <i className="fas fa-check-circle text-emerald-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>{achievement}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* MODROB Project Highlight */}
          <motion.div
            className="mt-6 rounded-xl p-6 border shadow-xl bg-white/20 dark:bg-gray-800/30 border-emerald-300/50 dark:border-emerald-500/30"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <i className="fas fa-trophy text-2xl text-emerald-600 dark:text-emerald-400"></i>
              <h5 className={`text-lg font-semibold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                MODROB Project Achievement
              </h5>
            </div>
            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
              Successfully secured and executed AICTE MODROB project titled
              <strong>
                {" "}
                "Integration of image processing, DSP and IOT applications with high end FPGA Technology"
              </strong>
              with a grant of ₹13,67,000 in the academic year 2018-2019.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Faculty
