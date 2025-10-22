"use client"

import { useTheme } from "../context/ThemeContext"

/**
 * Simple Theme Toggle Button - No animations, just functionality
 * Use this if the animated version has issues
 */
const ThemeToggleSimple = () => {
  const { isDark, toggleTheme } = useTheme()

  const handleClick = () => {
    console.log('Simple theme toggle clicked, current theme:', isDark ? 'dark' : 'light')
    toggleTheme()
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="fixed top-6 right-6 z-[9999] p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <i className="fas fa-sun text-xl text-yellow-300" />
      ) : (
        <i className="fas fa-moon text-xl text-white" />
      )}
    </button>
  )
}

export default ThemeToggleSimple
