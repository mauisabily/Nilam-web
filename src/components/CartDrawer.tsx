import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, Phone, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [region, setRegion] = useState<'semenanjung' | 'borneo'>('semenanjung');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<'whatsapp' | 'fpx'>('whatsapp');
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  
  // Shipping calculation
  const freeShippingThreshold = 150;
  const rawShipping = region === 'semenanjung' ? (subtotal >= freeShippingThreshold ? 0 : 8) : 15;
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount + rawShipping);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'NILAMVIP' || promoCode.trim().toUpperCase() === 'ORTIZ10') {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      alert('Kod promosi tidak sah. Gunakan kod rasmi: NILAMVIP');
    }
  };

  const handleWhatsAppCheckout = () => {
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Sila lengkapkan Nama, No. Telefon dan Alamat Penghantaran untuk pesanan VIP.');
      return;
    }

    const orderLines = cartItems.map(
      (item, idx) => `${idx + 1}. *${item.product.name}* x ${item.quantity} = RM ${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const message = encodeURIComponent(
      `👑 *PESANAN RASMI NILAM EMPIRE ORTIZ VENTURES*\n` +
      `-------------------------------------------\n` +
      `*Nama Pelanggan:* ${customerName}\n` +
      `*No Telefon:* ${customerPhone}\n` +
      `*Alamat Penghantaran:* ${customerAddress}\n` +
      `*Zon Pos:* ${region === 'semenanjung' ? 'Semenanjung Malaysia' : 'Sabah / Sarawak'}\n\n` +
      `*SENARAI PESANAN:*\n${orderLines}\n\n` +
      `*Subtotal:* RM ${subtotal.toFixed(2)}\n` +
      `*Diskaun:* -RM ${discountAmount.toFixed(2)}\n` +
      `*Kos Pos:* RM ${rawShipping.toFixed(2)}\n` +
      `*JUMLAH KESELURUHAN:* RM ${total.toFixed(2)}\n` +
      `-------------------------------------------\n` +
      `Mohon pihak pengurusan Wisma Nilam Empire sahkan pesanan dan sediakan resit rasmi.`
    );

    window.open(`https://wa.me/601123456789?text=${message}`, '_blank');
  };

  const handleOnlineCheckout = () => {
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Sila lengkapkan maklumat Nama, Telefon dan Alamat sebelum meneruskan pembayaran atas talian.');
      return;
    }
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-lg bg-[#0A0A0A] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#151515] flex items-center justify-center border border-white/10 text-[#D4AF37]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-light text-white uppercase tracking-wider">Troli Beli-Belah</h2>
              <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-medium">
                {cartItems.length} jenis produk dipilih
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Tutup Troli"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          
          {checkoutSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-black border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-light text-white">Pesanan Telah Diterima</h3>
              <p className="text-xs text-white/60 max-w-xs mx-auto font-light leading-relaxed">
                Terima kasih kerana memilih Nilam Empire Ortiz Ventures. Pasukan kami di Wisma Nilam Empire akan memproses bungkusan anda dalam masa 24 jam.
              </p>
              <button
                onClick={() => {
                  setCheckoutSuccess(false);
                  onClearCart();
                  onClose();
                }}
                className="px-6 py-3 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em]"
              >
                Kembali Membeli-belah
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-14 h-14 bg-[#151515] border border-white/5 text-white/40 mx-auto flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-xs text-white/50 uppercase tracking-wider font-light">Troli anda masih kosong.</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 border border-white/10 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-medium hover:border-[#D4AF37] transition-colors"
              >
                Terokai Produk Sekarang
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Meter */}
              <div className="p-4 bg-[#151515] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-light">
                  <span className="text-white/60">Penghantaran Percuma Semenanjung (RM150):</span>
                  <span className="font-medium text-[#D4AF37]">
                    {subtotal >= freeShippingThreshold ? 'Layak Percuma!' : `Baki RM ${(freeShippingThreshold - subtotal).toFixed(2)} lagi`}
                  </span>
                </div>
                <div className="w-full bg-black h-1 border border-white/5 overflow-hidden">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-[#151515] border border-white/5 flex items-center gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover border border-white/10 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-white truncate">{item.product.name}</h4>
                      <p className="text-[11px] text-[#D4AF37] mt-0.5">RM {item.product.price.toFixed(2)}</p>
                      
                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center border border-white/10 bg-black px-2 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="text-xs text-white/60 hover:text-white px-1"
                          >
                            -
                          </button>
                          <span className="text-xs font-medium text-white px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="text-xs text-white/60 hover:text-white px-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 text-white/40 hover:text-red-400 transition-colors"
                      title="Buang Produk"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Promo Code Box */}
              <div className="p-3 bg-[#151515] border border-white/5 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <input
                  type="text"
                  placeholder="Kod Kupon (cth: NILAMVIP)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-transparent border-none text-xs text-white placeholder-white/30 focus:outline-none flex-1 uppercase font-light"
                />
                <button
                  onClick={applyPromo}
                  className="px-3.5 py-1 bg-black border border-white/10 hover:border-[#D4AF37] text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] transition-colors"
                >
                  Guna
                </button>
              </div>

              {/* Delivery Zone Selector */}
              <div className="space-y-1.5 text-xs font-light">
                <label className="text-white/60 uppercase tracking-wider text-[10px]">Zon Penghantaran:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRegion('semenanjung')}
                    className={`py-2 px-3 border text-[11px] font-normal transition-all ${
                      region === 'semenanjung'
                        ? 'border-[#D4AF37] bg-black text-[#D4AF37]'
                        : 'border-white/10 text-white/60 bg-[#151515]'
                    }`}
                  >
                    Semenanjung (RM 8 / Percuma)
                  </button>
                  <button
                    onClick={() => setRegion('borneo')}
                    className={`py-2 px-3 border text-[11px] font-normal transition-all ${
                      region === 'borneo'
                        ? 'border-[#D4AF37] bg-black text-[#D4AF37]'
                        : 'border-white/10 text-white/60 bg-[#151515]'
                    }`}
                  >
                    Sabah / Sarawak (RM 15)
                  </button>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="p-4 bg-[#151515] border border-white/5 space-y-3">
                <p className="text-[10px] uppercase tracking-wider font-medium text-white">Maklumat Penghantaran VIP</p>
                <input
                  type="text"
                  placeholder="Nama Penuh Penerima"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] font-light"
                />
                <input
                  type="tel"
                  placeholder="Nombor WhatsApp / Telefon (cth: 0123456789)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] font-light"
                />
                <textarea
                  rows={2}
                  placeholder="Alamat Lengkap Rumah / Pejabat & Poskod"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] font-light"
                />
              </div>

              {/* Price Summary Breakdown */}
              <div className="p-4 bg-[#151515] border border-white/5 space-y-2 text-xs font-light">
                <div className="flex justify-between text-white/60">
                  <span>Jumlah Produk:</span>
                  <span className="font-normal text-white">RM {subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Diskaun Promosi ({discountPercent}%):</span>
                    <span>- RM {discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white/60">
                  <span>Kos Pos ({region === 'semenanjung' ? 'Semenanjung' : 'Sabah/Sarawak'}):</span>
                  <span>{rawShipping === 0 ? 'PERCUMA' : `RM ${rawShipping.toFixed(2)}`}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                  <span className="font-normal text-white text-sm uppercase tracking-wider">Jumlah:</span>
                  <span className="font-serif text-xl font-light text-[#D4AF37]">RM {total.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Checkout Buttons */}
        {cartItems.length > 0 && !checkoutSuccess && (
          <div className="p-6 border-t border-white/5 bg-[#0A0A0A] space-y-3">
            <button
              onClick={handleWhatsAppCheckout}
              id="cart-whatsapp-checkout-btn"
              className="w-full py-3.5 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#eedca4] transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hantar Pesanan Terus ke WhatsApp VIP</span>
            </button>

            <button
              onClick={handleOnlineCheckout}
              id="cart-online-checkout-btn"
              disabled={isCheckingOut}
              className="w-full py-3 bg-[#151515] border border-white/10 text-white/80 hover:text-white hover:border-[#D4AF37] font-medium text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{isCheckingOut ? 'Memproses Gerbang Pembayaran...' : 'Bayar Atas Talian (FPX / Kad Kredit)'}</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 font-light">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dilindungi Penyulitan 256-Bit SSL • Nilam Ortiz Sdn. Bhd.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
