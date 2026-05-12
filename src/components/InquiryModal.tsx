import { X, Send, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function InquiryModal({ isOpen, onClose, product }: InquiryModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-dark/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-neutral-dark">Kirim Inquiry</h3>
                <p className="text-sm text-neutral-dark/40">Menanyakan produk kepada {product.sellerName}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-neutral-light rounded-full hover:bg-neutral-light/80 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-dark/60" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Berhasil Terkirim!'); onClose(); }}>
              <div className="bg-primary/5 p-4 rounded-2xl flex items-center gap-4 border border-primary/10">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src={product.image} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-dark">{product.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-primary">{product.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest">Kuantitas</label>
                  <input type="text" placeholder="e.g. 500kg" className="w-full p-4 bg-neutral-light border border-transparent focus:border-primary focus:bg-white rounded-xl outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest">Negara Tujuan</label>
                  <input type="text" placeholder="e.g. Germany" className="w-full p-4 bg-neutral-light border border-transparent focus:border-primary focus:bg-white rounded-xl outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest">Pesan untuk Seller</label>
                <textarea 
                  rows={4} 
                  placeholder="Halo, saya tertarik dengan produk Anda. Berapa estimasi harga untuk pengiriman ke..."
                  className="w-full p-4 bg-neutral-light border border-transparent focus:border-primary focus:bg-white rounded-xl outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="bg-warning/5 p-3 rounded-xl border border-warning/10 flex gap-3">
                <AlertCircle className="w-4 h-4 text-warning shrink-0" />
                <p className="text-[10px] text-warning font-medium">Data Anda akan dikirimkan secara aman dan terenkripsi kepada eksportir terkait.</p>
              </div>

              <button className="w-full btn-primary py-4 text-lg shadow-lg shadow-primary/20">
                Kirim Sekarang
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
