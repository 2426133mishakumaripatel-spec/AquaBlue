import { useEffect, useState } from 'react';
import { Search, ShoppingCart, Menu, X, Droplet, Phone } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

interface NavbarProps {
  onSearchOpen: () => void;
  onCartOpen: () => void;
  onNavigate: (section: string) => void;
  onOrderNow: () => void;
  products: Product[];
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Why Choose Us', id: 'why' },
  { label: 'Home Delivery', id: 'delivery' },
  { label: 'Contact Us', id: 'contact' },
];

export default function Navbar({ onSearchOpen, onCartOpen, onNavigate, onOrderNow }: NavbarProps) {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-aqua-500/10'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <nav className="section-padding h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-4">
          <button onClick={() => handleNav('home')} className="flex-shrink-0">
            <Logo />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className="px-4 py-2 text-sm font-medium text-navy-800 rounded-full hover:bg-aqua-50 hover:text-aqua-600 transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={onSearchOpen}
              className="p-2.5 rounded-full hover:bg-aqua-50 text-navy-800 transition-colors"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2.5 rounded-full hover:bg-aqua-50 text-navy-800 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-aqua-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md animate-scale-in">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={onOrderNow}
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              <Droplet className="w-4 h-4" fill="white" />
              Order Now
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-aqua-50 text-navy-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 sm:top-18 left-0 right-0 bg-white shadow-2xl rounded-b-3xl overflow-hidden animate-fade-up">
            <ul className="flex flex-col p-4">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.id}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="animate-fade-up"
                >
                  <button
                    onClick={() => handleNav(link.id)}
                    className="w-full text-left px-4 py-3.5 text-base font-medium text-navy-800 rounded-xl hover:bg-aqua-50 hover:text-aqua-600 transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3 pb-2 px-2 flex gap-3">
                <button
                  onClick={() => {
                    onOrderNow();
                    setMobileOpen(false);
                  }}
                  className="btn-primary flex-1 justify-center"
                >
                  <Droplet className="w-4 h-4" fill="white" />
                  Order Now
                </button>
                <a
                  href="tel:+918200745595"
                  className="btn-outline flex-1 justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
