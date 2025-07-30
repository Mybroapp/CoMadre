// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://TU-PROYECTO.supabase.co'
const supabaseAnonKey = 'TU-LLAVE-ANON'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
