import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageLoader } from './PageLoader';
import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      <PageLoader />
      <Header />
      <main className="flex-grow pt-[60px] md:pt-[72px] lg:pt-[80px]" id="main-content">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
};
