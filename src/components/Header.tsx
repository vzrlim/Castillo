@@ .. @@
 import { useState, useEffect } from "react";
 import { Search, User, ShoppingBag, Sparkles } from "lucide-react";
+import { useCart } from "../hooks/useCart";
+import CartDrawer from "./CartDrawer";
+import SearchModal from "./SearchModal";
+import AuthModal from "./AuthModal";
+import ProductModal from "./ProductModal";
+import { useProducts } from "../hooks/useProducts";
 
 export default function Header() {
-  const [cartCount, setCartCount] = useState(0);
   const [isScrolled, setIsScrolled] = useState(false);
+  const [isSearchOpen, setIsSearchOpen] = useState(false);
+  const [isAuthOpen, setIsAuthOpen] = useState(false);
+  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
+  
+  const { totalItems, setIsOpen: setCartOpen } = useCart();
+  const { products } = useProducts();
 
   useEffect(() => {
@@ -15,14 +25,8 @@
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
-  const incrementCart = () => {
-    setCartCount(prev => prev + 1);
-  };
-
-  // Pass cart increment function to window for use by other components
-  useEffect(() => {
-    (window as any).incrementCart = incrementCart;
-  }, []);
+  const selectedProduct = selectedProductId ? products.find(p => p.id === selectedProductId) : null;
+  const isProductModalOpen = selectedProductId !== null;
 
   return (
@@ .. @@
         {/* Right Icons */}
         <div className="flex items-center space-x-6">
-          <button className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110">
+          <button 
+            onClick={() => setIsSearchOpen(true)}
+            className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110"
+          >
             <Search className="w-5 h-5" />
           </button>
-          <button className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110">
+          <button 
+            onClick={() => setIsAuthOpen(true)}
+            className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110"
+          >
             <User className="w-5 h-5" />
           </button>
-          <button className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110 relative group">
+          <button 
+            onClick={() => setCartOpen(true)}
+            className="text-foreground/70 hover:text-ballet-rose transition-all duration-300 transform hover:scale-110 relative group"
+          >
             <ShoppingBag className="w-5 h-5" />
-            {cartCount > 0 && (
-              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
-                {cartCount}
+            {totalItems > 0 && (
+              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
+                {totalItems}
               </span>
             )}
             <div className="absolute inset-0 bg-ballet-rose/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
           </button>
         </div>
       </div>
+      
+      {/* Modals */}
+      <CartDrawer />
+      <SearchModal 
+        isOpen={isSearchOpen} 
+        onClose={() => setIsSearchOpen(false)}
+        onProductSelect={setSelectedProductId}
+      />
+      <AuthModal 
+        isOpen={isAuthOpen} 
+        onClose={() => setIsAuthOpen(false)} 
+      />
+      <ProductModal
+        product={selectedProduct}
+        isOpen={isProductModalOpen}
+        onClose={() => setSelectedProductId(null)}
+      />
     </header>
   );
 }