'use client'

import { motion } from 'framer-motion'
import { 
  UserPlusIcon, 
  AcademicCapIcon, 
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    icon: UserPlusIcon,
    title: 'Connect Wallet',
    description: 'Link your Lightning wallet to get started. We support all major Lightning wallets.',
    step: '01'
  },
  {
    icon: AcademicCapIcon,
    title: 'Choose Course',
    description: 'Select from our curated Bitcoin courses, from basics to advanced Lightning development.',
    step: '02'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Learn & Earn',
    description: 'Complete lessons, pass quizzes, and earn sats directly to your Lightning wallet.',
    step: '03'
  }
]

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Start your Bitcoin learning journey in three simple steps and begin earning sats today.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full">
                  <div className="flex items-center justify-center">
                    <ArrowRightIcon className="w-8 h-8 text-dark-600" />
                  </div>
                </div>
              )}
              
              <div className="text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-bitcoin-500 to-lightning-500 text-white font-bold text-xl mb-6">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-dark-800 rounded-2xl flex items-center justify-center border border-dark-700">
                  <step.icon className="w-10 h-10 text-bitcoin-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                
                <p className="text-dark-300 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4 rounded-xl">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}