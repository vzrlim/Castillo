@@ .. @@
 export default function Newsletter() {
   const [email, setEmail] = useState("");
+  const [isSubmitting, setIsSubmitting] = useState(false);
+  const [isSubmitted, setIsSubmitted] = useState(false);
+  const [error, setError] = useState("");
 
-  const handleSubmit = (e: React.FormEvent) => {
+  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
-    // Handle newsletter signup
-    console.log("Newsletter signup:", email);
-    setEmail("");
+    
+    if (!email || !email.includes('@')) {
+      setError("Please enter a valid email address");
+      return;
+    }
+    
+    setIsSubmitting(true);
+    setError("");
+    
+    // Simulate API call
+    try {
+      await new Promise(resolve => setTimeout(resolve, 1500));
+      console.log("Newsletter signup:", email);
+      setIsSubmitted(true);
+      setEmail("");
+    } catch (err) {
+      setError("Something went wrong. Please try again.");
+    } finally {
+      setIsSubmitting(false);
+    }
   };
 
+  if (isSubmitted) {
+    return (
+      <section className="py-20 px-6 relative overflow-hidden">
+        {/* Gradient background */}
+        <div className="absolute inset-0 bg-gradient-to-br from-ballet-rose via-ballet-blush to-ballet-lavender"></div>
+        
+        {/* Decorative elements */}
+        <div className="absolute top-10 left-10 text-white/20 ballet-float">
+          <Sparkles className="w-16 h-16" />
+        </div>
+        <div className="absolute top-20 right-20 text-white/15 ballet-float" style={{ animationDelay: '2s' }}>
+          <Heart className="w-12 h-12" />
+        </div>
+        
+        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
+          <div className="mb-8">
+            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
+              <Heart className="w-10 h-10 fill-current" />
+            </div>
+            
+            <h2 className="text-5xl font-serif font-bold mb-4 leading-tight">
+              Welcome to the 
+              <span className="block italic font-serif">Castillo Circle!</span>
+            </h2>
+            
+            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
+              Thank you for joining our exclusive community! Check your email for your 15% discount code and beauty insider tips.
+            </p>
+            
+            <button
+              onClick={() => setIsSubmitted(false)}
+              className="bg-white/20 text-white px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-500 font-medium backdrop-blur-sm"
+            >
+              Subscribe Another Email
+            </button>
+          </div>
+        </div>
+      </section>
+    );
+  }
+
   return (
@@ .. @@
         {/* Newsletter form */}
         <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
+          {error && (
+            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
+              {error}
+            </div>
+          )}
           <div className="glass-effect rounded-full p-2 border border-white/20 shadow-xl">
             <div className="flex">
               <input
@@ -67,6 +125,7 @@
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter your email address..."
                 className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/70 focus:outline-none rounded-l-full"
+                disabled={isSubmitting}
                 required
               />
               <button
                 type="submit"
-                className="bg-white text-ballet-rose px-8 py-4 rounded-full hover:bg-ballet-cream hover:shadow-lg transition-all duration-500 transform hover:scale-105 font-semibold"
+                disabled={isSubmitting}
+                className="bg-white text-ballet-rose px-8 py-4 rounded-full hover:bg-ballet-cream hover:shadow-lg transition-all duration-500 transform hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
               >
-                Join Now
+                {isSubmitting ? 'Joining...' : 'Join Now'}
               </button>
             </div>
           </div>