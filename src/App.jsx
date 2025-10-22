"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Tools from "./components/Tools"
import Collaborations from "./components/Collaborations"
import Projects from "./components/Projects"
import Faculty from "./components/Faculty"
import Footer from "./components/Footer"
import BackgroundParticles from "./components/BackgroundParticles"

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
        <BackgroundParticles isDark={isDark} />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <i className="fas fa-sun text-xl text-yellow-300 group-hover:rotate-180 transition-transform duration-500"></i>
          ) : (
            <i className="fas fa-moon text-xl text-white group-hover:rotate-12 transition-transform duration-500"></i>
          )}
        </button>

        <Navbar isDark={isDark} />
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Tools isDark={isDark} />
        <Collaborations isDark={isDark} />
        <Projects isDark={isDark} />
        <Faculty isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  )
}

export default App
