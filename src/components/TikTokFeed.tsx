import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const TikTokFeed: React.FC = () => {
  const tiktokUrl = 'https://www.tiktok.com/@nurnilam_ortiz';

  const mockHighlights = [
    {
      id: 'tt-1',
      title: 'Rahsia Seri Wajah Berseri Puan Nilam Ortiz',
      views: '1.2M',
      likes: '84.5K',
      tag: 'Safron Mist Susuk Emas',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      caption: 'Kepingan emas 24K dan Za’faran asli Super Negin untuk glowing segera tanpa solekan tebal.'
    },
    {
      id: 'tt-2',
      title: 'Perkongsian Azlan Komeng & Khasiat Nilam Suri',
      views: '890K',
      likes: '56.2K',
      tag: 'Nilam Suri Massage Oil',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      caption: 'Urutan terapi saraf selepas seharian penggambaran & cara melegakan ketegangan urat.'
    },
    {
      id: 'tt-3',
      title: 'Sesi Suasana Live Wisma Nilam Semenyih',
      views: '650K',
      likes: '41.8K',
      tag: 'Wisma Nilam Empire',
      image: 'https://images.unsplash.com/photo-1608248597358-1e3532cf2b78?auto=format&fit=crop&w=600&q=80',
      caption: 'Penyerahan bungkusan pesanan VIP dan sesi santai bersama peminat setia Nilam Empire.'
    }
  ];

  return (
    <section id="tiktok-rasmi" className="py-24 bg-[#0A0A0A] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-2xl"
          >
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-medium block">
              Official TikTok & Community
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
              Ikuti <span className="italic font-normal text-[#D4AF37]">@nurnilam_ortiz</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
              Tonton siaran langsung eksklusif bersama Puan Nur Nilam Ortiz & Azlan Komeng, tutorial penggunaan produk dan testimoni terkini pengguna setia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="tiktok-follow-header-btn"
              className="px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-semibold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 transition-all shrink-0 self-start md:self-auto hover:scale-105"
            >
              <span>Buka TikTok Rasmi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Video Highlights Grid with Glass UI */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockHighlights.map((video, idx) => (
            <motion.a
              key={video.id}
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden transition-colors duration-300 block shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
            >
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-transparent" />

                {/* Top TikTok Badge (Frosted Glass) */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[9px] uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                  <span>@nurnilam_ortiz</span>
                </div>

                {/* Views Pill (Frosted Glass) */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4AF37] text-[9px] uppercase tracking-wider font-medium border border-white/15">
                  {video.views} Views
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="px-2 py-0.5 text-[8px] uppercase tracking-wider font-medium text-[#D4AF37] border border-[#D4AF37]/30 rounded-md inline-block">
                    {video.tag}
                  </span>
                  <h3 className="font-serif text-base font-light text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 font-light">
                    {video.caption}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-white/70 border-t border-white/10 font-light">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> {video.likes}
                    </span>
                    <span className="flex items-center gap-1 text-[#D4AF37] font-medium tracking-wider uppercase text-[9px]">
                      Tonton Video <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
