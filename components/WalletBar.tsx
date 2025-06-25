'use client'

import { motion } from 'framer-motion'
import { Zap, BookOpen, TrendingUp, User } from 'lucide-react'
import { useState, useEffect } from 'react'

export function WalletBar() {
  const [stats, setStats] = useState({
    sats: 21000,
    missions: 12,
    xp: 1337,
    level: 'Node'
  })

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 backdrop-blur-md border-b border-forest-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-unica font-bold text-sm">LM</span>
            </div>
            <span className="font-unica text-xl font-bold gradient-text">LocalMint</span>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6">
            {/* Sats Balance */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-forest-800 px-4 py-2 rounded-lg border border-orange-500/30"
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-semibold">{stats.sats.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">sats</span>
            </motion.div>

            {/* Mission Count */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-forest-800 px-4 py-2 rounded-lg border border-green-500/30"
            >
              <BookOpen className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold">{stats.missions}</span>
              <span className="text-gray-400 text-sm">missions</span>
            </motion.div>

            {/* XP */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-forest-800 px-4 py-2 rounded-lg border border-orange-500/30"
            >
              <TrendingUp className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-semibold">{stats.xp}</span>
              <span className="text-gray-400 text-sm">XP</span>
            </motion.div>

            {/* Level */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-green-500 px-4 py-2 rounded-lg"
            >
              <User className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">{stats.level}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}