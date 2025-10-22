"use client"

import { useEffect, useState } from "react"

const BackgroundParticles = ({ isDark }) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      top: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            background: isDark
              ? `radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(30,58,138,0.02) 100%)`
              : `radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(30,58,138,0.05) 100%)`,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundParticles
