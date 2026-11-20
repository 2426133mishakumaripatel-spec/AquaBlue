import type { CartItem } from './types';

export function formatPrice(amount: number): string {
  return Number.isInteger(amount) ? `₹${amount}` : `₹${amount.toFixed(2)}`;
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function buildWhatsAppOrderMessage(
  items: CartItem[],
  customerInfo?: { name: string; mobile: string; address: string },
): string {
  let message = '*AQUA BLUE - New Order*\n\n';

  if (customerInfo) {
    message += `*Customer Name:* ${customerInfo.name}\n`;
    message += `*Mobile:* ${customerInfo.mobile}\n`;
    message += `*Address:* ${customerInfo.address}\n\n`;
  }

  message += '*Order Details:*\n';
  items.forEach((item, i) => {
    message += `${i + 1}. ${item.name} (${item.size})\n`;
    message += `   Qty: ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n`;
  });

  const total = getCartTotal(items);
  message += `\n*Total Amount: ${formatPrice(total)}*\n\n`;
  message += 'Please confirm my order. Thank you!';

  return encodeURIComponent(message);
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/918200745595?text=${message}`;
}

export function getSimpleWhatsAppUrl(): string {
  const message = encodeURIComponent(
    "Hello Aqua Blue! I would like to know more about your products and delivery service.",
  );
  return `https://wa.me/918200745595?text=${message}`;
}
