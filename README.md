# 🚀 Interactive & Modern Portfolio Website

Website portofolio developer modern, berkinerja tinggi, dan interaktif dengan desain **dark theme premium**, dibangun menggunakan **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, integrasi **GitHub REST API**, dan **Cloud Database (Supabase PostgreSQL)**. Siap dideploy langsung ke **Vercel**.

---

## ✨ Fitur Utama

- 🎨 **Modern Dark Aesthetics**: Warna dasar sleek slate/zinc 900 dengan aksen cyan, violet, dan blue, dilengkapi efek glassmorphism (`backdrop-blur`) dan ambient lighting.
- ⚡ **Animasi Halus & Interaktif**: Ditenagai oleh **Framer Motion** untuk efek scroll reveal, sticky header blur, dan hover 3D scale pada kartu proyek dan keahlian.
- 🧭 **Floating Navbar**: Header melayang dengan navigasi *smooth-scroll* dan *scrollspy* otomatis, menu responsif smartphone, serta tombol unduh CV.
- 🧑‍💻 **Hero Section Dinamis**: Status badge ketersediaan (*Available for work*), headline gradien, pengenalan peran (*Fullstack & Backend Engineer*), serta tombol CTA "Lihat Proyek" dan "Hubungi Saya".
- 💡 **About & Categorized Skills**: Bagian latar belakang, metrik statistik, dan grid kartu keahlian interaktif dengan tab filter (Languages, Frontend, Backend, Database & Cloud, Tools).
- 🐙 **Projects Showcase (GitHub REST API Integration)**:
  - Mengambil data repositori secara dinamis langsung dari GitHub (`https://api.github.com/users/{USERNAME}/repos`).
  - Menampilkan nama repo, deskripsi, badge bahasa utama dengan kode warna, jumlah stars & forks, serta tautan ke source code & demo.
  - Dilengkapi tombol sinkronisasi ulang dan **data fallback offline** jika kuota limit GitHub API tercapai.
- 📬 **Contact Form & Cloud Database Integration**:
  - Formulir kontak interaktif (Nama, Email, Subjek, Pesan) dengan validasi lengkap.
  - Status feedback komprehensif (loading spinner, notifikasi sukses, dan penanganan error).
  - Tersambung langsung ke **Supabase Cloud PostgreSQL** via endpoint API Next.js yang aman.
  - *Graceful fallback*: Tetap dapat diuji secara lokal (mode demo) meskipun kredensial Supabase belum diisi.
- 📱 **100% Responsif & SEO-Friendly**: Tampilan optimal di semua ukuran layar (ponsel pintar, tablet, laptop, dan monitor desktop) dengan tag OpenGraph dan metadata lengkap.

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) & React 18 |
| **Bahasa** | TypeScript |
| **Styling** | Tailwind CSS v3 |
| **Animasi** | Framer Motion |
| **Ikon** | Lucide React |
| **Cloud Database** | Supabase (PostgreSQL) |
| **Deploy Target** | Vercel |

---

## 📁 Struktur Direktori

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts   # API Route untuk input form kontak ke Supabase
│   │   │   └── github/route.ts    # API Route caching repositori GitHub
│   │   ├── globals.css            # Styling global, glassmorphism & custom scrollbar
│   │   ├── layout.tsx             # Root layout & konfigurasi SEO metadata
│   │   └── page.tsx               # Halaman utama portofolio
│   ├── components/
│   │   ├── BackgroundEffect.tsx   # Ambient glowing orbs & tech grid
│   │   ├── Navbar.tsx             # Floating glassmorphic header & mobile drawer
│   │   ├── Hero.tsx               # Intro headline, status badge & CTA
│   │   ├── About.tsx              # Bio, filosofi rekayasa & kartu statistik
│   │   ├── Skills.tsx             # Grid keahlian terorganisir dengan filter tab
│   │   ├── Projects.tsx           # GitHub dynamic repo showcase & cards
│   │   ├── Contact.tsx            # Form kontak interaktif & info sosial
│   │   └── Footer.tsx             # Copyright & tombol 'Back to Top'
│   ├── data/
│   │   └── portfolio-data.ts      # Data statis profil, keahlian, dan fallback proyek
│   ├── lib/
│   │   ├── github.ts              # Fetcher GitHub REST API
│   │   ├── supabase.ts            # Klien Supabase & helper penyimpanan pesan
│   │   └── utils.ts               # Helper class merging & warna bahasa pemrograman
│   └── types/
│       └── portfolio.ts           # Definisi interface & tipe TypeScript
├── .env.example                   # Template variabel lingkungan
├── supabase_schema.sql            # Skrip SQL untuk membuat tabel Supabase
├── tailwind.config.ts             # Konfigurasi tema Tailwind CSS
└── README.md                      # Dokumentasi proyek
```

---

## 🚀 Panduan Memulai Cepat (Lokal)

### 1. Kloning dan Instal Dependensi
```bash
git clone https://github.com/USERNAME/portofolio.git
cd portofolio
npm install
```

### 2. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```

Isi variabel yang diperlukan:
```env
# Username GitHub Anda (untuk fetch repositori otomatis)
NEXT_PUBLIC_GITHUB_USERNAME=Murefa

# Kredensial Supabase (Opsional - jika ingin menyimpan pesan kontak ke database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser Anda di `http://localhost:3000`.

---

## 🗄️ Setup Database Cloud (Supabase)

Untuk menghubungkan form kontak ke database PostgreSQL cloud secara gratis:

1. Buat akun dan proyek baru di [Supabase Dashboard](https://supabase.com/dashboard).
2. Masuk ke menu **SQL Editor** pada sidebar kiri.
3. Buka file [`supabase_schema.sql`](./supabase_schema.sql) di proyek ini, lalu salin seluruh kodenya dan klik **Run** di SQL Editor Supabase.
4. Buka menu **Project Settings** > **API** di Supabase:
   - Salin **Project URL** ke `NEXT_PUBLIC_SUPABASE_URL` di `.env.local`.
   - Salin **anon public key** ke `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
   - Salin **service_role secret key** ke `SUPABASE_SERVICE_ROLE_KEY`.
5. Selesai! Setiap pesan dari form kontak portofolio Anda sekarang akan langsung tersimpan ke tabel `contact_messages`.

---

## ☁️ Panduan Deploy ke Vercel (1-Click / Git Push)

Website ini 100% kompatibel dan siap dideploy langsung ke **Vercel**:

1. Pastikan kode sudah di-push ke repositori GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial interactive portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portofolio.git
   git push -u origin main
   ```
2. Masuk ke akun [Vercel](https://vercel.com).
3. Klik **Add New...** > **Project** dan pilih repositori portofolio Anda dari GitHub.
4. Pada bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_GITHUB_USERNAME`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Klik tombol **Deploy**. Vercel akan otomatis mem-build dan mempublikasikan website portofolio Anda dalam waktu kurang dari 2 menit dengan URL berkinerja tinggi (Edge Network global).
