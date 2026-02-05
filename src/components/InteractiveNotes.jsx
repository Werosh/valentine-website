import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Lock, Unlock, Sparkles, Mail, X } from 'lucide-react'

const InteractiveNotes = () => {
  const [selectedNote, setSelectedNote] = useState(null)
  
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
      message: 'You are the most beautiful person I know, inside and out. Every day with you is a gift. Your kindness, your smile, your gentle heart - everything about you makes my world brighter.',
      icon: Heart,
      color: '#ff6b9d',
    },
    {
      id: 2,
      title: 'My Promise',
      locked: true,
      message: 'I promise to love you, support you, and cherish every moment we share together, now and forever. Through every season, through every challenge, my love for you will only grow stronger.',
      icon: Sparkles,
      color: '#ff8fab',
    },
    {
      id: 3,
      title: 'A Thought',
      locked: true,
      message: 'When I think of you, my heart smiles. You bring so much joy and happiness into my life. Even on the darkest days, your presence is like sunshine breaking through the clouds.',
      icon: Mail,
      color: '#ffb3d9',
    },
    {
      id: 4,
      title: 'Forever Yours',
      locked: true,
      message: 'No matter where life takes us, I will always be here, loving you with all my heart. You are my home, my peace, my everything. Forever and always, my love.',
      icon: Heart,
      color: '#ffc0cb',
    },
  ]

  const openNote = (note) => {
    setSelectedNote(note)
  }

  const closeNote = () => {
    setSelectedNote(null)
  }

  return (
    <section className="min-h-screen py-20 px-4 relative z-10 overflow-hidden">
      {/* Soft romantic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-pink-50/40 to-rose-50/50"></div>

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
            <Mail className="w-16 h-16 text-pink-400 fill-pink-400/30" />
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
            Love Notes for You
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-pink-600 mb-4"
            style={{ fontFamily: "'Gorditas', cursive" }}
          >
            Click to open messages from my heart 💌
          </motion.p>
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

              return (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openNote(note)}
                    className="cursor-pointer relative"
                  >
                    {/* Vintage envelope card */}
                    <div
                      className="relative p-8 rounded-2xl shadow-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #fef5e7 0%, #f9e6d3 50%, #f5d5a8 100%)',
                        boxShadow: `0 15px 40px ${note.color}30, 0 0 30px ${note.color}20`,
                        minHeight: '280px',
                      }}
                    >
                      {/* Paper texture */}
                      <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px),
                            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px)
                          `,
                        }}
                      />

                      {/* Lock icon */}
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-4 right-4"
                      >
                        <Lock className="w-6 h-6" style={{ color: note.color }} />
                      </motion.div>

                      {/* Note icon */}
                      <div className="mb-6 relative z-10">
                        <Icon className="w-14 h-14" style={{ color: note.color }} />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-3xl font-bold mb-4 relative z-10"
                        style={{
                          fontFamily: "'DynaPuff', cursive",
                          color: note.color,
                        }}
                      >
                        {note.title}
                      </h3>

                      {/* Hint text */}
                      <motion.p
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-amber-800 text-sm mt-6 relative z-10"
                        style={{ fontFamily: "'Delius', cursive" }}
                      >
                        Click to read the full message...
                      </motion.p>

                      {/* Decorative corner hearts */}
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute bottom-4 right-4"
                      >
                        <Heart
                          className="w-6 h-6 opacity-40"
                          style={{ color: note.color }}
                          fill={note.color}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
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

      {/* Old Paper Modal/Popup */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={closeNote}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              {/* Old Paper with torn corners */}
              <div
                className="relative p-10 md:p-14 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #fef5e7 0%, #f9e6d3 50%, #f5d5a8 100%)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 0 100px rgba(139, 90, 43, 0.1)',
                }}
              >
                {/* Torn corner effect - Top Left */}
                <div
                  className="absolute -top-2 -left-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at top left, transparent 40%, #fef5e7 40%, #fef5e7 45%, transparent 45%)',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  }}
                />
                <div
                  className="absolute -top-2 -left-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at top left, transparent 35%, #f5d5a8 35%, #f5d5a8 40%, transparent 40%)',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  }}
                />

                {/* Torn corner effect - Top Right */}
                <div
                  className="absolute -top-2 -right-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at top right, transparent 40%, #fef5e7 40%, #fef5e7 45%, transparent 45%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  }}
                />
                <div
                  className="absolute -top-2 -right-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at top right, transparent 35%, #f5d5a8 35%, #f5d5a8 40%, transparent 40%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  }}
                />

                {/* Torn corner effect - Bottom Left */}
                <div
                  className="absolute -bottom-2 -left-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at bottom left, transparent 40%, #fef5e7 40%, #fef5e7 45%, transparent 45%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                  }}
                />
                <div
                  className="absolute -bottom-2 -left-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at bottom left, transparent 35%, #f5d5a8 35%, #f5d5a8 40%, transparent 40%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                  }}
                />

                {/* Torn corner effect - Bottom Right */}
                <div
                  className="absolute -bottom-2 -right-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at bottom right, transparent 40%, #fef5e7 40%, #fef5e7 45%, transparent 45%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  }}
                />
                <div
                  className="absolute -bottom-2 -right-2 w-12 h-12"
                  style={{
                    background: 'radial-gradient(circle at bottom right, transparent 35%, #f5d5a8 35%, #f5d5a8 40%, transparent 40%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  }}
                />

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

                {/* Ruled lines (like notebook paper) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, rgba(139, 90, 43, 0.15) 28px, rgba(139, 90, 43, 0.15) 29px)',
                    backgroundPosition: '0 60px',
                  }}
                />

                {/* Red margin line (like notebook) */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60px, rgba(220, 38, 38, 0.3) 60px, rgba(220, 38, 38, 0.3) 100%)',
                  }}
                />

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeNote}
                  className="absolute top-4 right-4 z-20 text-amber-800 hover:text-amber-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {React.createElement(selectedNote.icon, {
                        className: 'w-8 h-8',
                        style: { color: selectedNote.color },
                      })}
                      <h3
                        className="text-3xl md:text-4xl font-bold"
                        style={{
                          fontFamily: "'DynaPuff', cursive",
                          color: selectedNote.color,
                        }}
                      >
                        {selectedNote.title}
                      </h3>
                    </div>
                    <div
                      className="text-sm font-semibold tracking-wider uppercase"
                      style={{
                        color: selectedNote.color,
                        fontFamily: "'Gorditas', cursive",
                        letterSpacing: '2px',
                      }}
                    >
                      {selectedNote.date || 'A Message from My Heart'}
                    </div>
                  </motion.div>

                  {/* Message text with ruled lines spacing */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pl-8"
                    style={{
                      fontFamily: "'Delius', cursive",
                      lineHeight: '28px',
                    }}
                  >
                    {selectedNote.message.split('\n').map((line, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-amber-900 mb-1"
                        style={{
                          minHeight: '28px',
                        }}
                      >
                        {line || '\u00A0'}
                      </motion.p>
                    ))}
                  </motion.div>

                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-right"
                  >
                    <p
                      className="text-amber-800 text-xl"
                      style={{ fontFamily: "'Delius', cursive" }}
                    >
                      With all my love,
                    </p>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="inline-block mt-2"
                    >
                      <Heart
                        className="w-6 h-6"
                        style={{ color: selectedNote.color }}
                        fill={selectedNote.color}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveNotes

