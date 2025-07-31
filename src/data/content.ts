import type { Testimonial, NewsEvent, BlogPost, GalleryContent } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: { en: 'Anusha Perera', si: 'අනුෂා පෙරේරා' },
    location: { en: 'Colombo, Sri Lanka', si: 'කොළඹ, ශ්‍රී ලංකාව' },
    quote: { en: 'The cinnamon sticks are incredibly fragrant and have elevated my baking. Truly authentic taste!', si: 'කුරුඳු පොතු ඇදහිය නොහැකි තරම් සුවඳයි. මගේ බේක් කිරීමේ කලාව ඉහළ නංවා ඇත. සැබවින්ම අව්‍යාජ රසයකි!' },
  },
  {
    id: 2,
    name: { en: 'James Smith', si: 'ජේම්ස් ස්මිත්' },
    location: { en: 'London, UK', si: 'ලන්ඩන්, එක්සත් රාජධානිය' },
    quote: { en: 'I ordered the spice collection and was blown away by the quality. The flavors are so vibrant and fresh. Highly recommend Devi Products!', si: 'මම කුළුබඩු එකතුව ඇණවුම් කළ අතර එහි ගුණාත්මකභාවය ගැන මවිතයට පත් වීමි. රසයන් ඉතා විචිත්‍රවත් හා නැවුම් ය. Devi Products බෙහෙවින් නිර්දේශ කරමි!' },
  },
  {
    id: 3,
    name: { en: 'Priya Sharma', si: 'ප්‍රියා ෂර්මා' },
    location: { en: 'Mumbai, India', si: 'මුම්බායි, ඉන්දියාව' },
    quote: { en: 'As a chef, I am very particular about my spices. Devi Products delivers top-notch quality every time. The turmeric powder is fantastic.', si: 'සූපවේදියෙකු ලෙස, මම මගේ කුළුබඩු ගැන ඉතා සැලකිලිමත් වෙමි. Devi Products සෑම විටම ඉහළම ගුණාත්මක භාවය ලබා දෙයි. කහ කුඩු විශිෂ්ටයි.' },
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
    title: { en: 'New Organic Spice Line Launched', si: 'නව කාබනික කුළුබඩු පෙළක් දියත් කෙරේ' },
    date: { en: 'August 15, 2024', si: '2024 අගෝස්තු 15' },
    description: { en: 'We are thrilled to announce our new line of certified organic spices, sourced directly from sustainable farms.', si: 'තිරසාර ගොවිපලවල් වලින් සෘජුවම ලබාගත් අපගේ නව සහතිකලත් කාබනික කුළුබඩු පෙළ ප්‍රකාශයට පත් කිරීමට ලැබීම ගැන අපි සතුටු වෙමු.' },
    content: { en: 'We are thrilled to announce our new line of certified organic spices, sourced directly from sustainable farms. This collection features our most popular spices, now available with organic certification, ensuring the purest quality and taste. We believe in supporting farming practices that are good for you and for the planet.', si: 'තිරසාර ගොවිපලවල් වලින් සෘජුවම ලබාගත් අපගේ නව සහතිකලත් කාබනික කුළුබඩු පෙළ ප්‍රකාශයට පත් කිරීමට ලැබීම ගැන අපි සතුටු වෙමු. මෙම එකතුවෙහි අපගේ වඩාත් ජනප්‍රිය කුළුබඩු අඩංගු වන අතර, දැන් කාබනික සහතිකයක් සහිතව ලබා ගත හැකි අතර, එය පිරිසිදුම ගුණාත්මකභාවය සහ රසය සහතික කරයි. ඔබටත් ග්‍රහලෝකයටත් හිතකර ගොවිතැන් පිළිවෙත් සඳහා සහාය දීමට අපි විශ්වාස කරමු.' },
    images: [
      'https://i.pinimg.com/736x/9f/75/2b/9f752bc07d30674cb2d1195cce374a86.jpg',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png'
    ],
    aiHints: ['organic spices', 'sustainable farm', 'spice packaging']
  },
  {
    id: 2,
    title: { en: 'Devi Products at the Good Food Show', si: 'Devi Products ගුඩ් ෆුඩ් ප්‍රදර්ශනයේදී' },
    date: { en: 'July 28, 2024', si: '2024 ජූලි 28' },
    description: { en: 'Come visit our booth at the International Good Food Show in London. We will be offering samples and special discounts.', si: 'ලන්ඩනයේ පැවැත්වෙන ජාත්‍යන්තර ගුඩ් ෆුඩ් ප්‍රදර්ශනයේ අපගේ කුටියට පැමිණෙන්න. අපි නියැදි සහ විශේෂ වට්ටම් ලබා දෙන්නෙමු.' },
    content: { en: 'Come visit our booth at the International Good Food Show in London. We will be offering samples of our latest products, special event-only discounts, and live cooking demonstrations. Meet the team and experience the world of Devi Products firsthand!', si: 'ලන්ඩනයේ පැවැත්වෙන ජාත්‍යන්තර ගුඩ් ෆුඩ් ප්‍රදර්ශනයේ අපගේ කුටියට පැමිණෙන්න. අපි අපගේ නවතම නිෂ්පාදනවල නියැදි, විශේෂ උත්සව-පමණි වට්ටම්, සහ සජීවී ඉවුම් පිහුම් ආදර්ශන ලබා දෙන්නෙමු. කණ්ඩායම හමුවී Devi Products ලෝකය සියැසින් අත්විඳින්න!' },
    images: [
      'https://i.pinimg.com/736x/3d/6d/5c/3d6d5ccb052a9c8d0e24b06cb78c3657.jpg',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png'
    ],
    aiHints: ['food show', 'event booth', 'cooking demonstration']
  },
  {
    id: 3,
    title: { en: 'Cooking Workshop: The Art of Curry', si: 'ඉවුම් පිහුම් වැඩමුළුව: කරි කලාව' },
    date: { en: 'June 05, 2024', si: '2024 ජූනි 05' },
    description: { en: 'Join our masterclass on creating the perfect Sri Lankan curry. Limited spots available, book now!', si: 'පරිපූර්ණ ශ්‍රී ලාංකික කරියක් සෑදීම පිළිබඳ අපගේ ප්‍රධාන පන්තියට සම්බන්ධ වන්න. සීමිත ස්ථාන ඇත, දැන්ම වෙන්කරවා ගන්න!' },
    content: { en: 'Join our masterclass on creating the perfect Sri Lankan curry. This hands-on workshop will guide you through the essential techniques and spice blends to create an authentic and delicious curry. Limited spots are available, so book now to avoid disappointment!', si: 'පරිපූර්ණ ශ්‍රී ලාංකික කරියක් සෑදීම පිළිබඳ අපගේ ප්‍රධාන පන්තියට සම්බන්ධ වන්න. මෙම ප්‍රායෝගික වැඩමුළුව ඔබට අව්‍යාජ සහ රසවත් කරියක් නිර්මාණය කිරීම සඳහා අත්‍යවශ්‍ය තාක්ෂණික ක්‍රම සහ කුළුබඩු මිශ්‍රණ හරහා මඟ පෙන්වනු ඇත. සීමිත ස්ථාන ඇත, එබැවින් කලකිරීමට පත් නොවීමට දැන්ම වෙන්කරවා ගන්න!' },
    images: [
      'https://i.pinimg.com/736x/a5/12/d3/a512d3af7dd550668c051456951f02f1.jpg',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png'
    ],
    aiHints: ['cooking workshop', 'sri lankan curry', 'people cooking']
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: { en: 'The Health Benefits of Turmeric', si: 'කහ වල සෞඛ්‍ය ප්‍රතිලාභ' },
    category: { en: 'Wellness', si: 'සුවතාවය' },
    image: 'https://i.pinimg.com/736x/0f/81/32/0f81327b2f1e5988cef9798129da7667.jpg',
    aiHint: 'turmeric drink',
    content: { en: "Turmeric, the golden spice, has been used for centuries in traditional medicine. Its active compound, curcumin, is a powerful antioxidant and has anti-inflammatory properties. Studies suggest that turmeric can help improve heart health, brain function, and may even have cancer-fighting properties. Incorporating a teaspoon of turmeric into your daily diet, whether in a curry, a smoothie, or a warm latte, can be a delicious way to boost your overall health.", si: "කහ, රන්වන් කුළුබඩුවක්, සියවස් ගණනාවක් පුරා සාම්ප්‍රදායික වෛද්‍ය විද්‍යාවේ භාවිතා කර ඇත. එහි ක්‍රියාකාරී සංයෝගය වන කුර්කුමින්, ප්‍රබල ප්‍රතිඔක්සිකාරකයක් වන අතර ප්‍රති-ගිනි අවුලුවන ගුණ ඇත. අධ්‍යයනවලින් පෙනී යන්නේ කහ හෘද සෞඛ්‍යය, මොළයේ ක්‍රියාකාරිත්වය වැඩි දියුණු කිරීමට උපකාරී වන අතර පිළිකා නාශක ගුණ පවා ඇති බවයි. කරියක, ස්මූතියක හෝ උණුසුම් ලැටේ එකක වේවා, ඔබේ දෛනික ආහාර වේලට කහ තේ හැන්දක් ඇතුළත් කර ගැනීම ඔබේ සමස්ත සෞඛ්‍යය ඉහළ නැංවීමට රසවත් ක්‍රමයක් විය හැකිය." }
  },
  {
    id: 2,
    title: { en: 'A Guide to Ceylon vs. Cassia Cinnamon', si: 'ලංකා සහ කැසියා කුරුඳු අතර මාර්ගෝපදේශය' },
    category: { en: 'Education', si: 'අධ්‍යාපනය' },
    image: 'https://i.pinimg.com/736x/72/27/4b/72274b514bf5cd7b7b7ce6504f4b42da.jpg',
    aiHint: 'cinnamon types',
    content: { en: "Not all cinnamon is created equal. Ceylon cinnamon, often called 'true cinnamon,' comes from Sri Lanka and has a delicate, sweet flavor. Cassia cinnamon, the more common variety, has a stronger, spicier flavor. Besides taste, the key difference lies in the coumarin content. Cassia has high levels of coumarin, which can be harmful in large doses, while Ceylon cinnamon has only trace amounts. For health-conscious consumers and culinary enthusiasts, Ceylon cinnamon is the superior choice.", si: "සෑම කුරුඳු වර්ගයක්ම එක හා සමානව නිර්මාණය කර නැත. 'සැබෑ කුරුඳු' ලෙස බොහෝ විට හඳුන්වනු ලබන ලංකා කුරුඳු, ශ්‍රී ලංකාවෙන් පැමිණෙන අතර සියුම්, මිහිරි රසයක් ඇත. වඩාත් සුලභ ප්‍රභේදය වන කැසියා කුරුඳු, වඩා ශක්තිමත්, කුළුබඩු රසයක් ඇත. රසයට අමතරව, ප්‍රධාන වෙනස පවතින්නේ කූමරින් අන්තර්ගතයයි. කැසියා වල ඉහළ මට්ටමේ කූමරින් ඇති අතර, එය විශාල මාත්‍රාවලින් හානිකර විය හැකි අතර, ලංකා කුරුඳු වල ඇත්තේ අංශු මාත්‍ර ප්‍රමාණයක් පමණි. සෞඛ්‍යය පිළිබඳ සැලකිලිමත් වන පාරිභෝගිකයින් සහ සූපශාස්ත්‍ර ලෝලීන් සඳහා, ලංකා කුරුඳු උසස් තේරීමකි." }
  },
  {
    id: 3,
    title: { en: 'Recipe: Authentic Sri Lankan Chicken Curry', si: 'වට්ටෝරුව: අව්‍යාජ ශ්‍රී ලාංකික චිකන් කරිය' },
    category: { en: 'Recipes', si: 'වට්ටෝරු' },
    image: 'https://i.pinimg.com/736x/c8/3c/54/c83c54496aab8ad51d7978f1f8b6ee96.jpg',
    aiHint: 'chicken curry',
    content: { en: "Ready to make a truly authentic Sri Lankan chicken curry? You'll need our special unroasted curry powder, coconut milk, and a blend of our finest spices like cardamom, cloves, and cinnamon. Sauté onions, garlic, and ginger, then add the chicken and spices. Let it simmer in coconut milk until the chicken is tender and the flavors have melded together beautifully. Serve with hot rice for a meal that will transport you to the heart of Sri Lanka.", si: "සැබෑ ශ්‍රී ලාංකික චිකන් කරියක් සෑදීමට සූදානම්ද? ඔබට අපගේ විශේෂ බැද නොගත් කරි කුඩු, පොල් කිරි, සහ කරදමුංගු, කරාබු නැටි, සහ කුරුඳු වැනි අපගේ හොඳම කුළුබඩු මිශ්‍රණයක් අවශ්‍ය වනු ඇත. ළූණු, සුදුළූණු, සහ ඉඟුරු බැද, ඉන්පසු කුකුළු මස් සහ කුළුබඩු එක් කරන්න. කුකුළු මස් මෘදු වන තුරු සහ රසයන් එකට මිශ්‍ර වන තුරු පොල් කිරිවලින් පිසීමට ඉඩ දෙන්න. ඔබව ශ්‍රී ලංකාවේ හදවතට ගෙන යන ආහාර වේලක් සඳහා උණු බත් සමඟ පිළිගන්වන්න." }
  },
];
