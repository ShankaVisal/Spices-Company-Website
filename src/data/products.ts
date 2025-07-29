
import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 1,
    slug: 'cinnamon-sticks',
    name: { en: 'Cinnamon Sticks', si: 'කුරුඳු පොතු' },
    category: 'Spice',
    description: { en: 'Premium quality Ceylon cinnamon sticks, perfect for both sweet and savory dishes.', si: 'පැණිරස හා රසවත් කෑම සඳහා සුදුසු, උසස් තත්ත්වයේ ලංකා කුරුඳු පොතු.' },
    longDescription: { en: 'Sourced from the bark of the Cinnamomum verum tree, our Ceylon cinnamon sticks are known for their delicate, sweet flavor and numerous health benefits. Unlike the more common Cassia cinnamon, Ceylon cinnamon has lower levels of coumarin, making it a safer choice for regular consumption. Perfect for flavoring teas, curries, and baked goods.', si: 'Cinnamomum verum ගසේ පොත්තෙන් ලබාගත් අපගේ ලංකා කුරුඳු පොතු, එහි සියුම්, මිහිරි රසය සහ බොහෝ සෞඛ්‍ය ප්‍රතිලාභ සඳහා ප්‍රසිද්ධය. වඩාත් සුලභ Cassia කුරුඳු මෙන් නොව, ලංකා කුරුඳු වල කූමරින් මට්ටම අඩු බැවින්, එය නිතිපතා පරිභෝජනය සඳහා ආරක්ෂිත තේරීමක් වේ. තේ, කරි සහ බේක් කරන ලද භාණ්ඩ රස ගැන්වීම සඳහා පරිපූර්ණයි.' },
    variants: [
        { weight: '50g', price: 500 },
        { weight: '100g', price: 900 },
        { weight: '250g', price: 2000 },
    ],
    images: [
        'https://i.pinimg.com/736x/1f/b4/58/1fb458655de3143913c5a0db00921b9f.jpg',
        'https://i.pinimg.com/736x/b2/47/3c/b2473c1f0a3278d6b1a3a415a639739e.jpg',
        'https://i.pinimg.com/736x/2b/32/73/2b32734b3e4063518bb1d8a411f14a05.jpg',
        'https://i.pinimg.com/736x/d1/2f/2d/d12f2d34a8b54b0a88cb7e4726b245a4.jpg',
        'https://i.pinimg.com/736x/e8/9c/6e/e89c6e3b5e7d5a570c9183ff558ac71a.jpg',
    ],
    aiHints: ['cinnamon sticks', 'cinnamon bundle', 'cinnamon bowl', 'cinnamon powder', 'cinnamon tea'],
    reviews: [
      { id: 1, author: 'Anusha P.', rating: 5, comment: 'The best cinnamon I have ever used. The aroma is amazing!' },
      { id: 2, author: 'John Doe', rating: 4, comment: 'Good quality, but a bit pricey.' }
    ],
    available: true,
  },
  {
    id: 2,
    slug: 'whole-cloves',
    name: { en: 'Whole Cloves', si: 'කරාබු නැටි' },
    category: 'Spice',
    description: { en: 'Aromatic whole cloves that add a warm, sweet flavor to your culinary creations.', si: 'ඔබේ සූපශාස්ත්‍ර නිර්මාණවලට උණුසුම්, මිහිරි රසයක් එක් කරන සුවඳැති කරාබු නැටි.' },
    longDescription: { en: 'Our whole cloves are hand-picked to ensure the highest quality. They have a strong, sweet aroma and are perfect for studding meats, flavoring sauces, and making mulled wines. A staple in both Asian and Western cuisines.', si: 'අපගේ කරාබු නැටි ඉහළම ගුණාත්මක බව සහතික කිරීම සඳහා අතින් නෙළනු ලැබේ. ඒවාට ශක්තිමත්, මිහිරි සුවඳක් ඇති අතර මස්, රසකාරක සෝස් සහ මල්ඩ් වයින් සෑදීම සඳහා පරිපූර්ණයි. ආසියානු සහ බටහිර ආහාර පිසීමේ ප්‍රධාන අංගයකි.' },
    variants: [
        { weight: '50g', price: 350 },
        { weight: '100g', price: 650 },
        { weight: '250g', price: 1500 },
    ],
    images: [
        'https://i.pinimg.com/736x/63/3c/5e/633c5e2d6fd7b4b516d10c11c4451c24.jpg',
        'https://i.pinimg.com/736x/b3/82/38/b382382e7e4529d722a106173b29c913.jpg',
        'https://i.pinimg.com/736x/3e/a2/5b/3ea25b03511855a80cb703a893046f49.jpg',
        'https://i.pinimg.com/736x/1a/1b/b6/1a1bb649c669389e47192839958c89b8.jpg',
        'https://i.pinimg.com/736x/c6/35/d5/c635d5a525a7a513c2069b33100693dc.jpg'
    ],
    aiHints: ['cloves spice', 'cloves pile', 'cloves wood bowl', 'cloves dry', 'cloves tree'],
    reviews: [
        { id: 1, author: 'Saman Silva', rating: 5, comment: 'Very fresh and fragrant. Excellent for my biryani.'}
    ],
    available: false,
  },
  {
    id: 3,
    slug: 'turmeric-powder',
    name: { en: 'Turmeric Powder', si: 'කහ කුඩු' },
    category: 'Spice',
    description: { en: 'Vibrant and earthy turmeric powder, a staple in Sri Lankan cooking for color and health benefits.', si: 'වර්ණය සහ සෞඛ්‍ය ප්‍රතිලාභ සඳහා ශ්‍රී ලාංකේය ඉවුම් පිහුම් වල ප්‍රධානතම, විචිත්‍රවත් සහ පස් රසැති කහ කුඩු.' },
    longDescription: { en: "Our turmeric powder is ground from the finest quality turmeric roots. It has a bright yellow color and a warm, slightly bitter flavor. Known for its anti-inflammatory properties, it's a must-have in any kitchen.", si: "අපගේ කහ කුඩු හොඳම තත්ත්වයේ කහ අල වලින් අඹරා ඇත. එය දීප්තිමත් කහ පැහැයක් සහ උණුසුම්, තරමක් කටුක රසයක් ඇත. එහි ප්‍රති-ගිනි අවුලුවන ගුණාංග සඳහා ප්‍රසිද්ධ, එය ඕනෑම මුළුතැන්ගෙයක තිබිය යුතුම දෙයකි." },
    variants: [
        { weight: '50g', price: 400 },
        { weight: '100g', price: 750 },
        { weight: '250g', price: 1700 },
    ],
    images: [
        'https://i.pinimg.com/736x/17/91/e4/1791e458518b0910d9d41af5d99fbdeb.jpg',
        'https://i.pinimg.com/736x/43/a1/5a/43a15a73e3518043b21703131a9de125.jpg',
        'https://i.pinimg.com/736x/9e/75/f4/9e75f4a613583236c53e01931604815a.jpg',
        'https://i.pinimg.com/736x/a2/29/73/a22973f511995116742a03463a03521e.jpg',
        'https://i.pinimg.com/736x/e9/8a/7e/e98a7e40e6332e185cd2a3c75d97a48d.jpg'
    ],
    aiHints: ['turmeric powder', 'turmeric roots', 'turmeric spoon', 'turmeric latte', 'turmeric plant'],
    available: false,
  },
  {
    id: 4,
    slug: 'black-peppercorns',
    name: { en: 'Black Peppercorns', si: 'කළු ගම්මිරිස්' },
    category: 'Spice',
    description: { en: 'Fiery and pungent whole black peppercorns to add a bold kick to any dish.', si: 'ඕනෑම කෑමකට තද රසයක් එක් කිරීමට සැර සහ තියුණු කළු ගම්මිරිස් ඇට.' },
    longDescription: { en: "Experience the robust flavor of our premium black peppercorns. Sourced from the best pepper vines in Sri Lanka, they offer a sharp, pungent heat that enhances any savory dish. Grind them fresh for the best results.", si: "අපගේ උසස් තත්ත්වයේ කළු ගම්මිරිස්වල ශක්තිමත් රසය අත්විඳින්න. ශ්‍රී ලංකාවේ හොඳම ගම්මිරිස් වැල් වලින් ලබාගත් ඒවා, ඕනෑම රසවත් කෑමක් වැඩි දියුණු කරන තියුණු, සැර තාපයක් ලබා දෙයි. හොඳම ප්‍රතිඵල සඳහා ඒවා නැවුම්ව අඹරන්න." },
    variants: [
        { weight: '50g', price: 600 },
        { weight: '100g', price: 1100 },
        { weight: '250g', price: 2500 },
    ],
    images: [
        'https://i.pinimg.com/736x/74/32/ae/7432aed93e936f510a8d9be50aa90074.jpg',
        'https://i.pinimg.com/736x/a2/2e/d0/a22ed043a29037880b998246c59b5ae7.jpg',
        'https://i.pinimg.com/736x/3d/c0/81/3dc081f21a4f0b2f54a85854067303e9.jpg',
        'https://i.pinimg.com/736x/97/8f/ce/978fce56526106d3954460a59ed0a1cf.jpg',
        'https://i.pinimg.com/736x/01/6a/df/016adf0055486552a425f82216b8b51d.jpg'
    ],
    aiHints: ['black peppercorns', 'peppercorns background', 'peppercorns bowl', 'peppercorns grinder', 'peppercorns plant'],
    available: true,
  },
  {
    id: 5,
    slug: 'cardamom-pods',
    name: { en: 'Cardamom Pods', si: 'කරදමුංගු' },
    category: 'Spice',
    description: { en: 'Fragrant green cardamom pods, offering a complex blend of minty, spicy, and citrusy notes.', si: 'මින්ටි, කුළුබඩු සහ පැඟිරි සටහන් වල සංකීර්ණ මිශ්‍රණයක් ලබා දෙන සුවඳැති කොළ කරදමුංගු කරල්.' },
    longDescription: { en: "Our green cardamom pods are prized for their intense aroma and flavor. A versatile spice, they can be used in both sweet and savory dishes, from curries and rice pilafs to desserts and beverages. A little goes a long way.", si: "අපගේ කොළ කරදමුංගු කරල් ඒවායේ තීව්‍ර සුවඳ සහ රසය සඳහා ඉහළ අගයක් ගනී. බහුකාර්ය කුළුබඩුවක් වන, ඒවා ව්‍යංජන සහ බත් පිලාෆ් සිට අතුරුපස සහ බීම දක්වා පැණිරස හා රසවත් කෑම වර්ග දෙකෙහිම භාවිතා කළ හැකිය. ස්වල්පයක් බොහෝ දුර යයි." },
    variants: [
        { weight: '50g', price: 750 },
        { weight: '100g', price: 1400 },
        { weight: '250g', price: 3200 },
    ],
    images: [
        'https://i.pinimg.com/736x/28/c6/48/28c648b0a74979111f737955b05d05cd.jpg',
        'https://i.pinimg.com/736x/5b/e5/23/5be5233604f81014a6e2e5c6a1f4215f.jpg',
        'https://i.pinimg.com/736x/a7/67/20/a76720f4b30689b78e12d48375494f1c.jpg',
        'https://i.pinimg.com/736x/9f/34/a0/9f34a07d3db974b6a9514f775d7b512c.jpg',
        'https://i.pinimg.com/736x/39/10/d8/3910d8a57631853a0675713431a44c4b.jpg'
    ],
    aiHints: ['cardamom pods', 'cardamom spice', 'cardamom pile', 'cardamom seeds', 'cardamom drink'],
    available: false,
  },
  {
    id: 6,
    slug: 'black-garcinia',
    name: { en: 'Black Garcinia', si: 'කළු ගොරකා' },
    category: 'Spice',
    description: { en: 'Sun-dried goraka, essential for authentic Sri Lankan fish curries and other sour dishes.', si: 'හිරු එළියෙන් වියලන ලද ගොරකා, ශ්‍රී ලාංකේය මාළු කරි සහ අනෙකුත් ඇඹුල් රසැති කෑම සඳහා අත්‍යවශ්‍ය වේ.' },
    longDescription: { en: "Also known as Garcinia Cambogia, black garcinia (goraka) is a souring agent used in Sri Lankan cuisine, particularly in fish curries. It imparts a unique sour and slightly smoky flavor. Our goraka is naturally sun-dried to preserve its authentic taste.", si: "Garcinia Cambogia ලෙසද හැඳින්වෙන, කළු ගොරකා යනු ශ්‍රී ලාංකේය ආහාර පිසීමේදී, විශේෂයෙන් මාළු කරි වල භාවිතා වන ඇඹුල් කාරකයකි. එය අද්විතීය ඇඹුල් සහ තරමක් දුම් රසයක් ලබා දෙයි. අපගේ ගොරකා එහි සැබෑ රසය ආරක්ෂා කර ගැනීම සඳහා ස්වභාවිකව හිරු එළියෙන් වියළනු ලැබේ." },
    variants: [
        { weight: '50g', price: 450 },
        { weight: '100g', price: 850 },
        { weight: '250g', price: 1900 },
    ],
    images: [
        'https://i.pinimg.com/736x/8f/6f/e5/8f6fe529153d56009d3f7d73ce6eba74.jpg',
        'https://i.pinimg.com/736x/6c/31/35/6c31351d4dfc9e0e48476a6b8e441b04.jpg',
        'https://i.pinimg.com/736x/88/52/63/8852636a0f7992994f131a403487926e.jpg',
        'https://i.pinimg.com/736x/e4/c7/44/e4c744f48e4266158c383187a02d53d2.jpg',
        'https://i.pinimg.com/736x/b3/89/37/b38937071650b29792e34226f9d774f3.jpg'
    ],
    aiHints: ['black garcinia', 'garcinia cambogia', 'goraka spice', 'garcinia fruit', 'garcinia tree'],
    available: true,
  },
  {
    id: 7,
    slug: 'starter-spice-set',
    name: { en: 'Starter Spice Set', si: 'ආරම්භක කුළුබඩු කට්ටලය' },
    category: 'Gift Box',
    description: { en: 'The perfect set for anyone beginning their Sri Lankan culinary journey.', si: 'ශ්‍රී ලාංකේය සූපශාස්ත්‍ර ගමන ආරම්භ කරන ඕනෑම කෙනෙකුට පරිපූර්ණ කට්ටලය.' },
    variants: [{ weight: 'Set', price: 3500 }],
    images: ['https://i.pinimg.com/736x/b2/24/8c/b2248c8946a4855a8052565b9a81878d.jpg'],
    aiHints: ['spice gift set'],
    available: true,
  },
  {
    id: 8,
    slug: 'curry-lovers-collection',
    name: { en: "Curry Lover's Collection", si: 'කරි ලෝලීන්ගේ එකතුව' },
    category: 'Gift Box',
    description: { en: 'A collection of our finest curry powders and essential spices for the perfect curry.', si: 'පරිපූර්ණ කරියක් සඳහා අපගේ හොඳම කරි කුඩු සහ අත්‍යවශ්‍ය කුළුබඩු එකතුවකි.' },
    variants: [{ weight: 'Set', price: 4500 }],
    images: ['https://i.pinimg.com/736x/5f/79/d3/5f79d345f69c4d874533a3c98fe712e0.jpg'],
    aiHints: ['curry spice set'],
    available: true,
  },
  {
    id: 9,
    slug: 'sweet-spice-selection',
    name: { en: 'Sweet Spice Selection', si: 'පැණිරස කුළුබඩු තේරීම' },
    category: 'Gift Box',
    description: { en: 'A delightful selection of our sweet spices, perfect for baking and desserts.', si: 'බේක් කිරීම සහ අතුරුපස සඳහා පරිපූර්ණ අපගේ මිහිරි කුළුබඩු වල ප්‍රියජනක තේරීමක්.' },
    variants: [{ weight: 'Set', price: 4000 }],
    images: ['https://i.pinimg.com/736x/11/4a/4a/114a4ab0357e60e5881a53e4142f9b8c.jpg'],
    aiHints: ['sweet spice set'],
    available: true,
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
