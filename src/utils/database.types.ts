export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      delegate_meetings: {
        Row: {
          created_at: string
          email_address: string | null
          id: number
          meeting_name: string | null
        }
        Insert: {
          created_at?: string
          email_address?: string | null
          id?: number
          meeting_name?: string | null
        }
        Update: {
          created_at?: string
          email_address?: string | null
          id?: number
          meeting_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delegate_meetings_email_address_fkey"
            columns: ["email_address"]
            isOneToOne: false
            referencedRelation: "registration_table"
            referencedColumns: ["email_address"]
          },
        ]
      }
      delegate_participant_category: {
        Row: {
          category_name: string | null
          created_at: string
          email_address: string | null
          id: number
        }
        Insert: {
          category_name?: string | null
          created_at?: string
          email_address?: string | null
          id?: number
        }
        Update: {
          category_name?: string | null
          created_at?: string
          email_address?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "delegate_participant_category_email_address_fkey"
            columns: ["email_address"]
            isOneToOne: false
            referencedRelation: "registration_table"
            referencedColumns: ["email_address"]
          },
        ]
      }
      delegate_sectors: {
        Row: {
          created_at: string
          email_address: string | null
          id: number
          sector_name: string | null
        }
        Insert: {
          created_at?: string
          email_address?: string | null
          id?: number
          sector_name?: string | null
        }
        Update: {
          created_at?: string
          email_address?: string | null
          id?: number
          sector_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delegate_sectors_email_address_fkey"
            columns: ["email_address"]
            isOneToOne: false
            referencedRelation: "registration_table"
            referencedColumns: ["email_address"]
          },
        ]
      }
      exhibitor_category: {
        Row: {
          created_at: string
          email_address: string | null
          id: number
          main_category: string | null
          sub_category: string | null
        }
        Insert: {
          created_at?: string
          email_address?: string | null
          id?: number
          main_category?: string | null
          sub_category?: string | null
        }
        Update: {
          created_at?: string
          email_address?: string | null
          id?: number
          main_category?: string | null
          sub_category?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exhibitor_category_email_address_fkey"
            columns: ["email_address"]
            isOneToOne: false
            referencedRelation: "exhibitor_table"
            referencedColumns: ["email_address"]
          },
        ]
      }
      exhibitor_table: {
        Row: {
          any_declarations: string | null
          any_import_permit: string | null
          booth_option: number | null
          created_at: string
          demonstration_options: string | null
          email_address: string | null
          exhibitor_category_options: string | null
          exhibitor_company_address: string | null
          exhibitor_country: string | null
          exhibitor_full_name: string | null
          exhibitor_job_title: string | null
          exhibitor_organization_name: string | null
          exhibitor_phone_number: string | null
          exhibitor_photo: string | null
          exhibitor_product: string | null
          exhibitor_registration_id: number
          exhibitor_trn: string | null
          exhibitor_type: string | null
        }
        Insert: {
          any_declarations?: string | null
          any_import_permit?: string | null
          booth_option?: number | null
          created_at?: string
          demonstration_options?: string | null
          email_address?: string | null
          exhibitor_category_options?: string | null
          exhibitor_company_address?: string | null
          exhibitor_country?: string | null
          exhibitor_full_name?: string | null
          exhibitor_job_title?: string | null
          exhibitor_organization_name?: string | null
          exhibitor_phone_number?: string | null
          exhibitor_photo?: string | null
          exhibitor_product?: string | null
          exhibitor_registration_id?: number
          exhibitor_trn?: string | null
          exhibitor_type?: string | null
        }
        Update: {
          any_declarations?: string | null
          any_import_permit?: string | null
          booth_option?: number | null
          created_at?: string
          demonstration_options?: string | null
          email_address?: string | null
          exhibitor_category_options?: string | null
          exhibitor_company_address?: string | null
          exhibitor_country?: string | null
          exhibitor_full_name?: string | null
          exhibitor_job_title?: string | null
          exhibitor_organization_name?: string | null
          exhibitor_phone_number?: string | null
          exhibitor_photo?: string | null
          exhibitor_product?: string | null
          exhibitor_registration_id?: number
          exhibitor_trn?: string | null
          exhibitor_type?: string | null
        }
        Relationships: []
      }
      media_meetings: {
        Row: {
          created_at: string
          id: number
          media_email: string | null
          meeting_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          media_email?: string | null
          meeting_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          media_email?: string | null
          meeting_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_meetings_media_email_fkey"
            columns: ["media_email"]
            isOneToOne: false
            referencedRelation: "media_table"
            referencedColumns: ["media_email"]
          },
        ]
      }
      media_table: {
        Row: {
          created_at: string
          id: number
          media_address: string | null
          media_category_options: string | null
          media_country: string | null
          media_email: string | null
          media_fax: string | null
          media_full_name: string | null
          media_gender_options: string | null
          media_nationality: string | null
          media_organization_name: string | null
          media_phone_number: string | null
          media_photo: string | null
          media_position: string | null
          media_type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          media_address?: string | null
          media_category_options?: string | null
          media_country?: string | null
          media_email?: string | null
          media_fax?: string | null
          media_full_name?: string | null
          media_gender_options?: string | null
          media_nationality?: string | null
          media_organization_name?: string | null
          media_phone_number?: string | null
          media_photo?: string | null
          media_position?: string | null
          media_type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          media_address?: string | null
          media_category_options?: string | null
          media_country?: string | null
          media_email?: string | null
          media_fax?: string | null
          media_full_name?: string | null
          media_gender_options?: string | null
          media_nationality?: string | null
          media_organization_name?: string | null
          media_phone_number?: string | null
          media_photo?: string | null
          media_position?: string | null
          media_type?: string | null
        }
        Relationships: []
      }
      registration_table: {
        Row: {
          arrival_airline: string | null
          arrival_date: string | null
          arrival_flight_number: string | null
          country_of_departure: string | null
          country_of_residence: string | null
          departure_airline: string | null
          departure_date: string | null
          departure_flight_number: string | null
          email_address: string
          emergency_contact_email: string | null
          emergency_contact_first_name: string | null
          emergency_contact_home_number: string | null
          emergency_contact_last_name: string | null
          emergency_contact_mobile_number: string | null
          emergency_contact_office_number: string | null
          emergency_contact_relationship: string | null
          first_name: string | null
          gender: string | null
          job_title: string | null
          last_name: string | null
          middle_initial: string | null
          mobile_phone_number: string | null
          nationality: string | null
          organization_name: string | null
          organization_type: string | null
          personal_email: string | null
          registration_id: string
          special_requirements: string | null
          title: string | null
          work_phone_number: string | null
        }
        Insert: {
          arrival_airline?: string | null
          arrival_date?: string | null
          arrival_flight_number?: string | null
          country_of_departure?: string | null
          country_of_residence?: string | null
          departure_airline?: string | null
          departure_date?: string | null
          departure_flight_number?: string | null
          email_address: string
          emergency_contact_email?: string | null
          emergency_contact_first_name?: string | null
          emergency_contact_home_number?: string | null
          emergency_contact_last_name?: string | null
          emergency_contact_mobile_number?: string | null
          emergency_contact_office_number?: string | null
          emergency_contact_relationship?: string | null
          first_name?: string | null
          gender?: string | null
          job_title?: string | null
          last_name?: string | null
          middle_initial?: string | null
          mobile_phone_number?: string | null
          nationality?: string | null
          organization_name?: string | null
          organization_type?: string | null
          personal_email?: string | null
          registration_id?: string
          special_requirements?: string | null
          title?: string | null
          work_phone_number?: string | null
        }
        Update: {
          arrival_airline?: string | null
          arrival_date?: string | null
          arrival_flight_number?: string | null
          country_of_departure?: string | null
          country_of_residence?: string | null
          departure_airline?: string | null
          departure_date?: string | null
          departure_flight_number?: string | null
          email_address?: string
          emergency_contact_email?: string | null
          emergency_contact_first_name?: string | null
          emergency_contact_home_number?: string | null
          emergency_contact_last_name?: string | null
          emergency_contact_mobile_number?: string | null
          emergency_contact_office_number?: string | null
          emergency_contact_relationship?: string | null
          first_name?: string | null
          gender?: string | null
          job_title?: string | null
          last_name?: string | null
          middle_initial?: string | null
          mobile_phone_number?: string | null
          nationality?: string | null
          organization_name?: string | null
          organization_type?: string | null
          personal_email?: string | null
          registration_id?: string
          special_requirements?: string | null
          title?: string | null
          work_phone_number?: string | null
        }
        Relationships: []
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
