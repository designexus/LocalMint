import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LocalMint - Bitcoin Learning',
  description: 'A Bitcoin-native learn-to-earn PWA for sovereign skill-building',
  manifest: '/manifest.json',
  themeColor: '#f39e1b',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LocalMint',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-forest-900 text-white lotus-pattern`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}