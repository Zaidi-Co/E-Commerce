import { useState } from 'react';
import { Header } from './component/Header';
import { Sidebar } from './component/Sidebar';
import { ProductCard } from './component/ProductCard';
import { ProductDetail } from './component/ProductDetail';
import { Cart } from './component/Cart';
import { AuthModal } from './component/AuthModal';
import { Checkout } from './component/Checkout';
import { products } from './data/products';
import { useStore } from './store/useStore';
import { Package } from 'lucide-react';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const { searchQuery, selectedCategory, user } = useStore();

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCheckout = () => {
    if (!user) {
      setIsCartOpen(false);
      setIsAuthOpen(true);
    } else {
      setIsCartOpen(false);
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 mb-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome to ShopHub
              </h2>
              <p className="text-lg opacity-90">
                Discover amazing products at unbeatable prices
              </p>
            </div>

            {/* Products Grid */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h3>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                <Package className="h-16 w-16 mb-4" />
                <p className="text-lg">No products found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} onCheckout={handleCheckout} />}
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
      {isCheckoutOpen && <Checkout onClose={() => setIsCheckoutOpen(false)} />}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
  }
