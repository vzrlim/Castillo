import { X, Star, StarHalf, Heart, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { Product } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'reviews'>('details');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const { addItem } = useCart();

  if (!isOpen || !product) return null;

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

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-4 md:inset-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex h-full">
          {/* Image Section */}
          <div className="w-1/2 bg-gradient-to-br from-ballet-cream to-ballet-pink/20 relative">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className={`absolute top-6 left-6 bg-gradient-to-r from-${product.badgeColor} to-ballet-mauve text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                {product.badge}
              </span>
            )}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Section */}
          <div className="w-1/2 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-ballet-rose/20">
              <div className="text-ballet-rose text-sm font-semibold mb-2 tracking-wide uppercase">
                {product.category}
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                {product.name}
              </h2>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-foreground/60">({product.rating})</span>
                </div>
                <div className="text-3xl font-bold text-ballet-rose">
                  ${product.price}
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    product.inStock
                      ? 'bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {showAddedMessage ? (
                    <span className="flex items-center justify-center">
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full border-2 transition-all duration-300 ${
                    isWishlisted
                      ? 'bg-ballet-rose border-ballet-rose text-white'
                      : 'border-ballet-rose/50 text-ballet-rose hover:bg-ballet-rose/10'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-ballet-rose/20">
              {[
                { id: 'details', label: 'Details' },
                { id: 'ingredients', label: 'Ingredients' },
                { id: 'reviews', label: 'Reviews' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-ballet-rose border-b-2 border-ballet-rose'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-8 overflow-y-auto">
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-foreground/80">
                          <div className="w-2 h-2 bg-ballet-rose rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">How to Use</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {product.howToUse}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Key Ingredients</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="p-4 bg-ballet-cream/30 rounded-xl">
                        <div className="font-medium text-foreground">{ingredient}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <div className="text-4xl font-bold text-ballet-rose mb-2">{product.rating}</div>
                    <div className="flex justify-center mb-2">
                      {renderStars(product.rating)}
                    </div>
                    <div className="text-foreground/60">Based on 127 reviews</div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Sarah M.", rating: 5, comment: "Absolutely love this product! The quality is amazing and it lasts all day." },
                      { name: "Emma L.", rating: 4, comment: "Great color payoff and feels luxurious. Will definitely repurchase." },
                      { name: "Jessica K.", rating: 5, comment: "Perfect for my skin tone. The formula is so smooth and blendable." },
                    ].map((review, index) => (
                      <div key={index} className="p-4 bg-ballet-cream/30 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-foreground">{review.name}</div>
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-foreground/80 text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}