import { useState } from 'react';
import {
  ArrowLeft,
  Plus,
  Minus,
  ShoppingCart,
  Zap,
  MessageCircle,
  Check,
  Star,
} from 'lucide-react';
import type { Product } from '../types';
import { formatPrice, buildWhatsAppOrderMessage, getWhatsAppUrl } from '../utils';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
  onBack: () => void;
  onProductSelect: (product: Product) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onGoToCheckout: () => void;
}

export default function ProductDetail({
  product,
  relatedProducts,
  onBack,
  onProductSelect,
  onBuyNow,
}: ProductDetailProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.name} added to cart!`, 'success');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onBuyNow(product, quantity);
  };

  const handleWhatsAppOrder = () => {
    const msg = buildWhatsAppOrderMessage([
      {
        productId: product.id,
        name: product.name,
        size: product.size,
        price: product.price,
        image: product.image,
        quantity,
      },
    ]);
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gradient-to-b from-aqua-50/85 to-white/85">
      <div className="section-padding py-8 lg:py-12">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-aqua-600 font-medium hover:text-aqua-700 transition-colors mb-6 animate-fade-in"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image gallery */}
          <div className="animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-aqua-50 to-aqua-100/50 aspect-square shadow-xl mb-4">
              <img
                src={product.gallery[activeImage]}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
              {product.bestseller && (
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-aqua-gradient text-white text-xs font-semibold shadow-lg">
                  <Star className="w-3 h-3" fill="white" />
                  Bestseller
                </div>
              )}
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                    activeImage === i
                      ? 'border-aqua-500 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-aqua-100 text-aqua-600 text-sm font-medium">
                {product.size}
              </span>
              {product.bestseller && (
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                  Bestseller
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 mb-3">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-3xl font-bold text-aqua-600 font-display">
                {formatPrice(product.price)}
              </span>
              <span className="text-gray-400 text-sm">per unit</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-aqua-600" />
                  </div>
                  {feat}
                </div>
              ))}
            </div>

            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center gap-3 bg-aqua-50 rounded-full p-1.5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-full bg-white text-aqua-600 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors shadow-sm"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-navy-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  className="w-9 h-9 rounded-full bg-white text-aqua-600 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-colors shadow-sm"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">
                Total: <span className="font-bold text-navy-900">{formatPrice(product.price * quantity)}</span>
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleAddToCart} className="btn-outline flex-1">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="btn-primary flex-1">
                <Zap className="w-5 h-5" />
                Buy Now
              </button>
              <button onClick={handleWhatsAppOrder} className="btn-green flex-1">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Order
              </button>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <h2 className="text-2xl font-bold font-display text-navy-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onProductSelect(p);
                    setActiveImage(0);
                    setQuantity(1);
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover text-left"
                >
                  <div className="relative aspect-square overflow-hidden bg-aqua-50">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-navy-900 text-sm mb-1">{p.name}</p>
                    <p className="text-aqua-600 text-sm font-bold">{formatPrice(p.price)}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
