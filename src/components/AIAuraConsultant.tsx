import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, X, RefreshCw, ShoppingBag, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface AIAuraConsultantProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const AIAuraConsultant: React.FC<AIAuraConsultantProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [skinConcern, setSkinConcern] = useState<string>('');
  const [lifestyle, setLifestyle] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<{
    primaryProduct: Product;
    secondaryProduct: Product;
    ritualName: string;
    advice: string;
  } | null>(null);

  const concerns = [
    { id: 'kusam', label: 'Kulit Kusam, Jeragat & Hilang Seri Wajah' },
    { id: 'lenguh', label: 'Keletihan Tubuh, Sakit Urat & Angin Dalam Badan' },
    { id: 'solekan', label: 'Solekan Cepat Bercapuk, Pori Besar & Minyak' },
    { id: 'pantang', label: 'Pemulihan Selepas Bersalin / Rawatan Berpantang' },
    { id: 'holistik', label: 'Inginkan Set Hadiah Lengkap & Rawatan Penuh Diraja' }
  ];

  const lifestyles = [
    { id: 'pejabat', label: 'Banyak masa di dalam bilik berhawa dingin (Air-cond)' },
    { id: 'aktif', label: 'Kerap bergerak di luar, terdedah panas matahari & stres' },
    { id: 'ibu', label: 'Ibu sibuk menguruskan keluarga / bayi baru lahir' },
    { id: 'eksekutif', label: 'Eksekutif / Usahawan yang perlukan penampilan berkarisma' }
  ];

  const goals = [
    { id: 'aura-glowing', label: 'Aura Seri Wajah Bersinar & Glowing Segera' },
    { id: 'otot-ringan', label: 'Badan Ringan, Segar & Hilang Rasa Sengal' },
    { id: 'awet-muda', label: 'Kulit Anjal, Lembap & Lambatkan Penuaan' },
    { id: 'makeup-flawless', label: 'Solekan Bertahan 16 Jam Tanpa Rekah' }
  ];

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      let primary = PRODUCTS[0]; // Anggun
      let secondary = PRODUCTS[2]; // Safron 1
      let ritual = 'Ritual Seri Mahsuri (Wajah Glowing & Awet Muda)';
      let advice = 'Fokuskan penggunaan Nilam Anggun Oil pada waktu malam dan semburan Safron Mist Susuk Emas setiap pagi.';

      if (skinConcern === 'lenguh' || skinConcern === 'pantang') {
        primary = PRODUCTS[1]; // Suri
        secondary = PRODUCTS[0]; // Anggun
        ritual = 'Ritual Pulih Raga Diraja (Relaksasi & Buang Angin)';
        advice = 'Gunakan Nilam Suri Massage Oil dengan urutan memusat pada pinggang dan bahu sebelum tidur, disusuli pelembap wajah.';
      } else if (skinConcern === 'solekan' || goal === 'makeup-flawless') {
        primary = PRODUCTS[3]; // Safron 2
        secondary = PRODUCTS[0]; // Anggun
        ritual = 'Ritual Pesona Pengantin (Flawless Makeup Lock)';
        advice = 'Gunakan Nilam Safron Mist [2] sebelum dan selepas solekan untuk mengunci kilauan emas 24K tahan sepanjang hari.';
      } else if (skinConcern === 'holistik') {
        primary = PRODUCTS[4]; // Set maharani
        secondary = PRODUCTS[2];
        ritual = 'Ritual Mahkota Diraja Lengkap Nilam Ortiz';
        advice = 'Amalkan ketiga-tiga produk secara berperingkat untuk transformasi fizikal dan aura karisma tertinggi.';
      }

      setRecommendation({
        primaryProduct: primary,
        secondaryProduct: secondary,
        ritualName: ritual,
        advice: advice
      });
      setIsAnalyzing(false);
      setStep(4);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setSkinConcern('');
    setLifestyle('');
    setGoal('');
    setRecommendation(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black border border-white/10 text-white/60 hover:text-white hover:border-[#D4AF37] transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#151515] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
            <span>KONSULTASI AURA AI</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
            Analisis Keperluan Peribadi
          </h2>
          <p className="text-xs text-white/60 font-light leading-relaxed">
            Dapatkan preskripsi formulasi Nilam Empire yang paling tepat untuk jenis kulit, gaya hidup dan matlamat kesihatan anda.
          </p>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center justify-center gap-2 mb-6 text-xs font-light">
            <span className={`w-7 h-7 flex items-center justify-center text-xs font-medium border ${step === 1 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#151515] text-white/40 border-white/10'}`}>1</span>
            <span className="w-8 h-px bg-white/10"></span>
            <span className={`w-7 h-7 flex items-center justify-center text-xs font-medium border ${step === 2 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#151515] text-white/40 border-white/10'}`}>2</span>
            <span className="w-8 h-px bg-white/10"></span>
            <span className={`w-7 h-7 flex items-center justify-center text-xs font-medium border ${step === 3 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#151515] text-white/40 border-white/10'}`}>3</span>
          </div>
        )}

        {/* Step 1: Main Concern */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-medium text-white text-center">Apakah fokus utama atau masalah yang ingin anda selesaikan?</h3>
            <div className="space-y-2.5">
              {concerns.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSkinConcern(item.id)}
                  className={`w-full p-3.5 border text-xs sm:text-sm font-light text-left transition-all flex items-center justify-between cursor-pointer ${
                    skinConcern === item.id
                      ? 'border-[#D4AF37] bg-black text-[#D4AF37]'
                      : 'border-white/5 bg-[#151515] text-white/70 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {skinConcern === item.id && <Check className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              ))}
            </div>

            <button
              disabled={!skinConcern}
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              <span>Seterusnya: Gaya Hidup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Lifestyle */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-medium text-white text-center">Bagaimanakah rutin harian dan persekitaran anda?</h3>
            <div className="space-y-2.5">
              {lifestyles.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLifestyle(item.id)}
                  className={`w-full p-3.5 border text-xs sm:text-sm font-light text-left transition-all flex items-center justify-between cursor-pointer ${
                    lifestyle === item.id
                      ? 'border-[#D4AF37] bg-black text-[#D4AF37]'
                      : 'border-white/5 bg-[#151515] text-white/70 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {lifestyle === item.id && <Check className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 bg-[#151515] border border-white/10 text-white/60 hover:text-white text-[10px] uppercase tracking-wider font-medium"
              >
                Kembali
              </button>
              <button
                disabled={!lifestyle}
                onClick={() => setStep(3)}
                className="w-2/3 py-3 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                <span>Seterusnya: Matlamat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Goal */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-medium text-white text-center">Apakah hasil impian yang paling anda harapkan?</h3>
            <div className="space-y-2.5">
              {goals.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setGoal(item.id)}
                  className={`w-full p-3.5 border text-xs sm:text-sm font-light text-left transition-all flex items-center justify-between cursor-pointer ${
                    goal === item.id
                      ? 'border-[#D4AF37] bg-black text-[#D4AF37]'
                      : 'border-white/5 bg-[#151515] text-white/70 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {goal === item.id && <Check className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 py-3 bg-[#151515] border border-white/10 text-white/60 hover:text-white text-[10px] uppercase tracking-wider font-medium"
              >
                Kembali
              </button>
              <button
                disabled={!goal || isAnalyzing}
                onClick={handleRunAnalysis}
                className="w-2/3 py-3 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eedca4]"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isAnalyzing ? 'Menganalisis...' : 'Jana Preskripsi'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results & Prescription */}
        {step === 4 && recommendation && (
          <div className="space-y-6">
            
            <div className="p-4 bg-[#151515] border border-white/5 text-center space-y-1">
              <span className="text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium">Hasil Preskripsi AI</span>
              <h3 className="font-serif text-xl font-light text-white">
                {recommendation.ritualName}
              </h3>
              <p className="text-xs text-white/60 max-w-md mx-auto font-light leading-relaxed">
                {recommendation.advice}
              </p>
            </div>

            {/* Recommended Products Card */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              {/* Primary */}
              <div className="p-4 bg-[#151515] border border-white/10 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] bg-black text-[#D4AF37] px-2 py-0.5 border border-white/10">
                      Pilihan Utama
                    </span>
                    <span className="font-serif text-xs text-white">RM {recommendation.primaryProduct.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      src={recommendation.primaryProduct.image}
                      alt={recommendation.primaryProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover border border-white/10 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-medium text-white">{recommendation.primaryProduct.name}</h4>
                      <p className="text-[10px] text-[#D4AF37] mt-0.5">{recommendation.primaryProduct.volume}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(recommendation.primaryProduct);
                    alert(`${recommendation.primaryProduct.name} telah dimasukkan ke dalam troli!`);
                  }}
                  className="w-full py-2 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#eedca4] transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Tambah ke Troli</span>
                </button>
              </div>

              {/* Secondary Companion */}
              <div className="p-4 bg-[#151515] border border-white/5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] bg-black text-white/60 px-2 py-0.5 border border-white/5">
                      Pelengkap
                    </span>
                    <span className="font-serif text-xs text-white">RM {recommendation.secondaryProduct.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      src={recommendation.secondaryProduct.image}
                      alt={recommendation.secondaryProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover border border-white/10 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-medium text-white">{recommendation.secondaryProduct.name}</h4>
                      <p className="text-[10px] text-[#D4AF37] mt-0.5">{recommendation.secondaryProduct.volume}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(recommendation.secondaryProduct);
                    alert(`${recommendation.secondaryProduct.name} telah dimasukkan ke dalam troli!`);
                  }}
                  className="w-full py-2 bg-black border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-medium text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Tambah ke Troli</span>
                </button>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white font-light"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Uji Semula</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#151515] text-[#D4AF37] text-[10px] uppercase tracking-wider font-medium border border-white/10 hover:border-[#D4AF37]"
              >
                Selesai & Terokai Kedai
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
