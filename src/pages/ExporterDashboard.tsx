import { LayoutDashboard, Package, MessageSquare, BarChart3, FileText, Settings, HelpCircle, Plus, ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function ExporterDashboard() {
  const [activeMenu, setActiveMenu] = useState('Overview');

  const sidebarItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Produk Saya', icon: Package },
    { name: 'Pesan & Inquiry', icon: MessageSquare, badge: 3 },
    { name: 'Statistik Penjualan', icon: BarChart3 },
    { name: 'Dokumen Ekspor', icon: FileText },
  ];

  const stats = [
    { label: 'Total Produk', value: '12', sub: 'Aktif: 8', icon: Package, color: 'bg-blue-500' },
    { label: 'Inquiry Baru', value: '3', sub: '+1 hari ini', icon: MessageSquare, color: 'bg-orange-500' },
    { label: 'Total Revenue', value: '$2,400', sub: 'Bulan ini', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Lead Time Avg', value: '14 hari', sub: 'Memuaskan', icon: Clock, color: 'bg-purple-500' },
  ];

  return (
    <div className="flex min-h-screen bg-neutral-light">
      {/* Dashboard Sidebar */}
      <aside className="w-72 bg-neutral-dark text-white hidden lg:flex flex-col">
        <div className="p-8 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Plus className="text-neutral-dark w-5 h-5 rotate-45" />
            </div>
            <span className="text-xl font-bold">AcehNexport</span>
          </Link>
        </div>

        <nav className="flex-grow p-4 mt-4 space-y-1">
          {sidebarItems.map(item => (
            <Link
              key={item.name}
              to={
                item.name === 'Pesan & Inquiry' ? '/chat' : 
                item.name === 'Overview' ? '/transactions' : '#'
              }
              onClick={() => setActiveMenu(item.name)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group",
                activeMenu === item.name ? "bg-primary text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Pengaturan</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Bantuan</span>
          </button>
        </div>

        <div className="p-6">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Plus className="text-secondary w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold">Premium Plan</h4>
                <p className="text-[10px] text-white/40">Sisa 12 hari</p>
              </div>
            </div>
            <button className="w-full bg-secondary text-neutral-dark py-2 rounded-lg text-xs font-bold hover:brightness-110 active:scale-95 transition-all">
              Upgrade Sekarang
            </button>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-grow p-4 md:p-10 lg:ml-0 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-1">Welcome back, Pak Rustam!</h2>
            <p className="text-neutral-dark/40 text-sm">Berikut ringkasan statistik bisnis Anda hari ini.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/add-product" className="btn-primary shadow-lg shadow-primary/20">
              <Plus className="w-5 h-5" />
              Tambah Produk Baru
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-light/50">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-2xl text-white shadow-lg", stat.color)}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-success text-xs font-bold bg-success/10 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  12%
                </div>
              </div>
              <p className="text-neutral-dark/40 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-neutral-dark mb-1">{stat.value}</h3>
              <p className="text-[10px] font-medium text-neutral-dark/30">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Inquiry */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-neutral-light overflow-hidden">
              <div className="p-6 border-b border-neutral-light flex justify-between items-center bg-white/50">
                <h3 className="font-bold">Inquiry Terbaru</h3>
                <button className="text-primary text-sm font-bold hover:underline">Lihat Semua</button>
              </div>
              <div className="divide-y divide-neutral-light">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-neutral-light/30 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-light overflow-hidden border border-neutral-light">
                         <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Buyer" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">John Mueller (Hamburg, Germany)</h4>
                        <p className="text-xs text-neutral-dark/40">Request: Biji Kopi Gayo (Semua-Washed) • 500kg</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold text-neutral-dark/30 uppercase mb-1">Terima 2j lalu</p>
                       <span className="bg-warning/10 text-warning text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Menunggu Respon</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Products Mini Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-neutral-light overflow-hidden">
              <div className="p-6 border-b border-neutral-light bg-white/50">
                <h3 className="font-bold">Performa Produk</h3>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-neutral-light/50 text-[10px] font-black uppercase tracking-widest text-neutral-dark/40">
                    <tr>
                      <th className="px-6 py-4">Produk</th>
                      <th className="px-6 py-4">Inquiry</th>
                      <th className="px-6 py-4">Views</th>
                      <th className="px-6 py-4">Revenue</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-light text-sm">
                    {[1, 2].map(i => (
                      <tr key={i} className="hover:bg-neutral-light/30 transition-colors">
                        <td className="px-6 py-4 font-bold">Biji Kopi Gayo Arabika</td>
                        <td className="px-6 py-4">12</td>
                        <td className="px-6 py-4">1.2k</td>
                        <td className="px-6 py-4">$1,200</td>
                        <td className="px-6 py-4">
                          <span className="bg-success text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Aktif</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-light relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><BarChart3 className="w-32 h-32" /></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Export Assistant</h3>
              <p className="text-neutral-dark/50 text-sm mb-6 relative z-10">Gunakan panduan HS Code dan regulasi negara tujuan untuk mempermudah proses ekspor Anda.</p>
              <button className="w-full btn-outline relative z-10">Buka Assistant</button>
            </div>

            <div className="bg-gradient-to-br from-secondary to-orange-400 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Tips Hari Ini</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"Pastikan sertifikasi organik Anda tetap aktif untuk menjaga kepercayaan buyer dari pasar Uni Eropa."</p>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest bg-white/20 p-3 rounded-xl border border-white/10">
                <span>Insight Pasar</span>
                <Clock className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
