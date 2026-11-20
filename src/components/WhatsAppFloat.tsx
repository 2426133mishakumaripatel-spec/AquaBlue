import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { getSimpleWhatsAppUrl } from '../utils';

export default function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
      {showTip && (
        <div className="relative bg-white rounded-2xl shadow-xl p-3 pr-8 max-w-[200px] animate-scale-in">
          <button
            onClick={() => setShowTip(false)}
            className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600"
            aria-label="Close tip"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-gray-700 font-medium">
            Need help? Chat with us on WhatsApp!
          </p>
        </div>
      )}
      <a
        href={getSimpleWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTip(true)}
        className="relative w-14 h-14 rounded-full bg-green-500 shadow-2xl flex items-center justify-center text-white hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" fill="white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  );
}
