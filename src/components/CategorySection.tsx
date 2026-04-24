import React from 'react';
import { motion } from 'motion/react';
import { Category } from '../types';

interface CategorySectionProps {
  categories: Category[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-black text-gray-800 mb-8 tracking-tight">What's on your mind?</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 cursor-pointer group"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 overflow-hidden rounded-full border-2 border-transparent group-hover:border-[#FF641A] transition-all p-1">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-bold text-gray-700 group-hover:text-[#FF641A] transition-colors">{cat.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
