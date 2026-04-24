import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-[#2B1E12] overflow-hidden mt-20 flex items-center justify-center px-4">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Deliciousness <span className="text-[#FF641A]">Delivered</span> to Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Experience the vibrant taste of your favorite dishes from top-rated restaurants in TasteKart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-[#FF641A] text-white font-bold rounded-xl hover:bg-[#e55916] transition-colors shadow-lg shadow-[#FF641A]/20">
              Order Now
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-md">
              View Offers
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
             <img 
               src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" 
               alt="Vibrant Food"
               className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-3"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="text-xl font-bold">4.8</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Top Rated</p>
                  <p className="text-xs text-gray-500">Highest quality food</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
