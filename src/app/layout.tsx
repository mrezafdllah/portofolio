import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: `${PERSONAL_INFO.tagline} Portofolio interaktif yang memamerkan proyek open source GitHub, backend API terukur, dan integrasi database cloud.`,
  keywords: [
    'Software Engineer',
    'Fullstack Developer',
    'Backend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'PostgreSQL',
    'Tailwind CSS',
    'Supabase',
    'Portofolio Web',
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.socialLinks.github }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://murefa-portfolio.vercel.app',
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.tagline,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#080c14] text-slate-100 antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
