import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-50 text-aqua-600 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="section-title text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Have questions? We have answers. Find everything you need to know about Aqua Blue.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden animate-fade-up ${
                  isOpen
                    ? 'border-aqua-300 bg-aqua-50/50 shadow-md shadow-aqua-500/10'
                    : 'border-gray-100 bg-white hover:border-aqua-200'
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-aqua-gradient text-white' : 'bg-aqua-50 text-aqua-600'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-navy-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-aqua-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-17 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
