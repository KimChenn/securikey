import { Home, Building2, Car, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Residential',
    description: 'Home lockouts, lock changes, rekeying, deadbolt installation, smart lock setup, and complete home security solutions.',
    items: ['Home Lockout Service', 'Lock Rekeying', 'Deadbolt Installation', 'Smart Lock Setup', 'Key Duplication'],
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Master key systems, access control, high-security locks, panic bar installation, and complete business security.',
    items: ['Master Key Systems', 'Access Control', 'High-Security Locks', 'Panic Bars', 'File Cabinet Locks'],
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Car lockouts, key replacement, transponder key programming, ignition repair, and broken key extraction.',
    items: ['Car Lockout Service', 'Key Replacement', 'Transponder Programming', 'Ignition Repair', 'Broken Key Extraction'],
  },
];

export default function ServicesSection({ images }) {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">What We Do</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Locksmith Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From emergency lockouts to complete security upgrades, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={images[index]}
                  alt={service.title + ' locksmith service'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-accent p-2.5 rounded-xl">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ArrowRight className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}