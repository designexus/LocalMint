'use client'

import { motion } from 'framer-motion'
import { Zap, BookOpen, Users, Award } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-orange-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 3D Logo */}
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 via-orange-500 to-green-500 rounded-3xl flex items-center justify-center glow-orange transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="text-4xl font-unica text-white font-bold">LM</span>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
          
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-unica font-bold leading-tight">
              <span className="gradient-text">LocalMint</span>
            </h1>
            <p className="text-2xl md:text-3xl text-orange-300 font-medium">
              Rooted in Local. Grown with Purpose.
            </p>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto text-balance"
          >
            Master Bitcoin and sovereign skills through gamified missions. 
            Earn real sats, unlock wisdom, and build with your tribe.
          </motion.p>
          
          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: BookOpen, label: 'Interactive Missions', color: 'text-orange-400' },
              { icon: Zap, label: 'Real Sats Rewards', color: 'text-green-400' },
              { icon: Users, label: 'Tribe Learning', color: 'text-orange-400' },
              { icon: Award, label: 'Mint Badges', color: 'text-green-400' }
            ].map((feature, index) => (
              <div key={feature.label} className="flex flex-col items-center space-y-2">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                <span className="text-sm text-gray-400 text-center">{feature.label}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link href="/missions" className="btn-primary text-xl px-12 py-4 rounded-2xl glow-orange">
              🌱 Mint Now
            </Link>
            <Link href="/tribes" className="btn-secondary text-xl px-12 py-4 rounded-2xl">
              🤝 Join Tribe
            </Link>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-12 text-sm text-gray-500"
          >
            <p>⚡ Lightning Native • 🔐 Non-custodial • 🌍 Open Source</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}