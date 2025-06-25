'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, Zap, TrendingUp, Play, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { SpinWheel } from '@/components/SpinWheel'
import { PeerReview } from '@/components/PeerReview'

// Mock mission data - in real app this would come from API/database
const mission = {
  id: '1',
  title: "Bitcoin Basics: What is a Satoshi?",
  description: "Learn the smallest unit of Bitcoin and why it matters for the future of money. Understand the significance of divisibility in digital currency and how satoshis enable micropayments.",
  track: "Bitcoin",
  difficulty: "Easy",
  xp: 20,
  sats: 100,
  duration: "5 min",
  participants: 1337,
  rating: 4.8,
  image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
  content: {
    sections: [
      {
        title: "What is a Satoshi?",
        content: "A satoshi (sat) is the smallest unit of Bitcoin, named after Bitcoin's pseudonymous creator, Satoshi Nakamoto. One Bitcoin equals 100,000,000 satoshis.",
        type: "text"
      },
      {
        title: "Why Satoshis Matter",
        content: "Satoshis enable micropayments and make Bitcoin accessible to everyone, regardless of Bitcoin's price. They're essential for Lightning Network transactions.",
        type: "text"
      },
      {
        title: "Interactive Quiz",
        content: "Test your knowledge about satoshis and Bitcoin divisibility.",
        type: "quiz",
        questions: [
          {
            question: "How many satoshis are in 1 Bitcoin?",
            options: ["1,000,000", "10,000,000", "100,000,000", "1,000,000,000"],
            correct: 2
          },
          {
            question: "What enables micropayments in Bitcoin?",
            options: ["Large blocks", "Satoshis", "Mining", "Wallets"],
            correct: 1
          }
        ]
      }
    ]
  },
  prerequisites: [],
  learningObjectives: [
    "Understand what a satoshi is",
    "Learn why Bitcoin divisibility matters",
    "Explore micropayment possibilities",
    "Practice satoshi calculations"
  ]
}

export default function MissionPage({ params }: { params: { id: string } }) {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [showSpinWheel, setShowSpinWheel] = useState(false)
  const [showPeerReview, setShowPeerReview] = useState(false)

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = answerIndex
    setQuizAnswers(newAnswers)
  }

  const handleComplete = () => {
    setIsCompleted(true)
    setShowSpinWheel(true)
  }

  const handleSpinComplete = (reward: any) => {
    console.log('Spin reward:', reward)
    setShowSpinWheel(false)
    setShowPeerReview(true)
  }

  const currentContent = mission.content.sections[currentSection]
  const isLastSection = currentSection === mission.content.sections.length - 1

  return (
    <div className="min-h-screen bg-forest-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Missions</span>
          </Link>

          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {mission.track}
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {mission.difficulty}
                  </span>
                </div>

                <h1 className="text-3xl font-unica font-bold text-white mb-4">
                  {mission.title}
                </h1>

                <p className="text-gray-300 mb-6">
                  {mission.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 font-semibold">{mission.xp} XP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">{mission.sats} sats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{mission.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{mission.participants}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {isCompleted && (
                  <div className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-green-400" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Learning Objectives</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {mission.learningObjectives.map((objective, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <span className="text-gray-300">{objective}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Progress</h2>
            <span className="text-orange-400 font-semibold">
              {currentSection + 1} / {mission.content.sections.length}
            </span>
          </div>
          <div className="w-full bg-forest-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-500 to-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / mission.content.sections.length) * 100}%` }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            {currentContent.title}
          </h2>

          {currentContent.type === 'text' && (
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentContent.content}
              </p>
            </div>
          )}

          {currentContent.type === 'quiz' && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-6">{currentContent.content}</p>
              
              {currentContent.questions?.map((question, qIndex) => (
                <div key={qIndex} className="bg-forest-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {question.question}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option, oIndex) => (
                      <button
                        key={oIndex}
                        onClick={() => handleQuizAnswer(qIndex, oIndex)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                          quizAnswers[qIndex] === oIndex
                            ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                            : 'border-forest-600 hover:border-forest-500 text-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className={`btn-secondary ${
              currentSection === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>

          {isLastSection ? (
            <button
              onClick={handleComplete}
              disabled={isCompleted}
              className={`btn-primary ${
                isCompleted ? 'opacity-50 cursor-not-allowed' : 'glow-orange'
              }`}
            >
              {isCompleted ? 'Completed!' : 'Complete Mission'}
            </button>
          ) : (
            <button
              onClick={() => setCurrentSection(Math.min(mission.content.sections.length - 1, currentSection + 1))}
              className="btn-primary"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Spin Wheel Modal */}
      <SpinWheel
        isOpen={showSpinWheel}
        onClose={() => setShowSpinWheel(false)}
        onSpin={handleSpinComplete}
      />

      {/* Peer Review Modal */}
      <PeerReview
        isOpen={showPeerReview}
        onClose={() => setShowPeerReview(false)}
        missionTitle={mission.title}
        submissionId="submission_123"
      />
    </div>
  )
}