export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string | null
          avatar_url: string | null
          lightning_address: string | null
          total_sats_earned: number
          current_streak: number
          longest_streak: number
          level: number
          xp: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          username?: string | null
          avatar_url?: string | null
          lightning_address?: string | null
          total_sats_earned?: number
          current_streak?: number
          longest_streak?: number
          level?: number
          xp?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          username?: string | null
          avatar_url?: string | null
          lightning_address?: string | null
          total_sats_earned?: number
          current_streak?: number
          longest_streak?: number
          level?: number
          xp?: number
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          slug: string
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          estimated_duration: number
          sats_reward: number
          thumbnail_url: string | null
          is_published: boolean
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          slug: string
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          estimated_duration: number
          sats_reward: number
          thumbnail_url?: string | null
          is_published?: boolean
          order_index: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          slug?: string
          difficulty?: 'beginner' | 'intermediate' | 'advanced'
          estimated_duration?: number
          sats_reward?: number
          thumbnail_url?: string | null
          is_published?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title: string
          content: string
          order_index: number
          estimated_duration: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          content: string
          order_index: number
          estimated_duration: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          content?: string
          order_index?: number
          estimated_duration?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          lesson_id: string | null
          status: 'not_started' | 'in_progress' | 'completed'
          completion_date: string | null
          sats_earned: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          lesson_id?: string | null
          status?: 'not_started' | 'in_progress' | 'completed'
          completion_date?: string | null
          sats_earned?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          lesson_id?: string | null
          status?: 'not_started' | 'in_progress' | 'completed'
          completion_date?: string | null
          sats_earned?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      difficulty_level: 'beginner' | 'intermediate' | 'advanced'
      progress_status: 'not_started' | 'in_progress' | 'completed'
    }
  }
}