'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Zap, Star, Gift, Users } from 'lucide-react'
import confetti from 'canvas-confetti'

interface SpinWheelProps {
  isOpen: boolean
  onClose: () => void
  onSpin: (reward: any) => void
}

const wheelSegments = [
  { id: 1, label: '50 Sats', value: 50, type: 'sats', color: 'from-green-400 to-green-600', icon: Zap },
  { id: 2, label: '100 XP', value: 100, type: 'xp', color: 'from-orange-400 to-orange-600', icon: Star },
  { id: 3, label: '25 Sats', value: 25, type: 'sats', color: 'from-green-400 to-green-600', icon: Zap },
  { id: 4, label: 'Collectible', value: 1, type: 'collectible', color: 'from-purple-400 to-purple-600', icon: Gift },
  { id: 5, label: '75 Sats', value: 75, type: 'sats', color: 'from-green-400 to-green-600', icon: Zap },
  { id: 6, label: '200 XP', value: 200, type: 'xp', color: 'from-orange-400 to-orange-600', icon: Star },
  { id: 7, label: '10 Sats', value: 10, type: 'sats', color: 'from-green-400 to-green-600', icon: Zap },
  { id: 8, label: 'Tribe Boost', value: 1, type: 'tribe_boost', color: 'from-yellow-400 to-yellow-600', icon: Users },
]

export function SpinWheel({ isOpen, onClose, onSpin }: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState<any>(null)

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setResult(null)

    // Calculate random rotation (multiple full rotations + random segment)
    const segmentAngle = 360 / wheelSegments.length
    const randomSegment = Math.floor(Math.random() * wheelSegments.length)
    const finalRotation = rotation + 1440 + (randomSegment * segmentAngle) // 4 full rotations + segment

    setRotation(finalRotation)

    // Show result after animation
    setTimeout(() => {
      const winningSegment = wheelSegments[randomSegment]
      setResult(winningSegment)
      setIsSpinning(false)
      onSpin(winningSegment)
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-forest-800 rounded-2xl p-8 max-w-md w-full mx-4 border border-orange-500/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-unica font-bold gradient-text mb-2">
              Spin to Win!
            </h2>
            <p className="text-gray-400">
              {result ? 'Congratulations!' : 'Spin the wheel for your reward'}
            </p>
          </div>

          {/* Wheel */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="relative w-64 h-64">
              {/* Wheel Segments */}
              <motion.div
                className="w-full h-full rounded-full relative overflow-hidden border-4 border-orange-500"
                animate={{ rotate: rotation }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                {wheelSegments.map((segment, index) => {
                  const angle = (360 / wheelSegments.length) * index
                  const IconComponent = segment.icon
                  
                  return (
                    <div
                      key={segment.id}
                      className={`absolute w-full h-full bg-gradient-to-r ${segment.color}`}
                      style={{
                        transform: `rotate(${angle}deg)`,
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((360 / wheelSegments.length) * Math.PI / 180)}% ${50 - 50 * Math.sin((360 / wheelSegments.length) * Math.PI / 180)}%)`
                      }}
                    >
                      <div
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-center"
                        style={{ transform: `translateX(-50%) rotate(${360 / wheelSegments.length / 2}deg)` }}
                      >
                        <IconComponent className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-xs font-semibold whitespace-nowrap">
                          {segment.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>

              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white" />
              </div>
            </div>
          </div>

          {/* Result Display */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r ${result.color} text-white font-semibold`}>
                <result.icon className="w-5 h-5" />
                <span>You won {result.label}!</span>
              </div>
            </motion.div>
          )}

          {/* Spin Button */}
          <div className="text-center">
            <button
              onClick={handleSpin}
              disabled={isSpinning}
              className={`btn-primary text-lg px-8 py-3 ${isSpinning ? 'opacity-50 cursor-not-allowed' : 'glow-orange'}`}
            >
              {isSpinning ? 'Spinning...' : result ? 'Spin Again' : '🎰 Spin Wheel'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}