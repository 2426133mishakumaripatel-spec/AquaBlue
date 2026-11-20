import { useState, useMemo } from 'react';
import { SlidersHorizontal, Droplet } from 'lucide-react';
import type { Product } from '../types';
import ProductCard from './ProductCard';
import { CATEGORY_LABELS } from './ProductCard';

interface ProductsProps {
  products: Product[];
  onDetails: (product: Product) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

type Filter = 'all' | 'small' | 'medium' | 'large' | 'bulk';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Products' },
  { key: 'small', label: 'Small Bottles' },
  { key: 'medium', label: 'Medium Bottles' },
  { key: 'bulk', label: 'Bulk & Jars' },
];

export default function Products({ products, onDetails, onBuyNow }: ProductsProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.sizeCategory === filter);
  }, [products, filter]);

  return (
<<<<<<< HEAD
    <section id="products" className="relative py-20 lg:py-28 bg-gradient-to-b from-white/85 to-aqua-50/85 overflow-hidden">
=======
    <section id="products" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-aqua-50/50 overflow-hidden">
>>>>>>> d926c88325eed13913933e08358a034806667a1e
      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-100 text-aqua-600 text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="section-title text-navy-900 mb-4">Choose Your Perfect Size</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            From compact 250ml bottles to large 20-litre jars, Aqua Blue has the right size
            for every need. All products feature hygienic, sealed packaging.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-1.5 text-aqua-600 text-sm font-medium mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filter:
          </div>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? 'bg-aqua-gradient text-white shadow-lg shadow-aqua-500/30'
                  : 'bg-white text-navy-700 border border-gray-200 hover:border-aqua-300 hover:text-aqua-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} onDetails={onDetails} onBuyNow={onBuyNow} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Droplet className="w-12 h-12 text-aqua-200 mx-auto mb-3" />
            <p className="text-gray-500">No products in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
