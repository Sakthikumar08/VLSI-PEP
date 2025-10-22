"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const EventsPage = () => {
  const { isDark } = useTheme()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const events = [
    {
      id: 1,
      title: "International VLSI Symposium 2024",
      date: "March 15-17, 2024",
      category: "conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      description: "Join leading experts from around the world to discuss the latest advancements in VLSI design and semiconductor technology.",
      attendees: "500+",
      location: "Main Auditorium",
      highlights: [
        "Keynote speeches from industry leaders",
        "Technical paper presentations",
        "Interactive workshops",
        "Networking opportunities"
      ]
    },
    {
      id: 2,
      title: "FPGA Design Workshop",
      date: "April 5-7, 2024",
      category: "workshop",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      description: "Hands-on workshop on FPGA prototyping and implementation using Xilinx and Intel FPGA platforms.",
      attendees: "150+",
      location: "VLSI Lab A",
      highlights: [
        "Practical FPGA programming sessions",
        "Real-world project demonstrations",
        "One-on-one mentoring",
        "Certification upon completion"
      ]
    },
    {
      id: 3,
      title: "Semiconductor Industry Meet",
      date: "May 20, 2024",
      category: "seminar",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      description: "Connect with top semiconductor companies and explore career opportunities in the VLSI industry.",
      attendees: "300+",
      location: "Conference Hall",
      highlights: [
        "Company presentations",
        "Recruitment drives",
        "Industry insights",
        "Career counseling sessions"
      ]
    },
    {
      id: 4,
      title: "AI in VLSI Design Seminar",
      date: "June 10, 2024",
      category: "seminar",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      description: "Explore how artificial intelligence is revolutionizing VLSI design automation and chip optimization.",
      attendees: "200+",
      location: "Smart Classroom",
      highlights: [
        "AI-powered EDA tools",
        "Machine learning in chip design",
        "Case studies and demonstrations",
        "Q&A with AI experts"
      ]
    },
    {
      id: 5,
      title: "Student Project Exhibition",
      date: "July 15-16, 2024",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      description: "Showcase of innovative VLSI projects developed by students, featuring cutting-edge designs and implementations.",
      attendees: "400+",
      location: "Exhibition Hall",
      highlights: [
        "50+ student projects",
        "Live demonstrations",
        "Best project awards",
        "Industry judges panel"
      ]
    },
    {
      id: 6,
      title: "Advanced RTL Design Masterclass",
      date: "August 22-24, 2024",
      category: "workshop",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      description: "Deep dive into advanced RTL design techniques, optimization strategies, and best practices.",
      attendees: "100+",
      location: "VLSI Lab B",
      highlights: [
        "Advanced SystemVerilog concepts",
        "Design optimization techniques",
        "Industry case studies",
        "Hands-on coding sessions"
      ]
    },
    {
      id: 7,
      title: "Low Power VLSI Design Conference",
      date: "September 5-6, 2024",
      category: "conference",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      description: "Focus on power-efficient design methodologies and techniques for modern low-power VLSI systems.",
      attendees: "350+",
      location: "Main Auditorium",
      highlights: [
        "Power optimization strategies",
        "Energy-efficient architectures",
        "Research paper presentations",
        "Panel discussions"
      ]
    },
    {
      id: 8,
      title: "IoT and VLSI Integration Seminar",
      date: "October 12, 2024",
      category: "seminar",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
      description: "Discover how VLSI design enables next-generation IoT devices and smart systems.",
      attendees: "250+",
      location: "Conference Room",
      highlights: [
        "IoT chip design fundamentals",
        "Wireless communication protocols",
        "Sensor integration techniques",
        "Live IoT demonstrations"
      ]
    }
  ]

  const categories = [
    { id: "all", label: "All Events", icon: "fa-calendar-alt" },
    { id: "conference", label: "Conferences", icon: "fa-users" },
    { id: "workshop", label: "Workshops", icon: "fa-tools" },
    { id: "seminar", label: "Seminars", icon: "fa-chalkboard-teacher" },
    { id: "exhibition", label: "Exhibitions", icon: "fa-project-diagram" }
  ]

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter)

  return (
    <div className={`min-h-screen pt-20 pb-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent ${
            isDark ? "from-blue-400 via-purple-400 to-emerald-400" : ""
          }`}>
            Events & Activities
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Explore our exciting lineup of conferences, workshops, seminars, and exhibitions designed to advance VLSI knowledge and innovation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              <i className={`fas ${category.icon}`}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedEvent(event)}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <i className={`fas fa-calendar-day ${isDark ? "text-blue-400" : "text-blue-600"}`}></i>
                  <span className={isDark ? "text-gray-300" : "text-gray-600"}>{event.date}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <i className={`fas fa-map-marker-alt ${isDark ? "text-emerald-400" : "text-emerald-600"}`}></i>
                  <span className={isDark ? "text-gray-300" : "text-gray-600"}>{event.location}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <i className={`fas fa-users ${isDark ? "text-purple-400" : "text-purple-600"}`}></i>
                  <span className={isDark ? "text-gray-300" : "text-gray-600"}>{event.attendees} Attendees</span>
                </div>

                <p className={`text-sm mb-4 line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {event.description}
                </p>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className={`max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}
                  </span>
                </div>

                <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {selectedEvent.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <i className={`fas fa-calendar-day text-2xl ${isDark ? "text-blue-400" : "text-blue-600"}`}></i>
                    <div>
                      <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Date</p>
                      <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{selectedEvent.date}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <i className={`fas fa-map-marker-alt text-2xl ${isDark ? "text-emerald-400" : "text-emerald-600"}`}></i>
                    <div>
                      <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Location</p>
                      <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{selectedEvent.location}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <i className={`fas fa-users text-2xl ${isDark ? "text-purple-400" : "text-purple-600"}`}></i>
                    <div>
                      <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Attendees</p>
                      <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{selectedEvent.attendees}</p>
                    </div>
                  </div>
                </div>

                <p className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {selectedEvent.description}
                </p>

                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Event Highlights
                </h3>

                <ul className="space-y-3 mb-6">
                  {selectedEvent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className={`fas fa-check-circle mt-1 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}></i>
                      <span className={isDark ? "text-gray-300" : "text-gray-700"}>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default EventsPage
