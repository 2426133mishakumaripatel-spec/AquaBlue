import { useState, useCallback } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { PRODUCTS } from './data';
import type { Product } from './types';
import { getSimpleWhatsAppUrl } from './utils';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import HomeDelivery from './components/HomeDelivery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import SearchModal from './components/SearchModal';
import BackToTop from './components/BackToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import ToastContainer from './components/ToastContainer';
import PageLoader from './components/PageLoader';

type Page = 'home' | 'product' | 'checkout';

function AppContent() {
  const { isCartOpen, setCartOpen } = useCart();
  const [page, setPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToSection = useCallback(
    (id: string) => {
      if (page !== 'home') {
        setPage('home');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [page],
  );

  const handleProductSelect = useCallback((product: Product) => {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = useCallback(() => {
    setPage('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBuyNow = useCallback(() => {
    setPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleWhatsApp = useCallback(() => {
    window.open(getSimpleWhatsAppUrl(), '_blank');
  }, []);

  const handleCheckout = useCallback(() => {
    setCartOpen(false);
    setPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setCartOpen]);

  const handleContinueShopping = useCallback(() => {
    setCartOpen(false);
    scrollToSection('products');
  }, [setCartOpen, scrollToSection]);

  const relatedProducts = selectedProduct
    ? PRODUCTS.filter((p) => p.id !== selectedProduct.id).slice(0, 4)
    : [];

  return (
    <div className="page-background min-h-screen overflow-x-hidden">
      <PageLoader />

      <Navbar
        onSearchOpen={() => setSearchOpen(true)}
        onCartOpen={() => setCartOpen(true)}
        onNavigate={scrollToSection}
        onOrderNow={() => scrollToSection('products')}
        products={PRODUCTS}
      />

      {page === 'home' && (
        <>
          <Hero onShopNow={() => scrollToSection('products')} onWhatsApp={handleWhatsApp} />
          <About />
          <Products
            products={PRODUCTS}
            onDetails={handleProductSelect}
            onBuyNow={handleBuyNow}
          />
          <HomeDelivery onBookDelivery={() => scrollToSection('products')} />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <Contact />
        </>
      )}

      {page === 'product' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          relatedProducts={relatedProducts}
          onBack={handleBackToHome}
          onProductSelect={handleProductSelect}
          onBuyNow={handleBuyNow}
          onGoToCheckout={() => setPage('checkout')}
        />
      )}

      {page === 'checkout' && (
        <Checkout onBack={handleBackToHome} onOrderPlaced={handleBackToHome} />
      )}

      <Footer onNavigate={scrollToSection} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
        onContinueShopping={handleContinueShopping}
      />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleProductSelect}
      />
      <BackToTop />
      <WhatsAppFloat />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ToastProvider>
  );
}
