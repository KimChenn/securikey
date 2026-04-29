import { Shield, Clock, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '10K+', label: 'Happy Customers' },
  { icon: Award, value: '100%', label: 'Satisfaction' },

];

export default function AboutSection({ aboutImage }) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Securikey Locksmith team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold font-heading">15+</div>
              <div className="text-sm font-medium opacity-90">Years of Service</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Trusted Locksmiths in Your Community
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Securikey Locksmith, we understand that your security is paramount. With over 15 years of experience serving the community, we've built a reputation for fast, reliable, and professional locksmith services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of certified locksmith technicians is equipped with the latest tools and technology to handle any lock and key situation. Whether it's a midnight lockout or a full commercial security upgrade, we're here for you.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">License #: LIC8646</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-muted/50 rounded-xl p-4 text-center">
                  <Icon className="h-5 w-5 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold font-heading text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}