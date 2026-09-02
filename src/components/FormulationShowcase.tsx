import React from 'react';
import { Sparkles, Leaf, Droplets, Sun, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const FormulationShowcase: React.FC = () => {
  const botanicalIngredients = [
    {
      title: 'Pati Nilam Organik (Pure Patchouli)',
      category: 'Pati Terapeutik Tulen',
      desc: 'Diproses melalui penyulingan wap terkawal untuk mengekalkan sebatian patchoulol aktif bagi meregenerasi sel kulit, mengurangkan garis halus dan melegakan ketegangan urat saraf.',
      icon: Leaf,
      highlight: 'Anti-Penuaan & Relaksasi'
    },
    {
      title: 'Za’faran Safron Gred Super Negin',
      category: 'Rempah Termahal Dunia',
      desc: 'Kaya dengan krokin dan antioksidan karotenoid yang membantu mencerahkan tona kulit yang kusam, menaikkan aura seri wajah secara semulajadi dan meratakan tona tompok gelap.',
      icon: Sun,
      highlight: 'Aura Radiance & Mencerah'
    },
    {
      title: 'Kepingan Emas Tulen 24K (Pure Gold)',
      category: 'Kemewahan Susuk Emas',
      desc: 'Partikel mikro emas 24 karat merangsang penghasilan kolagen semula jadi, memantulkan biasan cahaya mikro untuk efek kulit bercahaya berkilauan seketika.',
      icon: Sparkles,
      highlight: 'Kolagen & Kilauan Segera'
    },
    {
      title: 'Pati Mawar Damask & Minyak Jojoba',
      category: 'Pelembap Mendalam',
      desc: 'Menghidratkan epidermis kulit secara optimum tanpa rasa melekit atau menyumbat liang pori, memberi rasa sentuhan selembut sutera.',
      icon: Droplets,
      highlight: 'Penghidratan Optimum'
    }
  ];

  return (
    <section id="rahsia-formulasi" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-medium block">
            Khazanah Alam Bermutu Tinggi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Rahsia Ramuan <span className="italic font-normal text-[#D4AF37]">Nilam Empire</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
            Setiap ramuan dipilih berasaskan kemurnian bahan organik terbaik dunia dan diproses mengikut standard keselamatan kebangsaan.
          </p>
        </motion.div>

        {/* Botanical Ingredients Grid with Motion Stagger */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {botanicalIngredients.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium block">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-light text-white mt-1 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium text-white/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Assurance Glass Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-light text-white">Jaminan Mutu & Piawaian Keselamatan</h4>
              <p className="text-xs text-white/60 font-light mt-0.5">
                Formulasi suci, bebas racun berjadual, dan diuji kestabilan di makmal bertauliah untuk keselamatan seisi keluarga.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
              100% Organik Tulen
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-white/70 font-light">
              Cruelty-Free
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
