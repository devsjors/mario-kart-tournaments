export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      player_race: {
        Row: {
          id: number
          player_id: string | null
          race_id: number | null
        }
        Insert: {
          id?: number
          player_id?: string | null
          race_id?: number | null
        }
        Update: {
          id?: number
          player_id?: string | null
          race_id?: number | null
        }
      }
      players: {
        Row: {
          created_at: string | null
          id: string
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          username?: string | null
        }
      }
      races: {
        Row: {
          course_id: number | null
          created_at: string | null
          id: number
          tournament_id: number | null
        }
        Insert: {
          course_id?: number | null
          created_at?: string | null
          id?: number
          tournament_id?: number | null
        }
        Update: {
          course_id?: number | null
          created_at?: string | null
          id?: number
          tournament_id?: number | null
        }
      }
      tournaments: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
