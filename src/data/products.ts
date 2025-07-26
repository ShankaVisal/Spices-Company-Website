
import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 1,
    slug: 'cinnamon-sticks',
    name: { en: 'Cinnamon Sticks', si: 'කුරුඳු පොතු' },
    description: { en: 'Premium quality Ceylon cinnamon sticks, perfect for both sweet and savory dishes.', si: 'පැණිරස හා රසවත් කෑම සඳහා සුදුසු, උසස් තත්ත්වයේ ලංකා කුරුඳු පොතු.' },
    longDescription: { en: 'Sourced from the bark of the Cinnamomum verum tree, our Ceylon cinnamon sticks are known for their delicate, sweet flavor and numerous health benefits. Unlike the more common Cassia cinnamon, Ceylon cinnamon has lower levels of coumarin, making it a safer choice for regular consumption. Perfect for flavoring teas, curries, and baked goods.', si: 'Cinnamomum verum ගසේ පොත්තෙන් ලබාගත් අපගේ ලංකා කුරුඳු පොතු, එහි සියුම්, මිහිරි රසය සහ බොහෝ සෞඛ්‍ය ප්‍රතිලාභ සඳහා ප්‍රසිද්ධය. වඩාත් සුලභ Cassia කුරුඳු මෙන් නොව, ලංකා කුරුඳු වල කූමරින් මට්ටම අඩු බැවින්, එය නිතිපතා පරිභෝජනය සඳහා ආරක්ෂිත තේරීමක් වේ. තේ, කරි සහ බේක් කරන ලද භාණ්ඩ රස ගැන්වීම සඳහා පරිපූර්ණයි.' },
    variants: [
        { weight: '50g', price: 500 },
        { weight: '100g', price: 900 },
        { weight: '250g', price: 2000 },
    ],
    image: 'https://i.pinimg.com/736x/1f/b4/58/1fb458655de3143913c5a0db00921b9f.jpg',
    aiHint: 'cinnamon sticks',
    reviews: [
      { id: 1, author: 'Anusha P.', rating: 5, comment: 'The best cinnamon I have ever used. The aroma is amazing!' },
      { id: 2, author: 'John Doe', rating: 4, comment: 'Good quality, but a bit pricey.' }
    ]
  },
  {
    id: 2,
    slug: 'whole-cloves',
    name: { en: 'Whole Cloves', si: 'කරාබු නැටි' },
    description: { en: 'Aromatic whole cloves that add a warm, sweet flavor to your culinary creations.', si: 'ඔබේ සූපශාස්ත්‍ර නිර්මාණවලට උණුසුම්, මිහිරි රසයක් එක් කරන සුවඳැති කරාබු නැටි.' },
    longDescription: { en: 'Our whole cloves are hand-picked to ensure the highest quality. They have a strong, sweet aroma and are perfect for studding meats, flavoring sauces, and making mulled wines. A staple in both Asian and Western cuisines.', si: 'අපගේ කරාබු නැටි ඉහළම ගුණාත්මක බව සහතික කිරීම සඳහා අතින් නෙළනු ලැබේ. ඒවාට ශක්තිමත්, මිහිරි සුවඳක් ඇති අතර මස්, රසකාරක සෝස් සහ මල්ඩ් වයින් සෑදීම සඳහා පරිපූර්ණයි. ආසියානු සහ බටහිර ආහාර පිසීමේ ප්‍රධාන අංගයකි.' },
    variants: [
        { weight: '50g', price: 350 },
        { weight: '100g', price: 650 },
        { weight: '250g', price: 1500 },
    ],
    image: 'https://i.pinimg.com/736x/63/3c/5e/633c5e2d6fd7b4b516d10c11c4451c24.jpg',
    aiHint: 'cloves spice',
    reviews: [
        { id: 1, author: 'Saman Silva', rating: 5, comment: 'Very fresh and fragrant. Excellent for my biryani.'}
    ]
  },
  {
    id: 3,
    slug: 'turmeric-powder',
    name: { en: 'Turmeric Powder', si: 'කහ කුඩු' },
    description: { en: 'Vibrant and earthy turmeric powder, a staple in Sri Lankan cooking for color and health benefits.', si: 'වර්ණය සහ සෞඛ්‍ය ප්‍රතිලාභ සඳහා ශ්‍රී ලාංකේය ඉවුම් පිහුම් වල ප්‍රධානතම, විචිත්‍රවත් සහ පස් රසැති කහ කුඩු.' },
    longDescription: { en: "Our turmeric powder is ground from the finest quality turmeric roots. It has a bright yellow color and a warm, slightly bitter flavor. Known for its anti-inflammatory properties, it's a must-have in any kitchen.", si: "අපගේ කහ කුඩු හොඳම තත්ත්වයේ කහ අල වලින් අඹරා ඇත. එය දීප්තිමත් කහ පැහැයක් සහ උණුසුම්, තරමක් කටුක රසයක් ඇත. එහි ප්‍රති-ගිනි අවුලුවන ගුණාංග සඳහා ප්‍රසිද්ධ, එය ඕනෑම මුළුතැන්ගෙයක තිබිය යුතුම දෙයකි." },
    variants: [
        { weight: '50g', price: 400 },
        { weight: '100g', price: 750 },
        { weight: '250g', price: 1700 },
    ],
    image: 'https://i.pinimg.com/736x/17/91/e4/1791e458518b0910d9d41af5d99fbdeb.jpg',
    aiHint: 'turmeric powder'
  },
  {
    id: 4,
    slug: 'black-peppercorns',
    name: { en: 'Black Peppercorns', si: 'කළු ගම්මිරිස්' },
    description: { en: 'Fiery and pungent whole black peppercorns to add a bold kick to any dish.', si: 'ඕනෑම කෑමකට තද රසයක් එක් කිරීමට සැර සහ තියුණු කළු ගම්මිරිස් ඇට.' },
    longDescription: { en: "Experience the robust flavor of our premium black peppercorns. Sourced from the best pepper vines in Sri Lanka, they offer a sharp, pungent heat that enhances any savory dish. Grind them fresh for the best results.", si: "අපගේ උසස් තත්ත්වයේ කළු ගම්මිරිස්වල ශක්තිමත් රසය අත්විඳින්න. ශ්‍රී ලංකාවේ හොඳම ගම්මිරිස් වැල් වලින් ලබාගත් ඒවා, ඕනෑම රසවත් කෑමක් වැඩි දියුණු කරන තියුණු, සැර තාපයක් ලබා දෙයි. හොඳම ප්‍රතිඵල සඳහා ඒවා නැවුම්ව අඹරන්න." },
    variants: [
        { weight: '50g', price: 600 },
        { weight: '100g', price: 1100 },
        { weight: '250g', price: 2500 },
    ],
    image: 'https://i.pinimg.com/736x/74/32/ae/7432aed93e936f510a8d9be50aa90074.jpg',
    aiHint: 'black peppercorns'
  },
  {
    id: 5,
    slug: 'cardamom-pods',
    name: { en: 'Cardamom Pods', si: 'කරදමුංගු' },
    description: { en: 'Fragrant green cardamom pods, offering a complex blend of minty, spicy, and citrusy notes.', si: 'මින්ටි, කුළුබඩු සහ පැඟිරි සටහන් වල සංකීර්ණ මිශ්‍රණයක් ලබා දෙන සුවඳැති කොළ කරදමුංගු කරල්.' },
    longDescription: { en: "Our green cardamom pods are prized for their intense aroma and flavor. A versatile spice, they can be used in both sweet and savory dishes, from curries and rice pilafs to desserts and beverages. A little goes a long way.", si: "අපගේ කොළ කරදමුංගු කරල් ඒවායේ තීව්‍ර සුවඳ සහ රසය සඳහා ඉහළ අගයක් ගනී. බහුකාර්ය කුළුබඩුවක් වන, ඒවා ව්‍යංජන සහ බත් පිලාෆ් සිට අතුරුපස සහ බීම දක්වා පැණිරස හා රසවත් කෑම වර්ග දෙකෙහිම භාවිතා කළ හැකිය. ස්වල්පයක් බොහෝ දුර යයි." },
    variants: [
        { weight: '50g', price: 750 },
        { weight: '100g', price: 1400 },
        { weight: '250g', price: 3200 },
    ],
    image: 'https://i.pinimg.com/736x/28/c6/48/28c648b0a74979111f737955b05d05cd.jpg',
    aiHint: 'cardamom pods'
  },
  {
    id: 6,
    slug: 'black-garcinia',
    name: { en: 'Black Garcinia', si: 'කළු ගොරකා' },
    description: { en: 'Sun-dried goraka, essential for authentic Sri Lankan fish curries and other sour dishes.', si: 'හිරු එළියෙන් වියලන ලද ගොරකා, ශ්‍රී ලාංකේය මාළු කරි සහ අනෙකුත් ඇඹුල් රසැති කෑම සඳහා අත්‍යවශ්‍ය වේ.' },
    longDescription: { en: "Also known as Garcinia Cambogia, black garcinia (goraka) is a souring agent used in Sri Lankan cuisine, particularly in fish curries. It imparts a unique sour and slightly smoky flavor. Our goraka is naturally sun-dried to preserve its authentic taste.", si: "Garcinia Cambogia ලෙසද හැඳින්වෙන, කළු ගොරකා යනු ශ්‍රී ලාංකේය ආහාර පිසීමේදී, විශේෂයෙන් මාළු කරි වල භාවිතා වන ඇඹුල් කාරකයකි. එය අද්විතීය ඇඹුල් සහ තරමක් දුම් රසයක් ලබා දෙයි. අපගේ ගොරකා එහි සැබෑ රසය ආරක්ෂා කර ගැනීම සඳහා ස්වභාවිකව හිරු එළියෙන් වියළනු ලැබේ." },
    variants: [
        { weight: '50g', price: 450 },
        { weight: '100g', price: 850 },
        { weight: '250g', price: 1900 },
    ],
    image: 'https://i.pinimg.com/736x/0e/6b/c8/0e6bc899818814725355a1a2380598f3.jpg',
    aiHint: 'black garcinia'
  }
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
