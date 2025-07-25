import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-ballet-cream py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-gray-800 to-ballet-mauve/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 text-ballet-rose/20 ballet-float">
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="absolute bottom-40 left-10 text-ballet-lavender/20 ballet-float" style={{ animationDelay: '3s' }}>
        <Heart className="w-8 h-8" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Sparkles className="w-6 h-6 text-ballet-rose" />
                <h3 className="text-2xl font-serif font-bold text-gradient-ballet">
                  Castillo
                </h3>
              </div>
              <p className="text-sm text-ballet-cream/70 mb-4 tracking-wider uppercase font-medium">
                by Dior Yaw
              </p>
              <div className="w-16 h-0.5 bg-ballet-rose rounded-full mb-4"></div>
            </div>
            
            <p className="text-ballet-cream/80 leading-relaxed font-light">
              Luxury cosmetics that celebrate individual beauty with the sophistication of couture and the grace of ballet. Cruelty-free formulations crafted with artistic precision.
            </p>
            
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-12 h-12 bg-ballet-rose/20 rounded-full flex items-center justify-center hover:bg-ballet-rose hover:scale-110 transition-all duration-300 border border-ballet-rose/30"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 relative">
              Collections
              <div className="w-12 h-0.5 bg-ballet-rose rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-4">
              {["Signature Lips", "Couture Eyes", "Radiant Face", "Skincare Essentials", "Professional Tools", "Limited Editions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ballet-cream/70 hover:text-ballet-rose hover:pl-3 transition-all duration-300 font-light flex items-center group">
                    <span className="w-0 h-0.5 bg-ballet-rose rounded-full mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 relative">
              Information
              <div className="w-12 h-0.5 bg-ballet-lavender rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-4">
              {["Our Heritage", "Contact Us", "Shipping & Returns", "Size Guide", "FAQ", "Privacy & Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ballet-cream/70 hover:text-ballet-lavender hover:pl-3 transition-all duration-300 font-light flex items-center group">
                    <span className="w-0 h-0.5 bg-ballet-lavender rounded-full mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 relative">
              Atelier Contact
              <div className="w-12 h-0.5 bg-ballet-mauve rounded-full mt-2"></div>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 text-ballet-cream/70 group hover:text-ballet-mauve transition-colors duration-300">
                <MapPin className="w-5 h-5 text-ballet-mauve mt-1 flex-shrink-0" />
                <span className="font-light">456 Couture Avenue, New York, NY</span>
              </div>
              <div className="flex items-center space-x-4 text-ballet-cream/70 group hover:text-ballet-mauve transition-colors duration-300">
                <Phone className="w-5 h-5 text-ballet-mauve flex-shrink-0" />
                <span className="font-light">+1 (555) CASTILLO</span>
              </div>
              <div className="flex items-center space-x-4 text-ballet-cream/70 group hover:text-ballet-mauve transition-colors duration-300">
                <Mail className="w-5 h-5 text-ballet-mauve flex-shrink-0" />
                <span className="font-light">hello@castillodior.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-ballet-rose/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ballet-cream/60 font-light">
              &copy; {currentYear} Castillo by Dior Yaw. Crafted with artistic excellence.
            </p>
            
            <div className="flex items-center space-x-4 text-ballet-cream/60 font-light">
              <span>Designed with</span>
              <Heart className="w-4 h-4 text-ballet-rose animate-pulse" />
              <span>for beauty connoisseurs</span>
            </div>
          </div>
          
          {/* Decorative bottom element */}
          <div className="flex justify-center mt-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-ballet-rose to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}