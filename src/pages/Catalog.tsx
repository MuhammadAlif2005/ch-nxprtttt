import { Search, Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function Catalog() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { name: 'Kategori', options: ['Semua', 'Kopi & Teh', 'Rempah', 'Hasil Bumi', 'Kerajinan'] },
    { name: 'Negara Asal', options: ['Semua', 'Aceh Tengah', 'Aceh Jaya', 'Banda Aceh', 'Pidie'] },
    { name: 'Sertifikasi', options: ['Semua', 'Halal', 'Organik', 'Fair Trade', 'BPOM'] },
  ];

  return (
    <div className="bg-neutral-light min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Katalog Produk Unggulan</h1>
            <p className="text-neutral-dark/50">Menampilkan {FEATURED_PRODUCTS.length} produk dari seluruh Aceh</p>
          </div>
          
          <div className="flex w-full md:w-auto items-center gap-3">
            <div className="relative flex-grow md:w-80">
              <input 
                type="text"
                placeholder="Cari kopi, rempah, atau kerajinan..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-light rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-dark/40 w-5 h-5" />
            </div>
            <button className="md:hidden p-3 bg-white rounded-xl border border-neutral-light shadow-sm">
              <Filter className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 space-y-8 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-light">
              <div className="flex items-center gap-2 font-bold mb-6 text-primary">
                <Filter className="w-4 h-4" />
                Filter Produk
              </div>
              
              <div className="space-y-8">
                {filters.map((filter) => (
                  <div key={filter.name}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-dark/40 mb-4">{filter.name}</h4>
                    <div className="space-y-2">
                      {filter.options.map((opt) => (
                        <label key={opt} className="flex items-center gap-3 group cursor-pointer">
                          <div className="w-4 h-4 border-2 border-neutral-light rounded transition-colors group-hover:border-primary peer-checked:bg-primary"></div>
                          <span className="text-sm text-neutral-dark/70 group-hover:text-primary transition-colors">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-dark/40 mb-4">Urutkan Berdasarkan</h4>
                  <div className="relative">
                    <select className="w-full p-2 bg-neutral-light/50 border border-neutral-light rounded-lg text-sm appearance-none outline-none focus:border-primary cursor-pointer">
                      <option>Relevansi</option>
                      <option>Terbaru</option>
                      <option>Harga: Rendah ke Tinggi</option>
                      <option>Harga: Tinggi ke Rendah</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-dark/40 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-10 btn-outline border-neutral-light hover:border-primary py-2 text-sm">
                Reset Semua Filter
              </button>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <p className="text-xs font-semibold text-primary/60 mb-2 uppercase tracking-widest">Premium Benefit</p>
              <h4 className="font-bold text-primary mb-3">Verified Sellers Only</h4>
              <p className="text-xs text-neutral-dark/60 leading-relaxed mb-4">Tampilkan hanya produk dari eksportir yang sudah melewati tahap verifikasi dokumen legal.</p>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-5 bg-neutral-light rounded-full relative transition-colors group-hover:bg-primary/20">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
                <span className="text-xs font-bold text-primary">Aktifkan</span>
              </div>
            </div>
          </aside>

          {/* Main List */}
          <main className="flex-grow">
            {/* Toolbar */}
            <div className="bg-white p-3 rounded-xl mb-6 shadow-sm border border-neutral-light flex justify-between items-center">
              <div className="px-3 text-sm text-neutral-dark/50 font-medium">
                Menampilkan <span className="text-neutral-dark font-bold">1 - 4</span> dari total 4
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn("p-2 rounded-lg transition-colors", viewMode === 'grid' ? "bg-primary text-white" : "text-neutral-dark/40 hover:bg-neutral-light")}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn("p-2 rounded-lg transition-colors", viewMode === 'list' ? "bg-primary text-white" : "text-neutral-dark/40 hover:bg-neutral-light")}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className={cn(
              "grid gap-6",
              viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
            )}>
              {FEATURED_PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} className={viewMode === 'list' ? "flex md:flex-row !aspect-auto" : ""} />
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <button key={i} className={cn("w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all", i === 1 ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white text-neutral-dark hover:bg-neutral-light border border-neutral-light")}>
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
