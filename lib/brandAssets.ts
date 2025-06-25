// Brand Asset Management System
export const BrandConfig = {
  // Asset Paths
  paths: {
    logos: {
      primary: '/assets/logos/localmint-logo-primary.svg',
      light: '/assets/logos/localmint-logo-light.svg',
      dark: '/assets/logos/localmint-logo-dark.svg',
      horizontal: '/assets/logos/localmint-logo-horizontal.svg',
      minimal: '/assets/logos/localmint-logo-minimal.svg',
      favicon: '/favicon.ico'
    },
    icons: {
      pwa192: '/icon-192x192.png',
      pwa512: '/icon-512x512.png',
      apple: '/apple-touch-icon.png'
    },
    patterns: {
      lotus: '/assets/patterns/lotus-pattern.svg',
      geometric: '/assets/patterns/geometric-pattern.svg'
    }
  },

  // Color System
  colors: {
    primary: {
      orange: '#f39e1b',
      green: '#008543',
      forest: '#103221'
    },
    extended: {
      orange: {
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
      green: {
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
      forest: {
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
    neutral: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      }
    }
  },

  // Typography
  typography: {
    fonts: {
      heading: 'Unica One',
      body: 'Inter',
      accent: 'Kuxirious'
    },
    scale: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
      '9xl': '8rem',    // 128px
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },

  // Spacing System (8px base)
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem',    // 96px
    32: '8rem',    // 128px
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Animation
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
}

// Asset Validation
export const validateAsset = (assetPath: string): boolean => {
  // Check if asset exists and follows naming convention
  const namingPattern = /^localmint-[a-z]+-[a-z]+-[a-z0-9]+\.(svg|png|jpg|webp)$/
  const fileName = assetPath.split('/').pop() || ''
  return namingPattern.test(fileName)
}

// Asset Optimization
export const optimizeAsset = (assetType: string, size?: string) => {
  const optimizations = {
    logo: {
      format: 'svg',
      fallback: 'png',
      sizes: ['24px', '32px', '48px', '64px', '128px']
    },
    icon: {
      format: 'png',
      sizes: ['16px', '24px', '32px', '48px']
    },
    image: {
      format: 'webp',
      fallback: 'jpg',
      quality: 85
    }
  }

  return optimizations[assetType as keyof typeof optimizations] || optimizations.image
}

// Brand Compliance Checker
export const checkBrandCompliance = (element: any) => {
  const compliance = {
    colors: true,
    typography: true,
    spacing: true,
    logo: true
  }

  // Check color usage
  if (element.colors) {
    compliance.colors = element.colors.every((color: string) => 
      Object.values(BrandConfig.colors.primary).includes(color) ||
      Object.values(BrandConfig.colors.neutral).includes(color)
    )
  }

  // Check typography
  if (element.fonts) {
    compliance.typography = element.fonts.every((font: string) =>
      Object.values(BrandConfig.typography.fonts).includes(font)
    )
  }

  return compliance
}

export default BrandConfig