import { useState } from "react";
import { Sparkles, Heart } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ballet-rose via-ballet-blush to-ballet-lavender"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-white/20 ballet-float">
        <Sparkles className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-20 text-white/15 ballet-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-white/10 ballet-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-20 h-20" />
      </div>
      
      {/* Floating ribbons */}
      <div className="absolute top-0 left-1/3 w-64 h-1 bg-white/20 ribbon-wave"></div>
      <div className="absolute bottom-0 right-1/3 w-48 h-1 bg-white/15 ribbon-wave" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-white/60 rounded-full"></div>
              <Sparkles className="w-8 h-8 text-white/80" />
              <div className="w-8 h-0.5 bg-white/60 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-5xl font-serif font-bold mb-4 leading-tight">
            Join the 
            <span className="block italic font-serif">Castillo Circle</span>
          </h2>
          
          <p className="text-lg text-white/80 mb-2 tracking-wider uppercase font-medium">
            by Dior Yaw
          </p>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            Become part of our exclusive community and receive 15% off your first order, plus early access to new collections and beauty secrets from our atelier.
          </p>
        </div>
        
        {/* Newsletter form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="glass-effect rounded-full p-2 border border-white/20 shadow-xl">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/70 focus:outline-none rounded-l-full"
                required
              />
              <button
                type="submit"
                className="bg-white text-ballet-rose px-8 py-4 rounded-full hover:bg-ballet-cream hover:shadow-lg transition-all duration-500 transform hover:scale-105 font-semibold"
              >
                Join Now
              </button>
            </div>
          </div>
        </form>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center space-x-8 text-white/70">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-light">Exclusive Access</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span className="font-light">Beauty Insider Tips</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span className="font-light">VIP Treatment</span>
          </div>
        </div>
      </div>
    </section>
  );
}