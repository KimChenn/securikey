import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Michael R.',
    text: 'Got locked out of my house at 11 PM and Securikey was there within 20 minutes. Professional, fast, and very reasonable pricing. Highly recommend!',
    rating: 5,
    service: 'Residential Lockout',
  },
  {
    name: 'Sarah K.',
    text: "We hired Securikey to install a complete master key system for our office building. The work was impeccable and the team was incredibly professional.",
    rating: 5,
    service: 'Commercial Service',
  },
  {
    name: 'David L.',
    text: 'Lost my car keys and needed a replacement ASAP. They came to my location, programmed a new key fob, and had me back on the road in no time!',
    rating: 5,
    service: 'Automotive Key Replacement',
  },
  {
    name: 'Jennifer T.',
    text: 'Best locksmith service in town! They rekeyed all the locks in our new home quickly and even gave us tips on improving our home security.',
    rating: 5,
    service: 'Lock Rekeying',
  },
  {
    name: 'Robert M.',
    text: "I've used Securikey three times now for different properties. Consistent quality, honest pricing, and always on time. They're my go-to locksmith.",
    rating: 5,
    service: 'Regular Customer',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-primary text-primary-foreground">
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
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <Quote className="h-8 w-8 text-accent/40 mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-primary-foreground/50 text-xs">{review.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2">
          {reviews.slice(3).map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <Quote className="h-8 w-8 text-accent/40 mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-sm">{review.name}</div>
                <div className="text-primary-foreground/50 text-xs">{review.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}