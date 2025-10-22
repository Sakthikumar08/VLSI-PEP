"use client"

import { useTheme } from "../context/ThemeContext"
import Faculty from "../components/Faculty"

const FacultyPage = () => {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen pt-20">
      <Faculty />
    </div>
  )
}

export default FacultyPage
