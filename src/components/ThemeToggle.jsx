"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Theme toggle clicked, current isDark:', isDark)
    toggleTheme()
  }

  return (
    <motion.button
      onClick={handleClick}
      type="button"
      className="fixed top-6 right-6 z-[9999] p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 transition-all duration-300 group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{ pointerEvents: 'auto' }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ pointerEvents: 'none' }}
      >
        {isDark ? (
          <i className="fas fa-sun text-xl text-yellow-300" />
        ) : (
          <i className="fas fa-moon text-xl text-white" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
