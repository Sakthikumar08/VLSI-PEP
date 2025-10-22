"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const About = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Scope" },
    { id: "outcome", label: "Outcome" },
    { id: "projects", label: "Project Areas" },
  ]

  const tabContent = {
    overview: {
      title: "About VLSI Design Centre",
      content: `An integrated circuit (IC) or Microchip is a set of electronic circuits on a small chip. An IC is the fundamental building block of all modern electronic devices. Very-large-scale integration (VLSI) is a stream of electronics engineering which involves the process of creating an integrated circuit (IC) by combining many metal oxide silicon transistors onto a single chip.`,
    },
    scope: {
      title: "Scope of VLSI Design",
      content: `The VLSI sector is a high-paying industry and immune to automation. It is expected to create an environment to scale up the semiconductor ecosystem. There are a variety of career opportunities in product companies; design services companies and electronic design automation (EDA) companies. Product and application domains of VLSI include mobile and consumer electronics, computing, telecommunications and networking, data processing, automotive, healthcare and industrial applications.`,
      highlight: `"In simple words, VLSI circuits are everywhere from your computer to your car, your brand new state-of-the-art digital camera, cellphones, and whatever electronics item you have."`,
    },
    outcome: {
      title: "Learning Outcomes",
      content: `Students will have an in-depth understanding of VLSI Architecture and Verilog Programming. Students will be able to understand FPGA Prototyping and Physical Verification. Students will be able to design and develop real time projects using Protocols such as UART, Wi-Fi, SPI, I2C for Embedded System, AI and IOT Applications.`,
    },
    projects: {
      title: "Project Categorization",
      content: `With a focus to develop frugal solutions around societal problem, it is envisioned that projects would be initiated in the following key areas:`,
      areas: [
        "Application of VLSI in AI and ML",
        "Application of VLSI in Cyber security and Cloud Computing",
        "Application of VLSI in Bio-Medical Engineering",
        "Reconfigurable Architecture for Robotics",
        "Reconfigurable Architecture for Surveillance",
        "Applications using Reversible Logic Gates",
        "VLSI circuits for IOT Applications",
        "FPGA Controlled E-Vehicle",
        "Low Power VLSI Circuits",
        "FinFET Technology",
        "VLSI using thin-film transistor (TFT)",
        "Network on Chip",
      ],
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className={`section-padding ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>About Our Centre</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Empowering the next generation of VLSI engineers and semiconductor innovators
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variants={itemVariants}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg dark:bg-blue-500"
                    : isDark
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className={`rounded-2xl p-8 shadow-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={activeTab}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {tabContent[activeTab].title}
            </h3>

            <div className="prose prose-lg max-w-none">
              <p className={`mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {tabContent[activeTab].content}
              </p>

              {tabContent[activeTab].highlight && (
                <blockquote
                  className={`border-l-4 border-emerald-500 pl-6 my-6 italic text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {tabContent[activeTab].highlight}
                </blockquote>
              )}

              {tabContent[activeTab].areas && (
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {tabContent[activeTab].areas.map((area, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg shadow-sm ${isDark ? "bg-gray-600" : "bg-white"}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span className={isDark ? "text-gray-300" : "text-gray-700"}>{area}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
