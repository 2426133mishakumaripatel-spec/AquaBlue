import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, MessageCircle, Droplet } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, buildWhatsAppOrderMessage, getWhatsAppUrl } from '../utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export default function CartDrawer({ isOpen, onClose, onCheckout, onContinueShopping }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, total, count } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const msg = buildWhatsAppOrderMessage(items);
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return createPortal(
    <div className="fixed inset-0 z-[90] flex justify-end">
      <div
        className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col animate-fade-up h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-aqua-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-aqua-600" />
            <h2 className="font-display font-bold text-lg text-navy-900">
              Cart {count > 0 && `(${count})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-gray-500 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty cart */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-aqua-50 flex items-center justify-center mb-5">
              <Droplet className="w-12 h-12 text-aqua-200" />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 text-sm mb-6">
              Looks like you haven't added any products yet. Let's fix that!
            </p>
            <button
              onClick={() => {
                onClose();
                onContinueShopping();
              }}
              className="btn-primary"
            >
              <ShoppingBag className="w-5 h-5" />
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-3 p-3 rounded-2xl bg-aqua-50/40 border border-aqua-100/50 animate-scale-in"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-navy-900 truncate">{item.name}</h4>
                    <p className="text-xs text-aqua-600 mb-2">{item.size} - {formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-white rounded-full p-0.5">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-6 h-6 rounded-full text-aqua-600 flex items-center justify-center hover:bg-aqua-100 transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-navy-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-6 h-6 rounded-full text-aqua-600 flex items-center justify-center hover:bg-aqua-100 transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-navy-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-5 space-y-4 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-navy-900">{formatPrice(total)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Delivery</span>
                <span className="text-green-600 font-medium">Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-bold text-navy-900">Total</span>
                <span className="font-bold text-xl text-aqua-600 font-display">{formatPrice(total)}</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <button onClick={onCheckout} className="btn-primary w-full justify-center">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={handleWhatsAppOrder} className="btn-green w-full justify-center">
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onContinueShopping();
                  }}
                  className="text-aqua-600 text-sm font-medium hover:text-aqua-700 transition-colors py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
