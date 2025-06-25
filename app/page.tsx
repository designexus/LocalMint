import { Hero } from '@/components/Hero'
import { WalletBar } from '@/components/WalletBar'
import { MissionFeed } from '@/components/MissionFeed'
import { TribeBoard } from '@/components/TribeBoard'
import { TruthCastPlayer } from '@/components/TruthCastPlayer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <WalletBar />
      <Hero />
      <MissionFeed />
      <TribeBoard />
      <TruthCastPlayer />
    </main>
  )
}