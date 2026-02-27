import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const CollapsibleSection = ({
  title,
  children,
  defaultOpen = false,
  className,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('border-2 border-primary/10 rounded-2xl bg-card overflow-hidden shadow-sm hover:border-primary/20 transition-all', className)}>
      <Button
        variant="ghost"
        className="w-full justify-between py-6 h-auto hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-xl font-black uppercase tracking-tight text-left">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-primary shrink-0" />
        ) : (
          <ChevronDown className="h-6 w-6 text-primary shrink-0" />
        )}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-primary/5">
              <div className="text-base md:text-lg font-semibold text-muted-foreground leading-relaxed pl-4 border-l-4 border-primary/20">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
