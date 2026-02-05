import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Lock, Unlock, Sparkles, Mail } from 'lucide-react'

const InteractiveNotes = () => {
  const [openedNotes, setOpenedNotes] = useState(new Set())
  
  const floatingHeartsData = useState(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      xOffset: (Math.random() - 0.5) * 100,
      duration: 3 + Math.random() * 2,
      left: 20 + i * 15,
    }))
  })[0]

  const loveNotes = [
    {
      id: 1,
      title: 'A Secret Message',
      locked: true,
      message: 'You are the most beautiful person I know, inside and out. Every day with you is a gift.',
      icon: Heart,
      color: '#ff6b9d',
    },
    {
      id: 2,
      title: 'My Promise',
      locked: true,
      message: 'I promise to love you, support you, and cherish every moment we share together, now and forever.',
      icon: Sparkles,
      color: '#ff8fab',
    },
    {
      id: 3,
      title: 'A Thought',
      locked: true,
      message: 'When I think of you, my heart smiles. You bring so much joy and happiness into my life.',
      icon: Mail,
      color: '#ffb3d9',
    },
    {
      id: 4,
      title: 'Forever Yours',
      locked: true,
      message: 'No matter where life takes us, I will always be here, loving you with all my heart.',
      icon: Heart,
      color: '#ffc0cb',
    },
  ]

  const toggleNote = (id) => {
    setOpenedNotes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="min-h-screen py-20 px-4 relative z-10">
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
          Love Notes for You
        </h2>
        <p
          className="text-lg md:text-xl text-pink-700 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Click to reveal hidden messages from my heart
        </p>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <Sparkles className="w-8 h-8 text-pink-400" />
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loveNotes.map((note, index) => {
            const Icon = note.icon
            const isOpen = openedNotes.has(note.id)

            return (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: isOpen ? 0 : (index % 3) * 2 - 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleNote(note.id)}
                  className="cursor-pointer relative"
                >
                  {/* Envelope/Note background */}
                  <div
                    className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
                    style={{
                      boxShadow: `0 10px 30px ${note.color}40`,
                      minHeight: '250px',
                    }}
                  >
                    {/* Decorative pattern */}
                    <div
                      className="absolute top-0 left-0 right-0 h-2"
                      style={{ background: `linear-gradient(90deg, ${note.color}, ${note.color}80)` }}
                    ></div>

                    {/* Lock/Unlock icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-4 right-4"
                    >
                      {isOpen ? (
                        <Unlock className="w-6 h-6" style={{ color: note.color }} />
                      ) : (
                        <Lock className="w-6 h-6" style={{ color: note.color }} />
                      )}
                    </motion.div>

                    {/* Note icon */}
                    <div className="mb-4">
                      <Icon className="w-12 h-12" style={{ color: note.color }} />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{
                        fontFamily: "'Dancing Script', cursive",
                        color: note.color,
                      }}
                    >
                      {note.title}
                    </h3>

                    {/* Message - animated reveal */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-pink-700 leading-relaxed"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {note.message}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isOpen && (
                      <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-pink-400 text-sm mt-4"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Click to open...
                      </motion.p>
                    )}

                    {/* Decorative corner hearts */}
                    <div className="absolute bottom-2 right-2">
                      <Heart
                        className="w-4 h-4 opacity-30"
                        style={{ color: note.color }}
                        fill={note.color}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Floating hearts around notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHeartsData.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -100],
              x: [0, heart.xOffset],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.id * 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute"
            style={{
              left: `${heart.left}%`,
              bottom: '10%',
            }}
          >
            <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default InteractiveNotes

