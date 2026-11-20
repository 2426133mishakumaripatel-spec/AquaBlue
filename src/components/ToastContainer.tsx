import { createPortal } from 'react-dom';
import { CheckCircle2, XCircle, Info, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const ICONS = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const COLORS = {
  success: 'text-green-500',
  error: 'text-red-500',
  info: 'text-aqua-500',
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return createPortal(
    <div className="fixed top-20 right-4 z-[200] flex flex-col gap-2 max-w-sm">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.type];
        return (
          <div
            key={toast.id}
            className="flex items-center gap-3 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-fade-up"
          >
            <Icon className={`w-5 h-5 flex-shrink-0 ${COLORS[toast.type]}`} />
            <p className="text-sm font-medium text-gray-800 flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>,
    document.body,
  );
}
