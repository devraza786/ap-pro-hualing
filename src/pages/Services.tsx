import { motion } from 'framer-motion';
import { Truck, Trash2, Box, Package, Hammer, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageMeta } from '@/components/common/PageMeta';
import { CollapsibleSection } from '@/components/CollapsibleSection';

const detailedServices = [
  {
    id: 'dumpster',
    title: 'Dumpster Rentals 10yd–20yd',
    description: 'We offer professional-grade dumpsters for any size project. Whether you are cleaning out your garage or managing a large construction site, our 10-yard and 20-yard options provide the perfect balance of capacity and convenience.',
    details: [
      'Residential Clean-outs',
      'Construction & Remodeling',
      'Roofing Tear-offs',
      'Yard Waste Disposal',
      'Flexible Rental Periods',
    ],
    extendedDetails: 'Our 10-yard dumpsters are roughly 12 feet long, 8 feet wide, and 3.5 feet high, ideal for smaller bathroom remodels or garage decluttering. The 20-yard options measure approximately 22 feet long, 8 feet wide, and 4 feet high, making them a better choice for large-scale home renovations or commercial projects. We pride ourselves on timely drop-off and pickup to keep your job site moving smoothly.',
    icon: Truck,
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe21aaq0v7k.png',
  },
  {
    id: 'junk',
    title: 'Junk Removal',
    description: 'Our full-service junk removal team handles everything from appliance removal to whole-house clean-outs. We do all the heavy lifting, loading, and responsible disposal so you can reclaim your space effortlessly.',
    details: [
      'Appliance & Furniture Removal',
      'Garage & Shed Clean-outs',
      'Commercial Space Clearing',
      'E-Waste & Electronics',
      'Estate Clean-outs',
    ],
    extendedDetails: 'AP Pro Hauling offers eco-friendly junk removal services. We evaluate all items for donation or recycling before considering them as waste. Our team is trained in safe heavy-lifting techniques, and we ensure that your property is left swept and clean after our work is complete. From a single mattress to a multi-story office building, we have the crew and the equipment to handle it all.',
    icon: Trash2,
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1ynl8lpfk.png',
  },
  {
    id: 'transport',
    title: 'Equipment Transport',
    description: 'Specialized hauling for heavy equipment and machinery. We provide secure, timely transport for tractors, excavators, and other job-site equipment across the Bay Area.',
    details: [
      'Construction Machinery',
      'Agricultural Equipment',
      'Industrial Supplies',
      'Oversized Loads',
      'On-time Logistics',
    ],
    extendedDetails: 'We understand that machinery is the heartbeat of your business. Our specialized trailers are equipped to transport heavy construction equipment, forklifts, and large agricultural machines. Our drivers are fully licensed, insured, and highly experienced in load-securing and route-planning for oversized or specialized loads across Martinez and the greater Contra Costa County.',
    icon: Box,
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1upj0hr7k.png',
  },
  {
    id: 'debris',
    title: 'Debris Drop Off',
    description: 'Effective construction waste handling for contractors and DIY homeowners. We help you manage site cleanup with efficient debris removal and disposal services.',
    details: [
      'Concrete & Brick Disposal',
      'Wood & Lumber Waste',
      'Drywall & Plaster',
      'Metal Scrapping',
      'Environmentally Conscious Disposal',
    ],
    extendedDetails: 'Construction sites can quickly become hazardous if debris isn’t managed correctly. We offer regular debris pickups for ongoing projects or one-time drop-off service for completed jobs. We handle heavy materials like concrete and soil, ensuring they are transported and disposed of according to local environmental regulations, saving you time and liability.',
    icon: Package,
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xe1r791alfk.png',
  },
  {
    id: 'demo',
    title: 'Small Demo',
    description: 'Professional light demolition services for residential projects. We handle the teardown and the cleanup, ensuring your project moves forward safely and efficiently.',
    details: [
      'Shed & Outbuilding Removal',
      'Deck & Patio Demo',
      'Fence & Gate Removal',
      'Interior Wall Demo',
      'Full Site Cleanup Post-Demo',
    ],
    extendedDetails: 'Need a dilapidated shed removed or a deck torn out for a new project? Our small demo services bridge the gap between simple hauling and heavy-duty demolition. We bring the tools and expertise to safely dismantle smaller structures, carefully separating materials for recycling where possible. Our team ensures that all underground utilities are identified before we start and that the site is perfectly graded and clear when we finish.',
    icon: Hammer,
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xdzbibl3bwg.png',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <PageMeta
        title="Our Services | AP Pro Hauling"
        description="Explore the professional hauling services offered by AP Pro Hauling. From 10-20yd dumpster rentals and junk removal to equipment transport and small demo projects in Martinez, CA."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 md:mb-24 text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-black uppercase tracking-widest text-sm">What We Do</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4 md:mb-6 text-slate-900">
            Comprehensive <span className="text-primary">Hauling Solutions</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-slate-600">
            We offer professional, reliable, and contractor-grade services for all your disposal and transport needs.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <div className="space-y-16 md:space-y-32">
        {detailedServices.map((service, index) => (
          <section key={service.id} id={service.id} className={`container mx-auto px-4 py-8 md:py-16 ${index % 2 === 1 ? 'bg-slate-50 rounded-2xl md:rounded-3xl border-2 border-slate-100 shadow-sm' : ''}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 order-2 lg:order-none"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-xl text-white shadow-lg">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight text-slate-900">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg font-semibold text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <h3 className="text-base md:text-xl font-black uppercase tracking-widest text-primary border-b-2 border-primary/20 w-fit pb-1">Included in Service:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-black uppercase tracking-tight text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <CollapsibleSection title="View Service Details" className="mt-8">
                  <p className="text-sm md:text-base font-semibold leading-relaxed">
                    {service.extendedDetails}
                  </p>
                </CollapsibleSection>

                <Button asChild size="lg" className="h-12 md:h-16 px-6 md:px-10 text-base md:text-lg font-black uppercase tracking-widest shadow-xl bg-primary text-white hover:bg-primary/90 transition-all w-full sm:w-auto">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-none"
              >
                <div className="aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded-2xl text-white shadow-2xl border-2 border-primary/20 hidden sm:block">
                  <p className="text-2xl font-black uppercase leading-none mb-1 text-primary">Fast Delivery</p>
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Guaranteed Professionalism</p>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA Section */}
      <section className="py-12 md:py-24 container mx-auto px-4 mt-12 md:mt-24">
        <div className="bg-primary p-6 sm:p-8 md:p-12 lg:p-24 rounded-2xl md:rounded-[3rem] text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/2" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl mx-auto">
              Ready for a cleaner project site?
            </h2>
            <p className="text-base md:text-xl font-bold opacity-90 max-w-2xl mx-auto">
              Our team is ready to deliver the dumpsters and hauling services you need today.
            </p>
            <Button asChild variant="secondary" size="lg" className="h-12 md:h-16 px-8 md:px-12 text-base md:text-xl font-black uppercase tracking-widest text-primary hover:bg-white transition-colors group w-full sm:w-auto">
              <Link to="/contact" className="flex items-center">
                Contact Us Now <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
