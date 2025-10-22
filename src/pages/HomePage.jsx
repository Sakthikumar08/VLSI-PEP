"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import Hero from "../components/Hero"

const HomePage = () => {
  const { isDark } = useTheme()
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick Overview Section */}
      <section className={`py-20 ${isDark ? "bg-gray-900/50" : "bg-white/50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: "fa-graduation-cap",
                title: "World-Class Education",
                description: "Learn from industry experts with hands-on experience in semiconductor design and fabrication.",
                color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
                shadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
              },
              {
                icon: "fa-flask",
                title: "Cutting-Edge Research",
                description: "Engage in groundbreaking research projects that shape the future of VLSI technology.",
                color: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
                shadow: "0 4px 12px rgba(147, 51, 234, 0.3)"
              },
              {
                icon: "fa-rocket",
                title: "Industry Partnerships",
                description: "Connect with leading semiconductor companies and gain real-world project experience.",
                color: "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
                shadow: "0 4px 12px rgba(16, 185, 129, 0.3)"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                  isDark 
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50" 
                    : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-400/50"
                }`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className={`icon-container icon-gradient w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  style={{
                    background: `linear-gradient(135deg, ${item.color.includes('blue') ? '#3B82F6, #2563EB' : item.color.includes('purple') ? '#9333EA, #7C3AED' : '#10B981, #059669'})`,
                    boxShadow: `${item.shadow}, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                  }}
                >
                  <i className={`fas ${item.icon} text-3xl text-white icon-styled`}></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {item.title}
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
