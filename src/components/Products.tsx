@@ .. @@
 import { Star, StarHalf, Heart } from "lucide-react";
 import { ImageWithFallback } from "./figma/ImageWithFallback";
+import { useCart } from "../hooks/useCart";
+import { useProducts } from "../hooks/useProducts";
+import { useState } from "react";
+import ProductModal from "./ProductModal";
 
 export default function Products() {
-  const products = [
-    {
-      id: 1,
-      name: "Velvet Matte Lipstick",
-      category: "Lips",
-      price: 24.99,
-      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
-      badge: "Bestseller",
-      rating: 4.5,
-      badgeColor: "ballet-rose"
-    },
-    {
-      id: 2,
-      name: "Enchanted Eyeshadow Palette",
-      category: "Eyes",
-      price: 42.99,
-      image: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
-      badge: "New",
-      rating: 5.0,
-      badgeColor: "ballet-lavender"
-    },
-    {
-      id: 3,
-      name: "Radiant Glow Highlighter",
-      category: "Face",
-      price: 29.99,
-      image: "https://images.unsplash.com/photo-1597248881519-db089e374b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
-      badge: null,
-      rating: 4.0,
-      badgeColor: null
-    },
-    {
-      id: 4,
-      name: "Volume Boost Mascara",
-      category: "Eyes",
-      price: 22.99,
-      image: "https://images.unsplash.com/photo-1631217871990-6f0e869dce4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
-      badge: "Limited",
-      rating: 4.5,
-      badgeColor: "ballet-mauve"
-    }
-  ];
+  const { addItem } = useCart();
+  const { products } = useProducts();
+  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
+  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());
 
-  const handleAddToCart = () => {
-    if ((window as any).incrementCart) {
-      (window as any).incrementCart();
-    }
+  const selectedProduct = selectedProductId ? products.find(p => p.id === selectedProductId) : null;
+  const isProductModalOpen = selectedProductId !== null;
+
+  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
+    e.stopPropagation();
+    addItem({
+      id: product.id,
+      name: product.name,
+      price: product.price,
+      image: product.image,
+      category: product.category,
+    });
+    
+    setAddedItems(prev => new Set(prev).add(product.id));
+    setTimeout(() => {
+      setAddedItems(prev => {
+        const newSet = new Set(prev);
+        newSet.delete(product.id);
+        return newSet;
+      });
+    }, 2000);
   };
 
@@ .. @@
         </div>
 
-        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
-          {products.map((product, index) => (
+        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
+          {products.slice(0, 4).map((product, index) => (
             <div
               key={product.id}
               className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer border border-ballet-rose/10"
-              onClick={handleAddToCart}
+              onClick={() => setSelectedProductId(product.id)}
               style={{ animationDelay: `${index * 150}ms` }}
             >
@@ .. @@
                 <div className="text-2xl font-semibold text-foreground">
                   ${product.price}
                 </div>
-                <button className="bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
-                  Add to Cart
+                <button 
+                  onClick={(e) => handleAddToCart(product, e)}
+                  disabled={!product.inStock}
+                  className={`px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
+                    addedItems.has(product.id)
+                      ? 'bg-green-500 text-white'
+                      : product.inStock
+                      ? 'bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white'
+                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
+                  }`}
+                >
+                  {addedItems.has(product.id) 
+                    ? '✓ Added!' 
+                    : product.inStock 
+                    ? 'Add to Cart' 
+                    : 'Out of Stock'
+                  }
                 </button>
               </div>
             </div>
@@ .. @@
           ))}
         </div>
       </div>
+      
+      <ProductModal
+        product={selectedProduct}
+        isOpen={isProductModalOpen}
+        onClose={() => setSelectedProductId(null)}
+      />
     </section>
   );
 }