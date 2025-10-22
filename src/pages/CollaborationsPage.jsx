"use client"

import { useTheme } from "../context/ThemeContext"
import Collaborations from "../components/Collaborations"

const CollaborationsPage = () => {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen pt-20">
      <Collaborations />
    </div>
  )
}

export default CollaborationsPage
