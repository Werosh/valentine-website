import React, { useRef, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const BackgroundMusic = ({ src = '/background-music.mp3', volume = 0.5 }) => {
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVolume, setCurrentVolume] = useState(volume)
  const [showVolumeControl, setShowVolumeControl] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      // Set volume (0.0 to 1.0)
      audio.volume = isMuted ? 0 : currentVolume
      
      // Enable looping
      audio.loop = true

      // Handle play/pause state
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      
      audio.addEventListener('play', handlePlay)
      audio.addEventListener('pause', handlePause)

      // Try to play the audio
      const playPromise = audio.play()

      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started playing successfully
            console.log('Background music started')
          })
          .catch(() => {
            // Autoplay was prevented - user interaction required
            console.log('Autoplay prevented. Music will start after user interaction.')
            
            // Try to play on first user interaction
            const playOnInteraction = () => {
              audio.play().catch(err => console.log('Could not play audio:', err))
              // Remove listeners after first play
              document.removeEventListener('click', playOnInteraction)
              document.removeEventListener('touchstart', playOnInteraction)
              document.removeEventListener('keydown', playOnInteraction)
            }

            document.addEventListener('click', playOnInteraction, { once: true })
            document.addEventListener('touchstart', playOnInteraction, { once: true })
            document.addEventListener('keydown', playOnInteraction, { once: true })
          })
      }

      // Cleanup
      return () => {
        audio.removeEventListener('play', handlePlay)
        audio.removeEventListener('pause', handlePause)
        if (audio) {
          audio.pause()
          audio.currentTime = 0
        }
      }
    }
  }, [currentVolume, isMuted])

  const toggleMute = () => {
    const audio = audioRef.current
    if (audio) {
      if (isMuted) {
        audio.volume = currentVolume
        setIsMuted(false)
        if (!isPlaying) {
          audio.play().catch(err => console.log('Could not play audio:', err))
        }
      } else {
        audio.volume = 0
        setIsMuted(true)
      }
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    const audio = audioRef.current
    
    setCurrentVolume(newVolume)
    
    if (audio) {
      audio.volume = newVolume
      if (newVolume > 0) {
        setIsMuted(false)
        if (!isPlaying) {
          audio.play().catch(err => console.log('Could not play audio:', err))
        }
      } else {
        setIsMuted(true)
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        style={{ display: 'none' }}
      />
      
      {/* Lovely bubbly sound control container */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="fixed top-6 right-6 z-50 flex items-center gap-3"
        onMouseEnter={() => setShowVolumeControl(true)}
        onMouseLeave={() => setShowVolumeControl(false)}
      >
        {/* Volume control bar */}
        <motion.div
          initial={{ opacity: 0, width: 0, x: -20 }}
          animate={{
            opacity: showVolumeControl ? 1 : 0,
            width: showVolumeControl ? 120 : 0,
            x: showVolumeControl ? 0 : -20,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden rounded-full"
        >
          <div
            className="px-4 py-3 rounded-full shadow-2xl backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.95) 0%, rgba(255, 143, 171, 0.95) 50%, rgba(255, 179, 217, 0.95) 100%)',
              boxShadow: '0 8px 32px rgba(255, 107, 157, 0.4), 0 0 20px rgba(255, 179, 217, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.3)',
            }}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : currentVolume}
              onChange={handleVolumeChange}
              className="w-full h-2 rounded-full appearance-none cursor-pointer volume-slider"
              style={{
                background: `linear-gradient(to right, 
                  rgba(255, 255, 255, 0.9) 0%, 
                  rgba(255, 255, 255, 0.9) ${(isMuted ? 0 : currentVolume) * 100}%, 
                  rgba(255, 255, 255, 0.3) ${(isMuted ? 0 : currentVolume) * 100}%, 
                  rgba(255, 255, 255, 0.3) 100%)`,
              }}
              aria-label="Volume control"
            />
          </div>
        </motion.div>

        {/* Sound control button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="p-4 rounded-full shadow-2xl transition-all duration-300"
          style={{
            background: isMuted 
              ? 'linear-gradient(135deg, #ffb3d9 0%, #ff8fab 50%, #ff6b9d 100%)'
              : 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 50%, #ffb3d9 100%)',
            boxShadow: isMuted
              ? '0 8px 32px rgba(255, 107, 157, 0.4), 0 0 20px rgba(255, 179, 217, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.3)'
              : '0 8px 32px rgba(255, 107, 157, 0.5), 0 0 30px rgba(255, 179, 217, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.3)',
          }}
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        >
        {/* Bubbly glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full "
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent) ',
            filter: 'blur(8px)',
          }}
        />
        
        {/* Icon */}
        <motion.div
          animate={isMuted ? {} : {
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" strokeWidth={2.5} />
          ) : (
            <Volume2 className="w-6 h-6 text-white" strokeWidth={2.5} />
          )}
        </motion.div>

        {/* Floating particles effect when playing */}
        {!isMuted && isPlaying && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)',
                }}
                animate={{
                  scale: [0, 1.5, 2],
                  opacity: [0.8, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}
      </motion.button>
      </motion.div>

      {/* Custom styles for volume slider */}
      <style>{`
        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(255, 107, 157, 0.5), 0 0 10px rgba(255, 179, 217, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(255, 107, 157, 0.3);
          transition: all 0.2s ease;
        }
        
        .volume-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          border-radius: 50%;
          box-shadow: 0 3px 12px rgba(255, 107, 157, 0.7), 0 0 15px rgba(255, 179, 217, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.9);
        }
        
        .volume-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(255, 107, 157, 0.5), 0 0 10px rgba(255, 179, 217, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(255, 107, 157, 0.3);
          transition: all 0.2s ease;
        }
        
        .volume-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          border-radius: 50%;
          box-shadow: 0 3px 12px rgba(255, 107, 157, 0.7), 0 0 15px rgba(255, 179, 217, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.9);
        }
        
        .volume-slider:focus {
          outline: none;
          border-radius: 50%;
        }
        
        .volume-slider:focus::-webkit-slider-thumb {
          box-shadow: 0 3px 12px rgba(255, 107, 157, 0.7), 0 0 15px rgba(255, 179, 217, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.9);
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}

export default BackgroundMusic

