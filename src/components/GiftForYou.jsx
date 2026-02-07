import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Heart, Sparkles } from 'lucide-react'
import bougainvilleaData from '../data/svgs/bougainvillea-flower.json'
import paperData from '../data/svgs/paper.json'
import SVGFromJSON from './SVGFromJSON'

const GiftForYou = () => {
  const [showModal, setShowModal] = useState(false)
  const [showPaperNote, setShowPaperNote] = useState(false)

  const openGift = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowPaperNote(false)
    setTimeout(() => {
      setShowModal(false)
    }, 300)
  }

  const openPaperNote = () => {
    setShowPaperNote(true)
  }

  const closePaperNote = () => {
    setShowPaperNote(false)
  }

  // Floating papers data
  const floatingPapers = useState(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 20 - 10,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }))
  })[0]

  return (
    <section className=" py-20 px-4 relative z-10 overflow-hidden">
      {/* Soft romantic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-rose-50/60 to-pink-100/80"></div>

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
            <Gift className="w-16 h-16 text-pink-400 fill-pink-400/30" />
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
            Gift For You
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-pink-600 mb-8"
            style={{ fontFamily: "'Gorditas', cursive" }}
          >
            A special memory waiting to be discovered 💝
          </motion.p>

          {/* Gift Box Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={openGift}
              className="px-10 py-5 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              style={{ fontFamily: "'Sour Gummy', cursive" }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-3"
              >
                <Gift className="w-6 h-6 inline" />
              </motion.div>
              Open your gift box
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(254, 245, 231, 0.98) 0%, rgba(249, 230, 211, 0.98) 50%, rgba(245, 213, 168, 0.98) 100%)',
            }}
          >
            {/* Floating papers background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {floatingPapers.map((paper) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8],
                    x: [paper.x + '%', (paper.x + 10) + '%', paper.x + '%'],
                    y: [paper.y + '%', (paper.y - 10) + '%', paper.y + '%'],
                    rotate: [paper.rotation, paper.rotation + 5, paper.rotation],
                  }}
                  transition={{
                    duration: paper.duration,
                    delay: paper.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute"
                  style={{
                    width: '120px',
                    height: '160px',
                    background: 'linear-gradient(135deg, #fef5e7 0%, #f9e6d3 100%)',
                    boxShadow: '0 4px 15px rgba(139, 90, 43, 0.2)',
                    borderRadius: '2px',
                    transform: `rotate(${paper.rotation}deg)`,
                  }}
                >
                  {/* Paper lines */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 8px, rgba(139, 90, 43, 0.1) 8px, rgba(139, 90, 43, 0.1) 9px)',
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-24 right-8 z-40 text-amber-800 hover:text-amber-900 transition-colors bg-white/80 rounded-full p-2 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Main content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
              {/* Flower Animation - Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 100 }}
                className="w-64 h-64 md:w-80 md:h-80 mb-8"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-full h-full"
                >
                  <SVGFromJSON
                    jsonData={bougainvilleaData}
                    uniqueId="gift-bougainvillea"
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                  />
                </motion.div>
              </motion.div>

              {/* Paper Animation with Pointer */}
              <div className="relative flex items-center gap-8 md:gap-12">
                {/* Paper Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 100 }}
                  className="relative cursor-pointer"
                  onClick={openPaperNote}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -3, 3, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-32 h-32 md:w-40 md:h-40"
                  >
                    <SVGFromJSON
                      jsonData={paperData}
                      uniqueId="gift-paper"
                      className="w-full h-full"
                      loop={true}
                      autoplay={true}
                    />
                  </motion.div>

                  {/* Gentle pointer/hint */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute -left-32 md:-left-40 top-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Sparkles className="w-5 h-5 text-pink-500" />
                      </motion.div>
                      <motion.p
                        className="text-amber-800 text-sm md:text-base whitespace-nowrap"
                        style={{
                          fontFamily: "'Delius', cursive",
                          textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        Something is here...
                      </motion.p>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Old Paper Note Popup */}
      <AnimatePresence>
        {showPaperNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
            onClick={closePaperNote}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full"
            >
              {/* Old torn paper */}
              <div
                className="relative p-10 md:p-14 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #fef5e7 0%, #f9e6d3 50%, #f5d5a8 100%)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 0 100px rgba(139, 90, 43, 0.15)',
                }}
              >
                {/* Rolled edges effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(circle at top left, transparent 30%, rgba(139, 90, 43, 0.1) 30%, rgba(139, 90, 43, 0.1) 35%, transparent 35%),
                      radial-gradient(circle at top right, transparent 30%, rgba(139, 90, 43, 0.1) 30%, rgba(139, 90, 43, 0.1) 35%, transparent 35%),
                      radial-gradient(circle at bottom left, transparent 30%, rgba(139, 90, 43, 0.1) 30%, rgba(139, 90, 43, 0.1) 35%, transparent 35%),
                      radial-gradient(circle at bottom right, transparent 30%, rgba(139, 90, 43, 0.1) 30%, rgba(139, 90, 43, 0.1) 35%, transparent 35%)
                    `,
                  }}
                />

                {/* Small holes (like from an old book) */}
                {[
                  { top: '15%', left: '10%' },
                  { top: '25%', right: '15%' },
                  { top: '60%', left: '8%' },
                  { top: '75%', right: '12%' },
                ].map((hole, index) => (
                  <div
                    key={index}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      ...hole,
                      background: 'radial-gradient(circle, rgba(139, 90, 43, 0.3) 0%, transparent 70%)',
                      boxShadow: 'inset 0 0 3px rgba(0,0,0,0.3)',
                    }}
                  />
                ))}

                {/* Torn edges - more pronounced */}
                <div
                  className="absolute -top-3 -left-3 w-16 h-16"
                  style={{
                    background: 'radial-gradient(circle at top left, transparent 35%, #fef5e7 35%, #fef5e7 42%, transparent 42%)',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  }}
                />
                <div
                  className="absolute -top-3 -right-3 w-16 h-16"
                  style={{
                    background: 'radial-gradient(circle at top right, transparent 35%, #fef5e7 35%, #fef5e7 42%, transparent 42%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-16 h-16"
                  style={{
                    background: 'radial-gradient(circle at bottom left, transparent 35%, #fef5e7 35%, #fef5e7 42%, transparent 42%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                  }}
                />
                <div
                  className="absolute -bottom-3 -right-3 w-16 h-16"
                  style={{
                    background: 'radial-gradient(circle at bottom right, transparent 35%, #fef5e7 35%, #fef5e7 42%, transparent 42%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  }}
                />

                {/* Paper texture */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px),
                      repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(139, 90, 43, 0.1) 1px, rgba(139, 90, 43, 0.1) 2px)
                    `,
                  }}
                />

                {/* Aging spots */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, rgba(139, 90, 43, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(139, 90, 43, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(139, 90, 43, 0.1) 0%, transparent 60%)
                    `,
                  }}
                />

                {/* Hand-drawn pen lines (not perfectly straight) */}
                <svg className="absolute inset-0 pointer-events-none opacity-25" style={{ zIndex: 1 }}>
                  {/* Horizontal lines with slight curves */}
                  <path
                    d="M 40 80 Q 200 85 400 82 Q 500 80 600 83"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M 50 120 Q 180 125 380 122 Q 480 120 580 123"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M 45 160 Q 190 165 390 162 Q 490 160 590 163"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M 40 200 Q 200 205 400 202 Q 500 200 600 203"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M 50 240 Q 180 245 380 242 Q 480 240 580 243"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M 45 280 Q 190 285 390 282 Q 490 280 590 283"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M 40 320 Q 200 325 400 322 Q 500 320 600 323"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  {/* Vertical margin line with slight wobble */}
                  <path
                    d="M 35 60 Q 38 150 36 240 Q 37 330 35 420"
                    stroke="rgba(220, 38, 38, 0.25)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>

                {/* Scratchy pen marks and imperfections */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `
                      /* Scratchy marks */
                      linear-gradient(45deg, transparent 48%, rgba(139, 90, 43, 0.2) 49%, rgba(139, 90, 43, 0.2) 51%, transparent 52%),
                      linear-gradient(135deg, transparent 48%, rgba(139, 90, 43, 0.15) 49%, rgba(139, 90, 43, 0.15) 51%, transparent 52%),
                      /* Ink blots */
                      radial-gradient(circle at 15% 20%, rgba(139, 90, 43, 0.15) 0%, transparent 3%),
                      radial-gradient(circle at 85% 35%, rgba(139, 90, 43, 0.12) 0%, transparent 2.5%),
                      radial-gradient(circle at 25% 65%, rgba(139, 90, 43, 0.1) 0%, transparent 2%),
                      radial-gradient(circle at 75% 80%, rgba(139, 90, 43, 0.13) 0%, transparent 2.5%),
                      /* Pen pressure marks */
                      linear-gradient(90deg, transparent 30%, rgba(139, 90, 43, 0.08) 31%, transparent 32%),
                      linear-gradient(90deg, transparent 55%, rgba(139, 90, 43, 0.06) 56%, transparent 57%),
                      linear-gradient(90deg, transparent 72%, rgba(139, 90, 43, 0.07) 73%, transparent 74%)
                    `,
                    backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%',
                    zIndex: 1,
                  }}
                />

                {/* Additional scratchy texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(139, 90, 43, 0.05) 2px,
                        rgba(139, 90, 43, 0.05) 3px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(139, 90, 43, 0.05) 2px,
                        rgba(139, 90, 43, 0.05) 3px
                      )
                    `,
                    zIndex: 1,
                  }}
                />

                {/* Hand-drawn scribbles/doodles */}
                <svg className="absolute inset-0 pointer-events-none opacity-10" style={{ zIndex: 1 }}>
                  {/* Small scribbles */}
                  <path
                    d="M 100 150 Q 105 148 110 150 Q 115 152 120 150"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.3"
                    fill="none"
                  />
                  <path
                    d="M 450 200 Q 455 198 460 200 Q 465 202 470 200"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.3"
                    fill="none"
                  />
                  <path
                    d="M 200 350 Q 205 348 210 350 Q 215 352 220 350"
                    stroke="rgba(139, 90, 43, 0.3)"
                    strokeWidth="0.3"
                    fill="none"
                  />
                  {/* Small circles/dots */}
                  <circle cx="120" cy="180" r="0.8" fill="rgba(139, 90, 43, 0.2)" />
                  <circle cx="480" cy="250" r="0.6" fill="rgba(139, 90, 43, 0.2)" />
                  <circle cx="250" cy="380" r="0.7" fill="rgba(139, 90, 43, 0.2)" />
                </svg>

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closePaperNote}
                  className="absolute top-4 right-4 z-20 text-amber-800 hover:text-amber-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-amber-900"
                    style={{ fontFamily: "'Delius', cursive" }}
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl leading-relaxed mb-4"
                      style={{ lineHeight: '2' }}
                    >
                      This is the first bougainvillea flower that I picked for you.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg md:text-xl leading-relaxed mb-4"
                      style={{ lineHeight: '2' }}
                    >
                      That bougainvillea holds so many memories for me, and for us.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg md:text-xl leading-relaxed mb-4"
                      style={{ lineHeight: '2' }}
                    >
                      It is very special to my heart.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-lg md:text-xl leading-relaxed"
                      style={{ lineHeight: '2' }}
                    >
                      And you knowww my baby... what is that memoryyyy.
                    </motion.p>
                  </motion.div>

                  {/* Decorative heart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring' }}
                    className="mt-8 text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="inline-block"
                    >
                      <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
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

export default GiftForYou

