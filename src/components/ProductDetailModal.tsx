import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, ShieldCheck, Check, Sparkles, Phone, Droplets, BookOpen, Layers } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'ritual'>('benefits');
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Salam Admin Nilam Empire, saya berminat membuat pesanan rasmi untuk:\n\n*Produk:* ${product.name} (${product.volume})\n*Kuantiti:* ${quantity} unit\n*Jumlah:* RM ${(product.price * quantity).toFixed(2)}\n\nMohon maklumat pembayaran dan penghantaran.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="product-modal-close-btn"
          className="absolute top-4 right-4 z-20 p-2 bg-black border border-white/10 text-white/60 hover:text-white hover:border-[#D4AF37] transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid lg:grid-cols-12 gap-0">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 bg-[#151515] relative p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="relative aspect-square overflow-hidden border border-white/10">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] bg-black text-[#D4AF37] border border-white/10">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Guarantees */}
            <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-xs text-white/60 font-light">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Produk Tulen & Dilindungi IP</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Formulasi Herba Organik Bebas Racun</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Isipadu Bersih: {product.volume}</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            
            <div className="space-y-4">
              
              {/* Header Info */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span className="text-xs font-medium text-white">{product.rating}</span>
                  </div>
                  <span className="text-xs text-white/40 font-light">({product.reviewCount} ulasan pembeli)</span>
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
                  {product.name}
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Row */}
              <div className="p-3.5 bg-[#151515] border border-white/5 flex items-baseline gap-3">
                <span className="font-serif text-2xl sm:text-3xl font-light text-white">
                  RM {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-white/40 line-through font-light">
                    RM {product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium ml-auto">
                  Stok Rasmi Sedia Ada
                </span>
              </div>

              {/* Full Description */}
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {product.fullDesc}
              </p>

              {/* Interactive Detail Tabs */}
              <div className="space-y-3">
                <div className="flex border-b border-white/10 gap-6 text-[10px] uppercase tracking-[0.2em] font-medium">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'benefits'
                        ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Khasiat
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'ingredients'
                        ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Ramuan Utama
                  </button>
                  <button
                    onClick={() => setActiveTab('ritual')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'ritual'
                        ? 'border-b border-[#D4AF37] text-[#D4AF37]'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Cara Guna
                  </button>
                </div>

                <div className="bg-[#151515] p-4 border border-white/5 min-h-[140px]">
                  {activeTab === 'benefits' && (
                    <ul className="space-y-2 text-xs text-white/70 font-light">
                      {product.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'ingredients' && (
                    <div className="grid sm:grid-cols-2 gap-2 text-xs">
                      {product.keyIngredients.map((item, idx) => (
                        <div key={idx} className="p-2.5 bg-black border border-white/5">
                          <p className="font-normal text-white text-[11px]">{item.name}</p>
                          <p className="text-[10px] text-white/50 mt-0.5 font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'ritual' && (
                    <ol className="space-y-2 text-xs text-white/70 font-light list-decimal list-inside">
                      {product.howToUse.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>

            </div>

            {/* Quantity and Action Buttons */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/10 bg-[#151515] px-3 py-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 mr-3 font-light">Kuantiti:</span>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-white/60 hover:text-white px-2 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-medium text-white px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-white/60 hover:text-white px-2 font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="text-right ml-auto">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 block font-light">Jumlah:</span>
                  <span className="font-serif text-lg font-light text-[#D4AF37]">
                    RM {(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  id="modal-add-to-cart-btn"
                  className={`w-full py-3.5 font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#D4AF37] text-black hover:bg-[#eedca4]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Berjaya Ditambah!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Tambah ke Troli</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/601123456789?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-whatsapp-order-btn"
                  className="w-full py-3.5 bg-[#151515] border border-white/10 text-white/80 hover:text-white hover:border-[#D4AF37] font-medium text-[10px] uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Pesan WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
