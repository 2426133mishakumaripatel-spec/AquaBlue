import { ShieldCheck, PackageCheck, Truck, Droplets, Headphones } from 'lucide-react';
import { FEATURES } from '../data';

const ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  PackageCheck,
  Truck,
  Droplets,
  Headphones,
};

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-aqua-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-aqua-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-50 text-aqua-600 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title text-white drop-shadow-md mb-4">Why Choose Aqua Blue</h2>
          <p className="text-white/90 drop-shadow-sm text-base sm:text-lg">
            We are dedicated to providing quality drinking water with reliable service that
            you can count on, every time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FEATURES.map((feat, i) => {
            const Icon = ICONS[feat.icon] || ShieldCheck;
            return (
              <div
                key={feat.title}
                className="group relative bg-white/90 backdrop-blur-md text-slate-900 p-6 rounded-3xl border border-white/70 card-hover text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative mx-auto w-16 h-16 mb-5">
                  <div className="absolute inset-0 bg-aqua-gradient rounded-2xl shadow-lg shadow-aqua-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-base text-navy-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
