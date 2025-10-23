"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const { isDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Tools", href: "/tools" },
    { name: "Events", href: "/events" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Projects", href: "/projects" },
    { name: "Faculty", href: "/faculty" },
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
            ? "bg-gray-900/95 shadow-2xl shadow-blue-500/10"
            : "bg-white/95 shadow-2xl shadow-blue-500/10"
          : isDark
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon-container icon-gradient p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <i className="fas fa-microchip text-2xl text-white icon-styled"></i>
              </div>
              <span
                className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent"
              >
                VLSI Design Centre
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <Link key={item.name} to={item.href}>
                <motion.div
                  custom={i}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className={`font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 pb-1 ${
                    location.pathname === item.href
                      ? isDark
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-blue-600 border-b-2 border-blue-600"
                      : isDark
                        ? "text-gray-200"
                        : "text-gray-700"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
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
            className={`md:hidden ${isDark ? "bg-gray-800/98 border border-gray-700" : "bg-white/98 border border-gray-200"} rounded-xl shadow-2xl py-4 mb-4`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    location.pathname === item.href
                      ? isDark
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-blue-600 bg-blue-50"
                      : isDark
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
