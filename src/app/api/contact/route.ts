import { NextRequest, NextResponse } from 'next/server';
import { insertContactMessage } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 1. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Silakan masukkan nama yang valid (minimal 2 karakter).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Silakan masukkan format alamat email yang valid.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Pesan terlalu pendek. Mohon tuliskan pesan minimal 10 karakter.' },
        { status: 400 }
      );
    }

    // 2. Extract Client Metadata
    const ip_address = 
      req.headers.get('x-forwarded-for')?.split(',')[0] || 
      req.headers.get('x-real-ip') || 
      '127.0.0.1';
    const user_agent = req.headers.get('user-agent') || 'Unknown';

    // 3. Save to Cloud DB
    const result = await insertContactMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'Portfolio Inquiry',
      message: message.trim(),
      ip_address,
      user_agent,
    });

    return NextResponse.json({
      success: true,
      message: result.demoMode 
        ? 'Pesan berhasil diterima (Mode Demo). Hubungi developer jika ingin menghubungkan Supabase.'
        : 'Terima kasih! Pesan Anda telah berhasil terkirim dan disimpan.',
      demoMode: result.demoMode,
    });
  } catch (error: any) {
    console.error('API /contact POST error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Terjadi kesalahan internal server saat memproses pesan.',
      },
      { status: 500 }
    );
  }
}
