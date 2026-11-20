import { useEffect, useState } from 'react';
import { Droplet } from 'lucide-react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-aqua-radial flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Droplet className="w-16 h-16 text-white animate-float" fill="white" />
          <div className="absolute inset-0 bg-aqua-300 blur-2xl opacity-50" />
        </div>
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-white tracking-tight">
            AQUA <span className="text-aqua-200">BLUE</span>
          </h1>
          <p className="text-aqua-200/70 text-xs tracking-wider mt-1">PURE DRINKING WATER</p>
        </div>
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-white rounded-full"
            style={{ animation: 'shimmer 1.5s ease-in-out', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
