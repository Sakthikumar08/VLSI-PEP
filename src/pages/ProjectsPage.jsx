"use client"

import { useTheme } from "../context/ThemeContext"
import Projects from "../components/Projects"

const ProjectsPage = () => {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen pt-20">
      <Projects />
    </div>
  )
}

export default ProjectsPage
