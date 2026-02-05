import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const LoadingAnimation = ({ onComplete }) => {
  const [fillProgress, setFillProgress] = useState(0) // 0 to 100
  const [showComplete, setShowComplete] = useState(false)

  // Pre-generate love particles
  const loveParticles = useState(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const angle = (i * 360) / 50
      const distance = 200 + Math.random() * 150
      const delay = Math.random() * 3
      const duration = 2 + Math.random() * 2
      
      return {
        id: i,
        startX: Math.cos((angle * Math.PI) / 180) * distance,
        startY: Math.sin((angle * Math.PI) / 180) * distance,
        delay,
        duration,
        size: 8 + Math.random() * 12,
        type: Math.random() > 0.7 ? 'sparkle' : 'heart',
      }
    })
  })[0]

  // Pre-generate inner particles that accumulate
  const innerParticles = useState(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: `inner-${i}`,
      x: 50 + (Math.random() - 0.5) * 30,
      y: 50 + (Math.random() - 0.5) * 30,
      delay: 2 + (i / 30) * 6,
      size: 4 + Math.random() * 6,
    }))
  })[0]

  useEffect(() => {
    // Fill animation over 8 seconds
    const duration = 8000
    const startTime = Date.now()
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed / duration) * 100, 100)
      setFillProgress(progress)
      
      if (progress >= 100) {
        clearInterval(interval)
        // Show completion for 1.5 seconds
        setTimeout(() => {
          setShowComplete(true)
          setTimeout(() => {
            onComplete()
          }, 1500)
        }, 500)
      }
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [onComplete])

  const getFillMessage = () => {
    if (fillProgress < 20) return 'An empty heart awaits...'
    if (fillProgress < 40) return 'Love begins to flow...'
    if (fillProgress < 60) return 'Filling with memories...'
    if (fillProgress < 80) return 'Almost complete...'
    if (fillProgress < 100) return 'Nearly there...'
    return 'Heart full of love ❤️'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main heart container */}
          <div className="relative w-80 h-80">
            {/* Empty heart outline */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart
                className="w-full h-full text-pink-300"
                strokeWidth={3}
                fill="none"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                }}
              />
            </motion.div>

            {/* Filling heart (clip path animation) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                clipPath: `polygon(0% ${100 - fillProgress}%, 100% ${100 - fillProgress}%, 100% 100%, 0% 100%)`,
              }}
            >
              <Heart
                className="w-full h-full text-pink-500"
                fill="currentColor"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(255, 107, 157, 0.4))',
                }}
              />
            </motion.div>

            {/* Love particles flying in */}
            {loveParticles.map((particle) => {
              const shouldShow = fillProgress > (particle.delay / 8) * 100
              const hasArrived = fillProgress > ((particle.delay + particle.duration) / 8) * 100
              
              return (
                <motion.div
                  key={particle.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: shouldShow && !hasArrived ? [0, 1, 1, 0] : 0,
                    scale: shouldShow && !hasArrived ? [0, 1, 1, 0] : 0,
                    x: shouldShow && !hasArrived
                      ? [particle.startX, 0, 0]
                      : particle.startX,
                    y: shouldShow && !hasArrived
                      ? [particle.startY, 0, 0]
                      : particle.startY,
                    rotate: shouldShow && !hasArrived ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {particle.type === 'heart' ? (
                    <Heart
                      className="text-pink-400 fill-pink-400"
                      style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                      }}
                    />
                  ) : (
                    <Sparkles
                      className="text-pink-300"
                      style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                      }}
                    />
                  )}
                </motion.div>
              )
            })}

            {/* Inner particles that accumulate */}
            {innerParticles.map((particle) => {
              const shouldShow = fillProgress > (particle.delay / 8) * 100
              
              return (
                <motion.div
                  key={particle.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: shouldShow ? 1 : 0,
                    scale: shouldShow ? [0, 1.2, 1] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: particle.delay,
                    ease: 'easeOut',
                  }}
                  className="absolute"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Heart
                      className="text-pink-500 fill-pink-500"
                      style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: 0.7,
                      }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}

            {/* Sparkles that appear as heart fills */}
            {Array.from({ length: 15 }).map((_, i) => {
              const showAt = (i / 15) * 100
              const shouldShow = fillProgress > showAt
              
              return (
                <motion.div
                  key={`sparkle-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: shouldShow ? [0, 1, 0] : 0,
                    scale: shouldShow ? [0, 1, 0] : 0,
                    x: [
                      0,
                      Math.cos((i * 24 * Math.PI) / 180) * 60,
                      Math.cos((i * 24 * Math.PI) / 180) * 80,
                    ],
                    y: [
                      0,
                      Math.sin((i * 24 * Math.PI) / 180) * 60,
                      Math.sin((i * 24 * Math.PI) / 180) * 80,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    delay: (i / 15) * 6,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeOut',
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <Sparkles className="w-5 h-5 text-pink-300" />
                </motion.div>
              )
            })}

            {/* Completion glow effect */}
            {showComplete && (
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Heart
                  className="w-full h-full text-pink-400"
                  fill="currentColor"
                  style={{
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>
            )}
          </div>

          {/* Progress text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center"
          >
            <motion.p
              key={fillProgress}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-pink-600 text-xl md:text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {getFillMessage()}
            </motion.p>
            
            {!showComplete && (
              <motion.div
                className="w-64 h-1 bg-pink-200 rounded-full overflow-hidden"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${fillProgress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.div>
            )}

            {showComplete && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="text-4xl"
              >
                ✨
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingAnimation
