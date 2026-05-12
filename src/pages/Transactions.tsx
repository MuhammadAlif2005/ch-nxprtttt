import { Check, Truck, HandCoins, AlertCircle, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

const TRANSACTION = {
  id: "TRX-882190-DE",
  date: "12 Oct 2026",
  status: "processing", // proposed, pending-payment, escrow, processing, shipped, completed
  buyer: { name: "John Mueller", company: "Hamburg Organics", location: "Hamburg, Germany" },
  seller: { name: "Pak Rustam", company: "Gayo Highland Coffee" },
  product: { name: "Biji Kopi Gayo Arabika Semi-Washed", qty: "1 Ton", price: 12000, incoterms: "FOB Belawan Port" },
  escrowStatus: "held",
};

export default function Transactions() {
  // We'll show a single detail view for the demo, but usually this would have a list view first
  const [view, setView] = useState<'list' | 'detail'>('detail');

  const steps = [
    { id: 'proposed', title: 'Order Dibuat' },
    { id: 'escrow', title: 'Pembayaran Escrow' },
    { id: 'processing', title: 'Diproses Seller' },
    { id: 'shipped', title: 'Dikirim' },
    { id: 'completed', title: 'Selesai' }
  ];

  const currentStepIndex = 2; // "processing"

  return (
    <div className="min-h-screen bg-neutral-light pb-20 pt-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
           <h1 className="text-3xl font-black">Detail Transaksi</h1>
           <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{TRANSACTION.id}</span>
        </div>

        {/* Progress Stepper */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-light mb-8 overflow-hidden">
          <div className="relative">
            <div className="absolute top-5 left-8 right-8 h-1 bg-neutral-light z-0">
               <div className="h-full bg-success transition-all duration-500" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}></div>
            </div>
            <div className="flex justify-between relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 w-32">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors",
                    idx < currentStepIndex ? "bg-success text-white" :
                    idx === currentStepIndex ? "bg-primary text-white scale-110" :
                    "bg-neutral-light text-neutral-dark/20"
                  )}>
                    {idx < currentStepIndex ? <Check className="w-5 h-5" /> : 
                     idx === currentStepIndex ? <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span> : 
                     <span className="w-2 h-2 bg-neutral-dark/20 rounded-full"></span>}
                  </div>
                  <span className={cn(
                    "text-xs font-bold text-center leading-tight",
                    idx <= currentStepIndex ? "text-neutral-dark" : "text-neutral-dark/40"
                  )}>{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-light">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Package className="text-primary" /> Rincian Pesanan</h3>
               <div className="flex items-start gap-4 mb-6 p-4 bg-neutral-light/50 rounded-2xl">
                 <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <h4 className="font-bold text-neutral-dark mb-1">{TRANSACTION.product.name}</h4>
                   <p className="text-sm text-neutral-dark/60 mb-2">Incoterms: <span className="font-bold">{TRANSACTION.product.incoterms}</span></p>
                   <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-neutral-light text-sm font-bold shadow-sm">
                      Kuantitas: {TRANSACTION.product.qty}
                   </div>
                 </div>
                 <div className="ml-auto text-right">
                   <p className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest mb-1">Total</p>
                   <p className="text-2xl font-black text-primary">$12,000</p>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-neutral-dark/40 mb-1">Pembeli</p>
                   <p className="font-bold">{TRANSACTION.buyer.name}</p>
                   <p className="text-sm text-neutral-dark/60">{TRANSACTION.buyer.company}</p>
                   <p className="text-sm text-neutral-dark/50">{TRANSACTION.buyer.location}</p>
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-neutral-dark/40 mb-1">Penjual</p>
                   <p className="font-bold">{TRANSACTION.seller.name}</p>
                   <p className="text-sm text-neutral-dark/60">{TRANSACTION.seller.company}</p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-light">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2"><FileText className="text-primary" /> Dokumen Ekspor</h3>
                 <button className="text-sm font-bold text-primary hover:underline">Download Semua (ZIP)</button>
               </div>
               <div className="space-y-3">
                 {['Commercial Invoice', 'Packing List', 'Certificate of Origin (Pending)'].map((doc, idx) => (
                   <div key={idx} className="flex items-center justify-between p-4 border border-neutral-light rounded-xl hover:border-primary/50 transition-colors">
                     <div className="flex items-center gap-3">
                       <FileText className={cn("w-5 h-5", idx === 2 ? "text-warning" : "text-success")} />
                       <span className="font-bold text-sm text-neutral-dark">{doc}</span>
                     </div>
                     {idx < 2 ? (
                        <button className="text-xs font-bold text-primary">Lihat PDF</button>
                     ) : (
                        <span className="text-[10px] font-bold bg-warning/10 text-warning px-2 py-1 rounded-md uppercase tracking-widest">Generate</span>
                     )}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
             <div className="bg-gradient-to-br from-neutral-dark flex flex-col to-primary p-6 rounded-3xl text-white shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <HandCoins className="w-5 h-5 text-secondary" />
                  <h3 className="font-bold text-lg">Status Escrow</h3>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 mb-4 backdrop-blur-sm border border-white/10">
                   <p className="text-[10px] uppercase tracking-widest font-black text-white/50 mb-1">Dana Ditahan Oleh Sistem</p>
                   <p className="text-3xl font-black text-white mb-2">$12,000</p>
                   <div className="flex items-center gap-2 text-xs text-white/80">
                     <CheckCircle2 className="w-4 h-4 text-success" />
                     <span>Pembayaran telah diverifikasi</span>
                   </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Dana akan dilepaskan ke penjual secara otomatis 14 hari setelah dokumen pengiriman diunggah, atau jika pembeli mengonfirmasi penerimaan barang.
                </p>
             </div>

             <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-light">
                <h3 className="font-bold mb-4">Tindakan Selanjutnya</h3>
                <button className="w-full btn-primary mb-3 shadow-md shadow-primary/20">
                   Update Status Pengiriman
                </button>
                <button className="w-full btn-outline border-neutral-light hover:bg-neutral-light">
                   Buat Dokumen Tersisa
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
