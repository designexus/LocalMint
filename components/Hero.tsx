'use client'

import { motion } from 'framer-motion'
import { BoltIcon, CurrencyDollarIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-bitcoin-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bitcoin-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lightning-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-bitcoin-400 to-lightning-400 rounded-2xl flex items-center justify-center lightning-glow">
                <BoltIcon className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-lightning-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-dark-900">₿</span>
              </div>
            </div>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Learn Bitcoin,
            <br />
            <span className="gradient-text">Earn Sats</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto text-balance"
          >
            Master Bitcoin and Lightning Network through interactive courses and earn real sats for your progress. Build sovereign skills while stacking sats.
          </motion.p>
          
          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-dark-400"
          >
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="w-5 h-5 text-bitcoin-400" />
              <span>Interactive Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <CurrencyDollarIcon className="w-5 h-5 text-lightning-400" />
              <span>Real Sats Rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <BoltIcon className="w-5 h-5 text-bitcoin-400" />
              <span>Lightning Fast</span>
            </div>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="/courses" className="btn-primary text-lg px-8 py-4 rounded-xl">
              Start Learning
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4 rounded-xl">
              How It Works
            </Link>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-12 text-sm text-dark-500"
          >
            <p>Powered by Lightning Network • Non-custodial • Open Source</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}