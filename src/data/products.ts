import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 1,
    name: { en: 'Cinnamon Sticks', si: 'කුරුඳු පොතු' },
    description: { en: 'Premium quality Ceylon cinnamon sticks, perfect for both sweet and savory dishes.', si: 'පැණිරස හා රසවත් කෑම සඳහා සුදුසු, උසස් තත්ත්වයේ ලංකා කුරුඳු පොතු.' },
    price: 500,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'cinnamon sticks'
  },
  {
    id: 2,
    name: { en: 'Whole Cloves', si: 'කරාබු නැටි' },
    description: { en: 'Aromatic whole cloves that add a warm, sweet flavor to your culinary creations.', si: 'ඔබේ සූපශාස්ත්‍ර නිර්මාණවලට උණුසුම්, මිහිරි රසයක් එක් කරන සුවඳැති කරාබු නැටි.' },
    price: 350,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'cloves spice'
  },
  {
    id: 3,
    name: { en: 'Turmeric Powder', si: 'කහ කුඩු' },
    description: { en: 'Vibrant and earthy turmeric powder, a staple in Sri Lankan cooking for color and health benefits.', si: 'වර්ණය සහ සෞඛ්‍ය ප්‍රතිලාභ සඳහා ශ්‍රී ලාංකේය ඉවුම් පිහුම් වල ප්‍රධානතම, විචිත්‍රවත් සහ පස් රසැති කහ කුඩු.' },
    price: 400,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'turmeric powder'
  },
  {
    id: 4,
    name: { en: 'Black Peppercorns', si: 'කළු ගම්මිරිස්' },
    description: { en: 'Fiery and pungent whole black peppercorns to add a bold kick to any dish.', si: 'ඕනෑම කෑමකට තද රසයක් එක් කිරීමට සැර සහ තියුණු කළු ගම්මිරිස් ඇට.' },
    price: 600,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'black peppercorns'
  },
  {
    id: 5,
    name: { en: 'Cardamom Pods', si: 'කරදමුංගු' },
    description: { en: 'Fragrant green cardamom pods, offering a complex blend of minty, spicy, and citrusy notes.', si: 'මින්ටි, කුළුබඩු සහ පැඟිරි සටහන් වල සංකීර්ණ මිශ්‍රණයක් ලබා දෙන සුවඳැති කොළ කරදමුංගු කරල්.' },
    price: 750,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'cardamom pods'
  },
];

export const uiStrings = {
  cartTitle: { en: 'Your Order', si: 'ඔබගේ ඇණවුම' },
  total: { en: 'Total', si: 'එකතුව' },
  orderButton: { en: 'Order on WhatsApp', si: 'WhatsApp මගින් ඇණවුම් කරන්න' },
  emptyCart: { en: 'Your cart is empty', si: 'ඔබේ කරත්තය හිස්' },
  addToCart: { en: 'Add to Cart', si: 'කරත්තයට එක් කරන්න' },
  addedToCart: { en: 'Added to cart!', si: 'කරත්තයට එක් කරන ලදී!' },
  ourProducts: { en: 'Our Products', si: 'අපේ නිෂ්පාදන' },
  recipeToolTitle: { en: 'Need Some Inspiration?', si: 'යම් අදහසක් අවශ්‍යද?' },
  recipeToolDescription: { en: 'Select the spices you have, and our AI will suggest delicious recipes for you.', si: 'ඔබ සතුව ඇති කුළුබඩු තෝරන්න, අපගේ AI ඔබ සඳහා රසවත් වට්ටෝරු යෝජනා කරනු ඇත.' },
  selectSpices: { en: 'Select your spices:', si: 'ඔබේ කුළුබඩු තෝරන්න:' },
  suggestRecipes: { en: 'Suggest Recipes', si: 'වට්ටෝරු යෝජනා කරන්න' },
  suggestions: { en: 'Our Suggestions', si: 'අපේ යෝජනා' },
  viewRecipe: { en: 'View Recipe', si: 'වට්ටෝරුව බලන්න' },
  generating: { en: 'Generating ideas...', si: 'අදහස් ජනනය කරමින්...' },
  spiceverse: { en: 'Spiceverse', si: 'ස්පයිස්වර්ස්' },
  footerText: { en: '© 2024 Spiceverse. All rights reserved.', si: '© 2024 ස්පයිස්වර්ස්. සියලුම හිමිකම් ඇවිරිණි.' },
  heroSlogan: { en: 'The authentic taste of Sri Lanka, delivered to your kitchen.', si: 'ශ්‍රී ලංකාවේ සැබෑ රසය, ඔබේ මුළුතැන්ගෙට.' },
  exploreSpices: { en: 'Explore Spices', si: 'කුළුබඩු ගවේෂණය කරන්න' },
};
