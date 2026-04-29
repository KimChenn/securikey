import { motion } from 'framer-motion';

const BRANDING_IMAGES = [
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/50cdf26b3_generated_image.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/9ac12fe78_generated_image.png",
  "https://media.base44.com/images/public/69c5547371a4a5d4459f1505/3e3cdb4df_generated_image.png",
];

export default function BrandingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {BRANDING_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg aspect-video"
            >
              <img
                src={img}
                alt="Securikey Locksmith"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}