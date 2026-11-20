import type { Product, Testimonial, FAQItem, Feature } from './types';
import aquaBlue200ml from './assets/products/aqua-blue-200ml.png';
import aquaBlue500ml from './assets/products/aqua-blue-500ml.png';
import aquaBlue1l from './assets/products/aqua-blue-1l.png';
import aquaBlue20l from './assets/products/aqua-blue-20l.png';

export const WHATSAPP_NUMBER = '918200745595';

export const PRODUCTS: Product[] = [
  {
    id: '200ml',
    name: 'Aqua Blue 200ml Bottle',
    size: '200 ML',
    sizeCategory: 'small',
    price: 2.6,
    image: aquaBlue200ml,
    gallery: [aquaBlue200ml],
    description: 'Compact and convenient, perfect for quick hydration on the go.',
    longDescription: 'The Aqua Blue 200ml bottle is your perfect companion for quick refreshment. Compact enough to fit in any bag, it delivers pure, clean drinking water wherever you are. Ideal for schools, travel, events, and individual servings.',
    features: ['Compact & lightweight', 'Easy to carry', 'BPA-free packaging', 'Sealed for purity'],
  },
  {
    id: '500ml',
    name: 'Aqua Blue 500ml Bottle',
    size: '500 ML',
    sizeCategory: 'small',
    price: 3.95,
    image: aquaBlue500ml,
    gallery: [aquaBlue500ml],
    description: 'The perfect everyday bottle for personal hydration at home or work.',
    longDescription: 'The Aqua Blue 500ml bottle offers the perfect balance of size and refreshment. Great for everyday use at home, in the office, or while exercising. Each bottle is sealed to maintain maximum purity and freshness.',
    features: ['Perfect personal size', 'Reusable cap', 'BPA-free packaging', 'Sealed for purity'],
    bestseller: true,
  },
  {
    id: '1litre',
    name: 'Aqua Blue 1 Litre Bottle',
    size: '1 LITRE',
    sizeCategory: 'medium',
    price: 5.83,
    image: aquaBlue1l,
    gallery: [aquaBlue1l],
    description: 'Family-friendly size, great for meals, gatherings and daily use.',
    longDescription: 'The Aqua Blue 1 Litre bottle is designed for sharing and family use. Perfect for the dinner table, picnics, or keeping in the fridge. Its sturdy design and secure cap ensure your water stays pure and refreshing.',
    features: ['Family size', 'Sturdy design', 'Secure resealable cap', 'BPA-free packaging'],
  },
  {
    id: '20litre',
    name: 'Aqua Blue 20 Litre Jar',
    size: '20 LITRES',
    sizeCategory: 'bulk',
    price: 15,
    image: aquaBlue20l,
    gallery: [aquaBlue20l],
    description: 'Large-capacity water jar with home delivery for ₹15.',
    longDescription: 'The Aqua Blue 20 Litre Jar is our flagship product for homes, offices, and businesses. Designed for water dispensers and direct pouring, it provides a reliable supply of pure drinking water. Home delivery is available within our service area for ₹15.',
    features: ['Home delivery ₹15', 'Dispenser compatible', 'Heavy-duty jar', 'Refillable & reusable'],
    bestseller: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Patel',
    avatar: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'The 20-litre jar delivery service is so convenient. Always on time and the water tastes fresh. Aqua Blue has become our go-to for office and home.',
    sample: true,
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'I love that I can order through WhatsApp and get delivery the same day. The packaging is clean and hygienic. Highly recommended!',
    sample: true,
  },
  {
    id: 't3',
    name: 'Amit Desai',
    avatar: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'Great quality water at affordable prices. The 1-litre bottles are perfect for my daily commute. The website makes ordering so easy.',
    sample: true,
  },
  {
    id: 't4',
    name: 'Sneha Mehta',
    avatar: 'https://images.pexels.com/photos/30269649/pexels-photo-30269649.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'Aqua Blue delivers consistently good quality water. The 500ml bottles are perfect for my kids school lunchboxes. Very happy with the service.',
    sample: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What products does Aqua Blue offer?',
    answer: 'Aqua Blue offers packaged drinking water in four sizes: 200ml bottles, 500ml bottles, 1 litre bottles, and 20 litre water jars. All products feature Aqua Blue branded packaging.',
  },
  {
    question: 'What bottle sizes are available?',
    answer: 'We offer four convenient sizes: 200ml, 500ml, 1 litre, and 20 litre. Whether you need water for personal use, family, or office, we have the right size for you.',
  },
  {
    question: 'Is home delivery available?',
    answer: 'Yes! We provide home delivery across our service area in and around Surat. The 20-litre jar is available with home delivery for ₹15. Simply place your order through the website or WhatsApp and we will deliver to your doorstep.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place an order in three ways: through our website by adding products to your cart and proceeding to checkout, by clicking the "Order on WhatsApp" button, or by calling us directly at +91 8200745595.',
  },
  {
    question: 'How can I contact Aqua Blue?',
    answer: 'You can reach us by phone at +91 8200745595, via WhatsApp using the chat button, or by visiting us at Jothan Village, Near Saroli Sai Mandir, Olpad Road, Surat - 394520.',
  },
  {
    question: 'How can I order through WhatsApp?',
    answer: 'Simply click any "Order on WhatsApp" button on our website. It will open WhatsApp with a pre-filled message containing your selected products, quantities, and total amount. Just add your name and address, then send it to us!',
  },
];

export const FEATURES: Feature[] = [
  {
    icon: 'ShieldCheck',
    title: 'Quality Focused',
    description: 'Every batch of Aqua Blue water goes through a careful multi-step purification process to deliver clean, refreshing drinking water you can trust.',
  },
  {
    icon: 'PackageCheck',
    title: 'Hygienic Packaging',
    description: 'Our bottles and jars are sealed in a controlled environment, ensuring that the water you receive is as pure as when it was packaged.',
  },
  {
    icon: 'Truck',
    title: 'Convenient Delivery',
    description: 'We deliver directly to your home, office, or business. Order online or via WhatsApp and get fresh water at your doorstep.',
  },
  {
    icon: 'Droplets',
    title: 'Multiple Bottle Sizes',
    description: 'From 200ml to 20 litres, we have the right size for every need - personal, family, office, or events.',
  },
  {
    icon: 'Headphones',
    title: 'Customer Support',
    description: 'Our team is always ready to help. Call us or message on WhatsApp and we will assist you with your order or any questions.',
  },
];

export const DELIVERY_FEATURES = [
  { icon: 'ShoppingCart', title: 'Easy Ordering', description: 'Order online or via WhatsApp in just a few clicks' },
  { icon: 'Truck', title: 'Convenient Home Delivery', description: 'Delivered directly to your home, office or business' },
  { icon: 'Droplets', title: 'Multiple Bottle Sizes', description: 'Choose from 200ml to 20 litre jars as per your need' },
  { icon: 'Headphones', title: 'Customer Support', description: 'Dedicated support via phone and WhatsApp' },
];
