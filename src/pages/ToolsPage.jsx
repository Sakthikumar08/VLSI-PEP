"use client"

import { useTheme } from "../context/ThemeContext"
import Tools from "../components/Tools"

const ToolsPage = () => {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen pt-20">
      <Tools />
    </div>
  )
}

export default ToolsPage
