import React, { useState } from 'react';
import { X, FileText, CheckCircle2, ShieldAlert, Cpu, Download, Printer, Layers, Clock, Lock, Sparkles, Building2 } from 'lucide-react';
import { PROPOSAL_PHASES, CLIENT_REQUIREMENTS, TECHNICAL_TERMS } from '../data/proposalTerms';

interface DesignTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignTermsModal: React.FC<DesignTermsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'cadangan' | 'keperluan' | 'fasa' | 'terma'>('cadangan');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col justify-between">
        
        {/* Top Proposal Header */}
        <div className="p-6 border-b border-white/5 bg-[#0A0A0A] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#151515] flex items-center justify-center border border-white/10 text-[#D4AF37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D4AF37] bg-black px-2 py-0.5 border border-white/10">
                  DOKUMEN CADANGAN & TERMA
                </span>
                <span className="text-xs text-white/40 font-light">v2.4 (shop.nilamempire.com)</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-white mt-1">
                Pelan Pembangunan Nilam Empire
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#151515] border border-white/10 text-xs text-white/70 hover:border-[#D4AF37] hover:text-white transition-colors"
              title="Cetak / Simpan PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Pelan</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-black border border-white/10 text-white/60 hover:text-white hover:border-[#D4AF37] transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/5 bg-[#0A0A0A] px-6 gap-2 sm:gap-6 overflow-x-auto text-[10px] uppercase tracking-[0.2em] font-medium">
          <button
            onClick={() => setActiveTab('cadangan')}
            className={`py-3.5 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'cadangan'
                ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            1. Reka Bentuk
          </button>
          <button
            onClick={() => setActiveTab('keperluan')}
            className={`py-3.5 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'keperluan'
                ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            2. Keperluan Klien
          </button>
          <button
            onClick={() => setActiveTab('fasa')}
            className={`py-3.5 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'fasa'
                ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            3. Fasa Pembangunan
          </button>
          <button
            onClick={() => setActiveTab('terma')}
            className={`py-3.5 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'terma'
                ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            4. Terma & Hak Cipta
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6 text-xs sm:text-sm text-white/60 font-light">
          
          {/* TAB 1: CADANGAN REKA BENTUK */}
          {activeTab === 'cadangan' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="p-5 bg-[#151515] border border-white/5 space-y-2">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium">Visi Estetik Kelas Atasan</span>
                <h3 className="font-serif text-xl font-light text-white">
                  Konsep "Sophisticated Dark Luxury"
                </h3>
                <p className="leading-relaxed text-white/60 font-light">
                  Cadangan reka bentuk ini menggabungkan palet eksklusif <strong>Deep Obsidian Black (#0A0A0A)</strong> dengan sentuhan <strong>Champagne Gold (#D4AF37)</strong> dan tipografi serif klasik. Pendekatan ini menyerlahkan prestij jenama Puan Nur Nilam Ortiz & Azlan Komeng agar setaraf jenama kosmetik mewah antarabangsa.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                
                <div className="p-4 bg-[#151515] border border-white/5 space-y-2">
                  <div className="w-8 h-8 bg-black border border-white/10 flex items-center justify-center text-[#D4AF37] font-medium text-xs">
                    01
                  </div>
                  <h4 className="font-normal text-sm text-white uppercase tracking-wider">Fokus Penukaran Jualan</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Setiap halaman produk dilengkapi butang pesanan pantas WhatsApp VIP dan troli pintar dengan kalkulator pos Semenanjung/Borneo automatik.
                  </p>
                </div>

                <div className="p-4 bg-[#151515] border border-white/5 space-y-2">
                  <div className="w-8 h-8 bg-black border border-white/10 flex items-center justify-center text-[#D4AF37] font-medium text-xs">
                    02
                  </div>
                  <h4 className="font-normal text-sm text-white uppercase tracking-wider">Integrasi Wisma & TikTok</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Menghubungkan terus pelanggan digital ke Wisma Nilam Empire Semenyih melalui Google Maps dan suapan langsung TikTok @nurnilam_ortiz.
                  </p>
                </div>

                <div className="p-4 bg-[#151515] border border-white/5 space-y-2">
                  <div className="w-8 h-8 bg-black border border-white/10 flex items-center justify-center text-[#D4AF37] font-medium text-xs">
                    03
                  </div>
                  <h4 className="font-normal text-sm text-white uppercase tracking-wider">Pengalaman VIP Lancar</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Kelajuan muat turun ultra-pantas (bawah 1.5 saat), animasi peralihan sutera lancar, dan responsif 100% pada semua peranti telefon pintar.
                  </p>
                </div>

              </div>

              {/* Core Feature Matrix */}
              <div className="p-5 bg-[#151515] border border-white/5 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-medium text-white">Struktur Halaman Utama Cadangan</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-light">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong className="text-white font-normal">Hero Sanctuary:</strong> Memperkenalkan Nilam Empire Ortiz Ventures & ikrar "Born from a Mother's Love".</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong className="text-white font-normal">Katalog Produk:</strong> Nilam Anggun, Nilam Suri & Safron Mist 1 & 2.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong className="text-white font-normal">Wisma Semenyih Portal:</strong> Peta navigasi GPS, waktu operasi & borang temujanji.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong className="text-white font-normal">AI Konsultasi Diraja:</strong> Penasihat kecantikan pintar untuk preskripsi produk tepat.</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: KEPERLUAN DISEDIAKAN KLIEN */}
          {activeTab === 'keperluan' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 bg-[#151515] border border-white/10 text-xs text-[#D4AF37]">
                <strong>Nota Tindakan Segera:</strong> Pihak pengurusan Nilam Ortiz Sdn. Bhd. disarankan menyediakan senarai semak berikut sebelum fasa integrasi pelayan dan gerbang pembayaran bermula.
              </div>

              <div className="space-y-4">
                {CLIENT_REQUIREMENTS.map((req, idx) => (
                  <div key={idx} className="p-5 bg-[#151515] border border-white/5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase font-medium tracking-[0.2em] text-[#D4AF37] bg-black px-2 py-0.5 border border-white/10">
                        {req.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-light text-white">{req.title}</h4>
                    <p className="text-xs text-white/60 font-light">{req.description}</p>
                    <ul className="space-y-1.5 pt-1">
                      {req.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-white/70 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FASA PEMBANGUNAN */}
          {activeTab === 'fasa' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-4">
                {PROPOSAL_PHASES.map((phase) => (
                  <div key={phase.phaseNumber} className="p-5 bg-[#151515] border border-white/5 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 bg-[#D4AF37] text-black font-bold text-xs flex items-center justify-center">
                          {phase.phaseNumber}
                        </span>
                        <h4 className="font-serif text-base font-light text-white">{phase.title}</h4>
                      </div>
                      <span className="px-3 py-1 bg-black text-[#D4AF37] text-[10px] font-medium border border-white/10 flex items-center gap-1 uppercase tracking-wider">
                        <Clock className="w-3 h-3 text-[#D4AF37]" /> {phase.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Hasil Kerja (Deliverables):</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {phase.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-white/70 font-light">
                            <span className="text-[#D4AF37]">•</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                      {phase.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-black text-[9px] text-white/50 border border-white/5 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TERMA & HAK CIPTA */}
          {activeTab === 'terma' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-4">
                {TECHNICAL_TERMS.map((term, idx) => (
                  <div key={idx} className="p-5 bg-[#151515] border border-white/5 space-y-3">
                    <span className="text-[9px] uppercase font-medium tracking-[0.2em] text-[#D4AF37] bg-black px-2 py-0.5 border border-white/10">
                      {term.category}
                    </span>
                    <h4 className="font-serif text-lg font-light text-white">{term.title}</h4>
                    <p className="text-xs text-white/60 font-light">{term.description}</p>
                    <ul className="space-y-1.5 pt-1">
                      {term.details.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-xs text-white/70 font-light">
                          <Lock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/5 bg-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40 text-center sm:text-left font-light">
            Disediakan khusus untuk: <strong className="text-white font-normal">Nilam Ortiz Sdn. Bhd.</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/601123456789?text=Salam%20Developer,%20saya%20telah%20menyemak%20Cadangan%20Reka%20Bentuk%20%26%20Terma%20Pembangunan%20shop.nilamempire.com%20dan%20ingin%20meneruskan%20perbincangan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] text-center hover:bg-[#eedca4] transition-colors"
            >
              Sahkan Cadangan & Mula Projek
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#151515] border border-white/10 text-white/60 text-[10px] uppercase tracking-wider font-medium hover:text-white"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
