import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { FormulationShowcase } from './components/FormulationShowcase';
import { BrandHeritage } from './components/BrandHeritage';
import { WismaShowroom } from './components/WismaShowroom';
import { TikTokFeed } from './components/TikTokFeed';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { AIAuraConsultant } from './components/AIAuraConsultant';
import { DesignTermsModal } from './components/DesignTermsModal';
import { Product, CartItem } from './types';
import { Phone, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('nilam_empire_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isProposalOpen, setIsProposalOpen] = useState<boolean>(false);
  const [isConsultantOpen, setIsConsultantOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('nilam_empire_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('produk-utama');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWisma = () => {
    const el = document.getElementById('wisma-nilam');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] flex flex-col selection:bg-[#D4AF37] selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Background Ambience / Subtle Frosted Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/[0.015] rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/[0.015] rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProposal={() => setIsProposalOpen(true)}
        onOpenConsultant={() => setIsConsultantOpen(true)}
      />

      {/* Main Flow */}
      <main className="flex-grow relative z-10">
        
        {/* Hero Section */}
        <HeroSection
          onShopClick={scrollToCatalog}
          onConsultClick={() => setIsConsultantOpen(true)}
          onWismaClick={scrollToWisma}
        />

        {/* Product Catalog */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
        />

        {/* Botanical Ingredients & Formulation Showcase */}
        <FormulationShowcase />

        {/* Founders Story & Intellectual Property Heritage */}
        <BrandHeritage />

        {/* Wisma Nilam Empire HQ & Showroom */}
        <WismaShowroom />

        {/* Official TikTok & Community Feed */}
        <TikTokFeed />

      </main>

      {/* Corporate & Legal Footer */}
      <Footer
        onOpenProposal={() => setIsProposalOpen(true)}
        onOpenConsultant={() => setIsConsultantOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* AI Royal Aura Consultant Modal */}
      <AIAuraConsultant
        isOpen={isConsultantOpen}
        onClose={() => setIsConsultantOpen(false)}
        onSelectProduct={(product) => {
          setIsConsultantOpen(false);
          setSelectedProduct(product);
        }}
        onAddToCart={(product) => handleAddToCart(product, 1)}
      />

      {/* Official Design Proposal & Technical Development Terms Modal */}
      <DesignTermsModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

      {/* Floating Action Buttons with Glass UI */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => setIsProposalOpen(true)}
          id="floating-proposal-trigger"
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white hover:border-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-medium shadow-2xl backdrop-blur-xl transition-all hover:scale-105"
        >
          <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Cadangan & Terma Web</span>
        </motion.button>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          href="https://wa.me/601123456789?text=Salam%20Wisma%20Nilam%20Empire,%20saya%20ingin%20bertanya%20mengenai%20produk%20dan%20pembelian%20rasmi."
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-trigger"
          className="px-4 py-3 rounded-full bg-[#D4AF37] text-black shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2 hover:scale-105 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#eedca4]"
          title="Hubungi WhatsApp VIP Nilam Empire"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WhatsApp VIP</span>
        </motion.a>
      </div>

    </div>
  );
}
