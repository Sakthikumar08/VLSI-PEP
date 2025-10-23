import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { ChevronLeft, ChevronRight, Quote, Award, Star, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

const SuccessStories = () => {
  const { isDark } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const stories = [
    {
      id: 1,
      name: "P. Naga Raghavendra Rao Sarma",
      role: "Student",
      institution: "K.L.University - Vijayawada, Andhra Pradesh",
      image: "/api/placeholder/200/200", // Replace with actual image
      quote: "The Internet of things describes the network of physical objects known as, 'things' — these are embedded with sensors, software, and other technologies. It will help me in my studies.",
      course: "Internet of Things",
      achievement: "Successfully completed IoT certification",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Graduate Student",
      institution: "IIT Madras, Tamil Nadu",
      image: "/api/placeholder/200/200",
      quote: "The VLSI Design course provided me with hands-on experience in chip design. The faculty's industry expertise helped me secure a position at a leading semiconductor company.",
      course: "VLSI Design & Verification",
      achievement: "Placed at Intel Corporation",
      rating: 5
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Working Professional",
      institution: "Infosys Technologies, Bangalore",
      image: "/api/placeholder/200/200",
      quote: "The RF Design training transformed my career. I gained practical knowledge in antenna design and 5G technology that directly applies to my current projects.",
      course: "Radio Frequency Design",
      achievement: "Promoted to Senior RF Engineer",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Research Scholar",
      institution: "NIT Warangal, Telangana",
      image: "/api/placeholder/200/200",
      quote: "The Mechanical FEA program equipped me with advanced simulation skills. The ANSYS training and real-world projects prepared me excellently for my research work.",
      course: "Mechanical FEA",
      achievement: "Published 2 research papers",
      rating: 5
    }
  ]

  const nextStory = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextStory, 8000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const currentStory = stories[currentIndex]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with Wave Pattern */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-950 via-gray-900 to-blue-900' : 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950'}`}>
        {/* Animated Wave Patterns */}
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="currentColor"
            className="text-blue-600"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ d: [
              "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]}}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-blue-400/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-blue-400/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Hear from our students and professionals who transformed their careers through our training programs
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevStory}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 
                     p-2 md:p-3 rounded-full bg-white/10 border border-white/20 text-white 
                     hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextStory}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 
                     p-2 md:p-3 rounded-full bg-white/10 border border-white/20 text-white 
                     hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Story Card */}
          <div className="relative min-h-[600px] md:min-h-[400px] px-8 md:px-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 h-full">
                  <div className="grid md:grid-cols-3 gap-8 items-center h-full">
                    {/* Left: Image */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-lg opacity-50" />
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
                          <img 
                            src={currentStory.image} 
                            alt={currentStory.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(currentStory.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      {/* Achievement Badge */}
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold text-center">
                        {currentStory.achievement}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-blue-400 opacity-50" />

                      {/* Quote Text */}
                      <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                        "{currentStory.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">
                          {currentStory.name}
                        </h3>
                        <p className="text-blue-200">
                          {currentStory.role} • {currentStory.institution}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">
                          <TrendingUp className="w-4 h-4 text-blue-300" />
                          <span className="text-sm text-blue-100">{currentStory.course}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Success Stories", value: "500+", icon: Award },
            { label: "Placed Students", value: "95%", icon: TrendingUp },
            { label: "Partner Companies", value: "50+", icon: Star },
            { label: "Course Rating", value: "4.8/5", icon: Star },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessStories
