import { useState } from 'react';
import {
  ArrowLeft,
  ShoppingCart,
  MessageCircle,
  Check,
  User,
  Phone,
  MapPin,
  MessageSquare,
  Truck,
  CheckCircle2,
} from 'lucide-react';
import type { CheckoutForm } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice, buildWhatsAppOrderMessage, getWhatsAppUrl } from '../utils';

interface CheckoutProps {
  onBack: () => void;
  onOrderPlaced: () => void;
}

const EMPTY_FORM: CheckoutForm = {
  fullName: '',
  mobileNumber: '',
  whatsappNumber: '',
  address: '',
  area: '',
  landmark: '',
  pincode: '',
  specialInstructions: '',
};

const DELIVERY_CHARGE = 0;

export default function Checkout({ onBack, onOrderPlaced }: CheckoutProps) {
  const { items, total, clearCart } = useCart();
  const { showToast } = useToast();
  const [form, setForm] = useState<CheckoutForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = total;
  const grandTotal = subtotal + DELIVERY_CHARGE;

  const updateField = (key: keyof CheckoutForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof CheckoutForm, string>> = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.mobileNumber.trim()) e.mobileNumber = 'Mobile number is required';
    else if (!/^\d{10}$/.test(form.mobileNumber.trim())) e.mobileNumber = 'Enter a valid 10-digit mobile number';
    if (!form.whatsappNumber.trim()) e.whatsappNumber = 'WhatsApp number is required';
    else if (!/^\d{10}$/.test(form.whatsappNumber.trim())) e.whatsappNumber = 'Enter a valid 10-digit WhatsApp number';
    if (!form.address.trim()) e.address = 'Delivery address is required';
    if (!form.area.trim()) e.area = 'Area / Village is required';
    if (!form.pincode.trim()) e.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(form.pincode.trim())) e.pincode = 'Enter a valid 6-digit pincode';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      showToast('Your cart is empty. Please add products first.', 'error');
      return;
    }
    if (!validate()) {
      showToast('Please fill in all required fields correctly.', 'error');
      return;
    }
    setOrderPlaced(true);
    clearCart();
    showToast('Order placed successfully!', 'success');
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      showToast('Your cart is empty. Please add products first.', 'error');
      return;
    }
    if (!validate()) {
      showToast('Please fill in all required fields correctly.', 'error');
      return;
    }
    const msg = buildWhatsAppOrderMessage(items, {
      name: form.fullName,
      mobile: form.mobileNumber,
      address: `${form.address}, ${form.area}, ${form.landmark}, ${form.pincode}`,
    });
    window.open(getWhatsAppUrl(msg), '_blank');
    showToast('Opening WhatsApp with your order details...', 'info');
  };

  if (orderPlaced) {
    return (
<div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center animate-scale-in glass-panel p-8">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-14 h-14 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold font-display text-navy-900 mb-3">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-2">
            Thank you, {form.fullName || 'Customer'}! Your order has been received.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Our team will contact you shortly on your mobile number to confirm delivery details.
          </p>
          <button onClick={onOrderPlaced} className="btn-primary">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center animate-scale-in glass-panel p-8">
          <div className="w-24 h-24 rounded-full bg-aqua-50 flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-14 h-14 text-aqua-300" />
          </div>
          <h1 className="text-2xl font-bold font-display text-navy-900 mb-3">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">Add some products before proceeding to checkout.</p>
          <button onClick={onBack} className="btn-primary">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <div className="section-padding py-8 lg:py-12 rounded-3xl bg-white/80 backdrop-blur-md border border-white/70">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-aqua-600 font-medium hover:text-aqua-700 transition-colors mb-6 animate-fade-in"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customer info form */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white/70">
              <h2 className="font-display font-bold text-lg text-navy-900 mb-5 flex items-center gap-2">
                <User className="w-5 h-5 text-aqua-500" />
                Customer Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Full Name" required error={errors.fullName}>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className="input-field"
                  />
                </FormField>
                <FormField label="Mobile Number" required error={errors.mobileNumber}>
                  <input
                    type="tel"
                    value={form.mobileNumber}
                    onChange={(e) => updateField('mobileNumber', e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="input-field"
                  />
                </FormField>
                <FormField label="WhatsApp Number" required error={errors.whatsappNumber}>
                  <input
                    type="tel"
                    value={form.whatsappNumber}
                    onChange={(e) => updateField('whatsappNumber', e.target.value)}
                    placeholder="10-digit WhatsApp number"
                    maxLength={10}
                    className="input-field"
                  />
                </FormField>
                <FormField label="Pincode" required error={errors.pincode}>
                  <input
                    type="tel"
                    value={form.pincode}
                    onChange={(e) => updateField('pincode', e.target.value)}
                    placeholder="6-digit pincode"
                    maxLength={6}
                    className="input-field"
                  />
                </FormField>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white/70">
              <h2 className="font-display font-bold text-lg text-navy-900 mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-aqua-500" />
                Delivery Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Delivery Address" required error={errors.address} full>
                  <textarea
                    value={form.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="House no, street, area..."
                    rows={3}
                    className="input-field resize-none"
                  />
                </FormField>
                <FormField label="Area / Village" required error={errors.area}>
                  <input
                    type="text"
                    value={form.area}
                    onChange={(e) => updateField('area', e.target.value)}
                    placeholder="Your area or village"
                    className="input-field"
                  />
                </FormField>
                <FormField label="Landmark">
                  <input
                    type="text"
                    value={form.landmark}
                    onChange={(e) => updateField('landmark', e.target.value)}
                    placeholder="Nearby landmark"
                    className="input-field"
                  />
                </FormField>
                <FormField label="Special Instructions" full>
                  <textarea
                    value={form.specialInstructions}
                    onChange={(e) => updateField('specialInstructions', e.target.value)}
                    placeholder="Any delivery preferences or notes..."
                    rows={2}
                    className="input-field resize-none"
                  />
                </FormField>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white/70 sticky top-24">
              <h2 className="font-display font-bold text-lg text-navy-900 mb-5 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-aqua-500" />
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-3 mb-5 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-aqua-50 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-aqua-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-navy-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.size} - {formatPrice(item.price)} each</p>
                      <p className="text-sm font-bold text-aqua-600">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 py-4 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-navy-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Delivery Charges
                  </span>
                  <span className="font-medium text-green-600">
                    {DELIVERY_CHARGE === 0 ? 'Free' : formatPrice(DELIVERY_CHARGE)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-5">
                <span className="font-bold text-navy-900">Grand Total</span>
                <span className="font-bold text-2xl text-aqua-600 font-display">{formatPrice(grandTotal)}</span>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button onClick={handlePlaceOrder} className="btn-primary w-full justify-center">
                  <Check className="w-5 h-5" />
                  Place Order
                </button>
                <button onClick={handleWhatsAppOrder} className="btn-green w-full justify-center">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Order
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center mt-4">
                By placing your order, you agree to be contacted by Aqua Blue for delivery confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  required,
  error,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
