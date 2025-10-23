import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import TrainingModules from "../components/TrainingModules"
import { Award, Users, BookOpen, TrendingUp, Target, CheckCircle2 } from "lucide-react"

const TrainingPage = () => {
  const { isDark } = useTheme()

  const benefits = [
    {
      icon: Award,
      title: "Industry-Recognized Certification",
      description: "Earn certificates that are valued by top semiconductor companies worldwide"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professionals with decades of industry expertise"
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "Practical training with real-world projects and industry-standard tools"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Boost your career with skills that are in high demand in the semiconductor industry"
    },
    {
      icon: Target,
      title: "Customized Programs",
      description: "Tailored training solutions for individuals, teams, and organizations"
    },
    {
      icon: CheckCircle2,
      title: "Placement Support",
      description: "Connect with our industry partners for internship and job opportunities"
    }
  ]

  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "50+", label: "Corporate Clients" },
    { number: "15+", label: "Training Programs" },
    { number: "95%", label: "Placement Rate" }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Professional Training</span>
              <br />
              <span className={isDark ? "text-white" : "text-gray-900"}>
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
              Empowering the next generation of engineers with cutting-edge VLSI and semiconductor technology training
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary">
                Enroll Now
              </button>
              <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300
                                border-2 ${isDark 
                                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-900/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <TrainingModules />

      {/* Benefits Section */}
      <section className={`section-padding ${isDark ? 'bg-gray-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Choose Us?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive training that combines theoretical knowledge with practical industry experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300
                            ${isDark 
                              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 
                                flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-12 rounded-3xl shadow-2xl text-center
                      ${isDark 
                        ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700/50' 
                        : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Ready to Start Your Journey?</span>
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of successful engineers who have transformed their careers with our training programs
            </p>
            <button className="btn-primary">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TrainingPage
