export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string; // Sub-category name (e.g., "Brasso Saree")
  mainCategory: string; // Main category name (e.g., "Casual Wear")
  mainCategorySlug: string; // Main category slug (e.g., "casual-wear")
  isNew?: boolean;
  description?: string;
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
  rating?: number;
  reviews?: number;
  tags?: string[];
}

export interface CartItem extends Omit<Product, 'images'> {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
  description?: string;
  parentId?: string; // For nested categories (if needed)
  isMainCategory?: boolean;
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  mainCategoryId: string;
  mainCategorySlug: string;
  image?: string;
  description?: string;
}

// For filtering and searching
export interface ProductFilterOptions {
  mainCategory?: string;
  subCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
  isNew?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'popular';
}

// For API responses
export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  filters?: ProductFilterOptions;
}

export interface CategoryWithSubCategories extends Category {
  subCategories: SubCategory[];
}

// For wishlist/favorites
export interface WishlistItem {
  productId: string;
  addedAt: Date;
}