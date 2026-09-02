import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Calendar, CheckCircle2, Phone, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export const WismaShowroom: React.FC = () => {
  const [appointmentName, setAppointmentName] = useState('');
  const [appointmentPhone, setAppointmentPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentPurpose, setAppointmentPurpose] = useState('Konsultasi Kecantikan & Aura');
  const [isBooked, setIsBooked] = useState(false);

  const googleMapsUrl = 'https://share.google/ebHQ9Oh9bqsC2YkxA';
  const addressText = '2a, Jalan TTS 2, Taman Tasik Semenyih, 43500 Semenyih, Selangor';

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentName || !appointmentPhone || !appointmentDate) {
      alert('Sila lengkapkan maklumat temujanji.');
      return;
    }

    const message = encodeURIComponent(
      `🏛️ *TEMUJANJI VIP SHOWROOM WISMA NILAM EMPIRE*\n` +
      `-----------------------------------------\n` +
      `*Nama:* ${appointmentName}\n` +
      `*No Telefon:* ${appointmentPhone}\n` +
      `*Tarikh Cadangan:* ${appointmentDate}\n` +
      `*Tujuan Lawatan:* ${appointmentPurpose}\n` +
      `*Lokasi:* Wisma Nilam Empire, Semenyih\n` +
      `-----------------------------------------\n` +
      `Mohon pengesahan slot daripada pihak pengurusan Wisma Nilam Empire.`
    );

    window.open(`https://wa.me/601123456789?text=${message}`, '_blank');
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
  };

  return (
    <section id="wisma-nilam" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/[0.06]">
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
            Ibu Pejabat & Galeri Pameran
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Wisma <span className="italic font-normal text-[#D4AF37]">Nilam Empire</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
            Pusat operasi korporat, penyelidikan formulasi organik, dan galeri pameran eksklusif kami di Semenyih, Selangor.
          </p>
        </motion.div>

        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: HQ Image & Address Info with Glass UI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
          >
            
            {/* Showroom Imagery */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Wisma Nilam Empire Semenyih"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#D4AF37] font-semibold uppercase block">Ibu Pejabat & Galeri</span>
                  <h3 className="font-serif text-base font-light text-white">Wisma Nilam Empire</h3>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="wisma-google-maps-btn"
                  className="px-4 py-2 rounded-full bg-[#D4AF37] text-black font-bold text-[9px] uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 hover:bg-[#eedca4] transition-all shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Address & Operational Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em]">Alamat Rasmi</h4>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {addressText}
                </p>
                <p className="text-[10px] text-white/40 pt-1 font-light">
                  (Berdekatan Taman Tasik Semenyih)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em]">Waktu Operasi</h4>
                </div>
                <div className="text-xs text-white/70 space-y-1 font-light">
                  <p className="flex justify-between">
                    <span>Isnin - Sabtu:</span>
                    <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Ahad & Cuti:</span>
                    <span className="text-[#D4AF37]">Temujanji VIP</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Showroom Services Strip */}
            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <Sparkles className="w-4 h-4 text-[#D4AF37] mx-auto mb-1.5" />
                <p className="text-white text-[10px] uppercase tracking-wider font-light">Tester Bar</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <Building2 className="w-4 h-4 text-[#D4AF37] mx-auto mb-1.5" />
                <p className="text-white text-[10px] uppercase tracking-wider font-light">Self-Pickup</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <Calendar className="w-4 h-4 text-[#D4AF37] mx-auto mb-1.5" />
                <p className="text-white text-[10px] uppercase tracking-wider font-light">VIP Session</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <Phone className="w-4 h-4 text-[#D4AF37] mx-auto mb-1.5" />
                <p className="text-white text-[10px] uppercase tracking-wider font-light">Peluang Ejen</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive VIP Appointment Booking Form with Glass UI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
          >
            
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">Layanan Peribadi</span>
                <h3 className="font-serif text-2xl font-light text-white">
                  Tempah Sesi Lawatan VIP
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Nikmati pengalaman mencuba formulasi Nilam Anggun, Nilam Suri & Safron Mist bersama perunding pakar kami di Wisma Semenyih.
                </p>
              </div>

              {isBooked ? (
                <div className="p-6 rounded-xl bg-black/50 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg text-white font-light">Permohonan Temujanji Dihantar!</h4>
                  <p className="text-xs text-white/60 font-light">
                    Pihak pengurusan Wisma Nilam Empire akan menghubungi anda melalui WhatsApp untuk pengesahan slot waktu lawatan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1 font-light">Nama Penuh:</label>
                    <input
                      type="text"
                      required
                      placeholder="cth: Datin Seri Azalina / Puan Fatimah"
                      value={appointmentName}
                      onChange={(e) => setAppointmentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1 font-light">Nombor WhatsApp:</label>
                    <input
                      type="tel"
                      required
                      placeholder="cth: 012-3456789"
                      value={appointmentPhone}
                      onChange={(e) => setAppointmentPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1 font-light">Tarikh Cadangan Lawatan:</label>
                    <input
                      type="date"
                      required
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1 font-light">Tujuan Lawatan:</label>
                    <select
                      value={appointmentPurpose}
                      onChange={(e) => setAppointmentPurpose(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37] backdrop-blur-sm transition-colors"
                    >
                      <option value="Konsultasi Kecantikan & Aura" className="bg-[#111]">Konsultasi Kecantikan & Aura Wajah</option>
                      <option value="Ujian Percubaan Tester Bar" className="bg-[#111]">Ujian Percubaan Tester Bar Nilam</option>
                      <option value="Pengambilan Stok / Self-Pickup" className="bg-[#111]">Pengambilan Stok / Self-Pickup</option>
                      <option value="Peluang Rakan Niaga / Ejen Stokis" className="bg-[#111]">Peluang Rakan Niaga / Ejen Stokis</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="wisma-submit-booking-btn"
                    className="w-full py-3.5 rounded-full bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#eedca4] transition-all cursor-pointer mt-2 shadow-lg shadow-[#D4AF37]/15 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Hantar Permohonan Temujanji
                  </button>
                </form>
              )}

            </div>

            <div className="pt-4 border-t border-white/[0.06] text-[10px] text-white/40 text-center mt-4 font-light">
              Ibu Pejabat: <strong className="text-white/60 font-normal">Nilam Ortiz Sdn. Bhd.</strong> (Semenyih, Selangor)
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
