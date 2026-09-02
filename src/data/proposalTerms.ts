import { DevelopmentPhase, ProposalTerm } from '../types';

export const PROPOSAL_PHASES: DevelopmentPhase[] = [
  {
    phaseNumber: 1,
    title: 'Fasa 1: Konsep Reka Bentuk & Identiti Jenama Mewah (UI/UX Luxury)',
    duration: 'Minggu 1 - 2',
    status: 'Dicadangkan',
    deliverables: [
      'Penyediaan moodboard estetik mewah (warna Deep Obsidian, Royal Gold & Warm Silk Champagne).',
      'Wireframe & reka bentuk prototaip interaktif (Figma / Web Interactive Design).',
      'Struktur susun atur responsif mesra mudah alih (Mobile-First Luxury Experience) & desktop.',
      'Reka bentuk halaman produk utama (Nilam Anggun, Nilam Suri, Safron Mist 1 & 2).'
    ],
    techStack: ['React 19', 'Tailwind CSS 4', 'Motion Animations', 'Figma Luxury UI Kit']
  },
  {
    phaseNumber: 2,
    title: 'Fasa 2: Enjin E-Dagang, Gerbang Pembayaran & WhatsApp Concierge',
    duration: 'Minggu 3 - 4',
    status: 'Dicadangkan',
    deliverables: [
      'Integrasi sistem troli beli-belah & checkout pintar (Smart Luxury Cart).',
      'Gerbang pembayaran automatik Malaysia (FPX, DuitNow QR, Kad Debit/Kredit, GrabPay/Atome).',
      'Sistem "Direct WhatsApp VIP Concierge" (pesanan terus ke sales team secara tersusun).',
      'Sistem pengiraan pos automatik Semenanjung & Sabah/Sarawak (J&T, NinjaVan, DHL, PosLaju API).'
    ],
    techStack: ['Payment Gateway (Curlec / Stripe / ToyyibPay / senangPay)', 'WhatsApp Business Cloud API', 'Express Backend']
  },
  {
    phaseNumber: 3,
    title: 'Fasa 3: Integrasi Wisma Semenyih, TikTok Feed & AI Konsultasi Aura',
    duration: 'Minggu 5 - 6',
    status: 'Dicadangkan',
    deliverables: [
      'Halaman pameran Wisma Nilam Empire dengan navigasi GPS/Google Maps (Semenyih HQ).',
      'Sistem tempahan temujanji VIP / lawatan showroom Wisma Nilam Empire.',
      'Paparan suapan interaktif TikTok (@nurnilam_ortiz) untuk kempen live & video viral.',
      'Sistem Pintar Konsultasi Aura Wajah & Kesihatan Nilam untuk cadangan produk automatik.'
    ],
    techStack: ['Google Maps Platform', 'TikTok Embedded API', 'Gemini AI Recommendation Logic']
  },
  {
    phaseNumber: 4,
    title: 'Fasa 4: Keselamatan, Perlindungan Harta Intelek (IP) & Pelancaran Domain',
    duration: 'Minggu 7',
    status: 'Dicadangkan',
    deliverables: [
      'Penyambungan domain rasmi shop.nilamempire.com & Sijil Keselamatan SSL Gred A+.',
      'Perlindungan Hak Cipta & Harta Intelek (Digital IP Seal & watermark perlindungan imej).',
      'Pengoptimuman Enjin Carian (SEO Google) untuk carian produk dan nama jenama rasmi.',
      'Ujian ketahanan beban pelayan (Speed Optimization 95+ Google PageSpeed) & Ujian Akhir (UAT).'
    ],
    techStack: ['Cloudflare Enterprise DNS & SSL', 'Google Cloud Run / AWS', 'Google Search Console']
  }
];

export const CLIENT_REQUIREMENTS: ProposalTerm[] = [
  {
    category: 'Aset Digital & Media',
    title: '1. Aset Grafik & Gambar Berkualiti Tinggi',
    description: 'Bahan visual rasmi resolusi tinggi untuk memelihara status jenama mewah:',
    details: [
      'Fail Vektor Logo Rasmi (.AI, .SVG, atau .PNG resolusi tinggi dengan latar belakang telus).',
      'Gambar produk beresolusi tinggi (Nilam Anggun Oil, Nilam Suri Massage Oil, Safron Mist 1 & 2) berlatar belakang studio bersih atau gaya hidup mewah.',
      'Gambar/Video profil pengasas (Puan Nur Nilam Ortiz & Pelakon Azlan Komeng) serta suasana Wisma Nilam Empire.'
    ]
  },
  {
    category: 'Maklumat Perniagaan',
    title: '2. Maklumat Korporat & Pematuhan Undang-Undang',
    description: 'Dokumen pendaftaran untuk membina keyakinan pelanggan dan penyedia bayaran:',
    details: [
      'Nombor Pendaftaran Syarikat (SSM: Nilam Ortiz Sdn. Bhd / Nilam Empire Ortiz Ventures).',
      'No. Rujukan Notifikasi KKM / Sijil Makmal / Sijil Harta Intelek (MyIPO MyTradeMark).',
      'Maklumat akaun bank korporat untuk integrasi FPX / Gerbang Pembayaran atas talian.'
    ]
  },
  {
    category: 'Akses & Integrasi',
    title: '3. Akses Domain & Saluran Komunikasi',
    description: 'Akses teknikal untuk penyelarasan sistem:',
    details: [
      'Akses pengurusan DNS Domain (cth: cPanel/Cloudflare) untuk sub-domain shop.nilamempire.com.',
      'Nombor WhatsApp rasmi jualan/khidmat pelanggan untuk integrasi bot/concierge.',
      'Pautan akaun media sosial rasmi (TikTok @nurnilam_ortiz, Facebook, Instagram, dll).'
    ]
  }
];

export const TECHNICAL_TERMS: ProposalTerm[] = [
  {
    category: 'Terma Pembangunan',
    title: 'Hak Milik & Perlindungan Kod',
    description: 'Semua kod sumber dan reka bentuk yang dibangunkan menjadi hak milik penuh Nilam Ortiz Sdn. Bhd. setelah penyelesaian bayaran penuh.',
    details: [
      'Kod sumber bebas lesen sekatan berulang (100% Client Owned Source Code).',
      'Pematuhan ketat terhadap Harta Intelek jenama Nilam Empire Ortiz Ventures.',
      'Jaminan kod bersih tanpa kod lapuk (clean architecture).'
    ]
  },
  {
    category: 'Terma Jaminan & Sokongan',
    title: 'Jaminan Teknikal (Warranty & SLA)',
    description: 'Penyelenggaraan selepas pelancaran dan sokongan teknikal pantas:',
    details: [
      'Jaminan pepijat percuma selama 90 hari selepas pelancaran rasmi.',
      'Sokongan teknikal waktu kerja (Isnin - Jumaat, 9:00 pagi - 6:00 petang) & waktu kecemasan 24/7 untuk pelayan tergendala.',
      'Sandaran automatik (Daily Cloud Backup) bagi rekod pesanan dan pangkalan data pelanggan.'
    ]
  },
  {
    category: 'Kadar Kelajuan & Keselamatan',
    title: 'Standard Prestasi & Perlindungan Data',
    description: 'Piawaian teknikal bertaraf antarabangsa untuk laman web rasmi:',
    details: [
      'Penyulitan data transaksi 256-bit SSL gred perbankan.',
      'Pematuhan Akta Perlindungan Data Peribadi (PDPA Malaysia 2010).',
      'Masa muat turun pantas (< 1.5 saat) di seluruh Malaysia menggunakan CDN berprestasi tinggi.'
    ]
  }
];
