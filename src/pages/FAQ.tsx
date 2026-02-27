import { motion } from 'framer-motion';
import { PageMeta } from '@/components/common/PageMeta';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What size dumpster do I need?',
    answer: 'The size depends on your project. Our 10-yard dumpster is typically used for small home clean-outs or minor bathroom renovations. Our 20-yard options are better suited for large garage clean-outs, roofing tear-offs, or whole-room remodeling projects. Contact us for personalized recommendations!',
  },
  {
    question: 'How long can I keep a dumpster?',
    answer: 'Our standard rental periods are typically between 7 and 14 days. We offer flexibility if you need the dumpster for a longer duration—just give us a call to arrange an extension.',
  },
  {
    question: 'Do you handle construction debris?',
    answer: 'Yes, we are experienced in handling all types of construction and demolition waste, including concrete, brick, drywall, and wood. We follow environmentally responsible disposal practices for all debris.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Martinez, CA, and the surrounding Contra Costa County communities, including Concord, Pleasant Hill, Walnut Creek, and the greater Bay Area.',
  },
  {
    question: 'Do you provide same-day service?',
    answer: 'Yes, same-day or next-day service is often available for both dumpster rentals and junk removal, depending on our current schedule. Please call as early as possible to ensure availability.',
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="FAQ | AP Pro Hauling"
        description="Find answers to frequently asked questions about our dumpster rentals and junk removal services in Martinez, CA. Get information about sizes, rental durations, and service areas."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24 text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">Help & Support</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4 md:mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-muted-foreground leading-relaxed">
            Everything you need to know about our dumpster rental and hauling services.
          </p>
        </motion.div>
      </section>

      {/* Accordion Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 mb-12 md:mb-24 max-w-4xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${idx}`} className="border-2 border-primary/10 rounded-2xl bg-card overflow-hidden shadow-sm hover:border-primary/30 transition-all px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <HelpCircle className="text-primary h-6 w-6 shrink-0" />
                    <span className="text-base md:text-lg lg:text-xl font-black uppercase tracking-tight leading-tight">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2">
                  <p className="text-base md:text-lg font-semibold text-muted-foreground leading-relaxed pl-10 border-l-4 border-primary/20">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </section>

      {/* Still Have Questions? */}
      <section className="container mx-auto px-4 text-center pb-24">
        <div className="bg-secondary p-6 sm:p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-[3rem] border-2 border-primary/20 text-secondary-foreground shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none max-w-4xl mx-auto">
              Still have questions?
            </h2>
            <p className="text-base md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to provide personalized answers for your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Button asChild size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-lg font-black uppercase tracking-widest w-full sm:w-auto">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-lg font-black uppercase tracking-widest border-2 w-full sm:w-auto">
                <a href="tel:925-995-8255">Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
