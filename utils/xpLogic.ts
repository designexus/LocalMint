export interface Mission {
  id: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  baseXP: number
  completed: boolean
}

export interface User {
  id: string
  xp: number
  level: string
  streak: number
  lastActivity: Date
}

export const XP_VALUES = {
  Easy: 20,
  Medium: 50,
  Hard: 80,
  tip: 10,
  review: 10,
  detailedReview: 20,
  dailyStreak: 25,
  tribeBonus: 1.5 // multiplier
}

export const LEVELS = [
  { name: 'Seed', minXP: 0, maxXP: 499 },
  { name: 'Node', minXP: 500, maxXP: 1999 },
  { name: 'Chain Guardian', minXP: 2000, maxXP: 4999 },
  { name: 'Sovereign', minXP: 5000, maxXP: Infinity }
]

export function calculateMissionXP(mission: Mission, hasStreak: boolean = false, tribeBonus: boolean = false): number {
  let xp = mission.baseXP

  // Apply streak bonus
  if (hasStreak) {
    xp += XP_VALUES.dailyStreak
  }

  // Apply tribe bonus
  if (tribeBonus) {
    xp = Math.floor(xp * XP_VALUES.tribeBonus)
  }

  return xp
}

export function calculateReviewXP(rating: number, hasFeedback: boolean): number {
  let xp = XP_VALUES.review + (rating * 5)
  
  if (hasFeedback) {
    xp += XP_VALUES.detailedReview
  }

  return xp
}

export function getUserLevel(xp: number): string {
  const level = LEVELS.find(level => xp >= level.minXP && xp <= level.maxXP)
  return level?.name || 'Seed'
}

export function getNextLevel(currentLevel: string): { name: string; minXP: number } | null {
  const currentIndex = LEVELS.findIndex(level => level.name === currentLevel)
  const nextLevel = LEVELS[currentIndex + 1]
  return nextLevel || null
}

export function calculateStreak(lastActivity: Date): number {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - lastActivity.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  // If last activity was yesterday, maintain streak
  // If last activity was today, maintain streak
  // Otherwise, reset streak
  return diffDays <= 1 ? 1 : 0
}

export function awardXP(user: User, xpGained: number): User {
  const newXP = user.xp + xpGained
  const newLevel = getUserLevel(newXP)
  
  return {
    ...user,
    xp: newXP,
    level: newLevel,
    lastActivity: new Date()
  }
}

export function checkLevelUp(oldXP: number, newXP: number): boolean {
  const oldLevel = getUserLevel(oldXP)
  const newLevel = getUserLevel(newXP)
  return oldLevel !== newLevel
}