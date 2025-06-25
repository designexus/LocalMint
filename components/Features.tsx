'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  CurrencyDollarIcon, 
  BoltIcon,
  TrophyIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: AcademicCapIcon,
    title: 'Interactive Courses',
    description: 'Learn Bitcoin fundamentals through engaging, hands-on lessons designed for all skill levels.',
    color: 'bitcoin'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Earn Real Sats',
    description: 'Get rewarded with actual Bitcoin satoshis for completing courses and achieving milestones.',
    color: 'lightning'
  },
  {
    icon: BoltIcon,
    title: 'Lightning Integration',
    description: 'Instant micropayments powered by Lightning Network. Connect your wallet and start earning.',
    color: 'bitcoin'
  },
  {
    icon: TrophyIcon,
    title: 'Achievement System',
    description: 'Unlock badges, climb leaderboards, and showcase your Bitcoin knowledge to the community.',
    color: 'lightning'
  },
  {
    icon: UserGroupIcon,
    title: 'Community Learning',
    description: 'Join a vibrant community of Bitcoin enthusiasts and learn together through peer interactions.',
    color: 'bitcoin'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Sovereign & Secure',
    description: 'Non-custodial design ensures you maintain full control of your funds and learning progress.',
    color: 'lightning'
  }
]

export function Features() {
  return (
    <section className="py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">LocalMint</span>?
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            The first Bitcoin-native learning platform that rewards your educational journey with real value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:bg-dark-700/50 transition-colors duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-500/30 transition-colors duration-300`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="text-dark-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}