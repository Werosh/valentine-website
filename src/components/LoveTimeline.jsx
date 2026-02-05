import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react'

const LoveTimeline = () => {
  const timelineEvents = [
    {
      id: 1,
      date: 'The Beginning',
      title: 'When We First Met',
      description: 'That magical moment when our eyes first met, and I knew something special was about to begin. Your smile lit up my world, and I felt my heart skip a beat.',
      icon: Sparkles,
      color: '#ff6b9d',
      gradient: 'from-pink-200 via-rose-100 to-pink-200',
    },
    {
      id: 2,
      date: 'Our First Date',
      title: 'A Day to Remember',
      description: 'Every moment felt like a dream. Your laugh, your gentle touch, the way you looked at me—everything about you captured my heart completely.',
      icon: Calendar,
      color: '#ff8fab',
      gradient: 'from-rose-200 via-pink-100 to-rose-200',
    },
    {
      id: 3,
      date: 'Growing Together',
      title: 'Building Our Story',
      description: 'With each passing day, our bond grows stronger. Every memory we create is a treasure I hold dear. You make every ordinary moment extraordinary.',
      icon: Heart,
      color: '#ffb3d9',
      gradient: 'from-pink-200 via-rose-50 to-pink-200',
    },
    {
      id: 4,
      date: 'Today & Forever',
      title: 'Our Journey Continues',
      description: 'This is just the beginning of our beautiful story. I look forward to every tomorrow with you by my side, creating countless more memories together.',
      icon: MapPin,
      color: '#ffc0cb',
      gradient: 'from-rose-200 via-pink-50 to-rose-200',
    },
  ]

  return (
    <section className="min-h-screen py-20 px-4 relative z-10 overflow-hidden">
      {/* Soft romantic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-rose-50/60 to-pink-100/80"></div>
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          >
            <Heart className="w-6 h-6 text-pink-300 fill-pink-300/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-pink-400 fill-pink-400/30" />
          </motion.div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              fontFamily: "'DynaPuff', cursive",
              background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #ff8fab 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2',
            }}
          >
            Our Love Story
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-pink-600"
            style={{ fontFamily: "'Gorditas', cursive" }}
          >
            A beautiful journey written in the stars ✨
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Elegant flowing timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
              style={{
                background: 'linear-gradient(to bottom, #ffb3d9, #ff8fab, #ff6b9d, #ff8fab, #ffb3d9)',
                boxShadow: '0 0 10px rgba(255, 107, 157, 0.3)',
              }}
            />

            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.3, duration: 0.8, ease: 'easeOut' }}
                  className={`relative mb-16 md:mb-20 flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Elegant timeline dot with glow */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.2, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.4 }}
                      className="relative"
                    >
                      {/* Glow effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${event.color}80, transparent)`,
                          filter: 'blur(8px)',
                        }}
                      />
                      {/* Icon container */}
                      <div
                        className="relative w-12 h-12 rounded-full bg-white border-4 shadow-xl flex items-center justify-center"
                        style={{
                          borderColor: event.color,
                          boxShadow: `0 0 20px ${event.color}60, 0 4px 15px rgba(0,0,0,0.1)`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: event.color }} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Vintage love letter card */}
                  <div
                    className={`w-full md:w-[45%] ml-20 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8, rotate: isEven ? 1 : -1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative"
                    >
                      {/* Card shadow glow */}
                      <div
                        className="absolute -inset-1 rounded-2xl opacity-30 blur-xl"
                        style={{
                          background: `linear-gradient(135deg, ${event.color}, ${event.color}80)`,
                        }}
                      />
                      
                      {/* Vintage paper card */}
                      <div
                        className="relative p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #fef5e7 0%, #f9e6d3 50%, #f5d5a8 100%)',
                          boxShadow: `0 20px 60px ${event.color}30, 0 0 40px ${event.color}20, inset 0 0 100px rgba(139, 90, 43, 0.05)`,
                        }}
                      >
                        {/* Paper texture overlay */}
                        <div
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{
                            backgroundImage: `
                              repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px),
                              repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px)
                            `,
                          }}
                        />

                        {/* Decorative corner hearts */}
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                          className="absolute -top-3 -right-3"
                        >
                          <Heart
                            className="w-8 h-8"
                            style={{ color: event.color }}
                            fill={event.color}
                          />
                        </motion.div>
                        <motion.div
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 + 0.5 }}
                          className="absolute -bottom-3 -left-3"
                        >
                          <Heart
                            className="w-6 h-6"
                            style={{ color: event.color }}
                            fill={event.color}
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="relative z-10">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3 + 0.4 }}
                            className="text-sm font-semibold mb-3 tracking-wider uppercase"
                            style={{
                              color: event.color,
                              fontFamily: "'Gorditas', cursive",
                              letterSpacing: '2px',
                            }}
                          >
                            {event.date}
                          </motion.div>
                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3 + 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                            style={{
                              fontFamily: "'DynaPuff', cursive",
                              color: event.color,
                            }}
                          >
                            {event.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3 + 0.6 }}
                            className="text-amber-900 leading-relaxed text-lg"
                            style={{
                              fontFamily: "'Delius', cursive",
                              lineHeight: '1.8',
                            }}
                          >
                            {event.description}
                          </motion.p>
                        </div>

                        {/* Decorative border */}
                        <div className="absolute inset-0 border-2 border-amber-700/20 rounded-2xl pointer-events-none" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoveTimeline

