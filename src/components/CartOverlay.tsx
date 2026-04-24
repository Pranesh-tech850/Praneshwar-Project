import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

export const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <ShoppingBag size={24} className="text-[#FF641A]" />
                 <h2 className="text-2xl font-black text-gray-800 tracking-tighter uppercase">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                     <ShoppingBag size={48} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Your cart is empty</h3>
                    <p className="text-gray-400">Add some yummy food to get started!</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-[#FF641A] text-white font-bold rounded-xl shadow-lg shadow-[#FF641A]/20"
                  >
                    Browse Restaurants
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        <p className="text-sm font-black text-[#FF641A]">₹{item.price} × {item.quantity}</p>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-6">
                <div className="flex items-center justify-between">
                   <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Subtotal</span>
                   <span className="text-2xl font-black text-gray-800">₹{total}</span>
                </div>
                <button className="w-full py-4 bg-[#FF641A] text-white font-black rounded-2xl text-lg uppercase tracking-widest hover:bg-[#e55916] transition-all shadow-xl shadow-[#FF641A]/20">
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
