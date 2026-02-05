import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

const LoveModal = ({ onComplete }) => {
  const [stage, setStage] = useState(1) // 1: initial, 2: are you sure, 3: emotional, 4: final note, 5: final message

  const handleYes = (currentStage) => {
    if (currentStage === 1) {
      // First Yes
      setStage(6) // Show "Yayyy, I knew it."
    } else if (currentStage === 2) {
      // Second Yes (from "Are you sure?") - Go to emotional message
      setStage(3) // Show emotional message
    } else if (currentStage === 3) {
      // Third Yes (from emotional message) - Go to vintage note
      setStage(4) // Show final vintage note
    }
  }

  const handleNo = (currentStage) => {
    if (currentStage === 1) {
      // First No
      setStage(2) // Show "Are you sure?"
    } else if (currentStage === 2) {
      // Second No (from "Are you sure?") - Show success message (playful)
      setStage(7) // Show "Huh, I knew it."
    } else if (currentStage === 3) {
      // Third No (from emotional message) - Show success message
      setStage(8) // Show "I knew it. You love me."
    }
  }

  const handleFinalButton = () => {
    setStage(9) // Show final message
  }

  // Navigate to site after showing message (all messages stay for at least 3 seconds)
  useEffect(() => {
    if (stage === 6 || stage === 7 || stage === 8) {
      const timer = setTimeout(() => {
        onComplete()
      }, 3000) // At least 3 seconds
      return () => clearTimeout(timer)
    } else if (stage === 9) {
      // Final message stays for at least 5 seconds
      const timer = setTimeout(() => {
        onComplete()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [stage, onComplete])

  // Stage 6: "Yayyy, I knew it."
  if (stage === 6) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
            // style={{ fontFamily: "'Gorditas', cursive" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-pink-700 text-center mb-4"
            >
              Yayyy, I knew it. ❤️
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 7: "Huh, I knew it."
  if (stage === 7) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
            style={{ fontFamily: "'Gorditas', cursive" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-pink-700 text-center mb-4"
            >
              Huh, I knew it. 😊
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 8: "I knew it. You love me."
  if (stage === 8) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
            style={{ fontFamily: "'Gorditas', cursive" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-pink-700 text-center mb-4"
            >
              I knew it. You love me. 💕
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 9: Final message
  if (stage === 9) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
            style={{ fontFamily: "'Gorditas', cursive" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-pink-700 text-center mb-4 leading-relaxed"
            >
              Please do not say you do not love me again. My heart is way too soft for that..💖
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 4: Final vintage note
  if (stage === 4) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative max-w-lg w-full"
            style={{
              background: 'linear-gradient(135deg, #fef5e7 0%, #f9e6d3 50%, #f5d5a8 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 100px rgba(139, 90, 43, 0.1)',
            }}
          >
            {/* Vintage paper texture effect */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 90, 43, 0.1) 2px, rgba(139, 90, 43, 0.1) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 90, 43, 0.1) 2px, rgba(139, 90, 43, 0.1) 4px)
                `,
              }}
            />
            
            {/* Paper edges */}
            <div className="absolute inset-0 border-4 border-amber-800/20" />
            
            <div className="relative p-8 md:p-12">
              {/* Handwritten style content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-amber-900"
                style={{ fontFamily: "'Delius', cursive" }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl mb-4 leading-relaxed"
                >
                  My Dearest,
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg md:text-xl mb-4 leading-relaxed"
                >
                  Even when you say "I Hate You and I want to break up", I see the love in your eyes. 
                  Your heart speaks louder than words, and I hear it every time.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg md:text-xl mb-6 leading-relaxed"
                >
                  You are my everything, my little devil princess. 
                  And I know, deep down, you feel the same way.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-xl md:text-2xl text-right mt-8"
                >
                  Forever yours, ❤️
                </motion.p>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFinalButton}
                  className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ fontFamily: "'Sour Gummy', cursive" }}
                >
                  Click me. I know you love me, little devil princess.
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 3: Emotional message
  if (stage === 3) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-pink-700 text-center mb-6 leading-relaxed"
              style={{ fontFamily: "'Delius', cursive" }}
            >
              You are going to hurt the sweetest boy ever living in this universe. Do you really want to do that? 😢
            </motion.p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleYes(3)}
                className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: "'Sour Gummy', cursive" }}
              >
                Yes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNo(3)}
                className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: "'Sour Gummy', cursive" }}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 2: "Are you sure?"
  if (stage === 2) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl text-pink-700 text-center mb-6"
              style={{ fontFamily: "'Delius', cursive" }}
            >
              Are you sure? 🤔
            </motion.p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleYes(2)}
                className="px-5 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ transform: 'scale(0.9)', fontFamily: "'Sour Gummy', cursive" }}
              >
                Yes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNo(2)}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ transform: 'scale(1.1)', fontFamily: "'Sour Gummy', cursive" }}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Stage 1: Initial question
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20, rotate: -2 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-2xl max-w-md mx-4 border-2 border-pink-200"
          style={{
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3), inset 0 0 50px rgba(255, 182, 193, 0.2)',
          }}
        >
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0 rounded-3xl opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px)
              `,
            }}
          />

          <div className="relative">
            {/* Handwritten style question */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-4"
              >
                <Heart className="w-12 h-12 text-pink-500 fill-pink-500 mx-auto" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl text-pink-700 mb-2"
                style={{ fontFamily: "'Delius', cursive" }}
              >
                Do you love me?
              </motion.p>
            </motion.div>

            {/* Bubbly buttons */}
            <div className="flex gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleYes(1)}
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: "'Sour Gummy', cursive" }}
              >
                Yes
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNo(1)}
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: "'Sour Gummy', cursive" }}
              >
                No
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoveModal

