
'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              Get In Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              We&apos;d love to hear from you. Whether you have a question, feedback, or a partnership inquiry, please reach out.
            </p>
          </div>
            <Image
                src="https://i.pinimg.com/736x/0f/96/13/0f96138a521cbe134e816fafa8b5fd55.jpg"
                alt="Contact background"
                data-ai-hint="contact us"
                fill
                className="object-cover object-center absolute inset-0 z-0 opacity-100"
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>

        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-muted-foreground">hello@spiceverse.com</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <p className="text-muted-foreground">+94 11 234 5678</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <h3 className="font-semibold text-lg">Address</h3>
                                    <p className="text-muted-foreground">123 Spice Grove, Colombo, Sri Lanka</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <h3 className="font-semibold text-lg">Website</h3>
                                    <a href="https://www.spiceverse.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">www.spiceverse.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                                <CardDescription>Fill out the form below and we will get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Doe" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Your message..." required />
                                    </div>
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
