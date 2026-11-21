import { Target, Heart, Sparkles, Droplet } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-aqua-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-padding relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-50 text-aqua-600 text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="section-title text-white drop-shadow-md mb-5">About Aqua Blue</h2>
          <p className="text-white/90 drop-shadow-sm text-base sm:text-lg leading-relaxed">
            At Aqua Blue, we aim to make drinking water convenient and accessible for homes,
            offices and businesses through our packaged drinking water products and delivery service.
          </p>
        </div>

        {/* Image + content grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div className="relative animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-aqua-500/20 aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/17806615/pexels-photo-17806615.jpeg?auto=compress&cs=tinysrgb&h=800&w=940"
                alt="Pure water being poured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 glass-card rounded-2xl p-5 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-1">
                <Droplet className="w-8 h-8 text-aqua-500" fill="currentColor" />
                <span className="text-2xl font-bold text-navy-900 font-display">100%</span>
              </div>
              <p className="text-sm text-gray-600">Pure drinking water for every need</p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div>
              <h3 className="text-xl font-bold text-white drop-shadow-sm mb-2 font-display">Brand Introduction</h3>
              <p className="text-white/90 drop-shadow-sm leading-relaxed">
                Aqua Blue is a packaged drinking water brand dedicated to providing clean, refreshing
                water in convenient bottle and jar sizes. From small personal bottles to large 20-litre
                jars, we serve homes, offices, and businesses across our delivery area.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white drop-shadow-sm mb-2 font-display">Brand Story</h3>
              <p className="text-white/90 drop-shadow-sm leading-relaxed">
                Aqua Blue was created with a simple goal: to make quality drinking water easily
                accessible. We focus on convenient packaging, reliable delivery, and responsive
                customer service so that fresh water is always within reach.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Commitment cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Target className="w-7 h-7" />}
            title="Our Mission"
            description="To make pure drinking water convenient and accessible for every home, office, and business through quality packaging and reliable doorstep delivery."
            delay="0ms"
          />
          <FeatureCard
            icon={<Heart className="w-7 h-7" />}
            title="Our Commitment"
            description="We are committed to consistent quality, hygienic packaging, and dependable service — ensuring every bottle and jar of Aqua Blue meets our standards."
            delay="100ms"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div
      className="group relative bg-white/90 backdrop-blur-md text-slate-900 p-8 rounded-3xl border border-white/70 card-hover animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 rounded-2xl bg-aqua-gradient flex items-center justify-center text-white mb-5 shadow-lg shadow-aqua-500/30 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-3 font-display">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <Sparkles className="absolute top-6 right-6 w-5 h-5 text-aqua-200" />
    </div>
  );
}
