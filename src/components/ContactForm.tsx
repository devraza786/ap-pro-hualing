import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  serviceType: z.string({ required_error: 'Please select a service type.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success('Quote Request Sent!', {
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <div className="bg-card p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl border-2 border-primary/10">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 md:mb-8 text-foreground border-b-4 border-primary w-fit pb-2">
        Request a Free Quote
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-black uppercase tracking-widest text-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="h-12 border-2 focus-visible:ring-primary font-bold" />
                  </FormControl>
                  <FormMessage className="text-xs font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-black uppercase tracking-widest text-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="h-12 border-2 focus-visible:ring-primary font-bold" />
                  </FormControl>
                  <FormMessage className="text-xs font-bold" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-black uppercase tracking-widest text-foreground">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(925) 995-8255" {...field} className="h-12 border-2 focus-visible:ring-primary font-bold" />
                  </FormControl>
                  <FormMessage className="text-xs font-bold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-black uppercase tracking-widest text-foreground">Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 border-2 focus:ring-primary font-bold">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-popover border-2">
                      <SelectItem value="dumpster" className="font-bold">Dumpster Rental (10yd-20yd)</SelectItem>
                      <SelectItem value="junk" className="font-bold">Junk Removal</SelectItem>
                      <SelectItem value="transport" className="font-bold">Equipment Transport</SelectItem>
                      <SelectItem value="debris" className="font-bold">Debris Drop Off</SelectItem>
                      <SelectItem value="demo" className="font-bold">Small Demo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs font-bold" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-black uppercase tracking-widest text-foreground">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] border-2 focus-visible:ring-primary font-bold"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-bold" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full h-12 md:h-14 text-base md:text-lg font-black uppercase tracking-widest group">
            Request Quote
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </Form>
    </div>
  );
};
