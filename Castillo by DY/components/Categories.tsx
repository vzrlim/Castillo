import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Heart } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Signature Lips",
      description: "Luxurious lip colors that make a statement",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "from-ballet-rose to-ballet-blush"
    },
    {
      id: 2,
      title: "Couture Eyes",
      description: "Enchanting eye makeup for every occasion",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "from-ballet-lavender to-ballet-mauve"
    },
    {
      id: 3,
      title: "Radiant Face",
      description: "Complexion perfection with a natural glow",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "from-ballet-blush to-ballet-cream"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-ballet-rose/20 ballet-float">
        <Sparkles className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-20 text-ballet-lavender/20 ballet-float" style={{ animationDelay: '3s' }}>
        <Heart className="w-12 h-12" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-ballet-rose rounded-full"></div>
              <Sparkles className="w-8 h-8 text-ballet-rose" />
              <div className="w-12 h-0.5 bg-ballet-rose rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-5xl font-serif font-bold text-gradient-ballet mb-4 leading-tight">
            Signature Collections
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our curated collections, each crafted with the finest ingredients and inspired by the artistry of ballet
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-ballet-rose/20 transform hover:scale-105 transition-all duration-700">
              {/* Background Image */}
              <div className="aspect-[4/5] relative">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="glass-effect rounded-2xl p-6 backdrop-blur-md border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 font-light leading-relaxed">{category.description}</p>
                    
                    <button className="mt-4 bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 font-medium tracking-wide backdrop-blur-sm">
                      Explore Collection
                    </button>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full opacity-70 ballet-float"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/40 rounded-full opacity-60 ballet-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}