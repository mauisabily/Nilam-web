import React from 'react';
import { Sparkles, MapPin, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onShopClick: () => void;
  onConsultClick: () => void;
  onWismaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopClick,
  onConsultClick,
  onWismaClick
}) => {
  return (
    <section id="hero-sanctuary" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/[0.06] py-16 lg:py-24">
      
      {/* Subtle Ambient Glass Glows */}
      <div className="absolute inset-0 bg-[#0A0A0A] pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-[#D4AF37]/[0.035] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#D4AF37]/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Hero Content with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-8 lg:pr-4"
          >
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[#D4AF37] text-[10px] uppercase tracking-[0.35em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                Born from a Mother’s Love
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-serif leading-[1.08] font-light text-white tracking-tight">
                Kemewahan <br />
                <span className="italic font-normal text-[#D4AF37]">Alam Semulajadi</span>
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg mt-6 font-light">
                Formulasi pati herba organik gred terapeutik dan susuk emas 24K berkhasiat tinggi. Diasaskan bersama oleh <strong className="text-white font-normal">Puan Nur Nilam Ortiz</strong> & pelakon <strong className="text-white font-normal">Azlan Komeng</strong>.
              </p>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <button
                onClick={onShopClick}
                id="hero-cta-shop"
                className="px-8 py-3.5 rounded-full bg-[#D4AF37] text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#eedca4] transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/15 hover:scale-[1.02] active:scale-[0.98]"
              >
                Terokai Koleksi
              </button>

              <button
                onClick={onConsultClick}
                id="hero-cta-consult"
                className="px-6 py-3.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 text-white/80 hover:text-white transition-all text-[10px] uppercase tracking-[0.2em] font-medium flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Konsultasi Aura AI</span>
              </button>
            </motion.div>

            {/* Micro Credentials Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/[0.06] pt-8"
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Bahan Semulajadi</p>
                <p className="text-xs font-serif italic text-white/90">100% Organik & Suci</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Harta Intelek</p>
                <p className="text-xs font-serif italic text-white/90">Jenama Berdaftar</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Wisma Semenyih</p>
                <button onClick={onWismaClick} className="text-xs font-serif italic text-[#D4AF37] hover:underline cursor-pointer">
                  Galeri Pameran Rasmi
                </button>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Hero Showcase Display with Glass UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            
            {/* Radial Gold Aura in Background */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)' }}
            />

            <div className="grid grid-cols-2 gap-4 w-full relative z-10">
              
              {/* Glass Card 1: Safron Mist */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                transition={{ duration: 0.3 }}
                onClick={onShopClick}
                className="bg-black/40 backdrop-blur-md p-6 sm:p-7 rounded-2xl flex flex-col justify-end border border-white/[0.08] transition-all cursor-pointer group"
              >
                <span className="text-[9px] text-[#D4AF37] uppercase tracking-[0.2em] mb-2 font-medium">Essential Aura</span>
                <h3 className="text-lg sm:text-xl font-serif text-white mb-1 group-hover:text-[#eedca4] transition-colors">Nilam Safron Mist</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-wider font-light">Susuk Emas 24K</p>
              </motion.div>

              {/* Glass Card 2: Nilam Suri */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                transition={{ duration: 0.3 }}
                onClick={onShopClick}
                className="bg-black/40 backdrop-blur-md p-6 sm:p-7 rounded-2xl flex flex-col justify-end border border-white/[0.08] transition-all cursor-pointer group sm:mt-5"
              >
                <span className="text-[9px] text-[#D4AF37] uppercase tracking-[0.2em] mb-2 font-medium">Restorative</span>
                <h3 className="text-lg sm:text-xl font-serif text-white mb-1 group-hover:text-[#eedca4] transition-colors">Nilam Suri</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-wider font-light">Healing Massage Oil</p>
              </motion.div>

              {/* Glass Card 3: Nilam Anggun */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                transition={{ duration: 0.3 }}
                onClick={onShopClick}
                className="bg-black/40 backdrop-blur-md p-6 sm:p-7 rounded-2xl flex flex-col justify-end border border-white/[0.08] transition-all cursor-pointer group -mt-0 sm:-mt-5"
              >
                <span className="text-[9px] text-[#D4AF37] uppercase tracking-[0.2em] mb-2 font-medium">Signature</span>
                <h3 className="text-lg sm:text-xl font-serif text-white mb-1 group-hover:text-[#eedca4] transition-colors">Nilam Anggun</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-wider font-light">Beauty Elixir Oil</p>
              </motion.div>

              {/* Glass Card 4: Interactive Explore Circle */}
              <div 
                onClick={onShopClick}
                className="flex items-center justify-center p-4 cursor-pointer group"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#D4AF37]/25 group-hover:border-[#D4AF37] flex items-center justify-center transition-all duration-500 bg-white/[0.02] backdrop-blur-sm">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#D4AF37]/40 flex flex-col items-center justify-center text-[9px] uppercase tracking-[0.2em] text-center px-2 text-white/80 group-hover:text-[#D4AF37] transition-colors">
                    <span>Explore</span>
                    <span className="text-[8px] text-[#D4AF37] mt-0.5">Semua</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Micro bottom right link */}
            <div className="absolute bottom-4 right-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
              <span>TikTok</span>
              <a href="https://www.tiktok.com/@nurnilam_ortiz" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                @nurnilam_ortiz
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
