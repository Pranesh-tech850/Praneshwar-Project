/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { RestaurantCard } from './components/RestaurantCard';
import { Chatbot } from './components/Chatbot';
import { LoginModal } from './components/LoginModal';
import { MenuOverlay } from './components/MenuOverlay';
import { CartOverlay } from './components/CartOverlay';
import { Footer } from './components/Footer';
import { CATEGORIES, RESTAURANTS } from './constants';
import { Restaurant, MenuItem, CartItem, User } from './types';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string) => {
    setUser({ id: 'u1', name: email.split('@')[0], email });
  };

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FF641A] selection:text-white overflow-x-hidden">
      <Navbar 
        onLoginClick={() => setIsLoginOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartCount={totalCartItems}
      />

      <Hero />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <CategorySection categories={CATEGORIES} />

        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-800 tracking-tighter uppercase mb-2">Popular Restaurants</h2>
              <p className="text-gray-500 font-medium italic">Handpicked favorites just for you in Lucknow</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
               {['Relevance', 'Fast Delivery', 'Ratings', 'Offers'].map((filter) => (
                 <button 
                   key={filter}
                   className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:border-[#FF641A] hover:text-[#FF641A] transition-all whitespace-nowrap"
                 >
                   {filter}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {RESTAURANTS.map((res, i) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <RestaurantCard 
                  restaurant={res} 
                  onClick={() => setSelectedRestaurant(res)} 
                />
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>

      <Footer />

      <Chatbot />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />

      <AnimatePresence>
        {selectedRestaurant && (
          <MenuOverlay 
            restaurant={selectedRestaurant} 
            onClose={() => setSelectedRestaurant(null)} 
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>

      <CartOverlay 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
      />

      {/* User Greeting Toast */}
      <AnimatePresence>
        {user && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-6 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl z-40 flex items-center gap-3 border border-white/10"
          >
             <div className="w-8 h-8 bg-[#FF641A] rounded-full flex items-center justify-center font-bold">
               {user.name.charAt(0).toUpperCase()}
             </div>
             <p className="font-bold tracking-tight">Welcome back, <span className="text-[#FF641A]">{user.name}</span>!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
