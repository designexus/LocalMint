'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star, Zap, Send, X, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

interface PeerReviewProps {
  isOpen: boolean
  onClose: () => void
  missionTitle: string
  submissionId: string
}

export function PeerReview({ isOpen, onClose, missionTitle, submissionId }: PeerReviewProps) {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (rating === 0) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Award reviewer XP bonus
    const reviewerXP = 10 + (rating * 5) // Base 10 XP + bonus based on rating
    
    console.log('Review submitted:', {
      rating,
      feedback,
      tipAmount,
      reviewerXP,
      submissionId
    })
    
    setIsSubmitting(false)
    onClose()
    
    // Reset form
    setRating(0)
    setFeedback('')
    setTipAmount(0)
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
          className="relative bg-forest-800 rounded-2xl p-8 max-w-lg w-full mx-4 border border-orange-500/30"
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
              Peer Review
            </h2>
            <p className="text-gray-400">
              Help your fellow learner improve
            </p>
            <div className="mt-4 p-3 bg-forest-700 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Mission:</strong> {missionTitle}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white mb-4">
              Rate this submission (1-5 stars)
            </label>
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`p-2 transition-all duration-300 ${
                    star <= rating
                      ? 'text-yellow-400 scale-110'
                      : 'text-gray-600 hover:text-yellow-400'
                  }`}
                >
                  <Star className={`w-8 h-8 ${star <= rating ? 'fill-current' : ''}`} />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-gray-400 mt-2">
                {rating === 1 && "Needs improvement"}
                {rating === 2 && "Below average"}
                {rating === 3 && "Good work"}
                {rating === 4 && "Great job!"}
                {rating === 5 && "Outstanding!"}
              </p>
            )}
          </div>

          {/* Feedback */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white mb-3">
              Constructive feedback (optional)
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share specific insights to help them improve..."
              className="w-full h-24 bg-forest-700 border border-forest-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Tip Amount */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white mb-3">
              Send a tip (optional)
            </label>
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="number"
                  value={tipAmount}
                  onChange={(e) => setTipAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="0"
                  className="w-full bg-forest-700 border border-forest-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-400">sats</span>
                </div>
              </div>
              <div className="flex space-x-2">
                {[10, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setTipAmount(amount)}
                    className="px-3 py-2 bg-forest-700 hover:bg-orange-500 text-gray-300 hover:text-white rounded-lg text-sm transition-colors"
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reviewer Rewards */}
          <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <ThumbsUp className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-green-400">Reviewer Rewards</span>
            </div>
            <div className="text-sm text-gray-300">
              <div>• Base XP: 10 XP</div>
              <div>• Rating bonus: +{rating * 5} XP</div>
              {feedback.length > 20 && <div>• Detailed feedback: +10 XP</div>}
              <div className="mt-2 font-semibold text-green-400">
                Total: {10 + (rating * 5) + (feedback.length > 20 ? 10 : 0)} XP
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={rating === 0 || isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              rating === 0 || isSubmitting
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'btn-primary glow-orange'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Review</span>
              </>
            )}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}