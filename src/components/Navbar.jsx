"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Navbar = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Collaborations", href: "#collaborations" },
    { name: "Projects", href: "#projects" },
    { name: "Faculty", href: "#faculty" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-md shadow-lg"
          : isDark
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-microchip text-2xl text-white"></i>
            </div>
            <span
              className={`text-xl font-bold bg-gradient-to-r ${
                isDark ? "from-blue-400 to-purple-400 text-transparent bg-clip-text" : "text-gray-900"
              }`}
            >
              VLSI Design Centre
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={`font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {isOpen ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-bars text-2xl"></i>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className={`md:hidden ${isDark ? "bg-gray-800/95" : "bg-white/95"} backdrop-blur-md rounded-lg shadow-lg py-4 mb-4`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
