export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  brand: string;
  tags: string[];
  inStock: boolean;
  stockQuantity: number;
  featured: boolean;
  isNew?: boolean;
  rating?: number;
  createdAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon?: string;
  subcategories?: string[];
  productCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customer: CustomerInfo;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  paymentMethod: "pix";
  paymentStatus: "awaiting" | "confirmed";
  trackingCode?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  product?: string;
  date: string;
}
