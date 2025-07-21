import type { Testimonial, NewsEvent, BlogPost } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anusha Perera',
    location: 'Colombo, Sri Lanka',
    quote: 'The cinnamon sticks are incredibly fragrant and have elevated my baking. Truly authentic taste!',
  },
  {
    id: 2,
    name: 'James Smith',
    location: 'London, UK',
    quote: 'I ordered the spice collection and was blown away by the quality. The flavors are so vibrant and fresh. Highly recommend Spiceverse!',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    quote: 'As a chef, I am very particular about my spices. Spiceverse delivers top-notch quality every time. The turmeric powder is fantastic.',
  },
];

export const galleryImages = [
    { src: 'https://placehold.co/600x600.png', alt: 'Colorful spices in bowls', hint: 'spices bowls' },
    { src: 'https://placehold.co/600x600.png', alt: 'Sri Lankan curry dish', hint: 'sri lankan curry' },
    { src: 'https://placehold.co/600x600.png', alt: 'Cinnamon plantation', hint: 'cinnamon plantation' },
    { src: 'https://placehold.co/600x600.png', alt: 'Fresh market spices', hint: 'spice market' },
];

export const newsAndEvents: NewsEvent[] = [
  {
    id: 1,
    title: 'New Organic Spice Line Launched',
    date: 'August 15, 2024',
    description: 'We are thrilled to announce our new line of certified organic spices, sourced directly from sustainable farms.',
  },
  {
    id: 2,
    title: 'Spiceverse at the Good Food Show',
    date: 'July 28, 2024',
    description: 'Come visit our booth at the International Good Food Show in London. We will be offering samples and special discounts.',
  },
  {
    id: 3,
    title: 'Cooking Workshop: The Art of Curry',
    date: 'June 05, 2024',
    description: 'Join our masterclass on creating the perfect Sri Lankan curry. Limited spots available, book now!',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Health Benefits of Turmeric',
    category: 'Wellness',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'turmeric drink'
  },
  {
    id: 2,
    title: 'A Guide to Ceylon vs. Cassia Cinnamon',
    category: 'Education',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'cinnamon types'
  },
  {
    id: 3,
    title: 'Recipe: Authentic Sri Lankan Chicken Curry',
    category: 'Recipes',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'chicken curry'
  },
];
