'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Link as LinkIcon, Award, Zap, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { MintScore } from '@/components/MintScore'

// Mock user data - in real app this would come from API/database
const user = {
  username: "satoshi_builder",
  displayName: "Satoshi Builder",
  bio: "Building the future of Bitcoin, one block at a time. Passionate about sovereignty and decentralization.",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
  level: "Chain Guardian",
  xp: 3420,
  nextLevelXP: 5000,
  sats: 45000,
  badges: 12,
  rank: 42,
  streak: 15,
  joinedAt: "2024-01-15",
  location: "Decentralized",
  website: "https://bitcoin.org",
  stats: {
    missionsCompleted: 28,
    tribesJoined: 3,
    reviewsGiven: 15,
    tipsReceived: 8
  },
  recentBadges: [
    { id: 1, name: "Lightning Pioneer", description: "Completed 5 Lightning missions", rarity: "rare", icon: "⚡" },
    { id: 2, name: "Code Reviewer", description: "Provided 10 helpful reviews", rarity: "common", icon: "👁️" },
    { id: 3, name: "Tribe Leader", description: "Founded a successful tribe", rarity: "epic", icon: "👑" },
    { id: 4, name: "Streak Master", description: "Maintained 14-day streak", rarity: "rare", icon: "🔥" }
  ],
  recentActivity: [
    { id: 1, type: "mission", title: "Completed 'Bitcoin Script Basics'", timestamp: "2 hours ago", xp: 50 },
    { id: 2, type: "review", title: "Reviewed peer submission", timestamp: "5 hours ago", xp: 15 },
    { id: 3, type: "tip", title: "Received tip from @lightning_dev", timestamp: "1 day ago", sats: 100 },
    { id: 4, type: "badge", title: "Earned 'Lightning Pioneer' badge", timestamp: "2 days ago", xp: 0 }
  ]
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const getBadgeRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-500 bg-gray-500/10'
      case 'rare': return 'border-blue-500 bg-blue-500/10'
      case 'epic': return 'border-purple-500 bg-purple-500/10'
      case 'legendary': return 'border-yellow-500 bg-yellow-500/10'
      default: return 'border-gray-500 bg-gray-500/10'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'mission': return '📚'
      case 'review': return '👁️'
      case 'tip': return '⚡'
      case 'badge': return '🏆'
      default: return '📝'
    }
  }

  return (
    <div className="min-h-screen bg-forest-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-start space-x-6">
                <img
                  src={user.avatar}
                  alt={user.displayName}
                  className="w-24 h-24 rounded-full border-4 border-orange-500"
                />
                
                <div className="flex-1">
                  <h1 className="text-3xl font-unica font-bold text-white mb-2">
                    {user.displayName}
                  </h1>
                  <p className="text-orange-400 text-lg mb-4">@{user.username}</p>
                  
                  <p className="text-gray-300 mb-6">
                    {user.bio}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {new Date(user.joinedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-orange-400 hover:text-orange-300"
                    >
                      <LinkIcon className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="card text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  {user.stats.missionsCompleted}
                </div>
                <div className="text-sm text-gray-400">Missions</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {user.stats.tribesJoined}
                </div>
                <div className="text-sm text-gray-400">Tribes</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {user.stats.reviewsGiven}
                </div>
                <div className="text-sm text-gray-400">Reviews</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {user.stats.tipsReceived}
                </div>
                <div className="text-sm text-gray-400">Tips</div>
              </div>
            </motion.div>

            {/* Recent Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h2 className="text-2xl font-unica font-bold text-white mb-6">
                Recent Badges
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.recentBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-lg border-2 ${getBadgeRarityColor(badge.rarity)} transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{badge.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{badge.name}</h3>
                        <p className="text-sm text-gray-400">{badge.description}</p>
                        <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-semibold ${
                          badge.rarity === 'common' ? 'bg-gray-500/20 text-gray-400' :
                          badge.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                          badge.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {badge.rarity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h2 className="text-2xl font-unica font-bold text-white mb-6">
                Recent Activity
              </h2>
              
              <div className="space-y-4">
                {user.recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4 p-4 bg-forest-700 rounded-lg"
                  >
                    <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-400">{activity.timestamp}</p>
                    </div>
                    {activity.xp > 0 && (
                      <div className="flex items-center space-x-1 text-orange-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">+{activity.xp} XP</span>
                      </div>
                    )}
                    {activity.sats && (
                      <div className="flex items-center space-x-1 text-green-400">
                        <Zap className="w-4 h-4" />
                        <span className="font-semibold">+{activity.sats} sats</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - MintScore */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MintScore user={user} />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-left">
                  💬 Send Message
                </button>
                <button className="w-full btn-secondary text-left">
                  ⚡ Send Tip
                </button>
                <button className="w-full bg-forest-700 hover:bg-forest-600 text-white py-3 px-4 rounded-lg transition-colors text-left">
                  🤝 Invite to Tribe
                </button>
              </div>
            </motion.div>

            {/* Achievements Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Badges</span>
                  <span className="text-white font-semibold">{user.badges}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Global Rank</span>
                  <span className="text-yellow-400 font-semibold">#{user.rank}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Current Streak</span>
                  <span className="text-orange-400 font-semibold">{user.streak} days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Sats</span>
                  <span className="text-green-400 font-semibold">{user.sats.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}