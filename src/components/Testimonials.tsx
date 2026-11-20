import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-aqua-50/85 to-white/85 overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-100 text-aqua-600 text-sm font-semibold mb-4">
            Our Customers
          </span>
          <h2 className="section-title text-navy-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We value every customer and strive to deliver the best service. Here is what
            people have to say about Aqua Blue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className="group relative bg-white rounded-3xl p-6 border border-gray-100 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-aqua-100" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < t.rating ? 'text-amber-400' : 'text-gray-200'
                    }`}
                    fill={j < t.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-aqua-50">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                  {t.sample && (
                    <p className="text-xs text-gray-400">Sample testimonial</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto">
          These are sample testimonials shown for demonstration. Real customer reviews will
          replace these once the website is live and serving customers.
        </p>
      </div>
    </section>
  );
}
