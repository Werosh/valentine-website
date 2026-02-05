import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import sharingLoveData from '../data/svgs/paper-airplane-carrying-a-heart.json'
import heartPendulumData from '../data/svgs/heart-shaped-tags-connected.json'
import quillFeatherData from '../data/svgs/quill-feather-with-a-pink-heart.json'
import heartAngelWingsData from '../data/svgs/heart-with-angel-wings.json'
import SVGFromJSON from './SVGFromJSON'

const Welcome = () => {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Heart Pendulum Animation - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="absolute top-[-30px] left-4 md:top-[-50px] md:left-8 z-20 pointer-events-none w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
      >
        <SVGFromJSON
          jsonData={heartPendulumData}
          uniqueId="welcome-pendulum"
          className="w-full h-full"
          loop={true}
          autoplay={true}
        />
      </motion.div>

      {/* Heart with Angel Wings - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-20 pointer-events-none w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <SVGFromJSON
            jsonData={heartAngelWingsData}
            uniqueId="welcome-heart-angel-wings"
            className="w-full h-full"
            loop={true}
            autoplay={true}
          />
        </motion.div>
      </motion.div>

      {/* Sharing Love SVG - Left Bottom (slightly towards middle) */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className="absolute left-4 bottom-20 md:left-8 md:bottom-24 z-20 pointer-events-none w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
      >
        <motion.div
          animate={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <SVGFromJSON
            jsonData={sharingLoveData}
            uniqueId="welcome-sharing-love"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* Quill Feather with Pink Heart - Right Bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
        className="absolute right-4 bottom-20 md:right-8 md:bottom-24 z-20 pointer-events-none w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <SVGFromJSON
            jsonData={quillFeatherData}
            uniqueId="welcome-quill-feather"
            className="w-full h-full"
            loop={true}
            autoplay={true}
          />
        </motion.div>
      </motion.div>

      <div className="text-center z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-pink-500 fill-pink-500" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          style={{
            fontFamily: "'DynaPuff', cursive",
            background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #ff8fab 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
          }}
        >
          For My Beautiful Love
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl md:text-2xl text-pink-700 mb-8 leading-relaxed text-center"
          style={{ fontFamily: "'Gorditas', cursive" }}
        >
          Every moment with you is a treasure,<br />
          every memory a precious gem.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-lg md:text-xl text-pink-600 max-w-2xl mx-auto text-center"
          style={{ fontFamily: "'Gorditas', cursive", fontStyle: 'italic' }}
        >
          This is a little piece of my heart, crafted just for you.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <span className="text-4xl">💕</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Welcome

