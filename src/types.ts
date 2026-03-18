
export type Language = 'fr' | 'es';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: {
    fr: string;
    es: string;
  };
  image: string;
  year: string;
  category: string;
  price?: number;
}

export interface Translations {
  [key: string]: {
    fr: string;
    es: string;
  };
}
