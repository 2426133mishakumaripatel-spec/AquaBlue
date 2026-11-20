import { ShoppingBag, MessageCircle, Droplets, Sparkles } from 'lucide-react';
<<<<<<< HEAD
import aquaBlue1l from '../assets/products/aqua-blue-1l.png';
=======
>>>>>>> d926c88325eed13913933e08358a034806667a1e

interface HeroProps {
  onShopNow: () => void;
  onWhatsApp: () => void;
}

export default function Hero({ onShopNow, onWhatsApp }: HeroProps) {
  return (
    <section
      id="home"
<<<<<<< HEAD
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden hero-water-background"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-aqua-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-aqua-500/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-royal-400/10 rounded-full blur-3xl animate-float-slow" />
=======
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden bg-aqua-radial"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-aqua-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-aqua-500/20 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-royal-400/20 rounded-full blur-3xl animate-float-slow" />
>>>>>>> d926c88325eed13913933e08358a034806667a1e
      </div>

      {/* Floating droplets */}
      <FloatingDroplets />

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
        {/* Left: Content */}
        <div className="text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-aqua-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Pure Drinking Water
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1] mb-4">
            PURE WATER.
            <br />
            <span className="text-gradient-light">PURE LIFE.</span>
          </h1>

<<<<<<< HEAD
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-3">
            Experience freshness in every drop with Aqua Blue Pure Drinking Water.
          </p>

          <p className="text-sm sm:text-base text-sky-100/85 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
=======
          <p className="text-lg sm:text-xl text-aqua-100 font-medium mb-3">
            Experience freshness in every drop with Aqua Blue Pure Drinking Water.
          </p>

          <p className="text-sm sm:text-base text-aqua-200/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
>>>>>>> d926c88325eed13913933e08358a034806667a1e
            Quality-focused packaged drinking water for your home, office and everyday needs.
            Now conveniently delivered to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
<<<<<<< HEAD
            <button onClick={onShopNow} className="btn-white text-base border border-aqua-200">
=======
            <button onClick={onShopNow} className="btn-white text-base">
>>>>>>> d926c88325eed13913933e08358a034806667a1e
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
<<<<<<< HEAD
            <Stat value="4" label="Bottle Sizes" />
            <div className="w-px h-10 bg-white/30" />
            <Stat value="Free" label="Home Delivery" />
            <div className="w-px h-10 bg-white/30" />
=======
            <Stat value="5" label="Bottle Sizes" />
            <div className="w-px h-10 bg-white/20" />
            <Stat value="Free" label="Home Delivery" />
            <div className="w-px h-10 bg-white/20" />
>>>>>>> d926c88325eed13913933e08358a034806667a1e
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
      <span className="text-2xl sm:text-3xl font-bold text-white font-display">{value}</span>
<<<<<<< HEAD
      <span className="text-xs sm:text-sm text-sky-100">{label}</span>
=======
      <span className="text-xs sm:text-sm text-aqua-200/70">{label}</span>
>>>>>>> d926c88325eed13913933e08358a034806667a1e
    </div>
  );
}

function ProductShowcase() {
  return (
<<<<<<< HEAD
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-square">
      {/* Glow ring */}
      <div className="absolute inset-[8%] rounded-full bg-white/55 backdrop-blur-sm border border-aqua-200/70" />
      <div className="absolute inset-[16%] rounded-full bg-aqua-100/30" />

      {/* Splash effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[58%] aspect-square bg-aqua-300/25 rounded-full blur-2xl animate-splash" />
=======
    <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
      {/* Glow ring */}
      <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
      <div className="absolute inset-16 rounded-full bg-white/5" />

      {/* Splash effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-white/20 rounded-full blur-2xl animate-splash" />
>>>>>>> d926c88325eed13913933e08358a034806667a1e
      </div>

      {/* Main bottle image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
<<<<<<< HEAD
          src={aquaBlue1l}
          alt="Aqua Blue 1 litre water bottle"
          className="showcase-product-image relative z-10 w-[52%] h-[68%] object-contain animate-float"
          style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.28))' }}
=======
          src="https://images.pexels.com/photos/11860559/pexels-photo-11860559.jpeg?auto=compress&cs=tinysrgb&h=900"
          alt="Aqua Blue water bottle"
          className="w-48 h-auto object-contain drop-2xl animate-float"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* Small bottle left */}
      <div className="absolute top-1/4 left-0 hidden sm:block animate-float-delay">
        <img
          src="https://images.pexels.com/photos/11860560/pexels-photo-11860560.jpeg?auto=compress&cs=tinysrgb&h=400"
          alt="Aqua Blue small bottle"
          className="w-24 h-auto object-contain"
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* 20L jar bottom right */}
      <div className="absolute bottom-8 right-0 hidden sm:block animate-float-slow">
        <img
          src="https://images.pexels.com/photos/4159894/pexels-photo-4159894.jpeg?auto=compress&cs=tinysrgb&h=400"
          alt="Aqua Blue 20 litre jar"
          className="w-28 h-auto object-contain"
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
>>>>>>> d926c88325eed13913933e08358a034806667a1e
        />
      </div>

      {/* Floating droplet badge */}
<<<<<<< HEAD
      <div className="absolute top-[7%] right-[6%] z-30 glass-card rounded-2xl p-3 animate-float">
=======
      <div className="absolute top-8 right-8 glass-card rounded-2xl p-3 animate-float">
>>>>>>> d926c88325eed13913933e08358a034806667a1e
        <Droplets className="w-6 h-6 text-aqua-500" />
      </div>

      {/* Quality badge */}
<<<<<<< HEAD
      <div className="absolute bottom-[4%] left-[4%] z-30 glass-card rounded-2xl px-4 py-2 animate-float-delay">
=======
      <div className="absolute bottom-12 left-4 glass-card rounded-2xl px-4 py-2 animate-float-delay">
>>>>>>> d926c88325eed13913933e08358a034806667a1e
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
<<<<<<< HEAD
          className="absolute top-0 rounded-full bg-aqua-500/10"
=======
          className="absolute top-0 rounded-full bg-white/20"
>>>>>>> d926c88325eed13913933e08358a034806667a1e
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
