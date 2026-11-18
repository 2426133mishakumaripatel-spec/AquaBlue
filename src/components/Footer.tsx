import { Phone, MessageCircle, MapPin, Facebook, Instagram, Youtube, Droplet, Clock } from 'lucide-react';
import Logo from './Logo';
import { PRODUCTS } from '../data';
import { getSimpleWhatsAppUrl } from '../utils';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const QUICK_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Why Choose Us', id: 'why' },
  { label: 'Home Delivery', id: 'delivery' },
  { label: 'Contact Us', id: 'contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Water wave top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,40L80,35C160,30,320,20,480,25C640,30,800,50,960,50C1120,50,1280,30,1360,20L1440,10L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aqua-500/10 rounded-full blur-3xl" />

      <div className="section-padding relative z-10 pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="text-aqua-200/70 text-sm leading-relaxed mt-5 mb-5">
              Pure drinking water for your home, office and everyday needs. Conveniently
              delivered to your doorstep.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-aqua-200">Quick Links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-aqua-200/70 text-sm hover:text-aqua-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-aqua-200">Our Products</h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-aqua-200/70 text-sm hover:text-aqua-300 transition-colors text-left"
                  >
                    {p.size} Bottle
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-aqua-200">Contact Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+918200745595" className="text-aqua-200/70 hover:text-aqua-300 transition-colors">
                  +91 8200745595
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <a
                  href={getSimpleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua-200/70 hover:text-aqua-300 transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <span className="text-aqua-200/70">
                  Jothan Village, Near Saroli Sai Mandir, Olpad Road, Surat - 394520
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <span className="text-aqua-200/70">Mon-Sat: 7AM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-aqua-200/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Aqua Blue - Pure Drinking Water. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-aqua-200/50 text-sm">
            <Droplet className="w-4 h-4 text-aqua-400" fill="currentColor" />
            <span>Pure. Fresh. Delivered.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-aqua-200/70 hover:bg-aqua-gradient hover:text-white hover:border-transparent transition-all duration-300"
    >
      {icon}
    </a>
  );
}
