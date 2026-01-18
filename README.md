<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1pSKcSG76dryTZZ91zoK2t5B-x00gjpSi

## Run Locally

**Prerequisites:**

WEB-AGENCY/
├── public/ # File statis yang diakses langsung (browser)
│ └── assets/
│ ├── clients/ # Logo klien (Hyundai, Keke, dsb)
│ └── features/ # Logo media/liputan (CNN, Kompas, dsb)
├── src/ # Source code utama aplikasi
│ ├── components/ # Komponen Reusable
│ │ ├── cards/ # Komponen kartu (ServiceCard, dsb)
│ │ ├── sections/ # Blok besar halaman (Hero, ClientsSection, dsb)
│ │ ├── service-partials/ # Konten spesifik tiap layanan (SeoContent, AdsContent)
│ │ └── ui/ # Komponen UI atomik (Button, Section)
│ ├── data/ # File konfigurasi data statis (JSON/Array)
│ ├── pages/ # Komponen Halaman (Routes utama)
│ ├── scripts/ # Script eksternal (GTM, Analytics)
│ ├── services/ # Logika bisnis & Data Fetching (Repository)
│ ├── styles/ # Pengaturan CSS Global & Tailwind
│ ├── utils/ # Fungsi helper & utilitas
│ ├── App.tsx # Entry point utama aplikasi & Routing
│ ├── constants.ts # Variabel konstan global (Link WA, dsb)
│ ├── types.ts # Definisi Interface & Type TypeScript
│ └── main.tsx # Inisialisasi React ke DOM
├── package.json # Daftar dependencies & script proyek
├── tsconfig.json # Konfigurasi TypeScript
└── vite.config.ts # Konfigurasi Build Tool Vite
