import type { Testimonial, NewsEvent, BlogPost, GalleryContent } from '@/lib/types';

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
    { src: 'https://i.pinimg.com/736x/4d/d0/e0/4dd0e07bc6dfdcec0c9b4c973a534db8.jpg', alt: 'Colorful spices in bowls', hint: 'spices bowls' },
    { src: 'https://i.pinimg.com/736x/6c/9f/0d/6c9f0dc7d1062c6af6fda60f07c38bf8.jpg', alt: 'Sri Lankan curry dish', hint: 'sri lankan curry' },
    { src: 'https://i.pinimg.com/736x/2a/55/ce/2a55cec13b277ae73d049a9f9b4f2e21.jpg', alt: 'Cinnamon plantation', hint: 'cinnamon plantation' },
    { src: 'https://i.pinimg.com/736x/2c/0a/92/2c0a92ca706d63ad227bc2d45b56ce4e.jpg', alt: 'Fresh market spices', hint: 'spice market' },
];

export const galleryContent: GalleryContent[] = [
  {
    id: 1,
    title: { en: 'The Heart of Flavor', si: 'රසයේ හදවත' },
    description: { en: 'Our spices are sourced from the lush, verdant gardens of Sri Lanka, where traditional farming methods yield the purest and most potent flavors.', si: 'අපගේ කුළුබඩු ශ්‍රී ලංකාවේ සශ්‍රීක, හරිත උද්‍යානවලින් ලබා ගන්නා අතර, එහිදී සම්ප්‍රදායික ගොවිතැන් ක්‍රම මගින් පිරිසිදුම සහ ප්‍රබලම රසයන් ලබා දේ.' },
    image: 'https://i.pinimg.com/736x/f7/bc/31/f7bc312795be16903ba822fd84314890.jpg',
    aiHint: 'spice plantation'
  },
  {
    id: 2,
    title: { en: 'From Harvest to Home', si: 'අස්වැන්නේ සිට නිවසට' },
    description: { en: 'Each spice is carefully hand-picked, dried, and processed by local communities, preserving the authentic taste and aroma in every batch.', si: 'සෑම කුළුබඩුවක්ම ප්‍රදේශයේ ප්‍රජාවන් විසින් ප්‍රවේශමෙන් අතින් නෙළා, වියළා, සකස් කර, සෑම කාණ්ඩයකම සත්‍ය රසය සහ සුවඳ ආරක්ෂා කරයි.' },
    image: 'https://i.pinimg.com/736x/ff/80/dc/ff80dcd724eaae9fe3563d9740a45b58.jpg',
    aiHint: 'spices drying'
  },
  {
    id: 3,
    title: { en: 'A Symphony of Spices', si: 'කුළුබඩු සංධ්වනියක්' },
    description: { en: 'Our curated collection includes everything from the fiery warmth of black pepper to the delicate sweetness of Ceylon cinnamon, ready to transform your cooking.', si: 'අපගේ සකසන ලද එකතුවට කළු ගම්මිරිස්වල ගිනිමය උණුසුමේ සිට ලංකා කුරුඳු වල සියුම් පැණිරස දක්වා සියල්ල ඇතුළත් වන අතර, ඔබේ ඉවුම් පිහුම් පරිවර්තනය කිරීමට සූදානම්.' },
    image: 'https://i.pinimg.com/736x/c9/4b/da/c94bda75cef60951ab6e6c14ae815cba.jpg',
    aiHint: 'spices variety'
  }
];

export const newsAndEvents: NewsEvent[] = [
  {
    id: 1,
    title: 'New Organic Spice Line Launched',
    date: 'August 15, 2024',
    description: 'We are thrilled to announce our new line of certified organic spices, sourced directly from sustainable farms.',
    content: 'We are thrilled to announce our new line of certified organic spices, sourced directly from sustainable farms. This collection features our most popular spices, now available with organic certification, ensuring the purest quality and taste. We believe in supporting farming practices that are good for you and for the planet.',
    images: [
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png'
    ],
    aiHints: ['organic spices', 'sustainable farm', 'spice packaging']
  },
  {
    id: 2,
    title: 'Spiceverse at the Good Food Show',
    date: 'July 28, 2024',
    description: 'Come visit our booth at the International Good Food Show in London. We will be offering samples and special discounts.',
    content: 'Come visit our booth at the International Good Food Show in London. We will be offering samples of our latest products, special event-only discounts, and live cooking demonstrations. Meet the team and experience the world of Spiceverse firsthand!',
    images: [
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png'
    ],
    aiHints: ['food show', 'event booth', 'cooking demonstration']
  },
  {
    id: 3,
    title: 'Cooking Workshop: The Art of Curry',
    date: 'June 05, 2024',
    description: 'Join our masterclass on creating the perfect Sri Lankan curry. Limited spots available, book now!',
    content: 'Join our masterclass on creating the perfect Sri Lankan curry. This hands-on workshop will guide you through the essential techniques and spice blends to create an authentic and delicious curry. Limited spots are available, so book now to avoid disappointment!',
    images: [
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png'
    ],
    aiHints: ['cooking workshop', 'sri lankan curry', 'people cooking']
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Health Benefits of Turmeric',
    category: 'Wellness',
    image: 'https://i.pinimg.com/736x/0f/81/32/0f81327b2f1e5988cef9798129da7667.jpg',
    aiHint: 'turmeric drink',
    content: "Turmeric, the golden spice, has been used for centuries in traditional medicine. Its active compound, curcumin, is a powerful antioxidant and has anti-inflammatory properties. Studies suggest that turmeric can help improve heart health, brain function, and may even have cancer-fighting properties. Incorporating a teaspoon of turmeric into your daily diet, whether in a curry, a smoothie, or a warm latte, can be a delicious way to boost your overall health."
  },
  {
    id: 2,
    title: 'A Guide to Ceylon vs. Cassia Cinnamon',
    category: 'Education',
    image: 'https://i.pinimg.com/736x/72/27/4b/72274b514bf5cd7b7b7ce6504f4b42da.jpg',
    aiHint: 'cinnamon types',
    content: "Not all cinnamon is created equal. Ceylon cinnamon, often called 'true cinnamon,' comes from Sri Lanka and has a delicate, sweet flavor. Cassia cinnamon, the more common variety, has a stronger, spicier flavor. Besides taste, the key difference lies in the coumarin content. Cassia has high levels of coumarin, which can be harmful in large doses, while Ceylon cinnamon has only trace amounts. For health-conscious consumers and culinary enthusiasts, Ceylon cinnamon is the superior choice."
  },
  {
    id: 3,
    title: 'Recipe: Authentic Sri Lankan Chicken Curry',
    category: 'Recipes',
    image: 'https://i.pinimg.com/736x/c8/3c/54/c83c54496aab8ad51d7978f1f8b6ee96.jpg',
    aiHint: 'chicken curry',
    content: "Ready to make a truly authentic Sri Lankan chicken curry? You'll need our special unroasted curry powder, coconut milk, and a blend of our finest spices like cardamom, cloves, and cinnamon. Sauté onions, garlic, and ginger, then add the chicken and spices. Let it simmer in coconut milk until the chicken is tender and the flavors have melded together beautifully. Serve with hot rice for a meal that will transport you to the heart of Sri Lanka."
  },
];
