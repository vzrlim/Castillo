import { Star, StarHalf, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      category: "Lips",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller",
      rating: 4.5,
      badgeColor: "ballet-rose"
    },
    {
      id: 2,
      name: "Enchanted Eyeshadow Palette",
      category: "Eyes",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "New",
      rating: 5.0,
      badgeColor: "ballet-lavender"
    },
    {
      id: 3,
      name: "Radiant Glow Highlighter",
      category: "Face",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1597248881519-db089e374b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: null,
      rating: 4.0,
      badgeColor: null
    },
    {
      id: 4,
      name: "Volume Boost Mascara",
      category: "Eyes",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1631217871990-6f0e869dce4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "Limited",
      rating: 4.5,
      badgeColor: "ballet-mauve"
    }
  ];

  const handleAddToCart = () => {
    if ((window as any).incrementCart) {
      (window as any).incrementCart();
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-ballet-rose text-ballet-rose" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-ballet-rose text-ballet-rose" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-ballet-rose/30" />);
    }

    return stars;
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-ballet-cream/30 to-ballet-pink/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif font-bold text-gradient-ballet mb-6">
            Ballet Bestsellers
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ballet-rose via-ballet-blush to-ballet-lavender rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
            Our most beloved pieces, chosen by beauty enthusiasts who adore elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer border border-ballet-rose/10"
              onClick={handleAddToCart}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image container with heart icon */}
              <div className="relative h-72 bg-gradient-to-br from-ballet-cream to-ballet-pink/20 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-4 left-4 bg-gradient-to-r from-${product.badgeColor} to-ballet-mauve text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Heart icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-ballet-rose hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Product info */}
              <div className="p-6">
                <div className="text-ballet-rose text-sm font-semibold mb-2 tracking-wide uppercase">
                  {product.category}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-ballet-rose transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-foreground/60">({product.rating})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold text-foreground">
                    ${product.price}
                  </div>
                  <button className="bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Decorative bottom border */}
              <div className="h-1 bg-gradient-to-r from-ballet-rose via-ballet-blush to-ballet-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}