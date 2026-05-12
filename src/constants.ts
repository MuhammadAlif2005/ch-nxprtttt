import { Product, Exporter } from './types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Biji Kopi Gayo Arabika Semi-Washed',
    category: 'Kopi & Teh',
    price: '$8.50 - $12.00 / kg',
    moq: '500 kg',
    rating: 4.9,
    sellerName: 'Gayo Highland Coffee',
    sellerVerified: true,
    location: 'Takengon, Aceh Tengah',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop',
    description: 'Kopi Arabika Gayo yang diproduksi secara teliti dengan proses semi-washed untuk menghasilkan cita rasa unik dengan body yang kuat dan tingkat keasaman sedang.',
    specifications: {
      'Moisture': '12%',
      'Grade': 'Grade 1',
      'Altitude': '1500 masl',
      'Defect': 'Max 11%',
    },
    story: 'Kopi ini dipetik langsung oleh petani lokal di dataran tinggi Gayo, menjamin perputaran ekonomi yang adil bagi komunitas petani kopi Aceh.'
  },
  {
    id: 'p2',
    name: 'Minyak Nilam Aceh Murni (Patchouli Oil)',
    category: 'Rempah-rempah',
    price: '$45.00 - $60.00 / liter',
    moq: '10 liter',
    rating: 4.8,
    sellerName: 'Aceh Essential Oils Co.',
    sellerVerified: true,
    location: 'Aceh Jaya',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
    description: 'Minyak Nilam Aceh dikenal sebagai yang terbaik di dunia karena kadar Patchouli Alcohol (PA) yang tinggi, digunakan oleh industri parfum global.',
    specifications: {
      'PA Content': 'Min 30%',
      'Color': 'Yellow to Golden Brown',
      'Free from': 'Contaminants & Heavy Metals',
    },
    story: 'Minyak nilam kami diekstraksi menggunakan metode distilasi uap tradisional yang menjaga kemurnian aroma khas tanah Aceh.'
  },
  {
    id: 'p3',
    name: 'Emping Melinjo Super Tipis',
    category: 'Produk Olahan',
    price: '$4.00 - $6.50 / pack',
    moq: '100 packs',
    rating: 4.7,
    sellerName: 'Pidie Snack Mandiri',
    sellerVerified: true,
    location: 'Pidie',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
    description: 'Kerupuk emping melinjo tradisional dari Pidie, dibuat sangat tipis dengan rasa gurih yang autentik.',
    specifications: {
      'Net Weight': '250g',
      'Shelf Life': '12 Months',
      'Ingredients': 'Melinjo, Salt, Veggie Oil',
    },
    story: 'Warisan kuliner dari Pidie yang dikerjakan secara berkelompok oleh ibu-ibu UMKM di desa.'
  },
  {
    id: 'p4',
    name: 'Kain Songket Aceh Motif Pucuk Rebung',
    category: 'Kerajinan & Tekstil',
    price: '$80.00 - $150.00 / piece',
    moq: '1 piece',
    rating: 5.0,
    sellerName: 'Rencong Tekstil',
    sellerVerified: false,
    location: 'Banda Aceh',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    description: 'Kain tenun songket tradisional Aceh dengan benang emas asli dan motif Pucuk Rebung yang melambangkan kekuatan kehidupan.',
    specifications: {
      'Material': 'Silk & Gold Thread',
      'Size': '100x200cm',
      'Technique': 'Handloom weaving',
    },
    story: 'Setiap helai benang ditenun dengan penuh kesabaran untuk melestarikan budaya luhur Serambi Mekkah.'
  }
];

export const TOP_EXPORTERS: Exporter[] = [
  {
    id: 'e1',
    name: 'Gayo Highland Coffee',
    location: 'Takengon, Aceh Tengah',
    verified: true,
    rating: 4.9,
    productsCount: 12,
    responseTime: '< 2 jam',
    description: 'Eksportir kopi spesialis Gayo Arabika sejak 2010.',
    image: 'https://images.unsplash.com/photo-1442111556612-fd99395f190e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'e2',
    name: 'Aceh Essential Oils Co.',
    location: 'Aceh Jaya',
    verified: true,
    rating: 4.8,
    productsCount: 5,
    responseTime: '< 4 jam',
    description: 'Penyedia minyak atsiri mentah berkualitas tinggi untuk pasar Eropa.',
    image: 'https://images.unsplash.com/photo-1517720359744-14227368021b?q=80&w=400&auto=format&fit=crop'
  }
];
