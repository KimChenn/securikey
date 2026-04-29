import { Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Locked Out? We Can Help!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Don't stress — our expert technicians are just a phone call away. Fast response, fair prices, guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17072507688">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold gap-2 rounded-full px-8 text-base h-14">
                <Phone className="h-5 w-5" />
                +1 (707) 250-7688
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none rounded-full px-8 text-base h-14 gap-2">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}