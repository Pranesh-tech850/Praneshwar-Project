import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Plus } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';

interface MenuOverlayProps {
  restaurant: Restaurant | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ restaurant, onClose, onAddToCart }) => {
  if (!restaurant) return null;

  const items = MENU_ITEMS[restaurant.id] || [];

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-white overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20 pt-10">
        <button 
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-[#FF641A] transition-colors font-bold"
        >
          <ArrowLeft size={24} />
          <span>Back to Restaurants</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8 mb-12 border-b border-gray-100 pb-12">
           <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
           </div>
           <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tighter">{restaurant.name}</h1>
              <p className="text-lg text-gray-500 italic mb-6">{restaurant.cuisines.join(', ')}</p>
              <div className="flex items-center gap-8">
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Rating</span>
                    <span className="text-xl font-black text-green-600">{restaurant.rating} ★</span>
                 </div>
                 <div className="w-[1px] h-10 bg-gray-200" />
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Time</span>
                    <span className="text-xl font-black text-gray-800">{restaurant.deliveryTime}</span>
                 </div>
                 <div className="w-[1px] h-10 bg-gray-200" />
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cost</span>
                    <span className="text-xl font-black text-gray-800">{restaurant.priceRange}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-12">
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-400 font-bold uppercase tracking-widest">No items found for this restaurant yet.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-black text-gray-800 mb-8 border-l-4 border-[#FF641A] pl-4">Recommended Items</h2>
              <div className="grid gap-6">
                {items.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between gap-6 p-6 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-4 h-4 border-2 flex items-center justify-center p-0.5 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                          <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                        </div>
                        {item.category && <span className="text-[10px] font-bold text-[#FF641A] uppercase tracking-widest">{item.category}</span>}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-lg font-black text-gray-700 mb-3">₹{item.price}</p>
                      <p className="text-sm text-gray-500 line-clamp-2 max-w-xl">{item.description}</p>
                    </div>
                    <div className="relative w-40 h-40 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform" />
                      <button 
                        onClick={() => onAddToCart(item)}
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl border border-gray-100 shadow-xl text-[#FF641A] font-black text-sm uppercase tracking-widest hover:bg-[#FF641A] hover:text-white transition-all flex items-center gap-2"
                      >
                        <Plus size={16} /> ADD
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
