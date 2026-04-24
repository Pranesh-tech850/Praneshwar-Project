import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Github, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FF641A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <span className="text-2xl font-black text-[#FF641A] tracking-tighter">TasteKart</span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              TasteKart is your go-to destination for the most delicious food delivered straight to your door. Experience vibrant flavors and top-tier service.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Github, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, color: '#FF641A' }}
                  href="#" 
                  className="text-gray-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-[#FF641A]">Company</h3>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TasteKart Blog</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-[#FF641A]">Contact</h3>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ride with us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-[#FF641A]">Legal</h3>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund & Cancellation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
           <p>© 2026 TasteKart. All rights reserved.</p>
           <p className="flex items-center gap-2 uppercase italic tracking-normal">
              Made with <span className="text-[#FF641A]">♥</span> by Team TasteKart
           </p>
        </div>
      </div>
    </footer>
  );
};
