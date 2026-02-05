import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart } from 'lucide-react'
import lovelyCoupleData from '../data/svgs/lovely-couple-hugging.json'
import SVGFromJSON from './SVGFromJSON'

const HangingImages = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Pre-generate random values for each image
  const imageProperties = useState(() => {
    return Array.from({ length: 4 }, (_, i) => {
      const randomValues = Array.from({ length: 5 }, () => Math.random())
      return {
        rotation: randomValues[0] * 6 - 3, // -3 to 3 degrees
        ropeLength: 40 + randomValues[1] * 40, // 40 to 80px
        swingAngle: randomValues[2] * 8 - 4, // -4 to 4 degrees
        swingDuration: 3 + randomValues[3] * 2, // 3 to 5 seconds
        swingDelay: randomValues[4] * 0.5, // 0 to 0.5 seconds
      }
    })
  })[0]

  // Placeholder images - replace these with your actual couple photos
  // You can add images to public/images/ folder and reference them
  const coupleImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop',
      alt: 'Our beautiful moments',
      date: 'Our First Date',
      note: 'The day everything changed',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8e125f46?w=400&h=600&fit=crop',
      alt: 'Memories together',
      date: 'A Special Day',
      note: 'Forever in my heart',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop',
      alt: 'Our journey',
      date: 'Beautiful Moments',
      note: 'Every second with you is precious',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=600&fit=crop',
      alt: 'Love story',
      date: 'Together Forever',
      note: 'You make everything better',
    },
  ]

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
            fontFamily: "'DynaPuff', cursive",
            background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Our Beautiful Memories
        </h2>
        <p
          className="text-lg md:text-xl text-pink-700"
          style={{ fontFamily: "'Gorditas', cursive" }}
        >
          Each photo tells a story of our love
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coupleImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Hanging string */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-pink-300"></div>
              
              {/* Paper clip or hook */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              >
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.div>

              {/* Photo frame */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: imageRotations[index] }}
                className="relative bg-white p-2 shadow-lg rounded-lg"
                style={{
                  boxShadow: '0 10px 30px rgba(255, 107, 157, 0.3)',
                }}
              >
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-semibold">{image.date}</p>
                      <p className="text-sm">{image.note}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-pink-300"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-pink-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full screen image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 
                  className="text-white text-2xl font-bold mb-2"
                  style={{ fontFamily: "'DynaPuff', cursive" }}
                >
                  {selectedImage.date}
                </h3>
                <p className="text-white/90">{selectedImage.note}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HangingImages

