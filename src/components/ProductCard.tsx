import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Zap, Info, Star, Check } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../utils';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface ProductCardProps {
  product: Product;
  onDetails: (product: Product) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  small: 'Small Bottles',
  medium: 'Medium Bottles',
  large: 'Large Bottles',
  bulk: 'Bulk & Jars',
};

export default function ProductCard({ product, onDetails, onBuyNow }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover flex flex-col">
      {/* Bestseller badge */}
      {product.bestseller && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-aqua-gradient text-white text-xs font-semibold shadow-lg">
          <Star className="w-3 h-3" fill="white" />
          Bestseller
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-aqua-50 text-aqua-600 text-xs font-medium">
        {CATEGORY_LABELS[product.sizeCategory]}
      </div>

      {/* Image */}
      <button
        onClick={() => onDetails(product)}
        className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-aqua-50 to-aqua-100/50"
      >
        <img
          src={product.image}
          alt={product.name}
<<<<<<< HEAD
          className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
=======
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
>>>>>>> d926c88325eed13913933e08358a034806667a1e
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-navy-900 mb-1">{product.name}</h3>
        <p className="text-aqua-600 text-sm font-semibold mb-2">{product.size}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs text-gray-400">Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-navy-900 font-display">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-2 bg-aqua-50 rounded-full p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-full bg-white text-aqua-600 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors shadow-sm"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-bold text-navy-900 text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              className="w-8 h-8 rounded-full bg-white text-aqua-600 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors shadow-sm"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-aqua-gradient text-white text-sm font-semibold shadow-md shadow-aqua-500/20 hover:shadow-lg transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button
            onClick={() => onBuyNow(product, quantity)}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-all"
          >
            <Zap className="w-4 h-4" />
            Buy Now
          </button>
        </div>

        <button
          onClick={() => onDetails(product)}
          className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-aqua-600 text-sm font-medium hover:bg-aqua-50 transition-colors"
        >
          <Info className="w-4 h-4" />
          Product Details
        </button>
      </div>
    </div>
  );
}

export { CATEGORY_LABELS };
