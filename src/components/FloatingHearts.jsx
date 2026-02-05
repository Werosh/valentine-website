import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Flower2, Sparkles } from 'lucide-react'

const FloatingHearts = () => {
  const floatingElements = useState(() => {
    const colors = {
      heart: ['#ff6b9d', '#ff8fab', '#ffb3d9', '#ffc0cb'],
      flower: ['#ffb3d9', '#ffc0cb', '#ffd1dc', '#ffe4e6'],
      sparkle: ['#ffd700', '#ffed4e', '#fff8dc', '#fffacd'],
    }
    
    return Array.from({ length: 15 }, (_, i) => {
      const icon = i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'flower' : 'sparkle'
      const palette = colors[icon] || colors.heart
      
      return {
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 20 + Math.random() * 30,
        icon,
        xOffset1: (Math.random() - 0.5) * 20,
        xOffset2: (Math.random() - 0.5) * 20,
        color: palette[Math.floor(Math.random() * palette.length)],
      }
    })
  })[0]

  const getIcon = (type) => {
    switch (type) {
      case 'heart':
        return <Heart className="w-full h-full" />
      case 'flower':
        return <Flower2 className="w-full h-full" />
      case 'sparkle':
        return <Sparkles className="w-full h-full" />
      default:
        return <Heart className="w-full h-full" />
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{
            x: `${element.x}vw`,
            y: '100vh',
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            x: [
              `${element.x}vw`,
              `${element.x + element.xOffset1}vw`,
              `${element.x + element.xOffset2}vw`,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            color: element.color,
          }}
        >
          {getIcon(element.icon)}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts

