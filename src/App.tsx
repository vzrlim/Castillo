@@ .. @@
 import About from "./components/About";
 import Newsletter from "./components/Newsletter";
 import Footer from "./components/Footer";
+import { useCart } from "./hooks/useCart";
 
 export default function App() {
+  // Initialize cart context
+  useCart();
+  
   return (
     <div className="min-h-screen bg-gradient-ballet">
       <Header />