'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap, Users, Clock, Star, Filter } from 'lucide-react'
import { useState } from 'react'

const missions = [
  {
    id: 1,
    title: "Bitcoin Basics: What is a Satoshi?",
    description: "Learn the smallest unit of Bitcoin and why it matters for the future of money.",
    track: "Bitcoin",
    difficulty: "Easy",
    xp: 20,
    sats: 100,
    duration: "5 min",
    progress: 0,
    participants: 1337,
    rating: 4.8,
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Design Thinking: User-Centered Bitcoin Apps",
    description: "Master the principles of designing intuitive Bitcoin applications for mainstream adoption.",
    track: "Design",
    difficulty: "Medium",
    xp: 50,
    sats: 250,
    duration: "15 min",
    progress: 60,
    participants: 892,
    rating: 4.9,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Privacy Fundamentals: Protecting Your Digital Sovereignty",
    description: "Understand the tools and techniques for maintaining privacy in the digital age.",
    track: "Privacy",
    difficulty: "Hard",
    xp: 80,
    sats: 500,
    duration: "25 min",
    progress: 0,
    participants: 456,
    rating: 4.7,
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Lightning Network: Instant Bitcoin Payments",
    description: "Dive deep into Layer 2 scaling solutions and build your first Lightning app.",
    track: "Bitcoin",
    difficulty: "Hard",
    xp: 80,
    sats: 500,
    duration: "30 min",
    progress: 25,
    participants: 234,
    rating: 4.9,
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
]

const tracks = ["All", "Bitcoin", "Design", "Privacy"]

export function MissionFeed() {
  const [selectedTrack, setSelectedTrack] = useState("All")
  const [filteredMissions, setFilteredMissions] = useState(missions)

  const handleTrackFilter = (track: string) => {
    setSelectedTrack(track)
    if (track === "All") {
      setFilteredMissions(missions)
    } else {
      setFilteredMissions(missions.filter(mission => mission.track === track))
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-400 bg-green-500/20"
      case "Medium": return "text-orange-400 bg-orange-500/20"
      case "Hard": return "text-red-400 bg-red-500/20"
      default: return "text-gray-400 bg-gray-500/20"
    }
  }

  const getTrackColor = (track: string) => {
    switch (track) {
      case "Bitcoin": return "text-orange-400 bg-orange-500/20"
      case "Design": return "text-purple-400 bg-purple-500/20"
      case "Privacy": return "text-blue-400 bg-blue-500/20"
      default: return "text-gray-400 bg-gray-500/20"
    }
  }

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
            <span className="gradient-text">Mission Feed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path to sovereignty. Complete missions, earn sats, and level up your skills.
          </p>
        </motion.div>

        {/* Track Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-forest-800 p-2 rounded-xl border border-forest-700">
            <Filter className="w-5 h-5 text-gray-400 ml-2" />
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => handleTrackFilter(track)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedTrack === track
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-forest-700'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card card-hover group cursor-pointer"
            >
              {/* Mission Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
                
                {/* Track Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getTrackColor(mission.track)}`}>
                  {mission.track}
                </div>
                
                {/* Difficulty Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(mission.difficulty)}`}>
                  {mission.difficulty}
                </div>
              </div>

              {/* Mission Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {mission.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {mission.description}
                </p>

                {/* Mission Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-400 font-semibold">{mission.xp} XP</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">{mission.sats} sats</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{mission.duration}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                {mission.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-orange-400 font-semibold">{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-forest-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${mission.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Mission Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-forest-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{mission.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-400 text-sm">{mission.rating}</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary text-sm px-4 py-2">
                    {mission.progress > 0 ? 'Continue' : 'Start'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-orange-500/20 to-green-500/20 border-orange-500/50">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center animate-pulse-glow">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-unica font-bold gradient-text">Mint of the Day</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Complete today's special mission for bonus rewards!
            </p>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">2x</div>
                <div className="text-sm text-gray-400">XP Bonus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500</div>
                <div className="text-sm text-gray-400">Extra Sats</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">23:45</div>
                <div className="text-sm text-gray-400">Time Left</div>
              </div>
            </div>
            <button className="btn-primary text-lg px-8 py-3 glow-orange">
              🌟 Start Daily Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}