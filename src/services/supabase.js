import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bkxptjmdffrrbvolrdii.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreHB0am1kZmZycmJ2b2xyZGlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNzc4MDcsImV4cCI6MjA1Mjc1MzgwN30.jSZhlt1yAxh6WjaOdD6eFruFP0ffh35XVMYP6YhCGfQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
