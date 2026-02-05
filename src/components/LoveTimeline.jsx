import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react'

const LoveTimeline = () => {
  const timelineEvents = [
    {
      id: 1,
      date: 'The Beginning',
      title: 'When We First Met',
      description: 'That magical moment when our eyes first met, and I knew something special was about to begin.',
      icon: Sparkles,
      color: '#ff6b9d',
    },
    {
      id: 2,
      date: 'Our First Date',
      title: 'A Day to Remember',
      description: 'Every moment felt like a dream. Your smile, your laugh, everything about you captured my heart.',
      icon: Calendar,
      color: '#ff8fab',
    },
    {
      id: 3,
      date: 'Growing Together',
      title: 'Building Our Story',
      description: 'With each passing day, our bond grows stronger. Every memory we create is a treasure I hold dear.',
      icon: Heart,
      color: '#ffb3d9',
    },
    {
      id: 4,
      date: 'Today & Forever',
      title: 'Our Journey Continues',
      description: 'This is just the beginning of our beautiful story. I look forward to every tomorrow with you by my side.',
      icon: MapPin,
      color: '#ffc0cb',
    },
  ]

  return (
    <section className="min-h-screen py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-pink-50/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{
            fontFamily: "'Dancing Script', cursive",
            background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Our Love Story
        </h2>
        <p
          className="text-lg md:text-xl text-pink-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A timeline of our beautiful journey together
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-300 transform md:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative mb-12 flex items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-6 h-6 rounded-full bg-white border-4 border-pink-400 shadow-lg flex items-center justify-center"
                    style={{ borderColor: event.color }}
                  >
                    <Icon className="w-3 h-3" style={{ color: event.color }} />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-lg relative"
                    style={{
                      boxShadow: `0 10px 30px ${event.color}40`,
                    }}
                  >
                    <div className="absolute -top-2 -right-2">
                      <Heart
                        className="w-6 h-6"
                        style={{ color: event.color }}
                        fill={event.color}
                      />
                    </div>
                    <div
                      className="text-sm font-semibold mb-2"
                      style={{ color: event.color, fontFamily: "'Poppins', sans-serif" }}
                    >
                      {event.date}
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{
                        fontFamily: "'Dancing Script', cursive",
                        color: event.color,
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-pink-700 leading-relaxed"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LoveTimeline

