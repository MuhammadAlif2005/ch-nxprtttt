import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, ArrowRight, User, Briefcase, Mail, Lock } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'buyer' | 'exporter'>('buyer');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      navigate('/dashboard');
    } else {
      if (role === 'exporter') {
        navigate('/register-wizard'); // Or just go straight to dashboard for demo
      } else {
        navigate('/catalog');
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Globe className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">AcehNexport</span>
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-neutral-dark mb-2">
              {isLogin ? 'Selamat Datang Kembali' : 'Mulai Ekspor/Impor'}
            </h2>
            <p className="text-neutral-dark/50">
              {isLogin 
                ? 'Silakan masuk ke akun Anda untuk melanjutkan.' 
                : 'Pilih tipe akun Anda dan lengkapi data untuk mendaftar.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setRole('buyer')}
                  className={cn(
                    "p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all",
                    role === 'buyer' ? "border-primary bg-primary/5 text-primary" : "border-neutral-light text-neutral-dark/40 hover:border-primary/50"
                  )}
                >
                  <User className="w-6 h-6" />
                  <span className="font-bold text-sm">Buyer Global</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('exporter')}
                  className={cn(
                    "p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all",
                    role === 'exporter' ? "border-primary bg-primary/5 text-primary" : "border-neutral-light text-neutral-dark/40 hover:border-primary/50"
                  )}
                >
                  <Briefcase className="w-6 h-6" />
                  <span className="font-bold text-sm">UMKM/Eksportir</span>
                </button>
              </div>
            )}

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-dark/40">Nama Lengkap / Perusahaan</label>
                <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark/30" />
                   <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-neutral-light/50 border border-neutral-light focus:bg-white focus:border-primary rounded-xl outline-none transition-all" required />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-dark/40">Email</label>
              <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark/30" />
                 <input type="email" placeholder="email@example.com" className="w-full pl-12 pr-4 py-4 bg-neutral-light/50 border border-neutral-light focus:bg-white focus:border-primary rounded-xl outline-none transition-all" required />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-dark/40">Password</label>
                {isLogin && <a href="#" className="text-xs font-bold text-primary hover:underline">Lupa Password?</a>}
              </div>
              <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark/30" />
                 <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-neutral-light/50 border border-neutral-light focus:bg-white focus:border-primary rounded-xl outline-none transition-all" required />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-4 text-lg">
              {isLogin ? 'Masuk' : 'Daftar Sekarang'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-neutral-dark/60">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="font-bold text-primary hover:underline"
            >
              {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
            </button>
          </p>
        </div>

        {/* Right Side - Image/Branding */}
        <div className="hidden md:block md:w-1/2 relative bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-neutral-dark z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544787210-282aa302add2?q=80&w=1000&auto=format&fit=crop" 
            alt="Farming" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between text-white">
             <div></div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <h3 className="text-4xl font-bold mb-4 leading-tight">
                 Membawa Kekayaan<br />Alam Aceh ke Pentas Dunia.
               </h3>
               <p className="text-white/80 text-lg max-w-sm">
                 Platform terpadu untuk eksportir lokal dan buyer internasional. Aman, transparan, dan terpercaya.
               </p>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
