import { ShoppingBag, MessageCircle, Droplets, Sparkles } from 'lucide-react';
import aquaBlue1lHero from '../assets/products/aqua-blue-1l-hero.png';

interface HeroProps {
  onShopNow: () => void;
  onWhatsApp: () => void;
}

export default function Hero({ onShopNow, onWhatsApp }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-aqua-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-aqua-500/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-royal-400/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#03112f]/50 via-[#062b55]/25 to-transparent" />

      {/* Floating droplets */}
      <FloatingDroplets />

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
        {/* Left: Content */}
        <div className="text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-aqua-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Pure Drinking Water
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-md leading-[1.1] mb-4">
            PURE WATER.
            <br />
            <span className="text-white drop-shadow-md">PURE LIFE.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white drop-shadow-md font-medium mb-3">
            Experience freshness in every drop with Aqua Blue Pure Drinking Water.
          </p>

          <p className="text-sm sm:text-base text-white drop-shadow-md max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Quality-focused packaged drinking water for your home, office and everyday needs.
            Now conveniently delivered to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button onClick={onShopNow} className="btn-white text-base border border-aqua-200">
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </button>
            <button
              onClick={onWhatsApp}
              className="btn-green text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-6 sm:gap-8 mt-10 justify-center lg:justify-start">
            <Stat value="4" label="Bottle Sizes" />
            <div className="w-px h-10 bg-white/40" />
            <Stat value="Free" label="Home Delivery" />
            <div className="w-px h-10 bg-white/40" />
            <Stat value="20L" label="Water Jars" />
          </div>
        </div>

        {/* Right: Product showcase */}
        <div className="relative flex items-center justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
          <ProductShowcase />
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.45"
            d="M0,60L80,65C160,70,320,80,480,75C640,70,800,50,960,45C1120,40,1280,50,1360,55L1440,60L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl sm:text-3xl font-bold text-white font-display drop-shadow-sm">{value}</span>
      <span className="text-xs sm:text-sm text-white/95 drop-shadow-md">{label}</span>
    </div>
  );
}

function ProductShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-square">
      {/* Main bottle image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 w-[68%] aspect-square rounded-full overflow-hidden border-[3px] border-white animate-float">
          <img
            src={aquaBlue1lHero}
            alt="Aqua Blue 1 litre water bottle"
            className="showcase-product-image w-full h-full rounded-full object-cover"
            style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.28))' }}
          />
        </div>
      </div>

      {/* Floating droplet badge */}
      <div className="absolute top-[7%] right-[6%] z-30 glass-card rounded-2xl p-3 animate-float">
        <Droplets className="w-6 h-6 text-aqua-500" />
      </div>

      {/* Quality badge */}
      <div className="absolute bottom-[4%] left-[4%] z-30 glass-card rounded-2xl px-4 py-2 animate-float-delay">
        <span className="text-sm font-semibold text-aqua-700">100% Pure</span>
      </div>
    </div>
  );
}

function FloatingDroplets() {
  const droplets = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 11}%`,
    delay: `${i * 1.5}s`,
    size: 6 + (i % 3) * 4,
    duration: `${8 + (i % 4) * 2}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {droplets.map((d) => (
        <div
          key={d.id}
          className="absolute top-0 rounded-full bg-aqua-500/10"
          style={{
            left: d.left,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animation: `droplet-fall ${d.duration} linear ${d.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
