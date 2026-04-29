import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=701+Southampton+Rd+Unit+210+Benicia+CA+94510";

export default function LocationBanner() {
  return (
    <section className="py-10 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 items-stretch rounded-2xl overflow-hidden shadow-md border border-border/50"
        >
          {/* Map */}
          <div className="w-full md:w-2/3 h-64 md:h-72">
            <iframe
              title="Securikey Locksmith Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0!2d-122.1597!3d38.0491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085a3a2b2e4e3a9%3A0x0!2s701+Southampton+Rd%2C+Benicia%2C+CA+94510!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address */}
          <div className="w-full md:w-1/3 bg-card flex flex-col justify-center p-8 gap-4">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="font-heading text-lg font-bold text-foreground">Our Location</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              701 Southampton Rd, Unit 210<br />
              Benicia, CA 94510<br />
              United States
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors w-fit"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}