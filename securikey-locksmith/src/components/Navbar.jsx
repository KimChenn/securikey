import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://media.base44.com/images/public/user_695ce2b8d4f59f65ec37c1a3/22a4afe7a_eb54e5a8-b87c-4b95-8b41-e745c757839e.JPG";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-20">
          <a href="#home" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Securikey Locksmith" className="h-10 lg:h-16 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-lg hover:bg-accent/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+15551234567">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 rounded-full px-6">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+15551234567" className="block pt-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 rounded-full">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}