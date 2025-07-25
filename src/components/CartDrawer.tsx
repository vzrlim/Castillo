import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CartDrawer() {
  const { items, totalItems, totalPrice, isOpen, setIsOpen, updateQuantity, removeItem, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ballet-rose/20 p-6">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6 text-ballet-rose" />
              <h2 className="text-xl font-serif font-bold text-foreground">
                Shopping Bag ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-ballet-pink/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-ballet-rose/30 mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Your bag is empty</h3>
                <p className="text-foreground/60 mb-6">Add some beautiful products to get started</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-ballet-cream/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-sm text-foreground/60">{item.category}</p>
                      <p className="font-semibold text-ballet-rose">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-ballet-rose/20 flex items-center justify-center hover:bg-ballet-rose/30 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-ballet-rose/20 flex items-center justify-center hover:bg-ballet-rose/30 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-ballet-rose/20 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-ballet-rose">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-foreground/60 py-2 text-sm hover:text-foreground transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}