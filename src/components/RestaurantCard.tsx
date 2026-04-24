import React from 'react';
import { Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-3 shadow-sm group-hover:shadow-lg transition-all">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {restaurant.isPromoted && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-gray-700 uppercase tracking-wider">
            Promoted
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
           <p className="text-white font-black text-xl leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
              {restaurant.priceRange}
           </p>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{restaurant.name}</h3>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">
            <Star size={12} fill="currentColor" />
            <span>{restaurant.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 font-medium">
            <Clock size={14} />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 line-clamp-1 italic">{restaurant.cuisines.join(', ')}</p>
      </div>
    </motion.div>
  );
};
