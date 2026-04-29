import { Phone, Mail, MapPin, Clock, Shield, Facebook, Instagram } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_695ce2b8d4f59f65ec37c1a3/22a4afe7a_eb54e5a8-b87c-4b95-8b41-e745c757839e.JPG";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Google Maps */}
      <div className="w-full h-72">
        <iframe
          title="Securikey Locksmith Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0!2d-122.1597!3d38.0491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085a3a2b2e4e3a9%3A0x0!2s701+Southampton+Rd%2C+Benicia%2C+CA+94510!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="Securikey Locksmith" className="h-20 w-auto object-contain mb-4 bg-white/90 rounded-lg p-2" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Professional locksmith services for residential, commercial, and automotive needs. Licensed, bonded, and insured.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-accent p-2.5 rounded-lg transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent p-2.5 rounded-lg transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Reviews', 'Areas'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {['Residential Locksmith', 'Commercial Locksmith', 'Automotive Locksmith', 'Emergency Lockout', 'Lock Installation', 'Key Duplication'].map(service => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+17072507688" className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  +1 (707) 250-7688
                </a>
              </li>
              <li>
                <a href="mailto:Securikeylocksmithbayarea@gmail.com" className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  Securikeylocksmithbayarea@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <div>701 Southampton Rd, Unit 210<br />Benicia, CA 94510<br />United States</div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <div>
                  <div>Mon-Sun: 7:00 AM – 11:45 PM</div>
                  <div>Emergency Services Available</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Securikey Locksmith. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/40 text-sm">
            <Shield className="h-4 w-4 text-accent" />
            Licensed & Insured · License #LIC8646
          </div>
        </div>
      </div>
    </footer>
  );
}