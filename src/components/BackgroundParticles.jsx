"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const BackgroundParticles = () => {
  const { isDark } = useTheme()
  const [particles, setParticles] = useState([])
  const [floatingShapes, setFloatingShapes] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 20,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
    }))
    setParticles(newParticles)

    // Generate floating geometric shapes
    const shapes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
      size: Math.random() * 150 + 80,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 15 + 15,
      rotation: Math.random() * 360,
    }))
    setFloatingShapes(shapes)
  }, [])

  // Track mouse movement for interactive effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs - Layer 3 */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle absolute rounded-full"
            initial={{
              x: `${particle.left}%`,
              y: `${particle.top}%`,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: [`${particle.left}%`, `${particle.left + particle.moveX}%`, `${particle.left}%`],
              y: [`${particle.top}%`, `${particle.top + particle.moveY}%`, `${particle.top}%`],
              scale: [0, 1, 1, 0.8, 1],
              opacity: [0, 0.6, 0.8, 0.6, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: isDark
                ? `radial-gradient(circle, 
                    rgba(59,130,246,0.15) 0%, 
                    rgba(147,51,234,0.12) 30%,
                    rgba(16,185,129,0.08) 60%,
                    rgba(236,72,153,0.05) 100%)`
                : `radial-gradient(circle, 
                    rgba(59,130,246,0.2) 0%, 
                    rgba(147,51,234,0.15) 30%,
                    rgba(16,185,129,0.12) 60%,
                    rgba(236,72,153,0.08) 100%)`,
              filter: 'blur(60px)',
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes - Layer 4 */}
      <div className="absolute inset-0" style={{ zIndex: 4 }}>
        {floatingShapes.map((shape) => (
          <motion.div
            key={`shape-${shape.id}`}
            className="absolute"
            initial={{
              x: `${shape.left}%`,
              y: `${shape.top}%`,
              rotate: shape.rotation,
              opacity: 0,
            }}
            animate={{
              y: [`${shape.top}%`, `${shape.top - 20}%`, `${shape.top}%`],
              rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
              opacity: [0, 0.3, 0.5, 0.3, 0],
              scale: [0.8, 1.1, 0.9, 1, 0.8],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
            }}
          >
            {shape.type === 'circle' && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.05))'
                    : 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,51,234,0.08))',
                  border: isDark
                    ? '1px solid rgba(59,130,246,0.2)'
                    : '1px solid rgba(59,130,246,0.25)',
                  filter: 'blur(2px)',
                }}
              />
            )}
            {shape.type === 'square' && (
              <div
                className="w-full h-full rounded-lg"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(147,51,234,0.1), rgba(236,72,153,0.05))'
                    : 'linear-gradient(135deg, rgba(147,51,234,0.15), rgba(236,72,153,0.08))',
                  border: isDark
                    ? '1px solid rgba(147,51,234,0.2)'
                    : '1px solid rgba(147,51,234,0.25)',
                  filter: 'blur(2px)',
                }}
              />
            )}
            {shape.type === 'triangle' && (
              <div
                className="w-full h-full"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.05))'
                    : 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.08))',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  border: isDark
                    ? '1px solid rgba(16,185,129,0.2)'
                    : '1px solid rgba(16,185,129,0.25)',
                  filter: 'blur(2px)',
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Interactive Mouse Follow Effect - Layer 5 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{
          x: `${mousePosition.x}%`,
          y: `${mousePosition.y}%`,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 200,
        }}
        style={{
          zIndex: 5,
          width: '600px',
          height: '600px',
          marginLeft: '-300px',
          marginTop: '-300px',
          background: isDark
            ? 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Glowing Dots - Layer 7 */}
      <div className="absolute inset-0" style={{ zIndex: 7 }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
            style={{
              width: '4px',
              height: '4px',
              background: isDark
                ? 'rgba(59,130,246,0.8)'
                : 'rgba(59,130,246,1)',
              boxShadow: isDark
                ? '0 0 10px rgba(59,130,246,0.5)'
                : '0 0 15px rgba(59,130,246,0.8)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundParticles
