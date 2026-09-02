export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'anggun' | 'suri' | 'safron' | 'set';
  price: number;
  originalPrice?: number;
  volume: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  keyIngredients: { name: string; desc: string }[];
  howToUse: string[];
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DevelopmentPhase {
  phaseNumber: number;
  title: string;
  duration: string;
  status: 'Dicadangkan' | 'Fasa Seterusnya' | 'Fasa Pilihan';
  deliverables: string[];
  techStack: string[];
}

export interface ProposalTerm {
  category: string;
  title: string;
  description: string;
  details: string[];
}
