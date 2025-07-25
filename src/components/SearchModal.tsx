import { X, Search, Filter } from "lucide-react";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductSelect: (productId: number) => void;
}

export default function SearchModal({ isOpen, onClose, onProductSelect }: SearchModalProps) {
  const { 
    filteredProducts, 
    categories, 
    searchTerm, 
    setSearchTerm, 
    selectedCategory, 
    setSelectedCategory,
    sortBy,
    setSortBy
  } = useProducts();
  
  const [showFilters, setShowFilters] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-4 md:inset-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-ballet-rose/20">
            <div className="flex items-center space-x-4 flex-1">
              <Search className="w-6 h-6 text-ballet-rose" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 text-lg bg-transparent border-none outline-none placeholder-foreground/50"
                autoFocus
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-full transition-colors ${
                  showFilters ? 'bg-ballet-rose text-white' : 'hover:bg-ballet-pink/50'
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-ballet-pink/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="p-6 border-b border-ballet-rose/20 bg-ballet-cream/30">
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-ballet-rose/30 rounded-lg bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 border border-ballet-rose/30 rounded-lg bg-white"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1 overflow-y-auto p-6">
            {searchTerm === '' ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-ballet-rose/30 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Search our collection</h3>
                <p className="text-foreground/60">Start typing to find your perfect beauty products</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="text-lg font-medium text-foreground mb-2">No products found</h3>
                <p className="text-foreground/60">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onProductSelect(product.id);
                      onClose();
                    }}
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="aspect-square bg-gradient-to-br from-ballet-cream to-ballet-pink/20 relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {product.badge && (
                        <span className={`absolute top-3 left-3 bg-gradient-to-r from-${product.badgeColor} to-ballet-mauve text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="text-ballet-rose text-xs font-semibold mb-1 uppercase tracking-wide">
                        {product.category}
                      </div>
                      <h3 className="font-medium text-foreground mb-2 group-hover:text-ballet-rose transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-ballet-rose">
                          ${product.price}
                        </div>
                        <div className="text-xs text-foreground/60">
                          ⭐ {product.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}