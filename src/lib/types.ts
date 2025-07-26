
export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  slug: string;
  name: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  longDescription?: {
    en: string;
    si: string;
  };
  variants: ProductVariant[];
  images: string[];
  aiHints: string[];
  reviews?: Review[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant: ProductVariant;
}

export interface Recipe {
  title: {
    en: string;
    si: string;
  };
  ingredients: {
    en: string;
    si: string;
  }[];
  instructions: {
    en: string[];
    si: string[];
  };
  url: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
}

export interface NewsEvent {
    id: number;
    title: string;
    date: string;
    description: string;
    content: string;
    images: string[];
    aiHints: string[];
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    image: string;
    aiHint: string;
    content: string;
}

export interface GalleryContent {
  id: number;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  image: string;
  aiHint: string;
}
