-- =========================================================
-- Supabase Schema for Portfolio Contact Messages
-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard)
-- =========================================================

-- 1. Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) DEFAULT 'Portfolio Inquiry',
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread', -- 'unread', 'read', 'archived'
    ip_address VARCHAR(100),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Add comment to table
COMMENT ON TABLE public.contact_messages IS 'Incoming messages submitted through the portfolio contact form';

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow anonymous visitors to INSERT messages
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages 
FOR INSERT 
TO public 
WITH CHECK (true);

-- 5. Policy: Only authenticated admin / service role can VIEW messages
CREATE POLICY "Allow authenticated users to view contact_messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated 
USING (true);

-- 6. Indexing for fast queries by created_at date
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
ON public.contact_messages (created_at DESC);
