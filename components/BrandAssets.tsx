'use client'

import { motion } from 'framer-motion'

// Brand Asset Component Library
export const BrandAssets = {
  // Logo Components
  Logo: {
    Primary: ({ size = 'md', variant = 'default' }: { size?: 'sm' | 'md' | 'lg' | 'xl', variant?: 'default' | 'dark' | 'light' | 'monochrome' }) => {
      const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
      }

      const variantClasses = {
        default: 'bg-gradient-to-br from-orange-400 via-orange-500 to-green-500',
        dark: 'bg-gradient-to-br from-orange-400 via-orange-500 to-green-500',
        light: 'bg-gradient-to-br from-orange-600 via-orange-700 to-green-700',
        monochrome: 'bg-gray-800'
      }

      return (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-2xl flex items-center justify-center shadow-lg`}
        >
          <span className="text-white font-unica font-bold text-sm">LM</span>
        </motion.div>
      )
    },

    Horizontal: ({ variant = 'default' }: { variant?: 'default' | 'dark' | 'light' }) => (
      <div className="flex items-center space-x-3">
        <BrandAssets.Logo.Primary size="md" variant={variant} />
        <span className="font-unica text-2xl font-bold gradient-text">LocalMint</span>
      </div>
    ),

    Minimal: ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
      const sizeClasses = {
        sm: 'w-6 h-6 text-xs',
        md: 'w-8 h-8 text-sm',
        lg: 'w-12 h-12 text-base'
      }

      return (
        <div className={`${sizeClasses[size]} bg-orange-500 rounded-lg flex items-center justify-center`}>
          <span className="text-white font-unica font-bold">L</span>
        </div>
      )
    }
  },

  // Lotus Pattern Component
  LotusPattern: ({ opacity = 0.1, size = 'default' }: { opacity?: number, size?: 'small' | 'default' | 'large' }) => {
    const sizeClasses = {
      small: 'w-8 h-8',
      default: 'w-12 h-12',
      large: 'w-16 h-16'
    }

    return (
      <div 
        className={`${sizeClasses[size]} lotus-icon`}
        style={{ opacity }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500">
          <path d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z" />
          <path d="M12 14C12 14 16 10 20 10C22.21 10 24 11.79 24 14C24 16.21 22.21 18 20 18C16 18 12 14 12 14Z" />
          <path d="M12 14C12 14 8 18 4 18C1.79 18 0 16.21 0 14C0 11.79 1.79 10 4 10C8 10 12 14 12 14Z" />
          <path d="M12 14C12 14 16 18 20 18C22.21 18 24 19.79 24 22C24 24.21 22.21 26 20 26C16 26 12 22 12 22Z" />
          <path d="M12 14C12 14 8 22 4 22C1.79 22 0 20.21 0 18C0 15.79 1.79 14 4 14C8 14 12 14 12 14Z" />
        </svg>
      </div>
    )
  },

  // Color Swatches
  Colors: {
    Primary: '#f39e1b',
    Secondary: '#008543',
    Forest: '#103221',
    White: '#ffffff',
    Black: '#000000',
    
    // Extended Palette
    Orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f39e1b',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    Green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#008543',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    Forest: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#103221',
    }
  },

  // Typography Components
  Typography: {
    Heading: ({ children, level = 1, className = '' }: { children: React.ReactNode, level?: 1 | 2 | 3 | 4, className?: string }) => {
      const Tag = `h${level}` as keyof JSX.IntrinsicElements
      const sizeClasses = {
        1: 'text-4xl md:text-6xl',
        2: 'text-3xl md:text-4xl',
        3: 'text-2xl md:text-3xl',
        4: 'text-xl md:text-2xl'
      }

      return (
        <Tag className={`font-unica font-bold ${sizeClasses[level]} ${className}`}>
          {children}
        </Tag>
      )
    },

    Body: ({ children, size = 'base', className = '' }: { children: React.ReactNode, size?: 'sm' | 'base' | 'lg', className?: string }) => {
      const sizeClasses = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg'
      }

      return (
        <p className={`font-inter ${sizeClasses[size]} ${className}`}>
          {children}
        </p>
      )
    },

    Accent: ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
      <span className={`font-kuxirious ${className}`}>
        {children}
      </span>
    )
  },

  // Button Components
  Buttons: {
    Primary: ({ children, size = 'md', className = '', ...props }: any) => {
      const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
      }

      return (
        <button 
          className={`btn-primary ${sizeClasses[size]} ${className}`}
          {...props}
        >
          {children}
        </button>
      )
    },

    Secondary: ({ children, size = 'md', className = '', ...props }: any) => {
      const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
      }

      return (
        <button 
          className={`btn-secondary ${sizeClasses[size]} ${className}`}
          {...props}
        >
          {children}
        </button>
      )
    }
  },

  // Card Components
  Cards: {
    Default: ({ children, hover = false, className = '' }: { children: React.ReactNode, hover?: boolean, className?: string }) => (
      <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
        {children}
      </div>
    ),

    Feature: ({ icon, title, description, color = 'orange' }: { icon: React.ReactNode, title: string, description: string, color?: 'orange' | 'green' | 'purple' | 'blue' }) => (
      <div className="card card-hover">
        <div className={`w-12 h-12 rounded-lg bg-${color}-500/20 flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    )
  }
}

// Brand Guidelines Component
export const BrandGuidelines = () => (
  <div className="space-y-12 p-8">
    <section>
      <h2 className="text-3xl font-unica font-bold mb-6 gradient-text">Logo Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card text-center">
          <BrandAssets.Logo.Primary size="lg" />
          <h3 className="mt-4 font-semibold">Primary Logo</h3>
          <p className="text-sm text-gray-400">Use on dark backgrounds</p>
        </div>
        <div className="card text-center bg-white">
          <BrandAssets.Logo.Primary size="lg" variant="light" />
          <h3 className="mt-4 font-semibold text-gray-900">Light Variant</h3>
          <p className="text-sm text-gray-600">Use on light backgrounds</p>
        </div>
        <div className="card text-center">
          <BrandAssets.Logo.Horizontal />
          <h3 className="mt-4 font-semibold">Horizontal Layout</h3>
          <p className="text-sm text-gray-400">For headers and navigation</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-unica font-bold mb-6 gradient-text">Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(BrandAssets.Colors.Orange).map(([shade, color]) => (
          <div key={shade} className="text-center">
            <div 
              className="w-full h-16 rounded-lg mb-2"
              style={{ backgroundColor: color }}
            />
            <p className="text-sm font-mono">{color}</p>
            <p className="text-xs text-gray-400">Orange {shade}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-unica font-bold mb-6 gradient-text">Typography</h2>
      <div className="space-y-6">
        <div>
          <BrandAssets.Typography.Heading level={1}>Unica One - Headings</BrandAssets.Typography.Heading>
          <p className="text-gray-400">Primary font for headings and display text</p>
        </div>
        <div>
          <BrandAssets.Typography.Body size="lg">Inter - Body Text</BrandAssets.Typography.Body>
          <p className="text-gray-400">Clean, readable font for body content</p>
        </div>
        <div>
          <BrandAssets.Typography.Accent className="text-2xl">Kuxirious - Decorative</BrandAssets.Typography.Accent>
          <p className="text-gray-400">Special accent font for unique elements</p>
        </div>
      </div>
    </section>
  </div>
)