"use client"

import { motion } from "framer-motion"

const Tools = ({ isDark }) => {
  const tools = {
    hardware: [
      {
        name: "ZedBoard Zynq-7000 ARM/FPGA SoC",
        description: "Development Board for ES, AI and IOT Applications",
        icon: "fa-microchip",
      },
    ],
    licensed: [
      { name: "CADENCE", description: "Industry-standard EDA tools" },
      { name: "MATLAB for Xilinx", description: "System Generator SimuLink Tool" },
    ],
    openSource: [
      { name: "XILINX ISE", description: "Integrated Software Environment" },
      { name: "VIVADO", description: "Design Suite for FPGA" },
      { name: "Tanner EDA Tool", description: "Complete IC design flow" },
      { name: "MAGIC", description: "VLSI layout tool" },
      { name: "MICROWIND", description: "IC design and simulation" },
    ],
  }

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
      id="tools"
      className={`section-padding ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-slate-100"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Tools & Technologies</h2>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            State-of-the-art hardware and software tools for comprehensive VLSI education
          </p>
        </motion.div>

        {/* Hardware Tools */}
        <div className="mb-12">
          <h3 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
              <i className="fas fa-microchip text-2xl text-white"></i>
            </div>
            Hardware Tools
          </h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.hardware.map((tool, index) => (
              <motion.div
                key={index}
                className={`card-hover rounded-xl p-6 shadow-lg border group ${
                  isDark ? "bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600" : "bg-gradient-to-br from-white to-blue-50 border-gray-200"
                }`}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${tool.icon} text-4xl text-white`}></i>
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{tool.name}</h4>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{tool.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Licensed Software */}
        <div className="mb-12">
          <h3 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
            isDark ? "text-emerald-400" : "text-emerald-600"
          }`}>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
              <i className="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            Licensed Software
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.licensed.map((tool, index) => (
              <motion.div
                key={index}
                className={`card-hover rounded-xl p-6 shadow-lg border group ${
                  isDark ? "bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600" : "bg-gradient-to-br from-white to-emerald-50 border-gray-200"
                }`}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-certificate text-3xl text-white"></i>
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{tool.name}</h4>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{tool.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Open Source Tools */}
        <div>
          <h3 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
            isDark ? "text-purple-400" : "text-purple-600"
          }`}>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg">
              <i className="fas fa-download text-2xl text-white"></i>
            </div>
            Open Source Tools
          </h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.openSource.map((tool, index) => (
              <motion.div
                key={index}
                className={`card-hover rounded-xl p-6 shadow-lg border group ${
                  isDark ? "bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600" : "bg-gradient-to-br from-white to-purple-50 border-gray-200"
                }`}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-code text-3xl text-white"></i>
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{tool.name}</h4>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{tool.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Tools
