import { motion } from 'framer-motion';
import { PageMeta } from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const images = [
  { url: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1r791alfk.png', title: 'Professional Truck and Dumpster Delivery' },
  { url: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1upj0hr7k.png', title: 'Heavy Equipment Transport Service' },
  { url: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1ynl8lpfk.png', title: 'Residential Dumpster Placement' },
  { url: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe21aaq0v7k.png', title: 'Site Cleanup and Debris Removal' },
  { url: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xdzbibl3bwg.png', title: 'AP Pro Hauling Professional Logistics' },
];

const Gallery = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="Gallery | AP Pro Hauling"
        description="View our recent projects and the quality equipment we use at AP Pro Hauling. Our gallery showcases our dumpster rentals and junk removal services in Martinez, CA."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24 text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">Our Work in Action</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4 md:mb-6">
            Visualizing <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-muted-foreground leading-relaxed">
            Take a look at how we help residential and commercial clients keep their job sites organized and efficient.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group aspect-[4/3] md:aspect-square rounded-xl md:rounded-[2rem] overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="space-y-2">
                  <p className="text-white font-black uppercase tracking-tight leading-tight text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                  </p>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    AP Pro Hauling Professionalism
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-muted/30 border-y border-primary/10 mt-12 md:mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight">Need Similar <span className="text-primary">Results?</span></h2>
            <p className="text-base md:text-xl font-bold text-muted-foreground">
              Contact us today to schedule your dumpster delivery or junk removal project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button asChild size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-lg font-black uppercase tracking-widest w-full sm:w-auto">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-lg font-black uppercase tracking-widest border-2 w-full sm:w-auto">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
