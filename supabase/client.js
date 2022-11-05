
//Codigo realizado por Lizardo
//Importando el cliente de supabase
import { createClient } from "@supabase/supabase-js";

//Url del cliente de supabase
const supabaseUrl = "https://mhihveixxyxcuubpstvg.supabase.co"
//Funcion que activa el cliente de spabase 
export const supabase = createClient(supabaseUrl,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaWh2ZWl4eHl4Y3V1YnBzdHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1MzMzNzQsImV4cCI6MTk4MzEwOTM3NH0.yWw4K_-gnrAUPc4OM6hXi60xdFzMzFbHlmrJbhTNkSE")
