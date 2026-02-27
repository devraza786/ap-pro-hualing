import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PageMeta } from '@/components/common/PageMeta';
import { ContactForm } from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone Number',
    value: '925-995-8255',
    link: 'tel:925-995-8255',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'approhauling@gmail.com',
    link: 'mailto:approhauling@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Physical Address',
    value: '4 Giannini Rd, Martinez, CA 94553, United States',
    link: 'https://maps.google.com/?q=4+Giannini+Rd,+Martinez,+CA+94553,+United+States',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Open Mon-Sun (Contact for Specifics)',
    link: '#',
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="Contact Us | AP Pro Hauling"
        description="Get in touch with AP Pro Hauling for a free quote on dumpster rentals, junk removal, and hauling services in Martinez, CA. We are here to help with your disposal needs."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24 text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4 md:mb-6">
            Let&apos;s Start Your <span className="text-primary">Project</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-muted-foreground leading-relaxed">
            Contact AP Pro Hauling today for reliable dumpster rentals and professional-grade hauling services in Martinez and the Bay Area.
          </p>
        </motion.div>
      </section>

      {/* Contact Content Grid */}
      <section className="container mx-auto px-4 py-8 md:py-16 mb-12 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none">
                Contact <span className="text-primary">Information</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-muted/50 p-6 rounded-2xl border-2 border-primary/5 hover:border-primary/20 transition-all group shadow-sm">
                    <div className="bg-primary p-3 rounded-xl text-white shadow-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <info.icon size={24} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{info.label}</p>
                    <a
                      href={info.link}
                      className="text-lg font-black uppercase tracking-tight hover:text-primary transition-colors block leading-tight"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none">
                Our <span className="text-primary">Location</span>
              </h2>
              <div className="aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_LJOYJL-84SMuxNB7LtRGhxEQLjswvy0&language=en&region=cn&q=Waubaushene,Ontario"
                  allowFullScreen
                />
              </div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-center opacity-60">
                * Serving Martinez, CA and the surrounding 50-mile radius.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 bg-secondary text-secondary-foreground rounded-2xl md:rounded-[3rem] text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-primary/5 -skew-x-12 -translate-x-1/2" />
        <div className="space-y-12 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none">
            Why Trust <span className="text-primary">AP Pro Hauling?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
            {[
              { title: 'Contractor Grade', desc: 'Equipment and service standards built for professionals.' },
              { title: 'Veteran Owned', desc: 'Bringing military precision and dedication to every project.' },
              { title: 'Environmentally Responsible', desc: 'We follow strict local regulations for waste disposal.' },
            ].map((badge, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-primary text-4xl font-black mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-black uppercase tracking-tight">{badge.title}</h3>
                <p className="font-bold text-muted-foreground leading-relaxed text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
