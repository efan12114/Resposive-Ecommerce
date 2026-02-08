import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Fixed: Using 'import type' for TypeScript perfection and pointing to /index
import { fetchProducts } from './store/index';
import type { RootState, AppDispatch, Product } from './store/index';
import { ShoppingCart, ArrowUpDown, Loader2 } from 'lucide-react';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.products);
  
  const [displayLimit, setDisplayLimit] = useState(8);
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Filtering and Sorting logic to meet project goals
  const filteredItems = items
    .filter((p: Product) => category === 'all' ? true : p.category === category)
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  const displayedItems = filteredItems.slice(0, displayLimit);

  if (status === 'loading') {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600 tracking-tight italic">PRO-CATALOG</h1>
          <div className="flex gap-4">
            <select 
              onChange={(e) => { setCategory(e.target.value); setDisplayLimit(8); }}
              className="border rounded-lg px-2 py-1 text-sm outline-none bg-white font-medium"
            >
              <option value="all">All Items</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
            <button 
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm font-bold"
            >
              <ArrowUpDown size={16} /> {sortOrder === 'asc' ? 'Price: Low' : 'Price: High'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl border hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center mb-4 overflow-hidden bg-gray-50 rounded-lg">
                <img src={product.image} alt={product.title} className="max-h-full object-contain p-4 hover:scale-110 transition-transform" />
              </div>
              <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-1">{product.category}</p>
              <h2 className="text-sm font-semibold line-clamp-2 h-10 mb-2 text-gray-800">{product.title}</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg font-black text-gray-900">${product.price}</span>
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More functionality for performance */}
        {displayLimit < filteredItems.length && (
          <div className="flex justify-center mt-12 mb-10">
            <button 
              onClick={() => setDisplayLimit(prev => prev + 4)}
              className="bg-gray-900 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95"
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </main>
    </div>
  );
}