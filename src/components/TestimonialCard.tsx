import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const TestimonialCard = ({ name, location, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-2 border-primary/10 shadow-lg relative overflow-hidden group">
      <div className="absolute top-4 right-4 text-primary opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={60} />
      </div>
      <CardHeader className="pt-10">
        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-lg font-bold italic text-foreground leading-relaxed">
          &quot;{text}&quot;
        </p>
      </CardContent>
      <CardFooter className="pt-8 pb-10 flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-primary">
          <AvatarFallback className="bg-primary text-white font-black text-xl">
            {name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-black uppercase tracking-widest text-foreground">
            {name}
          </span>
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
            {location}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};
