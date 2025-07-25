import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 text-ballet-lavender/20 ballet-float">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-ballet-rose/20 ballet-float" style={{ animationDelay: '3s' }}>
        <Heart className="w-10 h-10" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-ballet-rose/20 via-ballet-pink/10 to-ballet-lavender/20 rounded-3xl blur-xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ballet-rose/20 border border-ballet-rose/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="About Castillo by Dior Yaw"
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ballet-rose/10 to-transparent"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-ballet-lavender rounded-full opacity-70 ballet-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ballet-rose rounded-full opacity-60 ballet-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-ballet-rose rounded-full mr-4"></div>
                <Sparkles className="w-6 h-6 text-ballet-rose" />
              </div>
              
              <h2 className="text-5xl font-serif font-bold text-gradient-ballet mb-4 leading-tight">
                The Castillo Legacy
              </h2>
              <p className="text-lg text-foreground/70 italic font-light mb-8">
                A Heritage of Elegance by Dior Yaw
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Castillo by Dior Yaw represents the perfect fusion of artistic vision and luxury beauty. Founded on the principles of elegance, sophistication, and individual expression, our brand celebrates the unique beauty within every person.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Each product in our collection is meticulously crafted with premium ingredients and innovative formulations, inspired by the timeless grace of ballet and the precision of haute couture. We believe that beauty is an art form, and every application should feel like a performance.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Our commitment to cruelty-free, sustainable practices ensures that your beauty routine aligns with your values, while our dedication to quality guarantees results that make you feel confident and radiant.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button className="bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-ballet-rose/25 transition-all duration-500 transform hover:-translate-y-2 font-medium tracking-wide">
                Our Story
              </button>
              <button className="bg-transparent text-ballet-rose px-8 py-4 rounded-full border-2 border-ballet-rose/50 hover:bg-ballet-rose/10 hover:border-ballet-rose transition-all duration-500 transform hover:-translate-y-2 font-medium tracking-wide">
                Sustainability
              </button>
            </div>
            
            {/* Decorative quote */}
            <div className="bg-gradient-to-r from-ballet-pink/20 to-ballet-lavender/20 rounded-2xl p-6 border border-ballet-rose/10 mt-8">
              <p className="text-foreground/70 italic font-light text-center text-lg">
                "True beauty lies in the confidence to express your authentic self."
              </p>
              <p className="text-ballet-rose text-center mt-2 font-medium tracking-wide">
                — Dior Yaw, Founder
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-16 h-0.5 bg-ballet-rose rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}