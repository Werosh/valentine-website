import React from 'react'
import { motion } from 'framer-motion'

/**
 * RandomSVGs - A component that randomly places SVG elements across the website
 * @param {string|string[]} svgContent - Single SVG string or array of SVG strings to randomly place
 * @param {number} count - Number of SVG instances to create (default: 8)
 * @param {number} minSize - Minimum size in pixels (default: 40)
 * @param {number} maxSize - Maximum size in pixels (default: 120)
 * @param {number} minOpacity - Minimum opacity (default: 0.15)
 * @param {number} maxOpacity - Maximum opacity (default: 0.4)
 */
const RandomSVGs = ({ 
  svgContent, 
  count = 8, 
  minSize = 40, 
  maxSize = 120,
  minOpacity = 0.15,
  maxOpacity = 0.4,
}) => {
  // Normalize SVG content to array
  const svgArray = Array.isArray(svgContent) ? svgContent : [svgContent]
  
  // Pre-generate random positions and properties
  const svgInstances = React.useState(() => {
    return Array.from({ length: count }, (_, i) => {
      const randomValues = Array.from({ length: 11 }, () => Math.random())
      
      return {
        id: i,
        // Random position across viewport (avoid edges for better visibility)
        left: 10 + randomValues[0] * 80, // 10-90%
        top: 10 + randomValues[1] * 80, // 10-90%
        // Random size
        size: minSize + randomValues[2] * (maxSize - minSize),
        // Random rotation
        rotation: randomValues[3] * 360,
        // Random opacity
        opacity: minOpacity + randomValues[4] * (maxOpacity - minOpacity),
        // Animation delay
        delay: randomValues[5] * 2,
        // Animation duration
        duration: 3 + randomValues[6] * 2,
        // Float animation offset
        floatY: randomValues[7] * 40 - 20, // -20 to 20
        floatX: randomValues[8] * 20 - 10, // -10 to 10
        // Scale animation
        scaleVariation: 0.8 + randomValues[9] * 0.4, // 0.8 to 1.2
        // Select random SVG from array
        svg: svgArray[Math.floor(randomValues[10] * svgArray.length)],
      }
    })
  })[0]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {svgInstances.map((instance) => (
        <motion.div
          key={instance.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: instance.opacity,
            scale: [1, instance.scaleVariation, 1],
            y: [0, instance.floatY, 0],
            x: [0, instance.floatX, 0],
            rotate: [instance.rotation, instance.rotation + 10, instance.rotation - 10, instance.rotation],
          }}
          transition={{
            opacity: { duration: 1, delay: instance.delay },
            scale: {
              duration: instance.duration,
              delay: instance.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            y: {
              duration: instance.duration,
              delay: instance.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: instance.duration * 1.5,
              delay: instance.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: instance.duration * 2,
              delay: instance.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="absolute"
          style={{
            left: `${instance.left}%`,
            top: `${instance.top}%`,
            width: `${instance.size}px`,
            height: `${instance.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
          dangerouslySetInnerHTML={{ 
            __html: instance.svg.replace(
              /id="([^"]+)"/g, 
              (match, id) => `id="${id}_${instance.id}"`
            ).replace(
              /url\(#([^)]+)\)/g,
              (match, id) => `url(#${id}_${instance.id})`
            )
          }}
        />
      ))}
    </div>
  )
}

export default RandomSVGs

