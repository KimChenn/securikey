import { Phone, Shield, Clock, Star, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function HeroSection({ heroImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="Professional locksmith service"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Licensed & Insured
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Security Is Our{' '}
            <span className="text-accent">Priority</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            Professional locksmith services for your home, business, and vehicle. 
            Fast response, trusted expertise.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="tel:+17072507688">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 rounded-full px-8 text-base h-14">
                <Phone className="h-5 w-5" />
                Call Now — +1 (707) 250-7688
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-8 text-base h-14">
                Our Services
              </Button>
            </a>
            <a href="#areas">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-8 text-base h-14 gap-2">
                <MapPin className="h-5 w-5" />
                Areas We Serve
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, label: 'Licensed & Bonded' },

              { icon: Star, label: '5-Star Rated' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}