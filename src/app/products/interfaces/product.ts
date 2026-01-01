interface ProductsResponse {
  data: Product[];
  pagination: Pagination;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  image: string;
  specs: Specs;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

interface Specs {
  color?: string;
  weight?: string;
  storage?: string;
  material?: string;
  size?: string;
  battery?: string;
  waterproof?: boolean;
  screen?: string;
  ram?: string;
  power?: string;
  capacity?: string;
  thickness?: string;
  maxWeight?: string;
  compartments?: number;
}
