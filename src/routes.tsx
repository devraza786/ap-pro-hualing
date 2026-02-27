import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceArea from './pages/ServiceArea';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'About',
    path: '/about',
    element: <About />
  },
  {
    name: 'Services',
    path: '/services',
    element: <Services />
  },
  {
    name: 'Service Area',
    path: '/service-area',
    element: <ServiceArea />
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <Gallery />
  },
  {
    name: 'Testimonials',
    path: '/testimonials',
    element: <Testimonials />
  },
  {
    name: 'FAQ',
    path: '/faq',
    element: <FAQ />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  },
  {
    name: 'Not Found',
    path: '*',
    element: <NotFound />
  }
];

export default routes;
