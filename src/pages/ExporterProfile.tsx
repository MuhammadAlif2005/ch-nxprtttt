import { ShieldCheck, Star, MapPin, Package, Clock, Award } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { TOP_EXPORTERS, FEATURED_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function ExporterProfile() {
  const { id } = useParams();
  const exporter = TOP_EXPORTERS.find(e => e.id === id) || TOP_EXPORTERS[0];
  const products = FEATURED_PRODUCTS.filter(p => p.sellerName === exporter.name);

  // If no products match, fallback to some default ones
  const displayProducts = products.length > 0 ? products : [FEATURED_PRODUCTS[0], FEATURED_PRODUCTS[1]];

  return (
    <div className="bg-neutral-light min-h-screen pb-20">
      {/* Cover Image */}
      <div className="h-64 sm:h-80 w-full relative">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-light via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
        {/* Profile Header Card */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-neutral-light mb-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border-4 border-white shadow-xl overflow-hidden bg-neutral-light relative">
            <img src={exporter.image} alt={exporter.name} className="w-full h-full object-cover" />
            {exporter.verified && (
              <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
                 <ShieldCheck className="w-6 h-6 text-success" />
              </div>
            )}
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-neutral-dark mb-2">{exporter.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-dark/60">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {exporter.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Respon: {exporter.responseTime}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="btn-outline">Hubungi Kami</button>
                <button className="btn-primary">Kirim Pesan</button>
              </div>
            </div>
            
            <p className="text-neutral-dark/70 max-w-3xl leading-relaxed">
              {exporter.description}
            </p>
          </div>
        </div>

        {/* Stats & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-neutral-light shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-neutral-dark/40 mb-1">Rating</p>
              <div className="text-2xl font-black text-neutral-dark flex items-center gap-2">
                {exporter.rating} <Star className="w-5 h-5 fill-secondary text-secondary" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-neutral-light shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-neutral-dark/40 mb-1">Total Produk</p>
              <div className="text-2xl font-black text-neutral-dark">{exporter.productsCount}</div>
            </div>
            <Package className="w-8 h-8 text-primary/20" />
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-neutral-light shadow-sm">
            <p className="text-[10px] uppercase font-black tracking-widest text-neutral-dark/40 mb-3">Sertifikasi & Lisensi</p>
            <div className="flex flex-wrap gap-3">
               <span className="flex items-center gap-2 bg-neutral-light px-3 py-1.5 rounded-lg text-sm font-bold"><Award className="w-4 h-4 text-secondary" /> Halal Indonesia</span>
               <span className="flex items-center gap-2 bg-neutral-light px-3 py-1.5 rounded-lg text-sm font-bold"><Award className="w-4 h-4 text-green-600" /> EU Organic</span>
               <span className="flex items-center gap-2 bg-neutral-light px-3 py-1.5 rounded-lg text-sm font-bold"><Award className="w-4 h-4 text-blue-600" /> BPOM</span>
            </div>
          </div>
        </div>

        {/* Exporter Products */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Katalog Produk {exporter.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
