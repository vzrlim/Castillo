@@ .. @@
 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import App from './App.tsx'
 import './styles/globals.css'
+import { CartProvider } from './contexts/CartContext.tsx'
 
 ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
-    <App />
+    <CartProvider>
+      <App />
+    </CartProvider>
   </React.StrictMode>,
 )