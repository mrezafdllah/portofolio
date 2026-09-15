import { NextRequest, NextResponse } from 'next/server';
import { fetchGitHubRepos } from '@/lib/github';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const username = searchParams.get('username') || undefined;

    const data = await fetchGitHubRepos(username);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error('API /github GET error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Gagal memuat repositori GitHub',
      },
      { status: 500 }
    );
  }
}
