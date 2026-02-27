import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 md:py-3'
      )}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-3 md:gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="AP Pro Hauling Home">
          <img
            src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xdzbibl3bwg.png"
            alt="AP Pro Hauling Logo"
            className="h-8 md:h-12 lg:h-14 object-contain"
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1" role="navigation" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-xs xl:text-sm font-black uppercase tracking-widest transition-colors hover:text-primary whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded',
                location.pathname === item.path ? 'text-primary' : 'text-slate-900'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side - Phone Button */}
        <div className="hidden lg:block shrink-0">
          <Button asChild variant="default" className="font-black uppercase tracking-widest h-11 px-6 shadow-md shadow-primary/20 bg-primary text-white hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <a href="tel:925-995-8255" aria-label="Call AP Pro Hauling at 925-995-8255">
              Call Now: (925) 995-8255
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="tel:925-995-8255" className="text-primary font-black text-sm" aria-label="Call Now">
            Call Now
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900" aria-label="Open Mobile Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white" role="dialog" aria-label="Mobile Navigation Menu">
              <div className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'text-lg font-black uppercase tracking-wider transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-2',
                      location.pathname === item.path ? 'text-primary' : 'text-slate-900'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4 font-black uppercase tracking-wider w-full bg-primary text-white">
                  <a href="tel:925-995-8255" aria-label="Call Now: 925-995-8255">
                    Call Now: (925) 995-8255
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
