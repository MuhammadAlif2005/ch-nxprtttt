import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, Package, Sparkles, Image as ImageIcon, DollarSign, BookOpen, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const STEPS = [
  { id: 1, title: 'Informasi Dasar', icon: BookOpen },
  { id: 2, title: 'Spesifikasi', icon: Package },
  { id: 3, title: 'Media & Aset', icon: ImageIcon },
  { id: 4, title: 'Harga & Kapasitas', icon: DollarSign },
  { id: 5, title: 'Cerita Produk', icon: Sparkles },
];

export default function AddProductWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
    else {
      // Success logic
      alert('Produk berhasil diajukan untuk verifikasi!');
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-neutral-light min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-neutral-dark mb-4">Tambah Produk Baru</h1>
          <p className="text-neutral-dark/40">Isi data produk Anda dengan lengkap untuk menarik minat buyer global.</p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-light/50 -translate-y-1/2 z-0"></div>
          {STEPS.map(step => (
            <div key={step.id} className="relative z-10 flex flex-col items-center group">
              <div className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border-2",
                currentStep > step.id ? "bg-success border-success text-white" :
                currentStep === step.id ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-110" :
                "bg-white border-neutral-light text-neutral-dark/20"
              )}>
                {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
              </div>
              <span className={cn(
                "hidden md:block absolute -bottom-8 text-[10px] font-black uppercase tracking-widest whitespace-nowrap",
                currentStep === step.id ? "text-primary" : "text-neutral-dark/30"
              )}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-neutral-dark/5 border border-neutral-light relative overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <BookOpen className="text-primary w-5 h-5" />
                    Informasi Dasar Produk
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-dark/60 flex items-center gap-1">
                        Nama Produk
                        <span className="text-error">*</span>
                      </label>
                      <input type="text" placeholder="Contoh: Kopi Gayo Luwak Selection" className="w-full p-4 rounded-xl border border-neutral-light focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-dark/60">Kategori</label>
                        <select className="w-full p-4 rounded-xl border border-neutral-light outline-none">
                          <option>Pilih Kategori</option>
                          <option>Kopi & Teh</option>
                          <option>Rempah-rempah</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-dark/60">HS Code (Opsional)</label>
                        <input type="text" placeholder="0901.11.00" className="w-full p-4 rounded-xl border border-neutral-light outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-dark/60">Deskripsi Singkat</label>
                      <textarea rows={4} placeholder="Jelaskan keunggulan produk Anda..." className="w-full p-4 rounded-xl border border-neutral-light outline-none"></textarea>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Package className="text-primary w-5 h-5" />
                    Spesifikasi Teknis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {['Grade', 'Moisture', 'Altitude', 'Process'].map(field => (
                       <div key={field} className="space-y-2">
                         <label className="text-sm font-bold text-neutral-dark/60">{field}</label>
                         <input type="text" placeholder={`Masukkan ${field}`} className="w-full p-4 rounded-xl border border-neutral-light outline-none" />
                       </div>
                     ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <ImageIcon className="text-primary w-5 h-5" />
                    Media & Galeri Foto
                  </h3>
                  <div className="border-4 border-dashed border-neutral-light rounded-[32px] p-12 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all cursor-pointer">
                    <div className="w-16 h-16 bg-neutral-light rounded-2xl flex items-center justify-center mb-6 text-neutral-dark/20 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Klik atau Seret Foto Produk</h4>
                    <p className="text-sm text-neutral-dark/40 max-w-xs">Minimal 3 foto produk berkualitas tinggi. Rekomendasi 800x600px (Max 5MB per file).</p>
                  </div>
                </div>
              )}

              {currentStep > 3 && (
                <div className="text-center py-20">
                   <div className="p-4 bg-primary/5 rounded-full inline-block mb-4"><AlertCircle className="w-12 h-12 text-primary" /></div>
                   <h4 className="text-xl font-bold mb-2">Halaman Sedang Dalam Pengembangan</h4>
                   <p className="text-neutral-dark/40">Bagian ini akan berisi input untuk Harga (Step 4) dan Cerita Produk (Step 5).</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <footer className="mt-12 pt-8 border-t border-neutral-light flex justify-between items-center">
            <button 
              onClick={handleBack}
              disabled={currentStep === 1}
              className={cn("btn-outline py-3 px-8", currentStep === 1 && "opacity-0 cursor-default")}
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
            <div className="flex gap-4">
               <button className="btn-outline border-transparent hover:bg-neutral-light text-neutral-dark/40">Simpan Draft</button>
               <button onClick={handleNext} className="btn-primary py-3 px-10 shadow-lg shadow-primary/20">
                 {currentStep === 5 ? 'Ajukan Verifikasi' : 'Tahap Berikutnya'}
                 {currentStep < 5 && <ArrowRight className="w-4 h-4" />}
               </button>
            </div>
          </footer>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-6 text-neutral-dark/40 text-xs font-bold uppercase tracking-widest">
           <div className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Auto-save aktif</div>
           <div className="h-1 w-1 bg-neutral-dark/10 rounded-full"></div>
           <div className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Enkripsi SSL Aman</div>
        </div>
      </div>
    </div>
  );
}
