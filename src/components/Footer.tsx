import React, { useState } from 'react';
import { ShieldCheck, MapPin, Video, Phone, Mail, FileText, ArrowRight, Heart, Sparkles, Check } from 'lucide-react';

interface FooterProps {
  onOpenProposal: () => void;
  onOpenConsultant: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenProposal,
  onOpenConsultant,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="footer-corporate" className="bg-black border-t border-white/5 text-white/60 pt-20 pb-14 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/10 bg-[#151515] flex items-center justify-center">
                <span className="font-serif font-medium text-lg text-[#D4AF37]">NE</span>
              </div>
              <div>
                <span className="font-serif text-lg tracking-[0.2em] uppercase text-white font-normal block">
                  Nilam Empire
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium block">
                  Ortiz Ventures • Nilam Ortiz Sdn. Bhd.
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Jenama kecantikan dan kesihatan organik terunggul di Malaysia. Diasaskan oleh <strong className="text-white font-medium">Puan Nur Nilam Ortiz</strong> bersama suaminya, pelakon <strong className="text-white font-medium">Azlan Komeng</strong> dengan pegangan suci <em>"Born from a Mother’s Love"</em>.
            </p>

            <div className="p-4 bg-[#151515] border border-white/5 space-y-1 text-xs">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-medium text-[10px] uppercase tracking-wider">Intellectual Property Protected</span>
              </div>
              <p className="text-[11px] text-white/40">
                Semua hak cipta, cap dagang dan formulasi adalah harta intelek berdaftar di bawah Nilam Ortiz Sdn. Bhd.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">Koleksi & Pautan</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#produk-utama" className="hover:text-[#D4AF37] transition-colors">Nilam Anggun Oil</a>
              </li>
              <li>
                <a href="#produk-utama" className="hover:text-[#D4AF37] transition-colors">Nilam Suri Massage Oil</a>
              </li>
              <li>
                <a href="#produk-utama" className="hover:text-[#D4AF37] transition-colors">Safron Mist (Susuk Emas)</a>
              </li>
              <li>
                <a href="#produk-utama" className="hover:text-[#D4AF37] transition-colors">Set Mahkota VIP</a>
              </li>
              <li>
                <button onClick={onOpenConsultant} className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-[#D4AF37]">
                  <Sparkles className="w-3 h-3" /> Konsultasi AI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Wisma Semenyih & Contacts (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">Wisma Nilam Empire</p>
            <div className="space-y-2.5">
              <p className="text-white/60 leading-relaxed">
                2a, Jalan TTS 2, Taman Tasik Semenyih, 43500 Semenyih, Selangor.
              </p>
              <a
                href="https://share.google/ebHQ9Oh9bqsC2YkxA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center gap-1.5 font-medium text-[10px] uppercase tracking-wider"
              >
                <MapPin className="w-3.5 h-3.5" /> Peta Google Maps
              </a>
              <a
                href="https://www.tiktok.com/@nurnilam_ortiz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center gap-1.5 font-medium text-[10px] uppercase tracking-wider pt-1"
              >
                <Video className="w-3.5 h-3.5" /> TikTok @nurnilam_ortiz
              </a>
            </div>
          </div>

          {/* Col 4: Newsletter & Proposal Trigger (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
              Kelab Eksklusif Nilam VIP
            </p>
            <p className="text-xs text-white/60">
              Daftar untuk menerima jemputan acara istimewa di Wisma Semenyih dan tawaran awal produk edisi terhad.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex border border-white/10 bg-[#151515]">
                <input
                  type="email"
                  required
                  placeholder="Alamat E-mel Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 text-xs text-white placeholder-white/30 bg-transparent focus:outline-none flex-1 font-light"
                />
                <button
                  type="submit"
                  className="px-4 bg-[#D4AF37] text-black hover:bg-[#eedca4] transition-colors flex items-center justify-center font-bold"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Pendaftaran VIP berjaya!
                </p>
              )}
            </form>

            <button
              onClick={onOpenProposal}
              id="footer-proposal-btn"
              className="w-full py-3 px-3 bg-[#151515] border border-white/10 text-white/80 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all text-[10px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Dokumen Cadangan & Terma Pembangunan</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} <strong className="text-white/70 font-normal">Nilam Ortiz Sdn. Bhd. (NILAM EMPIRE ORTIZ VENTURES)</strong>. Hak Cipta Terpelihara.
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider">
            <span>shop.nilamempire.com</span>
            <span>•</span>
            <span>Semenyih, Selangor</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
