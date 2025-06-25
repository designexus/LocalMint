export interface Tribe {
  id: string
  name: string
  description: string
  avatar: string
  level: string
  members: number
  xpBoost: number
  questsActive: number
  isPublic: boolean
  createdAt: Date
  founder: string
}

export interface TribeQuest {
  id: string
  tribeId: string
  title: string
  description: string
  requirements: string[]
  reward: {
    sats: number
    xp: number
    badge?: string
  }
  deadline: Date
  participants: string[]
  completed: boolean
}

export interface TribeMember {
  userId: string
  username: string
  role: 'founder' | 'admin' | 'member'
  joinedAt: Date
  contribution: number
}

export const TRIBE_LEVELS = [
  { name: 'Seedling', minMembers: 1, xpBoost: 1.2 },
  { name: 'Growing', minMembers: 5, xpBoost: 1.5 },
  { name: 'Flourishing', minMembers: 15, xpBoost: 2.0 },
  { name: 'Mighty Oak', minMembers: 50, xpBoost: 3.0 }
]

export function calculateTribeLevel(memberCount: number): string {
  const level = TRIBE_LEVELS
    .slice()
    .reverse()
    .find(level => memberCount >= level.minMembers)
  
  return level?.name || 'Seedling'
}

export function getTribeXPBoost(memberCount: number): number {
  const level = TRIBE_LEVELS
    .slice()
    .reverse()
    .find(level => memberCount >= level.minMembers)
  
  return level?.xpBoost || 1.2
}

export function checkTribeQuestEligibility(
  quest: TribeQuest,
  members: TribeMember[]
): boolean {
  const activeMembers = members.filter(member => {
    const daysSinceJoin = (Date.now() - member.joinedAt.getTime()) / (1000 * 60 * 60 * 24)
    return daysSinceJoin >= 1 // Must be member for at least 1 day
  })

  return activeMembers.length >= 3 // Minimum 3 active members for tribe quest
}

export function calculateTribeQuestReward(
  baseReward: { sats: number; xp: number },
  memberCount: number,
  difficulty: 'easy' | 'medium' | 'hard'
): { sats: number; xp: number } {
  const difficultyMultiplier = {
    easy: 1,
    medium: 1.5,
    hard: 2
  }

  const memberBonus = Math.min(memberCount / 10, 2) // Max 2x bonus for large tribes
  const multiplier = difficultyMultiplier[difficulty] * (1 + memberBonus)

  return {
    sats: Math.floor(baseReward.sats * multiplier),
    xp: Math.floor(baseReward.xp * multiplier)
  }
}

export function generateTribeQuest(tribe: Tribe): TribeQuest {
  const questTemplates = [
    {
      title: "Lightning Network Workshop",
      description: "Collaborate to build a Lightning Network payment demo",
      requirements: ["Set up Lightning node", "Create payment interface", "Test transactions"],
      difficulty: 'hard' as const
    },
    {
      title: "Bitcoin Education Campaign",
      description: "Create educational content about Bitcoin basics",
      requirements: ["Write article", "Create infographic", "Record video"],
      difficulty: 'medium' as const
    },
    {
      title: "Privacy Tools Tutorial",
      description: "Document privacy tools and best practices",
      requirements: ["Research tools", "Write guide", "Test implementations"],
      difficulty: 'medium' as const
    }
  ]

  const template = questTemplates[Math.floor(Math.random() * questTemplates.length)]
  const baseReward = { sats: 1000, xp: 200 }
  const reward = calculateTribeQuestReward(baseReward, tribe.members, template.difficulty)

  return {
    id: `quest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    tribeId: tribe.id,
    title: template.title,
    description: template.description,
    requirements: template.requirements,
    reward,
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    participants: [],
    completed: false
  }
}

export function checkTribeBoostEligibility(
  tribeMembers: TribeMember[],
  missionId: string,
  timeWindow: number = 48 * 60 * 60 * 1000 // 48 hours
): boolean {
  const now = Date.now()
  const recentCompletions = tribeMembers.filter(member => {
    // This would check if member completed the same mission within time window
    // Implementation would depend on your mission completion tracking
    return true // Simplified for example
  })

  return recentCompletions.length >= 3
}