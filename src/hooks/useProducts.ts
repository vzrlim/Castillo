import { useState, useMemo } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
  badgeColor?: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  inStock: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Velvet Matte Lipstick",
    category: "Lips",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    rating: 4.5,
    badgeColor: "ballet-rose",
    description: "A luxurious matte lipstick that delivers full coverage with a velvety finish. Infused with nourishing oils for comfortable all-day wear.",
    ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter", "Natural Waxes"],
    benefits: ["Long-lasting wear", "Hydrating formula", "Full coverage", "Comfortable feel"],
    howToUse: "Apply directly to clean, dry lips. Start from the center and work outward for even coverage.",
    inStock: true
  },
  {
    id: 2,
    name: "Enchanted Eyeshadow Palette",
    category: "Eyes",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    badge: "New",
    rating: 5.0,
    badgeColor: "ballet-lavender",
    description: "A curated collection of 12 highly pigmented eyeshadows in matte and shimmer finishes, inspired by ballet's ethereal beauty.",
    ingredients: ["Mica", "Talc", "Vitamin E", "Silk Powder"],
    benefits: ["Highly pigmented", "Blendable formula", "Long-lasting", "Crease-resistant"],
    howToUse: "Use eyeshadow brushes to apply and blend colors. Build intensity gradually for desired look.",
    inStock: true
  },
  {
    id: 3,
    name: "Radiant Glow Highlighter",
    category: "Face",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1597248881519-db089e374b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.0,
    description: "A luminous highlighter that creates a natural, lit-from-within glow. Perfect for adding dimension to your complexion.",
    ingredients: ["Pearl Powder", "Vitamin C", "Hyaluronic Acid", "Light-reflecting particles"],
    benefits: ["Natural glow", "Buildable coverage", "Skin-loving ingredients", "Suitable for all skin tones"],
    howToUse: "Apply to high points of the face: cheekbones, nose bridge, cupid's bow, and inner corners of eyes.",
    inStock: true
  },
  {
    id: 4,
    name: "Volume Boost Mascara",
    category: "Eyes",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1631217871990-6f0e869dce4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    badge: "Limited",
    rating: 4.5,
    badgeColor: "ballet-mauve",
    description: "A volumizing mascara that lifts, lengthens, and defines lashes without clumping. Enriched with conditioning agents.",
    ingredients: ["Keratin", "Panthenol", "Carnauba Wax", "Vitamin B5"],
    benefits: ["Volumizing", "Lengthening", "Clump-free", "Conditioning"],
    howToUse: "Start at lash base and wiggle brush upward. Apply multiple coats for desired volume.",
    inStock: false
  },
  {
    id: 5,
    name: "Silk Foundation",
    category: "Face",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    description: "A lightweight, buildable foundation that provides natural coverage with a silk-like finish.",
    ingredients: ["Silk proteins", "Hyaluronic acid", "SPF 20", "Antioxidants"],
    benefits: ["Natural coverage", "Hydrating", "Sun protection", "Long-wearing"],
    howToUse: "Apply with brush, sponge, or fingers. Build coverage as needed.",
    inStock: true
  },
  {
    id: 6,
    name: "Rose Lip Balm",
    category: "Lips",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    description: "A nourishing lip balm infused with rose oil and shea butter for soft, supple lips.",
    ingredients: ["Rose oil", "Shea butter", "Beeswax", "Vitamin E"],
    benefits: ["Deeply moisturizing", "Natural ingredients", "Subtle rose scent", "Long-lasting"],
    howToUse: "Apply as needed throughout the day for soft, hydrated lips.",
    inStock: true
  }
];

export function useProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return {
    products: PRODUCTS,
    filteredProducts,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
  };
}