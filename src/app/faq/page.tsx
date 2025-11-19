
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about Devi Products, our Sri Lankan spices, shipping, and storage. Learn about Ceylon cinnamon, organic options, and more.',
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Devi Products',
    description: 'Find answers to common questions about our Sri Lankan spices, shipping, and more.',
  }
};

const faqs = [
    {
        question: "Where do you source your spices from?",
        answer: "All our spices are sourced directly from sustainable and ethical spice gardens across Sri Lanka. We work closely with local farmers to ensure the highest quality and freshness."
    },
    {
        question: "Are your products organic?",
        answer: "We offer a wide range of spices, including a dedicated line of certified organic products. Please check the product description for details on organic certification."
    },
    {
        question: "What is Ceylon Cinnamon and how is it different?",
        answer: "Ceylon Cinnamon, also known as 'true cinnamon,' is native to Sri Lanka. It has a more delicate and sweet flavor compared to the more common Cassia cinnamon. It also has lower levels of coumarin, a natural compound that can be harmful in large doses."
    },
    {
        question: "How should I store my spices?",
        answer: "To maintain maximum freshness and potency, store your spices in a cool, dark, and dry place. Our resealable packaging is designed to protect the spices from light, air, and moisture."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship our spices worldwide! Shipping costs and times vary depending on the destination. You can find more details on our shipping policy page."
    }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={faqSchema} />
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-40 -mt-20 pt-56">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Have questions? We have answers.
            </p>
          </div>
            <Image
                src="https://i.pinimg.com/1200x/f4/a3/6c/f4a36cf68220ea119daebe3136067e8b.jpg"
                alt="FAQ background"
                data-ai-hint="question mark"
                fill
                className="object-cover object-center absolute inset-0 z-0 opacity-100"
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>

        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
