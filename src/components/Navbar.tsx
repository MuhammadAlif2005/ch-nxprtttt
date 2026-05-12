import { Link, useLocation } from 'react-router-dom';
import { Globe, Search, Bell, MessageSquare, User, Menu, X, Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/catalog' },
    { name: 'Eksportir', path: '/exporters' },
    { name: 'Bantuan', path: '/help' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Globe className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">AcehNexport</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-neutral-dark"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons & Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button className="p-2 text-neutral-dark hover:bg-neutral-light rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-dark hover:bg-neutral-light rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-dark hover:bg-neutral-light rounded-full transition-colors relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
            </button>
            <div className="h-6 w-px bg-neutral-light/50 mx-1"></div>
            <Link to="/dashboard" className="btn-primary py-2 px-4 text-sm">
              <User className="w-4 h-4" />
              Profil Saya
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b fixed inset-x-0 top-20 z-50 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-base font-medium text-neutral-dark hover:bg-neutral-light rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-light mt-4 flex flex-col gap-3">
              <Link to="/dashboard" className="btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard Eksportir
              </Link>
              <Link to="/auth" className="btn-outline flex w-full outline-secondary text-secondary border-secondary justify-center text-center">
                Login / Daftar
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Tab Bar (PRD constraint) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-neutral-light flex items-center justify-around px-2 z-[60] shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <Link to="/" className={cn("flex flex-col items-center gap-1", location.pathname === '/' ? "text-primary" : "text-neutral-dark/40")}>
          <Globe className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </Link>
        <Link to="/catalog" className={cn("flex flex-col items-center gap-1", location.pathname === '/catalog' ? "text-primary" : "text-neutral-dark/40")}>
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Find</span>
        </Link>
        <Link to="/add-product" className="relative -mt-8 flex flex-col items-center">
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
            <Plus className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-bold text-primary mt-1 uppercase tracking-widest">Post</span>
        </Link>
        <Link to="/dashboard" className={cn("flex flex-col items-center gap-1", location.pathname === '/dashboard' ? "text-primary" : "text-neutral-dark/40")}>
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Chat</span>
        </Link>
        <Link to="/dashboard" className={cn("flex flex-col items-center gap-1", location.pathname === '/profile' ? "text-primary" : "text-neutral-dark/40")}>
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Me</span>
        </Link>
      </div>
    </nav>
  );
}
