import { categories } from '../data/products';
import { useStore } from '../store/useStore';
import { X } from 'lucide-react';

export function Sidebar({ isOpen, onClose }) {
  const { selectedCategory, setSelectedCategory } = useStore();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-bold">Categories</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden lg:block mb-6">
            <h2 className="text-lg font-bold">Categories</h2>
          </div>

          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Special Offer!</h3>
            <p className="text-sm text-gray-700">
              Get 20% off on your first order. Use code: WELCOME20
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
