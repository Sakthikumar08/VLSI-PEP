import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { Cpu, Wifi, Settings, Radio, Box, ChevronRight, Users, Clock, Award, TrendingUp, BookOpen } from "lucide-react"
import { useState } from "react"

const TrainingModules = () => {
  const { isDark } = useTheme()
  const [selectedModule, setSelectedModule] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const modules = [
    {
      id: 1,
      title: "VLSI Design & Verification",
      icon: Cpu,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      category: "design",
      duration: "6 Months",
      level: "Advanced",
      students: "250+",
      description: "Master chip design, RTL coding, and verification methodologies with industry-standard tools",
      skills: ["SystemVerilog", "UVM", "ASIC Design", "Timing Analysis", "RTL Design", "Synthesis"],
      highlights: [
        "Hands-on ASIC design projects",
        "Industry-standard EDA tools",
        "Real-world tape-out experience",
        "Job-ready certification"
      ]
    },
    {
      id: 2,
      title: "Internet of Things",
      icon: Wifi,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      category: "embedded",
      duration: "4 Months",
      level: "Intermediate",
      students: "180+",
      description: "Build smart connected devices and embedded systems for the IoT revolution",
      skills: ["Embedded C", "IoT Protocols", "Sensor Integration", "Cloud Platforms", "MQTT", "Edge Computing"],
      highlights: [
        "Build complete IoT systems",
        "Cloud integration projects",
        "Industry use cases",
        "Certification included"
      ]
    },
    {
      id: 3,
      title: "Radio Frequency Design",
      icon: Radio,
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      category: "design",
      duration: "5 Months",
      level: "Advanced",
      students: "120+",
      description: "Design RF circuits and advanced antenna systems for wireless communication",
      skills: ["RF Circuit Design", "Antenna Theory", "EM Simulation", "5G Technology", "Signal Processing", "Impedance Matching"],
      highlights: [
        "RF lab access",
        "Antenna design projects",
        "5G/6G technology exposure",
        "Industry partnerships"
      ]
    },
    {
      id: 4,
      title: "Additive Manufacturing",
      icon: Box,
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      category: "manufacturing",
      duration: "3 Months",
      level: "Beginner",
      students: "200+",
      description: "Learn 3D printing and advanced manufacturing techniques for modern production",
      skills: ["3D Printing", "CAD Design", "Material Science", "Rapid Prototyping", "FDM/SLA", "Post-processing"],
      highlights: [
        "Access to 3D printers",
        "Material testing lab",
        "Prototype development",
        "Industry collaborations"
      ]
    },
    {
      id: 5,
      title: "Mechanical FEA",
      icon: Settings,
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-600",
      category: "simulation",
      duration: "4 Months",
      level: "Intermediate",
      students: "150+",
      description: "Perform Finite Element Analysis and structural simulation using industry tools",
      skills: ["ANSYS", "Structural Analysis", "CFD", "Thermal Analysis", "Optimization", "Modal Analysis"],
      highlights: [
        "ANSYS software training",
        "Real engineering problems",
        "Simulation projects",
        "Certification support"
      ]
    }
  ]

  const offerings = [
    { title: "Corporate Training", icon: Users, count: "50+ Companies", color: "blue" },
    { title: "Internship Programs", icon: Award, count: "200+ Students", color: "purple" },
    { title: "Career Development", icon: TrendingUp, count: "95% Placement", color: "emerald" },
  ]

  const categories = [
    { id: 'all', label: 'All Programs', count: 5 },
    { id: 'design', label: 'Design', count: 2 },
    { id: 'embedded', label: 'Embedded', count: 1 },
    { id: 'simulation', label: 'Simulation', count: 1 },
    { id: 'manufacturing', label: 'Manufacturing', count: 1 },
  ]

  const filteredModules = activeTab === 'all' 
    ? modules 
    : modules.filter(m => m.category === activeTab)

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Training Programs</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive training modules designed for industry excellence
          </p>
        </motion.div>

        {/* Offerings Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${offering.color}-500 to-${offering.color}-600`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{offering.title}</p>
                    <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{offering.count}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 justify-center px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base
                ${activeTab === cat.id
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {cat.label} <span className="ml-1 md:ml-2 opacity-70 text-xs md:text-sm">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module, index) => {
            const Icon = module.icon
            const isSelected = selectedModule === module.id
            
            return (
              <motion.div
                key={module.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedModule(isSelected ? null : module.id)}
                className="cursor-pointer"
              >
                <div className={`h-full rounded-xl overflow-hidden transition-all duration-300
                  ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                  border hover:shadow-2xl
                  ${isSelected ? 'ring-2 ring-' + module.color + '-500 shadow-xl' : ''}`}
                >
                  {/* Card Header */}
                  <div className={`p-6 bg-gradient-to-r ${module.gradient}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {module.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-sm text-white/90">{module.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Info Row */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{module.students}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>KEY SKILLS</p>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.slice(0, isSelected ? module.skills.length : 3).map((skill, idx) => (
                          <span 
                            key={idx}
                            className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                          >
                            {skill}
                          </span>
                        ))}
                        {!isSelected && module.skills.length > 3 && (
                          <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                            +{module.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Highlights - Show when selected */}
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>PROGRAM HIGHLIGHTS</p>
                        <ul className="space-y-2">
                          {module.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 text-${module.color}-500`} />
                              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
                      bg-gradient-to-r ${module.gradient} text-white hover:shadow-lg`}>
                      <BookOpen className="w-4 h-4" />
                      {isSelected ? 'Enroll Now' : 'Learn More'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Can't find what you're looking for?
          </p>
          <button className="btn-primary">
            Request Custom Training
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainingModules
