import { ShoppingCart, Truck, Droplets, Headphones, ArrowRight } from 'lucide-react';
import { DELIVERY_FEATURES } from '../data';

interface HomeDeliveryProps {
  onBookDelivery: () => void;
}

const ICONS: Record<string, React.ElementType> = {
  ShoppingCart,
  Truck,
  Droplets,
  Headphones,
};

export default function HomeDelivery({ onBookDelivery }: HomeDeliveryProps) {
  return (
    <section
      id="delivery"
      className="relative py-20 lg:py-28 overflow-hidden bg-navy-gradient"
    >
      {/* Water wave background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="#8ed7ff"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-aqua-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-aqua-400/10 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-aqua-200 text-sm font-semibold mb-4 border border-white/10">
              Home Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight mb-5 leading-tight">
              Fresh Water Delivered to Your Doorstep
            </h2>
            <p className="text-aqua-100/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Enjoy the convenience of Aqua Blue drinking water delivered directly to your
              home, office or business. Just order online or via WhatsApp and we will bring
              fresh water right to you.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              {DELIVERY_FEATURES.map((feat, i) => {
                const Icon = ICONS[feat.icon] || Truck;
                return (
                  <div
                    key={feat.title}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm card-hover animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-aqua-gradient flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">{feat.title}</h3>
                      <p className="text-aqua-200/70 text-xs leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onBookDelivery}
              className="btn-white text-base group"
            >
              Book Your Delivery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[5/4]">
              <img
                src="https://images.pexels.com/photos/7843975/pexels-photo-7843975.jpeg?auto=compress&cs=tinysrgb&h=800&w=940"
                alt="Water delivery service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-aqua-gradient flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Free Delivery on 20L Jars</p>
                  <p className="text-aqua-200/70 text-xs">Within our service area in Surat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
