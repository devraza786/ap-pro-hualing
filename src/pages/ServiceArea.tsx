import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Navigation, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageMeta } from '@/components/common/PageMeta';

const locations = [
  'Martinez',
  'Concord',
  'Pleasant Hill',
  'Walnut Creek',
  'Lafayette',
  'Orinda',
  'Moraga',
  'Danville',
  'San Ramon',
  'Pittsburg',
  'Antioch',
  'Oakley',
  'Brentwood',
  'Clayton',
  'Hercules',
  'Pinole',
  'Richmond',
  'El Cerrito',
  'Benicia',
];

const ServiceArea = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="Service Area | AP Pro Hauling"
        description="Check if AP Pro Hauling serves your location. We provide dumpster rentals and junk removal in Martinez, CA and across Contra Costa County and the greater Bay Area."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">Where We Operate</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4 md:mb-6">
            Serving Martinez & the <br /> <span className="text-primary">Greater Bay Area</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-muted-foreground leading-relaxed">
            AP Pro Hauling is proud to serve residential and commercial clients across Martinez, Contra Costa County, and surrounding communities with professional-grade hauling services.
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 mb-12 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="aspect-video lg:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_LJOYJL-84SMuxNB7LtRGhxEQLjswvy0&language=en&region=cn&q=Waubaushene,Ontario"
                allowFullScreen
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-6 left-6 bg-primary text-white p-4 rounded-xl shadow-xl border-2 border-white/20">
                <p className="text-xl font-black uppercase tracking-tight leading-none">Primary Service Area</p>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest mt-1">Contra Costa County</p>
              </div>
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-center opacity-60">
              * Map shows central location. We serve a 50+ mile radius around Martinez.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-secondary p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-primary/20 text-secondary-foreground shadow-xl">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 md:mb-6 border-b-2 border-primary w-fit pb-1">Areas We Cover:</h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {locations.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-bold uppercase tracking-tight text-xs">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-start gap-4">
                  <Navigation className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                    Don&apos;t see your city? We frequently travel for larger projects. Contact us to check availability.
                  </p>
                </div>
                <Button asChild className="w-full h-12 text-sm font-black uppercase tracking-widest">
                  <Link to="/contact">Check Your Area</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-2xl border group hover:border-primary/40 transition-colors">
                <div className="bg-primary p-3 rounded-xl text-white shadow-lg shrink-0">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Call for Quotes</span>
                  <a href="tel:925-995-8255" className="text-xl font-black uppercase tracking-tight hover:text-primary transition-colors">925-995-8255</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-2xl border group hover:border-primary/40 transition-colors">
                <div className="bg-secondary p-3 rounded-xl text-white shadow-lg shrink-0 border border-white/10">
                  <Globe size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Serving the entire</span>
                  <span className="text-xl font-black uppercase tracking-tight">Contra Costa County</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 bg-primary rounded-2xl md:rounded-[3rem] text-white overflow-hidden relative group">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center relative z-10">
          {[
            { title: 'Local Expertise', icon: MapPin, desc: 'We know the neighborhoods and rules of Martinez.' },
            { title: 'Fast Logistics', icon: Navigation, desc: 'Quick routes and efficient delivery to your site.' },
            { title: 'Reliable Timing', icon: CheckCircle2, desc: 'Punctual drop-offs and pick-ups guaranteed.' },
            { title: 'Expert Service', icon: ShieldCheck, desc: 'Professional handling across all service areas.' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <item.icon size={32} />
              </div>
              <h3 className="text-base md:text-xl font-black uppercase tracking-tight">{item.title}</h3>
              <p className="font-bold text-white/80 leading-relaxed text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ShieldCheck = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default ServiceArea;
