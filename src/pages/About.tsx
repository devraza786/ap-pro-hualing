import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, MapPin } from 'lucide-react';
import { PageMeta } from '@/components/common/PageMeta';

const About = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="About Us | AP Pro Hauling"
        description="Learn more about AP Pro Hauling, a local dumpster rental and junk removal company in Martinez, CA. We are dedicated to providing fast and affordable hauling services with professional expertise."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none">
            Local Experts in <span className="text-primary">Hauling Solutions</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-muted-foreground leading-relaxed">
            AP Pro Hauling is more than just a dumpster rental service. We are your dedicated partner for keeping Martinez and the Contra Costa County clean, efficient, and organized.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 bg-muted/30 rounded-2xl md:rounded-3xl border-2 border-primary/5 mb-12 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight">
              Our <span className="text-primary">Commitment</span> to Excellence
            </h2>
            <div className="space-y-6">
              <p className="text-lg font-semibold text-muted-foreground leading-relaxed">
                Founded with a vision to provide superior contractor-grade hauling services, AP Pro Hauling has grown to become a trusted name in the Martinez area. Our mission is to simplify the complex logistics of waste management and equipment transport for both residential and commercial clients.
              </p>
              <p className="text-lg font-semibold text-muted-foreground leading-relaxed">
                Whether you need a 10-yard dumpster for a home renovation or help removing construction debris, we bring the same level of professional dedication and reliability to every job, large or small.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: 'Licensed & Insured' },
                { icon: Truck, label: 'Modern Equipment' },
                { icon: Users, label: 'Veteran Owned' },
                { icon: MapPin, label: 'Local Martinez Biz' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border shadow-sm">
                  <item.icon className="text-primary h-5 w-5" />
                  <span className="font-black uppercase tracking-tight text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1upj0hr7k.png"
                alt="Our Equipment in Action"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-primary p-4 md:p-8 rounded-xl md:rounded-2xl text-white shadow-xl max-w-[200px] md:max-w-xs">
              <p className="text-lg md:text-2xl font-black uppercase leading-none mb-1 md:mb-2">100% Reliability</p>
              <p className="text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest">On-time Every Time</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <span className="text-primary font-black uppercase tracking-widest text-sm">Our Core Values</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight">The <span className="text-primary">Standard</span> We Set</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {[
            {
              title: 'Integrity',
              desc: 'We believe in honest pricing and clear communication. No hidden fees, no surprises.',
              icon: '⚡',
            },
            {
              title: 'Efficiency',
              desc: 'Our processes are optimized to get your dumpster delivered and your junk removed fast.',
              icon: '⚙️',
            },
            {
              title: 'Community',
              desc: 'As a local business, we care about the environment and the people of Martinez.',
              icon: '🤝',
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 bg-card border-2 border-primary/5 rounded-2xl md:rounded-3xl text-center space-y-3 md:space-y-4 hover:border-primary/20 transition-all shadow-md group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{value.icon}</div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{value.title}</h3>
              <p className="font-semibold text-muted-foreground leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
