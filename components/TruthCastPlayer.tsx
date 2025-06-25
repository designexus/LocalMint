'use client'

import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, Lock } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const truthcasts = [
  {
    id: 1,
    title: "The Genesis Block Story",
    description: "Satoshi's first message to the world",
    duration: "12:34",
    unlockLevel: "Seed",
    isUnlocked: true,
    agent: "Satoshi",
    audioUrl: "/audio/genesis-block.mp3",
    waveform: [0.2, 0.4, 0.6, 0.8, 0.5, 0.3, 0.7, 0.9, 0.4, 0.6, 0.2, 0.8, 0.5, 0.3, 0.7]
  },
  {
    id: 2,
    title: "Lightning Network Deep Dive",
    description: "Understanding Layer 2 scaling",
    duration: "18:45",
    unlockLevel: "Node",
    isUnlocked: true,
    agent: "Uncle Rockstar",
    audioUrl: "/audio/lightning-deep-dive.mp3",
    waveform: [0.3, 0.5, 0.7, 0.4, 0.8, 0.6, 0.2, 0.9, 0.5, 0.3, 0.7, 0.4, 0.8, 0.6, 0.2]
  },
  {
    id: 3,
    title: "The Sovereign Individual",
    description: "Building unstoppable systems",
    duration: "25:12",
    unlockLevel: "Chain Guardian",
    isUnlocked: false,
    agent: "StoryOracle",
    audioUrl: "/audio/sovereign-individual.mp3",
    waveform: [0.4, 0.6, 0.8, 0.3, 0.7, 0.5, 0.9, 0.2, 0.6, 0.4, 0.8, 0.3, 0.7, 0.5, 0.9]
  }
]

export function TruthCastPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentTruthcast = truthcasts[currentTrack]

  const togglePlay = () => {
    if (!currentTruthcast.isUnlocked) return
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const skipTrack = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentTrack((prev) => (prev + 1) % truthcasts.length)
    } else {
      setCurrentTrack((prev) => (prev - 1 + truthcasts.length) % truthcasts.length)
    }
    setIsPlaying(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const getAgentColor = (agent: string) => {
    switch (agent) {
      case "Satoshi": return "text-orange-400"
      case "Uncle Rockstar": return "text-purple-400"
      case "StoryOracle": return "text-blue-400"
      default: return "text-gray-400"
    }
  }

  const getAgentEmoji = (agent: string) => {
    switch (agent) {
      case "Satoshi": return "🤖"
      case "Uncle Rockstar": return "🎸"
      case "StoryOracle": return "🗣️"
      default: return "🎙️"
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [currentTrack])

  return (
    <section className="py-24 bg-forest-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-unica font-bold mb-6">
            <span className="gradient-text">TruthCast</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock exclusive audio content from our AI agents. Deep dives into Bitcoin lore and sovereign wisdom.
          </p>
        </motion.div>

        {/* Main Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className={`card ${currentTruthcast.isUnlocked ? 'bg-gradient-to-r from-orange-500/10 to-green-500/10 border-orange-500/30' : 'bg-forest-800/50 border-gray-600/30'}`}>
            {/* Track Info */}
            <div className="flex items-center space-x-6 mb-8">
              <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-3xl ${
                currentTruthcast.isUnlocked 
                  ? 'bg-gradient-to-br from-orange-500 to-green-500' 
                  : 'bg-gray-600'
              }`}>
                {currentTruthcast.isUnlocked ? getAgentEmoji(currentTruthcast.agent) : <Lock className="w-8 h-8 text-gray-400" />}
              </div>
              
              <div className="flex-1">
                <h3 className={`text-2xl font-semibold mb-2 ${
                  currentTruthcast.isUnlocked ? 'text-white' : 'text-gray-500'
                }`}>
                  {currentTruthcast.title}
                </h3>
                <p className={`mb-2 ${
                  currentTruthcast.isUnlocked ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {currentTruthcast.description}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className={getAgentColor(currentTruthcast.agent)}>
                    {getAgentEmoji(currentTruthcast.agent)} {currentTruthcast.agent}
                  </span>
                  <span className="text-gray-400">{currentTruthcast.duration}</span>
                  {!currentTruthcast.isUnlocked && (
                    <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs">
                      Unlock at {currentTruthcast.unlockLevel}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Waveform Visualization */}
            {currentTruthcast.isUnlocked && (
              <div className="mb-8">
                <div className="flex items-end justify-center space-x-1 h-20 mb-4">
                  {currentTruthcast.waveform.map((height, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 bg-gradient-to-t from-orange-500 to-green-500 rounded-full ${
                        isPlaying ? 'animate-pulse' : ''
                      }`}
                      style={{ height: `${height * 100}%` }}
                      animate={isPlaying ? { scaleY: [1, 1.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 0.5, delay: index * 0.1 }}
                    />
                  ))}
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="w-full bg-forest-700 rounded-full h-2 cursor-pointer">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6">
              <button
                onClick={() => skipTrack('prev')}
                className="p-3 rounded-full bg-forest-700 hover:bg-forest-600 transition-colors"
              >
                <SkipBack className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={togglePlay}
                disabled={!currentTruthcast.isUnlocked}
                className={`p-4 rounded-full transition-all duration-300 ${
                  currentTruthcast.isUnlocked
                    ? 'bg-gradient-to-r from-orange-500 to-green-500 hover:scale-110 glow-orange'
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
              >
                {currentTruthcast.isUnlocked ? (
                  isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )
                ) : (
                  <Lock className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <button
                onClick={() => skipTrack('next')}
                className="p-3 rounded-full bg-forest-700 hover:bg-forest-600 transition-colors"
              >
                <SkipForward className="w-5 h-5 text-white" />
              </button>
              
              <button className="p-3 rounded-full bg-forest-700 hover:bg-forest-600 transition-colors">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src={currentTruthcast.audioUrl}
              preload="metadata"
            />
          </div>
        </motion.div>

        {/* Playlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-unica font-bold text-center mb-8 gradient-text">
            Episode Library
          </h3>
          
          <div className="space-y-4">
            {truthcasts.map((truthcast, index) => (
              <motion.div
                key={truthcast.id}
                whileHover={{ scale: 1.02 }}
                className={`card cursor-pointer transition-all duration-300 ${
                  index === currentTrack ? 'border-orange-500/50 bg-orange-500/5' : ''
                } ${!truthcast.isUnlocked ? 'opacity-50' : 'card-hover'}`}
                onClick={() => {
                  if (truthcast.isUnlocked) {
                    setCurrentTrack(index)
                    setIsPlaying(false)
                  }
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg ${
                    truthcast.isUnlocked 
                      ? 'bg-gradient-to-br from-orange-500 to-green-500' 
                      : 'bg-gray-600'
                  }`}>
                    {truthcast.isUnlocked ? getAgentEmoji(truthcast.agent) : <Lock className="w-5 h-5 text-gray-400" />}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      truthcast.isUnlocked ? 'text-white' : 'text-gray-500'
                    }`}>
                      {truthcast.title}
                    </h4>
                    <p className={`text-sm ${
                      truthcast.isUnlocked ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {truthcast.description}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-sm ${
                      truthcast.isUnlocked ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {truthcast.duration}
                    </div>
                    <div className={`text-xs ${getAgentColor(truthcast.agent)}`}>
                      {truthcast.agent}
                    </div>
                  </div>
                  
                  {!truthcast.isUnlocked && (
                    <div className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {truthcast.unlockLevel}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}