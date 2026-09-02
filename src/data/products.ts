import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'nilam-anggun-oil',
    name: 'Nilam Anggun Oil',
    subtitle: 'Minyak Kecantikan & Seri Wajah Diraja',
    category: 'anggun',
    price: 89.00,
    originalPrice: 119.00,
    volume: '30ml / 1.0 fl oz',
    rating: 4.95,
    reviewCount: 384,
    badge: 'Paling Laris (Bestseller)',
    image: 'https://images.unsplash.com/photo-1608248597358-1e3532cf2b78?auto=format&fit=crop&w=900&q=85',
    shortDesc: 'Formulasi pati nilam organik tulen diadun bersama pati bunga mawar untuk mengembalikan keanjalan kulit, melembap secara mendalam dan mengunci seri glowing semula jadi.',
    fullDesc: 'Nilam Anggun Oil merupakan mahakarya penjagaan kulit organik bertaraf premium oleh Nilam Empire. Diformulasikan khusus untuk mereka yang menginginkan tekstur kulit yang licin, anjal, dan berseri tanpa rasa berminyak. Setiap titisan mengandungi pati herba terpilih yang menyerap pantas ke dalam lapisan dermis, membantu memudarkan garis halus serta memperbaharui sel kulit mati.',
    benefits: [
      'Menyerlahkan aura seri wajah yang sihat dan bersinar (natural glass skin glow)',
      'Memudarkan kesan parut halus, jeragat dan tona kulit tidak sekata',
      'Mengunci kelembapan sehingga 24 jam tanpa menyumbat liang pori',
      'Kaya dengan antioksidan semula jadi untuk menentang penuaan pramatang',
      'Sesuai sebagai asas solekan (makeup primer) yang tahan sepanjang hari'
    ],
    keyIngredients: [
      { name: 'Pati Nilam Organik (Pure Patchouli)', desc: 'Menjana semula sel kulit & menenangkan keradangan kulit' },
      { name: 'Pati Mawar Damask (Rose Otto)', desc: 'Menghidrat, mencerahkan dan memberi haruman mewah semula jadi' },
      { name: 'Minyak Jojoba Emas (Golden Jojoba)', desc: 'Menyeimbangkan sebum semula jadi wajah' },
      { name: 'Vitamin E Botani Asli', desc: 'Perlindungan radikal bebas & penyembuhan parut' }
    ],
    howToUse: [
      'Titiskan 2-3 titis Nilam Anggun Oil pada tapak tangan yang bersih.',
      'Gosok kedua-dua tapak tangan untuk mengaktifkan kehangatan herba aromaterapi.',
      'Tekap dan urut perlahan-lahan ke seluruh wajah dan leher secara putaran menaik.',
      'Gunakan pada waktu pagi sebelum pelembap/solekan dan waktu malam sebelum tidur.'
    ],
    isPopular: true
  },
  {
    id: 'nilam-suri-massage-oil',
    name: 'Nilam Suri Massage Oil',
    subtitle: 'Minyak Urutan Holistik & Terapi Tradisional',
    category: 'suri',
    price: 79.00,
    originalPrice: 99.00,
    volume: '100ml / 3.4 fl oz',
    rating: 4.98,
    reviewCount: 512,
    badge: 'Pilihan Ibu & Keluarga',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
    shortDesc: 'Minyak urutan herba mewah dengan sensasi hangat menenangkan untuk meredakan sengal otot, melancarkan peredaran darah, urutan bersalin dan membuang angin dalam badan.',
    fullDesc: 'Dicipta atas ilham kasih sayang seorang ibu ("Born from a Mother’s Love"), Nilam Suri Massage Oil menggabungkan khazanah herba Melayu tradisional dengan piawaian moden. Minyak bertekstur sutera ini memberikan kehangatan lembut berpanjangan tanpa rasa melekit, sangat mujarab untuk melegakan keletihan badan, sengal sendi, urutan selepas bersalin, serta relaksasi spa di rumah.',
    benefits: [
      'Meredakan ketegangan urat, lenguh pinggang dan kekejangan otot dengan pantas',
      'Membantu mengeluarkan angin degil dalam tubuh dan melancarkan darah',
      'Sangat ideal untuk rawatan urutan berpantang dan pemulihan selepas bersalin',
      'Aromaterapi herba eksklusif yang membantu meredakan stres dan insomnia',
      'Menjadikan kulit badan lebih lembut, anjal dan tidak kering'
    ],
    keyIngredients: [
      { name: 'Minyak Nilam Warisan', desc: 'Agen terapeutik untuk kelegaan saraf dan otot' },
      { name: 'Halia Bara & Serai Wangi', desc: 'Memberikan haba terapeutik untuk membuang angin' },
      { name: 'Minyak Zaitun Dara (Extra Virgin Olive Oil)', desc: 'Melembutkan kulit dan memudahkan gerakan urutan' },
      { name: 'Ekstrak Kayu Manis & Cengkih', desc: 'Melancarkan aliran darah dan melegakan sengal badan' }
    ],
    howToUse: [
      'Tuangkan jumlah yang mencukupi pada telapak tangan.',
      'Sapu secara rata pada bahagian badan yang letih (bahu, pinggang, kaki, betis, perut).',
      'Lakukan urutan perlahan mengikut urat saraf sehingga minyak meresap sepenuhnya.',
      'Boleh digunakan setiap hari atau selepas mandi untuk kesegaran optimum.'
    ],
    isPopular: true
  },
  {
    id: 'nilam-safron-mist-1',
    name: 'Nilam Safron Mist [1] - Susuk Emas',
    subtitle: 'Aura Radiance 24K Gold & Pure Saffron Mist',
    category: 'safron',
    price: 95.00,
    originalPrice: 125.00,
    volume: '50ml / 1.7 fl oz',
    rating: 4.96,
    reviewCount: 289,
    badge: 'Koleksi Diraja (Royal Collection)',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&q=85',
    shortDesc: 'Semburan mist eksklusif yang diadun bersama kepingan tulen emas 24K dan ekstrak Safron gred tinggi (Super Negin) untuk menaikkan seri wajah dan kesegaran bercahaya.',
    fullDesc: 'Nilam Safron Mist Susuk Emas [1] adalah simbol kemewahan rawatan wajah Nilam Empire. Menggabungkan khasiat Safron (rempah termahal di dunia) dengan serpihan emas 24 karat yang mikronisasi, mist ini bertindak sebagai perisai anti-stres untuk kulit wajah, menyegarkan sel, dan memberikan efek "susuk emas" moden yang halal, suci, dan selamat.',
    benefits: [
      'Menaikkan seri aura wajah tampak segar, berkarisma dan tidak kusam',
      'Kepingan emas 24K merangsang kolagen dan mencerahkan secara organik',
      'Safron gred premium menenangkan kemerahan dan mengecilkan liang pori',
      'Menghidrat kulit serta-merta bila berada di dalam bilik berhawa dingin',
      'Membantu penyerapan serum dan minyak kecantikan dengan lebih efektif'
    ],
    keyIngredients: [
      { name: 'Ekstrak Safron Za’faran (Super Negin)', desc: 'Rempah termahal dunia dengan antioksidan karotenoid tinggi' },
      { name: 'Kepingan Emas Tulen 24K (Real Gold Flakes)', desc: 'Meremajakan kulit & memantulkan kilauan mewah' },
      { name: 'Air Bunga Mawar Organik (Pure Rose Hydrosol)', desc: 'Penyegar semulajadi penstabil pH kulit' },
      { name: 'Hyaluronic Acid Botani', desc: 'Mengikat molekul air pada lapisan kulit' }
    ],
    howToUse: [
      'Goncang botol perlahan supaya kepingan emas 24K bergaul sekata.',
      'Pegang botol 15-20cm dari wajah dan semburkan 3-4 kali dengan mata tertutup.',
      'Tepuk manja wajah sehingga titisan safron dan emas meresap.',
      'Sembur bila-bila masa anda perlukan kesegaran aura segera.'
    ],
    isPopular: true
  },
  {
    id: 'nilam-safron-mist-2',
    name: 'Nilam Safron Mist [2] - Susuk Emas Glow Lock',
    subtitle: 'Long-Lasting Setting Mist & Skin Barrier Infusion',
    category: 'safron',
    price: 99.00,
    originalPrice: 130.00,
    volume: '50ml / 1.7 fl oz',
    rating: 4.93,
    reviewCount: 215,
    badge: 'Edisi Premium Pengantin',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85',
    shortDesc: 'Formula safron diperkaya dengan partikel emas halus dan agen pengunci solekan untuk kemasan dewy berseri tanpa cakey sepanjang hari.',
    fullDesc: 'Variasi kedua Nilam Safron Mist direka khas untuk keperluan solekan profesional dan perlindungan skin barrier harian. Diperkaya dengan ekstrak saffron konsentrasi tinggi serta mineral pengunci glowing, ia memastikan solekan tidak luntur, tidak bercapuk, dan kekal segar berkilau sehingga 16 jam.',
    benefits: [
      'Mengunci solekan wajah (makeup setting) tahan lama tanpa merekah',
      'Memberikan efek kemasan dewy berseri bak berlian',
      'Melindungi kulit daripada pencemaran habuk dan cahaya biru skrin digital',
      'Mengurangkan kilatan minyak berlebihan di zon-T wajah',
      'Memberi sensasi sejuk nyaman dan ketenangan minda beraroma safron asli'
    ],
    keyIngredients: [
      { name: 'Pati Safron & Niacinamide Emas', desc: 'Mencerahkan dan menguatkan benteng pertahanan kulit' },
      { name: 'Micronized 24K Gold Particles', desc: 'Mencipta ilusi kulit licin berkilauan' },
      { name: 'Ekstrak Witch Hazel Organik', desc: 'Mengetatkan pori wajah dan mengawal minyak' },
      { name: 'Aloe Vera Bio-Fermentasi', desc: 'Meredakan kegatalan dan menghidrat' }
    ],
    howToUse: [
      'Goncang botol sebelum digunakan.',
      'Semburkan sebelum bersolek sebagai penyedia kulit (primer mist).',
      'Sembur sekali lagi selepas solekan siap untuk mengunci kilauan (setting mist).'
    ],
    isPopular: false
  },
  {
    id: 'set-maharani-prestige',
    name: 'Set Mahkota Diraja Nilam Empire',
    subtitle: 'Koleksi Lengkap 3-Dalam-1 Kotak Emas Velvet',
    category: 'set',
    price: 249.00,
    originalPrice: 329.00,
    volume: 'Nilam Anggun + Nilam Suri + Nilam Safron Mist [1]',
    rating: 5.0,
    reviewCount: 178,
    badge: 'Kotak Hadiah Eksklusif VIP',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
    shortDesc: 'Pakej lengkap kecantikan dan kesihatan menyeluruh dalam kotak baldu berukir emas mewah. Hadiah terhebat untuk diri sendiri, pasangan, mahupun ratu hati anda.',
    fullDesc: 'Dihadirkan dalam kotak premium custom velvet bermeterai jata Nilam Empire Ortiz Ventures, set ini merangkumi Nilam Anggun Oil untuk seri wajah, Nilam Suri Massage Oil untuk keselesaan tubuh dan Nilam Safron Mist Susuk Emas untuk kesegaran aura. Pilihan no. 1 untuk hantaran perkahwinan, hadiah ulang tahun, dan rawatan diri kelas atasan.',
    benefits: [
      'Penjimatan nilai melebihi RM80 berbanding pembelian berasingan',
      'Percuma Kotak Velvet Berukir Emas Eksklusif Nilam Empire',
      'Percuma Kad Ucapan VIP & Baucar Diskaun Rawatan Wisma Nilam Empire',
      'Ritual lengkap dari hujung rambut hingga ke hujung kaki',
      'Sijil ketulenan asli dengan perlindungan Hak Harta Intelek (IP Protected)'
    ],
    keyIngredients: [
      { name: '1x Nilam Anggun Oil (30ml)', desc: 'Minyak Seri Wajah Diraja' },
      { name: '1x Nilam Suri Massage Oil (100ml)', desc: 'Minyak Urutan Holistik' },
      { name: '1x Nilam Safron Mist Susuk Emas [1] (50ml)', desc: 'Mist Emas 24K & Safron' }
    ],
    howToUse: [
      'Ikuti buku panduan Ritual Diraja Nilam Empire yang disertakan di dalam kotak.',
      'Mulakan dengan Safron Mist, ikuti urutan tubuh bersama Suri Massage Oil, dan akhiri dengan Anggun Oil pada wajah.'
    ],
    isPopular: true
  }
];
