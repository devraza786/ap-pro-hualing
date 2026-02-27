import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Trash2, Box, Package, Hammer, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import { PageMeta } from '@/components/common/PageMeta';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Dumpster Rentals',
    description: 'Professional 10yd–20yd dumpster rentals for any residential or commercial project. Fast delivery and pickup.',
    icon: Truck,
    path: '/services#dumpster',
  },
  {
    title: 'Junk Removal',
    description: 'Full-service residential and commercial junk removal. We haul it all so you don’t have to.',
    icon: Trash2,
    path: '/services#junk',
  },
  {
    title: 'Equipment Transport',
    description: 'Safe and efficient heavy equipment relocation. Professional hauling for your machinery.',
    icon: Box,
    path: '/services#transport',
  },
  {
    title: 'Debris Drop Off',
    description: 'Hassle-free construction waste handling and disposal. Keep your job site clean and organized.',
    icon: Package,
    path: '/services#debris',
  },
  {
    title: 'Small Demo',
    description: 'Expert light demolition services. From sheds to decks, we handle the demo and the debris.',
    icon: Hammer,
    path: '/services#demo',
  },
];

const stats = [
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Happy Customers', value: 1500, suffix: '+' },
  { label: 'Pounds Hauled', value: 500, suffix: 'K+' },
  { label: 'Service Areas', value: 25, suffix: '+' },
];

const Home = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Hero Text Animation
    const heroCtx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroTextRef);

    // Stats Counter Animation
    const statsCtx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      const items = document.querySelectorAll('.stat-number');
      items.forEach((item) => {
        const val = parseInt(item.getAttribute('data-value') || '0');
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
          innerText: val,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power1.inOut',
        });
      });
    }, statsRef);

    return () => {
      heroCtx.revert();
      statsCtx.revert();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <PageMeta
        title="Reliable Dumpster Rentals & Junk Removal in Martinez, CA | AP Pro Hauling"
        description="AP Pro Hauling offers professional dumpster rentals, junk removal, and equipment transport in Martinez, CA and Contra Costa County. Fast and affordable hauling services."
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1ynl8lpfk.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        </div>

        <motion.div
          style={{ opacity, scale }}
          ref={heroTextRef}
          className="container mx-auto px-4 z-10 flex flex-col items-center justify-center text-center"
        >
          <div className="max-w-5xl space-y-3 md:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter hero-anim text-white">
              <span className="text-primary">Dumpster</span> Rentals & <br />
              Junk <span className="text-primary">Removal</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white font-black max-w-4xl mx-auto leading-tight hero-anim">
              Fast, Friendly, and Reliable Service for Your Cleanup Projects
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-4 md:pt-6 hero-anim">
              <Button asChild size="lg" className="h-12 md:h-14 lg:h-18 px-6 md:px-8 lg:px-12 text-base md:text-lg lg:text-xl font-black uppercase tracking-widest bg-primary text-white shadow-[0_0_30px_rgba(191,32,38,0.5)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 md:h-14 lg:h-18 px-6 md:px-8 lg:px-12 text-base md:text-lg lg:text-xl font-black uppercase tracking-widest border-2 border-white text-white bg-transparent transition-all hover:bg-white/10 hover:scale-105 active:scale-95 w-full sm:w-auto">
                <a href="tel:925-995-8255">
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-primary font-black uppercase tracking-widest text-sm">Professional Solutions</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none">
                Our Expert <span className="text-primary">Hauling</span> Services
              </h2>
              <p className="text-lg font-bold text-muted-foreground">
                From residential clean-outs to heavy equipment transport, we provide the reliable equipment and professional service you need.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary font-black uppercase tracking-widest text-lg group">
              <Link to="/services" className="flex items-center">
                All Services <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8" ref={statsRef}>
              <span className="text-primary font-black uppercase tracking-widest text-sm">The AP Pro Advantage</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none">
                Why Work With <br /> <span className="text-primary">AP Pro Hauling?</span>
              </h2>
              <p className="text-lg font-bold text-muted-foreground max-w-lg">
                We pride ourselves on punctuality, fair pricing, and professional execution. We’re local, veteran-owned, and dedicated to serving Martinez and the surrounding areas.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-black text-primary stat-number" data-value={stat.value}>0</span>
                      <span className="text-2xl font-black text-primary">{stat.suffix}</span>
                    </div>
                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: 'Fast Turnaround', desc: 'Same-day or next-day service available in most cases.' },
                { title: 'Competitive Pricing', desc: 'No hidden fees. Flat rates and clear quotes every time.' },
                { title: 'Professional Service', desc: 'Courteous drivers and clean, reliable equipment.' },
                { title: 'Local & Reliable', desc: 'We know Martinez and Contra Costa County inside out.' },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-5 md:p-8 rounded-2xl border-2 border-white/10 hover:border-primary/40 transition-colors">
                  <CheckCircle2 className="text-primary h-8 w-8 mb-4" />
                  <h3 className="text-lg md:text-xl font-black uppercase mb-2">{benefit.title}</h3>
                  <p className="text-sm font-semibold text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Preview Section */}
      <section className="py-12 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-8">
            <span className="text-primary font-black uppercase tracking-widest text-sm">Where We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              Serving Martinez & <span className="text-primary">Contra Costa County</span>
            </h2>
            <p className="text-base md:text-xl font-bold text-muted-foreground">
              We provide comprehensive dumpster rental and junk removal services throughout Martinez, Concord, Pleasant Hill, Walnut Creek, and the surrounding Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="h-12 md:h-16 px-6 md:px-10 text-base md:text-lg font-black uppercase tracking-widest w-full sm:w-auto">
                <Link to="/service-area">View Service Area</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 md:h-16 px-6 md:px-10 text-base md:text-lg font-black uppercase tracking-widest border-2 w-full sm:w-auto">
                <Link to="/contact">Check Availability</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight mb-6 md:mb-8">
            Ready to get started?
          </h2>
          <p className="text-base md:text-xl font-bold mb-8 md:mb-12 opacity-90">
            Contact AP Pro Hauling today for your free, no-obligation estimate.
          </p>
          <Button asChild variant="secondary" size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-xl font-black uppercase tracking-widest text-primary hover:bg-white transition-colors w-full sm:w-auto">
            <Link to="/contact">Get Your Quote Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
