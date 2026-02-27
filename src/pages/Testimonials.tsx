import { motion } from 'framer-motion';
import { PageMeta } from '@/components/common/PageMeta';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Michael R.',
    location: 'Martinez, CA',
    text: 'Great service! They delivered the dumpster on time and were very professional throughout the process. Highly recommend for any home clean-out.',
    rating: 5,
  },
  {
    name: 'Sarah D.',
    location: 'Concord, CA',
    text: 'Fast, efficient, and affordable. AP Pro Hauling made our junk removal project a breeze. The team was friendly and helpful!',
    rating: 5,
  },
  {
    name: 'James L.',
    location: 'Walnut Creek, CA',
    text: 'Highly professional. Used them for equipment transport, and everything arrived safe and on schedule. Will definitely use them again.',
    rating: 5,
  },
  {
    name: 'Robert T.',
    location: 'Pleasant Hill, CA',
    text: 'Reliable and responsive. They provided exactly what they promised and more. The best hauling service in the Martinez area!',
    rating: 5,
  },
  {
    name: 'Emily W.',
    location: 'Martinez, CA',
    text: 'Quick delivery and pick-up for our renovation dumpster. AP Pro Hauling is my go-to for any future disposal needs.',
    rating: 5,
  },
  {
    name: 'David S.',
    location: 'Bay Area, CA',
    text: 'Excellent communication and top-notch service. They handled our construction debris removal with ease. Very happy with the results!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="Testimonials | AP Pro Hauling"
        description="Read reviews from our satisfied customers in Martinez, CA and Contra Costa County. Discover why AP Pro Hauling is the trusted choice for dumpster rentals and junk removal."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24 text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">Customer Feedback</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4 md:mb-6">
            Voices of <span className="text-primary">Satisfaction</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-muted-foreground leading-relaxed">
            Discover why our clients trust AP Pro Hauling for their disposal and hauling needs.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-24 bg-primary text-white text-center mt-12 md:mt-24 rounded-2xl md:rounded-[3rem] container mx-auto px-4 shadow-2xl overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 -skew-x-12 translate-x-1/2" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none max-w-4xl mx-auto">
            Experience Our <span className="text-secondary">Excellence</span> Yourself
          </h2>
          <p className="text-base md:text-xl font-bold opacity-90 max-w-2xl mx-auto">
            Join our growing list of satisfied customers and get your free quote today.
          </p>
          <Button asChild variant="secondary" size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-xl font-black uppercase tracking-widest text-primary hover:bg-white transition-colors w-full sm:w-auto">
            <Link to="/contact">Get Started Now</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;
