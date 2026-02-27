import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const PageLoader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.6,
            display: 'none',
            ease: 'power2.inOut',
          });
        },
      });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: 'power3.out',
        }
      ).to(logoRef.current, {
        scale: 1.1,
        duration: 0.6,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <img
          ref={logoRef}
          src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xdzbibl3bwg.png"
          alt="AP Pro Hauling Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
