'use client'

import { motion } from 'framer-motion'
import { Users, Crown, Zap, TrendingUp, Plus, Star } from 'lucide-react'
import { useState } from 'react'

const tribes = [
  {
    id: 1,
    name: "Bitcoin Builders",
    members: 234,
    xpBoost: "2x",
    questsActive: 3,
    level: "Sovereign",
    avatar: "🏗️",
    description: "Building the future of Bitcoin infrastructure",
    topMembers: ["satoshi_dev", "lightning_lord", "node_runner"],
    currentQuest: "Deploy a Lightning Node",
    questProgress: 75,
    isJoined: true
  },
  {
    id: 2,
    name: "Design Rebels",
    members: 156,
    xpBoost: "1.5x",
    questsActive: 2,
    level: "Chain Guardian",
    avatar: "🎨",
    description: "Crafting beautiful Bitcoin experiences",
    topMembers: ["pixel_pioneer", "ux_wizard", "design_dao"],
    currentQuest: "Create Bitcoin Wallet UI",
    questProgress: 45,
    isJoined: false
  },
  {
    id: 3,
    name: "Privacy Pirates",
    members: 89,
    xpBoost: "3x",
    questsActive: 4,
    level: "Node",
    avatar: "🏴‍☠️",
    description: "Protecting digital sovereignty",
    topMembers: ["anon_master", "tor_ninja", "privacy_punk"],
    currentQuest: "Set up Tor Bitcoin Node",
    questProgress: 90,
    isJoined: false
  }
]

export function TribeBoard() {
  const [selectedTribe, setSelectedTribe] = useState<number | null>(null)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Sovereign": return "text-yellow-400 bg-yellow-500/20"
      case "Chain Guardian": return "text-purple-400 bg-purple-500/20"
      case "Node": return "text-blue-400 bg-blue-500/20"
      default: return "text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <section className="py-24 bg-forest-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-unica font-bold mb-6">
            <span className="gradient-text">Tribe Board</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join forces with fellow builders. Complete tribe quests for massive XP boosts and exclusive rewards.
          </p>
        </motion.div>

        {/* Create Tribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <button className="btn-secondary inline-flex items-center space-x-2 px-6 py-3">
            <Plus className="w-5 h-5" />
            <span>Create Your Tribe</span>
          </button>
        </motion.div>

        {/* Tribe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tribes.map((tribe, index) => (
            <motion.div
              key={tribe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card card-hover group cursor-pointer ${
                tribe.isJoined ? 'border-green-500/50 bg-green-500/5' : ''
              }`}
              onClick={() => setSelectedTribe(selectedTribe === tribe.id ? null : tribe.id)}
            >
              {/* Tribe Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{tribe.avatar}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {tribe.name}
                    </h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(tribe.level)}`}>
                      <Crown className="w-3 h-3 mr-1" />
                      {tribe.level}
                    </div>
                  </div>
                </div>
                {tribe.isJoined && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Joined
                  </div>
                )}
              </div>

              {/* Tribe Description */}
              <p className="text-gray-400 text-sm mb-6">
                {tribe.description}
              </p>

              {/* Tribe Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold">{tribe.members}</span>
                  </div>
                  <div className="text-xs text-gray-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 font-semibold">{tribe.xpBoost}</span>
                  </div>
                  <div className="text-xs text-gray-400">XP Boost</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-semibold">{tribe.questsActive}</span>
                  </div>
                  <div className="text-xs text-gray-400">Quests</div>
                </div>
              </div>

              {/* Current Quest */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Current Quest</span>
                  <span className="text-xs text-orange-400 font-semibold">{tribe.questProgress}%</span>
                </div>
                <div className="text-sm text-gray-400">{tribe.currentQuest}</div>
                <div className="w-full bg-forest-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${tribe.questProgress}%` }}
                  />
                </div>
              </div>

              {/* Top Members */}
              <div className="space-y-2 mb-6">
                <span className="text-sm font-medium text-white">Top Members</span>
                <div className="flex flex-wrap gap-2">
                  {tribe.topMembers.map((member, idx) => (
                    <span
                      key={idx}
                      className="bg-forest-700 text-gray-300 px-2 py-1 rounded-lg text-xs"
                    >
                      @{member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tribe.isJoined
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'btn-primary'
                }`}
              >
                {tribe.isJoined ? '🏆 View Tribe' : '🤝 Join Tribe'}
              </button>

              {/* Expanded Details */}
              {selectedTribe === tribe.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-forest-700 space-y-4"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Tribe Benefits</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• {tribe.xpBoost} XP multiplier on all missions</li>
                      <li>• Exclusive tribe-only quests</li>
                      <li>• Priority access to new features</li>
                      <li>• Special tribe badges and collectibles</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Recent Activity</h4>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>• @satoshi_dev completed "Lightning Integration"</div>
                      <div>• @node_runner earned 500 sats from tribe quest</div>
                      <div>• Tribe reached level {tribe.level}!</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tribe Quest Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card max-w-4xl mx-auto bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-unica font-bold gradient-text mb-2">
                🏆 Weekly Tribe Challenge
              </h3>
              <p className="text-gray-300">
                The first tribe to complete this challenge gets exclusive rewards!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  "Build a Bitcoin Payment Gateway"
                </h4>
                <p className="text-gray-400 mb-4">
                  Work together to create a functional Bitcoin payment system. 
                  Each tribe member contributes different skills: backend, frontend, design, and testing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-purple-400 font-semibold">3/5 tribes participating</span>
                  </div>
                  <div className="w-full bg-forest-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-3/5" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Rewards</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-forest-700 p-4 rounded-lg text-center">
                    <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="text-orange-400 font-semibold">10,000 Sats</div>
                    <div className="text-xs text-gray-400">Per Member</div>
                  </div>
                  <div className="bg-forest-700 p-4 rounded-lg text-center">
                    <Star className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-purple-400 font-semibold">Rare Badge</div>
                    <div className="text-xs text-gray-400">Tribe Champion</div>
                  </div>
                </div>
                <button className="btn-primary w-full">
                  🚀 Join Challenge
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}