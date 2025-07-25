import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Sparkles } from "lucide-react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const incrementCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Pass cart increment function to window for use by other components
  useEffect(() => {
    (window as any).incrementCart = incrementCart;
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 glass-effect transition-all duration-500 ${
      isScrolled ? 'py-3 shadow-xl shadow-ballet-rose/10' : 'py-5 shadow-lg shadow-ballet-rose/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li><a href="#" className="text-foreground/80 hover:text-ballet-rose transition-colors duration-300 relative group font-medium">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ballet-rose transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a></li>
            <li><a href="#" className="text-foreground/80 hover:text-ballet-rose transition-colors duration-300 relative group font-medium">
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ballet-rose transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a></li>
            <li><a href="#" className="text-foreground/80 hover:text-ballet-rose transition-colors duration-300 relative group font-medium">
              Best Sellers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ballet-rose transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a></li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-ballet-rose fill-current ribbon-wave" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-ballet-lavender rounded-full opacity-70 ballet-float"></div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-gradient-ballet tracking-wide leading-tight">
              Castillo
            </h1>
            <p className="text-xs text-foreground/60 tracking-wider uppercase font-medium -mt-1">
              by Dior Yaw
            </p>
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-ballet-rose to-ballet-lavender rounded-full opacity-60"></div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110">
            <User className="w-5 h-5" />
          </button>
          <button className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110 relative group">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
            <div className="absolute inset-0 bg-ballet-rose/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </header>
  );
}