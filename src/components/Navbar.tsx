import React, { useState } from 'react';
import { Search, User, ShoppingBag, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onLoginClick: () => void;
  onCartClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onCartClick, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-20 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#FF641A] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <span className="text-2xl font-black text-[#FF641A] tracking-tighter">TasteKart</span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#FF641A] cursor-pointer group">
          <MapPin size={18} className="text-[#FF641A]" />
          <span className="border-b-2 border-gray-800 group-hover:border-[#FF641A]">Lucknow, Uttar Pradesh</span>
          <ChevronDown size={16} className="text-[#FF641A]" />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#FF641A] cursor-pointer font-medium">
          <Search size={22} />
          <span>Search</span>
        </div>
        
        <div 
          onClick={onLoginClick}
          className="flex items-center gap-2 text-gray-600 hover:text-[#FF641A] cursor-pointer font-medium"
        >
          <User size={22} />
          <span>Sign In</span>
        </div>

        <div 
          onClick={onCartClick}
          className="relative flex items-center gap-2 text-gray-600 hover:text-[#FF641A] cursor-pointer font-medium"
        >
          <div className="relative">
            <ShoppingBag size={22} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-[#FF641A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};
