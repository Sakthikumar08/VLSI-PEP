"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useTheme } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackgroundParticles from "./components/BackgroundParticles"
import ThemeToggle from "./components/ThemeToggle"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import TrainingPage from "./pages/TrainingPage"
import ToolsPage from "./pages/ToolsPage"
import EventsPage from "./pages/EventsPage"
import CollaborationsPage from "./pages/CollaborationsPage"
import ProjectsPage from "./pages/ProjectsPage"
import FacultyPage from "./pages/FacultyPage"

function App() {
  const { isDark } = useTheme()

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
        <div className="relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
          {/* Background Layer - z-index 1-10 */}
          <BackgroundParticles />

          {/* Content Layer - z-index 50+ */}
          <div className="relative" style={{ zIndex: 50 }}>
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <Navbar />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/collaborations" element={<CollaborationsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
