import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const ServiceCard = ({ title, description, icon: Icon, path }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-2 border-transparent hover:border-primary transition-all shadow-md hover:shadow-xl bg-card">
        <CardHeader className="pt-8">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 border border-primary/20">
            <Icon size={32} />
          </div>
          <CardTitle className="text-2xl font-black uppercase tracking-tight line-height-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground font-semibold leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="pb-8">
          <Button asChild variant="outline" className="w-full font-black uppercase tracking-widest border-2">
            <Link to={path}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
