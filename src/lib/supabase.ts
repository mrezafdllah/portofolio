import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = 
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl && 
    supabaseUrl.startsWith('https://') && 
    supabaseKey && 
    !supabaseUrl.includes('your-project-id')
  );
};

// Return Supabase client or null if not configured
export const getSupabaseClient = () => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  return createClient(supabaseUrl, supabaseKey);
};

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  ip_address?: string;
  user_agent?: string;
}

/**
 * Save contact message to Supabase PostgreSQL table or fallback gracefully
 */
export async function insertContactMessage(payload: ContactMessagePayload) {
  const client = getSupabaseClient();

  if (!client) {
    console.info('[Portfolio Contact] Demo Mode: Supabase not configured. Simulated success:', {
      name: payload.name,
      email: payload.email,
      subject: payload.subject || 'Portfolio Inquiry',
      timestamp: new Date().toISOString(),
    });
    return {
      success: true,
      demoMode: true,
      message: 'Pesan Anda berhasil diterima (Mode Demo lokal). Kredensial Supabase belum dikonfigurasi.',
    };
  }

  const { data, error } = await client.from('contact_messages').insert([
    {
      name: payload.name,
      email: payload.email,
      subject: payload.subject || 'Portfolio Inquiry',
      message: payload.message,
      ip_address: payload.ip_address || null,
      user_agent: payload.user_agent || null,
      status: 'unread',
      created_at: new Date().toISOString(),
    },
  ]).select();

  if (error) {
    console.error('[Portfolio Contact] Supabase insert error:', error);
    throw new Error(error.message || 'Gagal menyimpan pesan ke database cloud.');
  }

  return {
    success: true,
    demoMode: false,
    message: 'Pesan berhasil terkirim dan disimpan ke database cloud!',
    data,
  };
}
