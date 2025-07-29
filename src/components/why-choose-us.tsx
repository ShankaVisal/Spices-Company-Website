import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Leaf, ShieldCheck, Sprout } from 'lucide-react';

const reasons = [
    {
        icon: <Leaf className="h-10 w-10 text-primary" />,
        title: 'Authentic Origins',
        description: 'We source our spices directly from the lush, traditional spice gardens of Sri Lanka, ensuring unparalleled authenticity in every pinch.'
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: 'Uncompromising Quality',
        description: 'Our spices are hand-selected and rigorously tested to meet the highest standards of purity, potency, and flavor. Quality is not just a promise, it\'s our guarantee.'
    },
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: 'Ethical Sourcing',
        description: 'We are committed to fair trade practices, supporting local farming communities and ensuring that every purchase makes a positive impact.'
    },
    {
        icon: <Sprout className="h-10 w-10 text-primary" />,
        title: 'Peak Freshness',
        description: 'Our streamlined process from harvest to packaging locks in the natural oils and aroma, delivering spices that are bursting with freshness and flavor.'
    }
]

export function WhyChooseUs() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold">Why Choose Spiceverse?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Discover the difference that quality, authenticity, and passion can make in your kitchen.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                         <Card key={index} className="text-center border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                    {reason.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="font-headline mb-2">{reason.title}</CardTitle>
                                <p className="text-muted-foreground text-sm">{reason.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
