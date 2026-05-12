import { useState } from 'react';
import { Search, MoreVertical, Paperclip, Send, FileText, IndianRupee } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const MOCK_CHATS = [
  { id: 1, name: 'John Mueller', company: 'Hamburg Organics', time: '10:42 AM', unread: 2, lastMsg: 'Bisa minta penawaran harga untuk 1 ton Gayo?', avatar: 'https://i.pravatar.cc/100?img=11' },
  { id: 2, name: 'Sarah Chen', company: 'Singapore Trade Hub', time: 'Yesterday', unread: 0, lastMsg: 'Dokumen CoA sudah saya terima, thanks.', avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: 3, name: 'Ahmed Al-Farsi', company: 'Dubai Spices', time: 'Mon', unread: 0, lastMsg: 'Pesanan sudah sampai, kondisinya sangat baik.', avatar: 'https://i.pravatar.cc/100?img=8' },
];

const MOCK_MESSAGES = [
  { id: 1, sender: 'buyer', text: 'Halo Pak Rustam, saya tertarik dengan Biji Kopi Gayo Arabika. Bisa kirimkan detail harganya untuk pemesanan 1 ton ke Hamburg?', time: '10:30 AM' },
  { id: 2, sender: 'me', text: 'Selamat pagi Pak John. Tentu, untuk kapasitas 1 ton kami bisa memberikan harga khusus. Berikut saya lampirkan dokumen penawarannya.', time: '10:35 AM' },
  { id: 3, type: 'attachment', name: 'Quotation_Hamburg_Organics.pdf', size: '1.2 MB', time: '10:36 AM' },
  { id: 4, sender: 'buyer', text: 'Baik, saya pelajari dulu penawarannya. Apakah harga tersebut sudah termasuk pengiriman (CIF)?', time: '10:42 AM' },
];

export default function Chat() {
  const [activeChat, setActiveChat] = useState(MOCK_CHATS[0]);
  const [msgInput, setMsgInput] = useState('');

  return (
    <div className="flex h-screen bg-neutral-light overflow-hidden pt-20">
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-80 lg:w-96 bg-white border-r border-neutral-light flex flex-col shrink-0">
        <div className="p-4 border-b border-neutral-light">
          <h2 className="text-xl font-bold mb-4">Pesan & Negosiasi</h2>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-dark/40" />
             <input type="text" placeholder="Cari pesan atau kontak..." className="w-full pl-10 pr-4 py-2 bg-neutral-light rounded-xl outline-none text-sm focus:ring-2 focus:ring-primary/20" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto divide-y divide-neutral-light">
          {MOCK_CHATS.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={cn(
                "p-4 flex items-start gap-4 cursor-pointer transition-colors hover:bg-neutral-light/50",
                activeChat.id === chat.id ? "bg-primary/5" : ""
              )}
            >
              <img src={chat.avatar} className="w-12 h-12 rounded-full object-cover bg-neutral-light" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                  <span className="text-[10px] text-neutral-dark/40 font-bold">{chat.time}</span>
                </div>
                <p className="text-[10px] uppercase font-black text-primary/60 tracking-widest mb-1 truncate">{chat.company}</p>
                <div className="flex items-center justify-between gap-2">
                  <p className={cn("text-xs truncate", chat.unread > 0 ? "font-bold text-neutral-dark" : "text-neutral-dark/50")}>
                    {chat.lastMsg}
                  </p>
                  {chat.unread > 0 && <span className="bg-accent text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shrink-0">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-neutral-light/30">
        {/* Chat Header */}
        <div className="h-20 bg-white border-b border-neutral-light px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
             <img src={activeChat.avatar} className="w-10 h-10 rounded-full object-cover" />
             <div>
               <h3 className="font-bold text-neutral-dark">{activeChat.name}</h3>
               <p className="text-xs text-success font-medium">Online</p>
             </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-outline py-2 px-4 shadow-sm text-sm border-neutral-light bg-neutral-light/50 hover:bg-white text-neutral-dark hover:border-primary">
              <FileText className="w-4 h-4" /> Buat Penawaran
            </button>
            <button className="p-2 text-neutral-dark/40 hover:text-neutral-dark transition-colors"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
           <div className="text-center">
             <span className="bg-neutral-light border border-neutral-light/50 text-[10px] font-bold text-neutral-dark/40 px-3 py-1 rounded-full">Today</span>
           </div>

           {MOCK_MESSAGES.map((msg, idx) => {
             if (msg.type === 'attachment') {
               return (
                 <div key={idx} className="flex justify-end mb-4">
                    <div className="bg-white border text-left p-4 rounded-2xl rounded-tr-sm border-neutral-light shadow-sm w-64">
                       <FileText className="w-8 h-8 text-primary mb-2" />
                       <h5 className="font-bold text-sm truncate">{msg.name}</h5>
                       <p className="text-xs text-neutral-dark/40 mb-3">{msg.size}</p>
                       <button className="w-full text-xs font-bold text-primary hover:underline text-left">Unduh PDF</button>
                    </div>
                 </div>
               )
             }

             const isMe = msg.sender === 'me';
             return (
               <div key={idx} className={cn("flex", isMe ? "justify-end" : "justify-start")}>
                 <div className={cn(
                   "max-w-[70%] p-4 rounded-2xl shadow-sm text-sm",
                   isMe ? "bg-primary text-white rounded-tr-sm" : "bg-white border border-neutral-light rounded-tl-sm text-neutral-dark"
                 )}>
                   <p className="leading-relaxed">{msg.text}</p>
                   <p className={cn("text-[10px] font-bold mt-2 text-right opacity-60")}>{msg.time}</p>
                 </div>
               </div>
             )
           })}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-neutral-light shrink-0">
           <div className="flex items-end gap-3 max-w-4xl mx-auto">
             <button className="p-3 text-neutral-dark/40 hover:text-primary transition-colors bg-neutral-light rounded-xl shrink-0">
               <Paperclip className="w-5 h-5" />
             </button>
             <div className="flex-1 bg-neutral-light rounded-2xl border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-all overflow-hidden">
               <textarea 
                 value={msgInput}
                 onChange={(e) => setMsgInput(e.target.value)}
                 placeholder="Ketik balasan Anda di sini..."
                 className="w-full max-h-32 min-h-[50px] p-4 bg-transparent outline-none resize-none text-sm"
                 rows={1}
               ></textarea>
             </div>
             <button className="p-3 btn-primary rounded-xl shrink-0 shadow-lg shadow-primary/20">
               <Send className="w-5 h-5" />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
