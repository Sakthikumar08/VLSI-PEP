"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const { isDark } = useTheme()
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
    <footer className={`${isDark ? "bg-gray-950" : "bg-gray-900"} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Description */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
                <i className="fas fa-microchip text-3xl text-white"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VLSI Design Centre
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Pioneering VLSI education and research. Empowering the next generation of semiconductor engineers with
              industry-standard tools and cutting-edge technology.
            </p>
            <div className="flex flex-col space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-blue-400"></i>
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <span>vlsi@college.edu</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About", path: "/about" },
                { name: "Tools", path: "/tools" },
                { name: "Events", path: "/events" },
                { name: "Collaborations", path: "/collaborations" },
                { name: "Projects", path: "/projects" },
                { name: "Faculty", path: "/faculty" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1 flex-shrink-0 text-lg"></i>
                <span className="text-gray-400 text-sm">
                  Department of Electronics & Communication Engineering
                  <br />
                  College Campus
                  <br />
                  City, State - PIN Code
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">© 2025 VLSI Design Centre. All rights reserved.<a href="https://www.mustardworks.in/"> Powered by MustardWorks.</a></p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm hover:text-blue-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-gray-400 text-sm hover:text-blue-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
