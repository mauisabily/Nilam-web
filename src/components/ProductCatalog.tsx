import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Star, ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'anggun', label: 'Nilam Anggun (Wajah)' },
    { id: 'suri', label: 'Nilam Suri (Badan & Urutan)' },
    { id: 'safron', label: 'Safron Mist (Susuk Emas)' },
    { id: 'set', label: 'Set Hadiah VIP' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="produk-utama" className="py-24 bg-[#0A0A0A] border-b border-white/[0.06] relative">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-4"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-medium block">
            Koleksi Produk Utama
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Mahakarya <span className="italic font-normal text-[#D4AF37]">Nilam Empire</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
            Pilihan pati herba organik, minyak terapeutik, dan mist emas 24K berkhasiat tinggi untuk ritual kecantikan dan ketenangan holistik anda.
          </p>
        </motion.div>

        {/* Category Filter Tabs with Glass UI */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-btn-${cat.id}`}
                className={`relative px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/15'
                    : 'bg-white/[0.03] text-white/60 border border-white/[0.07] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Product Cards Grid with Staggered Animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProduct(product)}
                id={`product-card-${product.id}`}
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#D4AF37]/45 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer transition-colors duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
              >
                <div>
                  {/* Image Container with Glass Badges */}
                  <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-black/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/20" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-medium rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#D4AF37]">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Volume Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] font-light rounded-full bg-black/60 backdrop-blur-md text-white/70 border border-white/15">
                        {product.volume}
                      </span>
                    </div>

                    {/* Quick Action Overlay on hover (Glass UI) */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
                        title="Lihat Terperinci"
                        id={`view-btn-${product.id}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className="p-3 rounded-full bg-[#D4AF37] text-black hover:bg-[#eedca4] transition-colors font-bold shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                        title="Tambah ke Troli"
                        id={`add-btn-${product.id}`}
                      >
                        {addedId === product.id ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 sm:p-7 space-y-3">
                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#D4AF37]">
                        <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                        <span className="text-xs font-semibold text-white">{product.rating}</span>
                        <span className="text-[11px] text-white/40">({product.reviewCount})</span>
                      </div>
                      <span className="text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium bg-white/[0.03] border border-white/[0.08] px-2 py-0.5 rounded-full">
                        Original Brand
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-light text-white group-hover:text-[#D4AF37] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-white/50 mt-1 font-light">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
                      {product.shortDesc}
                    </p>

                    {/* Key Benefits preview */}
                    <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-white/70 font-light">
                          <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action Button Footer */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block font-light">Harga Rasmi</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-lg font-serif font-light text-white">
                        RM {product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-white/30 line-through font-light">
                          RM {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    id={`card-add-cart-${product.id}`}
                    className={`px-5 py-2 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      addedId === product.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white/[0.04] backdrop-blur-md hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Ditambah</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3 h-3" />
                        <span>Beli</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
