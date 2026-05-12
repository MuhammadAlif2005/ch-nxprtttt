import { ArrowRight, ShieldCheck, Globe2, Truck, Users, Coffee, Sparkles, Leaf, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FEATURED_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function Home() {
  const categories = [
    { name: 'Kopi & Teh', icon: Coffee, color: 'bg-orange-50 text-orange-600' },
    { name: 'Rempah', icon: Sparkles, color: 'bg-yellow-50 text-yellow-600' },
    { name: 'Hasil Bumi', icon: Leaf, color: 'bg-green-50 text-green-600' },
    { name: 'Kerajinan', icon: Shirt, color: 'bg-blue-50 text-blue-600' },
  ];

  const trustSignals = [
    { count: '50+', label: 'Eksportir Terverifikasi' },
    { count: '180+', label: 'Negara Tujuan' },
    { count: '10+', label: 'Kategori Produk' },
    { count: '100%', label: 'Escrow Protected' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-20">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Aceh Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Ekspor Produk Unggulan <span className="text-secondary">Aceh ke Dunia</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Platform B2B terintegrasi untuk menghubungkan UMKM Aceh dengan buyer global melalui ekosistem digital yang aman, transparan, dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register-exporter" className="btn-secondary py-4 px-8 text-lg hover:scale-105">
                  Mulai Ekspor Sekarang
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
                <Link to="/catalog" className="btn-outline border-white text-white hover:bg-white/10 py-4 px-8 text-lg">
                  Cari Produk Unggulan
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-neutral-light relative z-20 -mt-10 mx-4 sm:mx-10 rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className={cn("flex flex-col items-center", idx !== trustSignals.length - 1 && "lg:border-r border-neutral-light")}>
                <span className="text-3xl font-bold text-primary mb-1">{signal.count}</span>
                <span className="text-sm text-neutral-dark/60 font-medium">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-neutral-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kategori Unggulan</h2>
            <p className="text-neutral-dark/60 max-w-xl mx-auto">
              Jelajahi berbagai komoditas terbaik dari Aceh yang telah memenuhi standar internasional.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-light flex flex-col items-center text-center transition-all hover:shadow-md"
              >
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", cat.color)}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
                <Link to={`/catalog?cat=${cat.name}`} className="text-primary text-sm font-medium hover:underline">
                  Lihat Produk
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                Katalog Pilihan
              </div>
              <h2 className="text-4xl font-bold">Produk Baru & Populer</h2>
            </div>
            <Link to="/catalog" className="text-primary font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
              Lihat Semua Produk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-16">Cara Kerja AcehNexport</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Daftar & Listing', desc: 'UMKM mendaftarkan usaha dan mengunggah katalog produk yang akan diekspor.', icon: ShieldCheck },
              { step: '02', title: 'Temukan Buyer', desc: 'Smart algorithms menghubungkan produk Anda dengan pembeli potensial dari seluruh dunia.', icon: Globe2 },
              { step: '03', title: 'Kirim & Transaksi', desc: 'Kelola dokumen ekspor secara otomatis dan terima pembayaran aman via escrow.', icon: Truck },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20 relative">
                  <span className="absolute -top-4 -right-4 text-secondary font-black text-2xl italic">{item.step}</span>
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <Link to="/register-buyer" className="btn-secondary py-4 px-12 text-lg">
              Daftar Sebagai Buyer Global
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Kisah Sukses Eksportir Aceh</h2>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-light/50 relative">
                  <div className="text-6xl text-secondary/20 absolute top-4 left-4 font-serif">“</div>
                  <p className="relative z-10 text-lg italic text-neutral-dark/80 mb-6 font-medium">
                    "AcehNexport sangat membantu UMKM kami dalam pengurusan dokumen ekspor yang awalnya rumit menjadi sangat mudah. Sekarang kopi kami sudah sampai ke Jepang."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="User" />
                    </div>
                    <div>
                      <h4 className="font-bold">Pak Rustam</h4>
                      <p className="text-xs text-neutral-dark/50">Pemilik Gayo Highland Coffee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-lg mt-8" alt="Coffee farming" />
               <img src="https://images.unsplash.com/photo-1544787210-282aa302add2?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Packing products" />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-primary to-primary-dark rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Siap Mendunia Bersama AcehNexport?</h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
            Bergabunglah dengan ratusan eksportir Aceh dan ribuan buyer global dalam satu platform terintegrasi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
            <button className="btn-secondary py-4 px-10 text-lg">Gabung Sekarang</button>
            <button className="btn-outline border-white text-white hover:bg-white/10 py-4 px-10 text-lg">Hubungi Tim Kami</button>
          </div>
        </div>
      </section>
    </div>
  );
}
