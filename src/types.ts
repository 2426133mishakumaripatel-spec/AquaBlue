export interface Product {
  id: string;
  name: string;
  size: string;
  sizeCategory: 'small' | 'medium' | 'large' | 'bulk';
  price: number;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  features: string[];
  bestseller?: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export type Page = 'home' | 'product-detail';

export interface CheckoutForm {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  address: string;
  area: string;
  landmark: string;
  pincode: string;
  specialInstructions: string;
}
