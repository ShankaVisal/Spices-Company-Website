export interface Product {
  id: number;
  name: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  price: number;
  image: string;
  aiHint: string;
}

export interface CartItem extends Product {
  quantity: number;
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
    en: string;
    si: string;
  };
  url: string;
}
