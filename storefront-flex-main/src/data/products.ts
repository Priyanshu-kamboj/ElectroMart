export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const categories = ["All", "Electronics", "Clothing", "Home & Garden", "Sports"];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 18999,
    category: "Electronics",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    price: 29999,
    category: "Electronics",
    description: "Advanced fitness tracking, GPS, and health monitoring in a sleek design.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    featured: true,
  },
  {
    id: "3",
    name: "Casual Cotton T-Shirt",
    price: 1299,
    category: "Clothing",
    description: "Comfortable 100% organic cotton t-shirt available in multiple colors.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  },
  {
    id: "4",
    name: "Professional Laptop",
    price: 89999,
    category: "Electronics",
    description: "High-performance laptop with 16GB RAM, 512GB SSD, and stunning display.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    featured: true,
  },
  {
    id: "5",
    name: "Designer Jeans",
    price: 3499,
    category: "Clothing",
    description: "Premium denim jeans with perfect fit and contemporary styling.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    price: 19999,
    category: "Home & Garden",
    description: "Luxury ergonomic chair with lumbar support and adjustable features.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
  },
  {
    id: "7",
    name: "Yoga Mat Premium",
    price: 2499,
    category: "Sports",
    description: "Non-slip premium yoga mat with carrying strap and alignment guides.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
  },
  {
    id: "8",
    name: "Smart Home Speaker",
    price: 9999,
    category: "Electronics",
    description: "Voice-controlled smart speaker with premium sound quality.",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
  },
  {
    id: "9",
    name: "Running Shoes",
    price: 6499,
    category: "Sports",
    description: "Lightweight running shoes with advanced cushioning technology.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: "10",
    name: "Indoor Plant Collection",
    price: 2199,
    category: "Home & Garden",
    description: "Set of 3 low-maintenance indoor plants perfect for any room.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
  },
  {
    id: "11",
    name: "Winter Jacket",
    price: 4999,
    category: "Clothing",
    description: "Waterproof winter jacket with thermal insulation and hood.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
  },
  {
    id: "12",
    name: "Fitness Dumbbells Set",
    price: 4499,
    category: "Sports",
    description: "Adjustable dumbbell set with multiple weight options for home workouts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductsByCategory = (category: string) => 
  category === "All" ? products : products.filter(product => product.category === category);