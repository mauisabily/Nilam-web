import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, MapPin, Phone, Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenProposal: () => void;
  onOpenConsultant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenProposal,
  onOpenConsultant,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-luxury-navbar"
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3.5'
          : 'bg-[#0A0A0A]/40 backdrop-blur-md border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Nav Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-light text-white/60">
          <button
            onClick={() => scrollToSection('produk-utama')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            id="nav-link-products"
          >
            Koleksi
          </button>
          <button
            onClick={() => scrollToSection('rahsia-formulasi')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            id="nav-link-formula"
          >
            The Ritual
          </button>
          <button
            onClick={() => scrollToSection('pengasas-warisan')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            id="nav-link-story"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection('wisma-nilam')}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
            id="nav-link-wisma"
          >
            <MapPin className="w-3 h-3 text-[#D4AF37]" /> Wisma Semenyih
          </button>
        </nav>

        {/* Center Brand Logo & Typography */}
        <a
          href="#"
          className="flex flex-col items-center text-center group focus:outline-none"
          id="brand-header-logo"
        >
          <h1 className="text-xl sm:text-2xl font-serif tracking-[0.35em] font-light text-white leading-none group-hover:text-[#D4AF37] transition-colors">
            NILAM EMPIRE
          </h1>
          <p className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37] mt-1 font-medium">
            Ortiz Ventures
          </p>
        </a>

        {/* Right Desktop Nav & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* AI Consultant Glass Button */}
          <button
            onClick={onOpenConsultant}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 text-[#D4AF37] hover:text-white transition-all text-[10px] uppercase tracking-[0.18em] font-medium"
            id="nav-link-consultant"
          >
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Aura AI</span>
          </button>

          {/* Proposal & Specs Trigger */}
          <button
            onClick={onOpenProposal}
            className="hidden xl:flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.18em] font-light px-2"
            id="nav-link-proposal"
            title="Cadangan & Terma Pembangunan Web"
          >
            <FileText className="w-3 h-3" />
            <span>Terma Web</span>
          </button>

          {/* Direct WhatsApp Concierge Link */}
          <a
            href="https://wa.me/601123456789?text=Salam%20Nilam%20Empire,%20saya%20berminat%20dengan%20produk%20eksklusif%20Nilam%20Ortiz"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] text-black text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#eedca4] transition-all shadow-md shadow-[#D4AF37]/10"
            id="header-whatsapp-btn"
          >
            <Phone className="w-3 h-3" />
            <span>WhatsApp VIP</span>
          </a>

          {/* Shopping Cart Trigger Glass Pill */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer flex items-center justify-center"
            aria-label="Troli Beli-Belah"
            id="header-cart-btn"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D4AF37] text-black font-bold text-[9px] flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-white/80 hover:text-white"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle-btn"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Glass Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 mt-3 space-y-4 text-[11px] uppercase tracking-[0.2em]"
          >
            <div className="grid gap-3 font-light text-white/70">
              <button
                onClick={() => scrollToSection('produk-utama')}
                className="text-left py-2.5 hover:text-[#D4AF37] border-b border-white/[0.05]"
                id="mobile-nav-products"
              >
                Koleksi Produk Utama
              </button>
              <button
                onClick={() => scrollToSection('rahsia-formulasi')}
                className="text-left py-2.5 hover:text-[#D4AF37] border-b border-white/[0.05]"
                id="mobile-nav-formula"
              >
                The Ritual & Ramuan
              </button>
              <button
                onClick={() => scrollToSection('pengasas-warisan')}
                className="text-left py-2.5 hover:text-[#D4AF37] border-b border-white/[0.05]"
                id="mobile-nav-founders"
              >
                Our Story (Puan Nilam & Azlan Komeng)
              </button>
              <button
                onClick={() => scrollToSection('wisma-nilam')}
                className="text-left py-2.5 hover:text-[#D4AF37] border-b border-white/[0.05] flex items-center gap-2"
                id="mobile-nav-wisma"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Wisma Semenyih
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultant();
                }}
                className="text-left py-2.5 text-[#D4AF37] hover:text-white flex items-center gap-2 border-b border-white/[0.05]"
                id="mobile-nav-consultant"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Aura AI Consultation
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenProposal();
                }}
                className="text-left py-2.5 text-white/50 hover:text-white flex items-center gap-2 border-b border-white/[0.05]"
                id="mobile-nav-proposal"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" /> Dokumen Cadangan & Terma Web
              </button>
              <a
                href="https://wa.me/601123456789?text=Salam%20Nilam%20Empire"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 rounded-full bg-[#D4AF37] text-black font-bold text-center text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp VIP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
