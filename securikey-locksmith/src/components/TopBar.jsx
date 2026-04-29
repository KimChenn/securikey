import { Phone, Clock, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between text-xs gap-1.5">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="tel:+17072507688" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="h-3 w-3" />
            <span className="font-medium">+1 (707) 250-7688</span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5 text-primary-foreground/70">
            <Clock className="h-3 w-3" />
            <span>Mon-Sun: 7:00 AM – 11:45 PM</span>
          </div>
          <div className="flex sm:hidden items-center gap-1.5 text-primary-foreground/70">
            <MapPin className="h-3 w-3" />
            <span>701 Southampton Rd, Unit 210, Benicia, CA 94510, United States</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-primary-foreground/70">
          <MapPin className="h-3 w-3" />
          <span>701 Southampton Rd, Unit 210, Benicia, CA 94510, United States</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary-foreground/60 text-xs">Lic. #LIC8646</span>
          <span className="bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide animate-pulse">
            EMERGENCY SERVICES AVAILABLE
          </span>
        </div>
      </div>
    </div>
  );
}