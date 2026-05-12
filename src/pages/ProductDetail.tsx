import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Star, MapPin, Truck, Calendar, ArrowLeft, MessageCircle, ShoppingBag, Share2, Info } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useState } from 'react';
import InquiryModal from '../components/InquiryModal';

export default function ProductDetail() {
  const { id } = useParams();
  const product = FEATURED_PRODUCTS.find(p => p.id === id) || FEATURED_PRODUCTS[0];
  const [activeTab, setActiveTab] = useState<'spec' | 'story' | 'review'>('spec');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const tabs = [
    { id: 'spec', label: 'Spesifikasi Lengkap' },
    { id: 'story', label: 'Cerita Produk (Storytelling)' },
    { id: 'review', label: 'Ulasan Buyer' },
  ];

  return (
    <div className="bg-neutral-light min-h-screen pb-20">
      <div className="bg-white border-b border-neutral-light py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/catalog" className="flex items-center gap-2 text-sm font-medium text-neutral-dark/60 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Katalog
          </Link>
          <div className="flex gap-4">
            <button className="p-2 text-neutral-dark/40 hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Photos & Gallery */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card overflow-hidden bg-white aspect-[4/3] mb-4"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-all">
                  <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Actions & Basic Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                  {product.category}
                </span>
                {product.sellerVerified && (
                  <span className="flex items-center gap-1 bg-success/10 text-success text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Exporter
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-neutral-dark leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <span className="font-bold text-lg">{product.rating}</span>
                  <span className="text-neutral-dark/40 text-sm">(12 ulasan)</span>
                </div>
                <div className="h-4 w-px bg-neutral-light"></div>
                <div className="text-sm font-medium text-neutral-dark/60">Terjual 500+ unit</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-neutral-light shadow-sm">
                <div className="text-sm text-neutral-dark/40 font-bold mb-1 uppercase tracking-wider">Estimasi Harga FOB</div>
                <div className="text-3xl font-black text-primary mb-2">{product.price}</div>
                <div className="flex items-center gap-2 text-xs text-neutral-dark/40">
                  <Info className="w-3 h-3" />
                  Harga dapat berubah tergantung volume pemesanan
                </div>
              </div>
            </div>

            {/* Seller Quick Card */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-light shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-neutral-light overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544787210-282aa302add2?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark">{product.sellerName}</h4>
                  <div className="flex items-center gap-1 text-xs text-neutral-dark/50">
                    <MapPin className="w-3 h-3" />
                    {product.location}
                  </div>
                </div>
              </div>
              <Link to="/exporter/1" className="text-primary text-sm font-bold hover:underline">Profil Lengkap</Link>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => setIsInquiryOpen(true)}
                className="btn-primary py-5 text-lg shadow-lg shadow-primary/20"
              >
                <MessageCircle className="w-5 h-5" />
                Kirim Inquiry
              </button>
              <button className="btn-outline border-secondary text-secondary py-5 text-lg hover:bg-secondary/5">
                <ShoppingBag className="w-5 h-5" />
                Tambah ke Wislist
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-light">
               <div className="flex items-start gap-4">
                 <div className="p-2 bg-neutral-light rounded-lg"><Truck className="w-5 h-5 text-primary" /></div>
                 <div>
                   <h5 className="text-sm font-bold">Kapabilitas</h5>
                   <p className="text-xs text-neutral-dark/50">MOQ: {product.moq}</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="p-2 bg-neutral-light rounded-lg"><Calendar className="w-5 h-5 text-primary" /></div>
                 <div>
                   <h5 className="text-sm font-bold">Lead Time</h5>
                   <p className="text-xs text-neutral-dark/50">14 - 21 Hari Kerja</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-20">
          <div className="flex border-b border-neutral-light gap-8 mb-8 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "pb-4 text-sm font-bold whitespace-nowrap border-b-2 transition-all",
                  activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-neutral-dark/40 hover:text-neutral-dark"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-neutral-light min-h-[400px]">
            {activeTab === 'spec' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center border-b border-neutral-light/50 pb-4">
                    <span className="text-neutral-dark/50 font-medium">{key}</span>
                    <span className="font-bold text-neutral-dark">{val}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'story' && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold mb-6 text-primary">Warisan Budaya {product.name}</h3>
                <p className="text-lg text-neutral-dark/70 leading-relaxed mb-8">
                  {product.story}
                </p>
                <img src={product.image} className="w-full rounded-[20px] aspect-video object-cover mb-8" />
                <p className="text-lg text-neutral-dark/70 leading-relaxed">
                  Dibalik setiap kemasan, terdapat keringat dan dedikasi para pengrajin lokal Aceh yang menjaga kualitas turun temurun. Dengan membeli produk ini, Anda turut berkontribusi pada kesejahteraan komunitas UMKM di daerah kami.
                </p>
              </div>
            )}
            {activeTab === 'review' && (
              <div className="text-center py-20 flex flex-col items-center">
                 <div className="p-4 bg-neutral-light rounded-full mb-4"><Star className="w-12 h-12 text-neutral-dark/20" /></div>
                 <h4 className="text-xl font-bold mb-2">Belum ada ulasan</h4>
                 <p className="text-neutral-dark/40">Jadilah buyer pertama yang memberikan testimoni untuk produk ini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        product={product} 
      />
    </div>
  );
}
