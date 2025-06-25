export interface SpinReward {
  id: number
  type: 'sats' | 'xp' | 'collectible' | 'tribe_boost'
  value: number
  label: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export const SPIN_REWARDS: SpinReward[] = [
  { id: 1, type: 'sats', value: 25, label: '25 Sats', rarity: 'common' },
  { id: 2, type: 'sats', value: 50, label: '50 Sats', rarity: 'common' },
  { id: 3, type: 'sats', value: 100, label: '100 Sats', rarity: 'rare' },
  { id: 4, type: 'xp', value: 50, label: '50 XP', rarity: 'common' },
  { id: 5, type: 'xp', value: 100, label: '100 XP', rarity: 'rare' },
  { id: 6, type: 'xp', value: 200, label: '200 XP', rarity: 'epic' },
  { id: 7, type: 'collectible', value: 1, label: 'Rare Badge', rarity: 'epic' },
  { id: 8, type: 'tribe_boost', value: 1, label: 'Tribe Boost', rarity: 'legendary' }
]

export function getRandomReward(): SpinReward {
  // Weighted random selection based on rarity
  const weights = {
    common: 50,
    rare: 30,
    epic: 15,
    legendary: 5
  }

  const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0)
  let random = Math.random() * totalWeight

  for (const [rarity, weight] of Object.entries(weights)) {
    random -= weight
    if (random <= 0) {
      const rewardsOfRarity = SPIN_REWARDS.filter(reward => reward.rarity === rarity)
      return rewardsOfRarity[Math.floor(Math.random() * rewardsOfRarity.length)]
    }
  }

  // Fallback to common reward
  const commonRewards = SPIN_REWARDS.filter(reward => reward.rarity === 'common')
  return commonRewards[Math.floor(Math.random() * commonRewards.length)]
}

export function canSpin(user: { lastSpin?: Date, completedMissions: number }): boolean {
  const now = new Date()
  const lastSpin = user.lastSpin ? new Date(user.lastSpin) : null
  
  // Can spin once per day or after completing a mission
  if (!lastSpin) return true
  
  const timeSinceLastSpin = now.getTime() - lastSpin.getTime()
  const hoursSinceLastSpin = timeSinceLastSpin / (1000 * 60 * 60)
  
  return hoursSinceLastSpin >= 24 || user.completedMissions > 0
}

export function getSpinCooldown(lastSpin: Date): number {
  const now = new Date()
  const timeSinceLastSpin = now.getTime() - lastSpin.getTime()
  const cooldownTime = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  
  return Math.max(0, cooldownTime - timeSinceLastSpin)
}