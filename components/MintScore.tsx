'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Award, Zap, Users, Star, Crown } from 'lucide-react'

interface MintScoreProps {
  user: {
    username: string
    level: string
    xp: number
    nextLevelXP: number
    sats: number
    badges: number
    rank: number
    streak: number
  }
}

const levels = [
  { name: 'Seed', minXP: 0, color: 'text-green-400', icon: '🌱' },
  { name: 'Node', minXP: 500, color: 'text-blue-400', icon: '🔗' },
  { name: 'Chain Guardian', minXP: 2000, color: 'text-purple-400', icon: '⛓️' },
  { name: 'Sovereign', minXP: 5000, color: 'text-yellow-400', icon: '👑' }
]

export function MintScore({ user }: MintScoreProps) {
  const currentLevel = levels.find(level => level.name === user.level) || levels[0]
  const nextLevel = levels[levels.findIndex(l => l.name === user.level) + 1]
  const progressToNext = nextLevel 
    ? ((user.xp - currentLevel.minXP) / (nextLevel.minXP - currentLevel.minXP)) * 100
    : 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card max-w-md mx-auto bg-gradient-to-br from-orange-500/10 to-green-500/10 border-orange-500/30"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center text-3xl">
          {currentLevel.icon}
        </div>
        <h2 className="text-2xl font-unica font-bold gradient-text mb-1">
          MintScore
        </h2>
        <p className="text-gray-400">@{user.username}</p>
      </div>

      {/* Level Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className={`font-semibold ${currentLevel.color}`}>
            {currentLevel.name}
          </span>
          {nextLevel && (
            <span className="text-gray-400 text-sm">
              Next: {nextLevel.name}
            </span>
          )}
        </div>
        
        <div className="w-full bg-forest-700 rounded-full h-3 mb-2">
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-green-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressToNext}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{user.xp} XP</span>
          {nextLevel && <span>{nextLevel.minXP} XP</span>}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-forest-700 p-4 rounded-lg text-center">
          <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <div className="text-orange-400 font-semibold text-lg">
            {user.sats.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Total Sats</div>
        </div>
        
        <div className="bg-forest-700 p-4 rounded-lg text-center">
          <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-purple-400 font-semibold text-lg">
            {user.badges}
          </div>
          <div className="text-xs text-gray-400">Badges</div>
        </div>
        
        <div className="bg-forest-700 p-4 rounded-lg text-center">
          <Crown className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-yellow-400 font-semibold text-lg">
            #{user.rank}
          </div>
          <div className="text-xs text-gray-400">Global Rank</div>
        </div>
        
        <div className="bg-forest-700 p-4 rounded-lg text-center">
          <Star className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-green-400 font-semibold text-lg">
            {user.streak}
          </div>
          <div className="text-xs text-gray-400">Day Streak</div>
        </div>
      </div>

      {/* Level Benefits */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-white">
          {currentLevel.name} Benefits
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          {currentLevel.name === 'Seed' && (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Access to basic missions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Join public tribes</span>
              </div>
            </>
          )}
          {currentLevel.name === 'Node' && (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Unlock TruthCast episodes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Create custom tribes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Advanced mission tracks</span>
              </div>
            </>
          )}
          {currentLevel.name === 'Chain Guardian' && (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Exclusive StoryOracle content</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Mentor new users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Beta feature access</span>
              </div>
            </>
          )}
          {currentLevel.name === 'Sovereign' && (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>All content unlocked</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Create missions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Governance participation</span>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}