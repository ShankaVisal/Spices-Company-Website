import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Leaf, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              About Spiceverse
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Tracing the roots of flavor, from our home to yours.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Our Team"
                  data-ai-hint="team smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Spiceverse was born from a passion for authentic Sri Lankan flavors and a desire to share them with the world. Our journey began in the lush spice gardens of Sri Lanka, where generations have perfected the art of cultivating and curing spices.
                </p>
                <p className="text-muted-foreground">
                  We believe in sustainable farming, ethical sourcing, and preserving the rich heritage of Sri Lankan spice traditions. Every product we offer is a testament to our commitment to quality and authenticity.
                </p>
              </div>
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
