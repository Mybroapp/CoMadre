import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nzsceyrenzsfatxgsfsf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56c2NleXJlbnpzZmF0eGdzZnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MzY1NDQsImV4cCI6MjA2OTQxMjU0NH0.QXndJAiHoIL4aGfgcVsCs46xclfOSwG5NqcSfPZzuzY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
