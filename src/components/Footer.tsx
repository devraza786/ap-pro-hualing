import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  'Dumpster Rentals',
  'Junk Removal',
  'Equipment Transport',
  'Debris Drop Off',
  'Small Demo',
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-10 md:pt-16 pb-6 md:pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand & Bio */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xdzbibl3bwg.png"
                alt="AP Pro Hauling"
                className="h-20 object-contain bg-white p-2 rounded-md"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional contractor-grade hauling services in Martinez, CA. We provide reliable dumpster rentals, junk removal, and equipment transport across Contra Costa County.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4 md:mb-6 border-b-2 border-primary w-fit pb-1">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4 md:mb-6 border-b-2 border-primary w-fit pb-1">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm font-semibold">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4 md:mb-6 border-b-2 border-primary w-fit pb-1">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-semibold">
                  4 Giannini Rd, Martinez, CA 94553, United States
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:925-995-8255"
                  className="text-sm font-bold hover:text-primary transition-colors"
                >
                  925-995-8255
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:approhauling@gmail.com"
                  className="text-sm font-bold hover:text-primary transition-colors"
                >
                  approhauling@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/20 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
            &copy; 2026 AP Pro Hauling. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
