"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import Hero from "../components/Hero"
import TrainingModules from "../components/TrainingModules"
import SuccessStories from "../components/SuccessStories"
import { GraduationCap, Building2, BookOpen, TrendingUp, Award, Users, Briefcase, Target } from "lucide-react"

const HomePage = () => {
  const { isDark } = useTheme()
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Stats Section */}
      <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: Users, 
                value: "500+", 
                label: "Students Trained",
                color: isDark ? "text-blue-400" : "text-blue-600"
              },
              { 
                icon: Building2, 
                value: "50+", 
                label: "Corporate Clients",
                color: isDark ? "text-purple-400" : "text-purple-600"
              },
              { 
                icon: BookOpen, 
                value: "15+", 
                label: "Training Programs",
                color: isDark ? "text-emerald-400" : "text-emerald-600"
              },
              { 
                icon: TrendingUp, 
                value: "95%", 
                label: "Placement Rate",
                color: isDark ? "text-orange-400" : "text-orange-600"
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-center p-6 rounded-xl border transition-all duration-300 hover:shadow-lg
                    ${isDark 
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}
                >
                  <Icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Why Choose VLSI Design Centre
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Industry-leading training programs designed to accelerate your career in semiconductor technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "World-Class Education",
                description: "Learn from industry experts with hands-on experience in semiconductor design and fabrication.",
                color: isDark ? "text-blue-400" : "text-blue-600",
                bgColor: isDark ? "bg-blue-900/20" : "bg-blue-50"
              },
              {
                icon: Award,
                title: "Cutting-Edge Research",
                description: "Engage in groundbreaking research projects that shape the future of VLSI technology.",
                color: isDark ? "text-purple-400" : "text-purple-600",
                bgColor: isDark ? "bg-purple-900/20" : "bg-purple-50"
              },
              {
                icon: Briefcase,
                title: "Industry Partnerships",
                description: "Connect with leading semiconductor companies and gain real-world project experience.",
                color: isDark ? "text-emerald-400" : "text-emerald-600",
                bgColor: isDark ? "bg-emerald-900/20" : "bg-emerald-50"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`p-8 rounded-xl border transition-all duration-300
                    ${isDark 
                      ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                      : 'bg-white border-gray-200 hover:border-gray-300'}
                    hover:shadow-xl`}
                >
                  <div className={`w-14 h-14 rounded-lg ${item.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <TrainingModules />

      {/* Success Stories Section */}
      <SuccessStories />
      
      {/* CTA Section */}
      <section className={`py-16 md:py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Start Your Journey?
            </h2>
            <p className={`text-base md:text-lg mb-8 px-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of successful engineers who have transformed their careers with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300
                ${isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'}
                shadow-lg hover:shadow-xl`}>
                Enroll Now
              </button>
              <button className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 border-2
                ${isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
