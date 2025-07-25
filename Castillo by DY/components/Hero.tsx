import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Video with Ballet-inspired overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: 'brightness(0.8)' }}
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Gradient overlay for balletcore aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-br from-ballet-cream/40 via-ballet-pink/30 to-ballet-lavender/40"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-ballet-rose/30 ballet-float">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-32 right-20 text-ballet-lavender/40 ballet-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-ballet-mauve/30 ballet-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass-effect rounded-3xl p-12 shadow-2xl shadow-ballet-rose/20 backdrop-blur-md border border-ballet-rose/20">
          {/* Decorative ribbon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-ballet-rose via-ballet-blush to-ballet-lavender rounded-full shadow-sm"></div>
          </div>
          
          <div className="mb-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-gradient-ballet mb-2 leading-tight">
              Castillo
            </h1>
            <p className="text-xl text-foreground/70 mb-6 tracking-wider uppercase font-medium">
              by Dior Yaw
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground/90 mb-6 italic">
            Where Elegance Meets Artistry
          </h2>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Discover luxury cosmetics that celebrate your unique beauty with the sophistication of couture and the grace of ballet. Each product is crafted to elevate your natural radiance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-ballet-rose to-ballet-mauve text-white px-10 py-4 rounded-full hover:shadow-xl hover:shadow-ballet-rose/25 transition-all duration-500 transform hover:-translate-y-2 font-medium tracking-wide relative overflow-hidden group">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ballet-mauve to-ballet-rose opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="bg-transparent text-foreground px-10 py-4 rounded-full border-2 border-ballet-rose/50 hover:bg-ballet-rose/10 hover:border-ballet-rose transition-all duration-500 transform hover:-translate-y-2 font-medium tracking-wide">
              Our Heritage
            </button>
          </div>
          
          {/* Decorative bottom element */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-ballet-rose rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-ballet-blush rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-ballet-lavender rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}