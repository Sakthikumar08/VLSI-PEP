"use client"

import { useTheme } from "../context/ThemeContext"
import About from "../components/About"

const AboutPage = () => {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen pt-20">
      <About />
    </div>
  )
}

export default AboutPage
