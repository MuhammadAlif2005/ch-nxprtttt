import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Globe className="text-secondary w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight text-white">AcehNexport</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Platform B2B terpercaya yang menghubungkan produk unggulan Aceh dengan pembeli dari seluruh dunia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-secondary transition-colors">Tentang Kami</Link></li>
              <li><Link to="/careers" className="hover:text-secondary transition-colors">Karir</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog & Artikel</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-6">Solusi</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/catalog" className="hover:text-secondary transition-colors">Katalog Produk</Link></li>
              <li><Link to="/verify" className="hover:text-secondary transition-colors">Sertifikasi & Verifikasi</Link></li>
              <li><Link to="/logistics" className="hover:text-secondary transition-colors">Logistik & Pengiriman</Link></li>
              <li><Link to="/escrow" className="hover:text-secondary transition-colors">Pembayaran Escrow</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Bantuan</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/help" className="hover:text-secondary transition-colors">Pusat Bantuan</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 AcehNexport. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-8 text-xs text-white/40 font-medium">
            <span>Indonesia (ID)</span>
            <span>USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
