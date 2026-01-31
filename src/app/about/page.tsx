
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Leaf, Users, Target, Eye, Goal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Devi Products',
  description: 'Learn about the story, mission, and values of Devi Products, and meet our founder, Shanka Visal. Discover our passion for authentic, ethically sourced Sri Lankan spices and our commitment to quality.',
  openGraph: {
    title: 'About Devi Products',
    description: 'Learn about the story, mission, values, and founder of Devi Products.',
  }
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 pt-32 md:py-32 md:pt-48 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              About Devi Products
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90">
              Tracing the roots of flavor, from our home to yours.
            </p>
          </div>
           <Image
              src="https://images.alphacoders.com/114/thumb-1920-1140315.jpg"
              alt="About background"
              data-ai-hint="spices texture"
              fill
              className="object-cover object-center absolute inset-0 z-0 opacity-100"
            />
             <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://i.pinimg.com/736x/be/b9/55/beb9559c9d6b4ebadd68dde27a66760f.jpg"
                  alt="Our Team"
                  data-ai-hint="team smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Devi Products was born from a passion for authentic Sri Lankan flavors and a desire to share them with the world. Our journey began in the lush spice gardens of Sri Lanka, where generations have perfected the art of cultivating and curing spices.
                </p>
                <p className="text-muted-foreground">
                  We believe in sustainable farming, ethical sourcing, and preserving the rich heritage of Sri Lankan spice traditions. Every product we offer is a testament to our commitment to quality and authenticity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                 <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://wtxtchqioofzyrzulhoz.supabase.co/storage/v1/object/public/people/shanka-visal-founder.jpg"
                      alt="Shanka Visal, Founder of Devi Products"
                      data-ai-hint="founder portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Meet Our Founder</h2>
                 <p className="text-muted-foreground mb-4">
                  Shanka Visal, the visionary founder behind Devi Products, is on a mission to share the rich culinary traditions of Sri Lanka. An entrepreneur with a passion for quality and authenticity, Shanka is bridging the gap between local spice farmers and the global market. He believes in combining modern innovation with timeless tradition to bring the purest flavors from his homeland to your kitchen.
                </p>
                <p className="text-muted-foreground">
                  Learn more about his journey and other projects on his personal portfolio.
                </p>
                <Button asChild className="mt-4">
                    <a href="https://www.shankavisal.com" target="_blank" rel="noopener noreferrer">
                        Visit shankavisal.com
                    </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Eye className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2 font-headline">Our Vision</CardTitle>
                  <p className="text-muted-foreground">To be the most trusted and beloved provider of authentic Sri Lankan spices, bringing the true taste of our heritage to kitchens around the globe.</p>
                </CardContent>
              </Card>
               <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Goal className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2 font-headline">Our Mission</CardTitle>
                  <p className="text-muted-foreground">To ethically source the highest quality spices from local Sri Lankan communities, celebrate our culinary traditions, and inspire a passion for flavorful, authentic cooking.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Values</h2>
                 <div className="grid md:grid-cols-3 gap-8 text-center">
                    <Card>
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <Leaf className="h-8 w-8 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2 font-headline">Authenticity</CardTitle>
                            <p className="text-muted-foreground">Sourcing the finest, purest spices directly from Sri Lankan gardens.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2 font-headline">Community</CardTitle>
                            <p className="text-muted-foreground">Supporting local farmers and their communities through fair trade practices.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2 font-headline">Quality</CardTitle>
                            <p className="text-muted-foreground">Ensuring every product meets our high standards of freshness and potency.</p>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
