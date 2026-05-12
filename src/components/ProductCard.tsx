import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn("glass-card overflow-hidden group border-neutral-light/50", className)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.sellerVerified && (
            <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm text-primary flex items-center justify-center" title="Verified Seller">
              <ShieldCheck className="w-5 h-5 fill-primary/10" />
            </div>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm text-xs font-bold text-primary">
            {product.category}
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs text-neutral-dark/60 mb-3">
          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
          <span>{product.sellerName}</span>
          <span className="mx-1">•</span>
          <div className="flex items-center text-secondary">
            <Star className="w-3 h-3 fill-secondary" />
            <span className="ml-0.5 font-bold">{product.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-0.5 mb-4">
          <span className="text-sm font-bold text-primary">{product.price}</span>
          <span className="text-[10px] uppercase tracking-wider text-neutral-dark/40 font-semibold">MOQ: {product.moq}</span>
        </div>
        
        <Link 
          to={`/product/${product.id}`}
          className="w-full btn-outline py-2 text-sm border-neutral-light hover:border-primary text-neutral-dark hover:text-primary"
        >
          Lihat Detail
        </Link>
      </div>
    </motion.div>
  );
}
