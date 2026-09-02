import React from 'react';
import { Heart, ShieldCheck, Sparkles, Award, UserCheck, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export const BrandHeritage: React.FC = () => {
  return (
    <section id="pengasas-warisan" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-medium block">
            Our Story & Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Warisan Kasih <span className="italic font-normal text-[#D4AF37]">Nilam Ortiz</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
            Perjalanan penuh dedikasi yang diasaskan bersama oleh <strong className="text-white font-normal">Puan Nur Nilam Ortiz</strong> dan suaminya, pelakon <strong className="text-white font-normal">Azlan Komeng</strong>.
          </p>
        </motion.div>

        {/* Founder Narrative Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Storytelling with Glass UI */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85"
                alt="Puan Nur Nilam Ortiz & Azlan Komeng Heritage"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-light text-white">Puan Nur Nilam Ortiz & Azlan Komeng</h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] mt-0.5 font-medium">Pengasas Nilam Ortiz Sdn. Bhd.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-[#D4AF37]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* IP Protection Notice Card (Glass UI) */}
            <div className="p-4 rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] flex items-start gap-3">
              <Lock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="text-xs text-white/60 space-y-1 font-light">
                <p className="font-medium text-white text-[10px] uppercase tracking-wider">
                  Intellectual Property Protected
                </p>
                <p>
                  Semua formula, jenama, nama produk dan reka bentuk Nilam Empire dilindungi hak cipta di bawah Nilam Ortiz Sdn. Bhd.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Brand Philosophy Content with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="space-y-4">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium block">
                Born from a Mother’s Love
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-snug">
                Bermula Dari Keikhlasan Hati Seorang Ibu, Membina Empayar Kesihatan Holistik
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                Nilam Empire lahir bukan sekadar sebagai produk kecantikan biasa, tetapi sebagai jawapan kepada pencarian produk organik yang benar-benar selamat, suci, dan berkesan untuk seisi keluarga.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                Di bawah kepimpinan <strong className="text-white font-normal">Puan Nur Nilam Ortiz</strong> bersama sokongan padu suaminya <strong className="text-white font-normal">Azlan Komeng</strong>, syarikat ini berkembang pesat dengan galeri pameran rasmi <strong className="text-white font-normal">Wisma Nilam Empire</strong> di Semenyih, Selangor.
              </p>
            </div>

            {/* 4 Brand Pillars (Glass UI) */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-light text-white mb-1">Kemurnian Organik</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Bebas merkuri, paraben dan bahan kimia sintetik berbahaya. Terbukti lembut dan selamat untuk kulit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-light text-white mb-1">Emas 24K & Safron Diraja</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Menggunakan Za'faran gred tertinggi serta serpihan emas tulen untuk rawatan seri aura Susuk Emas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-light text-white mb-1">Keaslian Dijamin</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Setiap botol mempunyai meterai ketulenan rasmi untuk membendung produk tiruan di pasaran.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-light text-white mb-1">Tradisi & Moden</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Gabungan rahsia herba Melayu klasik dengan teknologi pengekstrakan saintifik kontemporari.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
