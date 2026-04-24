import { Category, Restaurant, MenuItem } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400&q=80' },
  { id: '2', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
  { id: '3', name: 'Burgers', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80' },
  { id: '4', name: 'North Indian', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80' },
  { id: '5', name: 'Chinese', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&q=80' },
  { id: '6', name: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80' },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'The Biryani House',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=800&q=80',
    rating: 4.4,
    deliveryTime: '25-30 mins',
    cuisines: ['Biryani', 'Mughlai'],
    priceRange: '₹400 for two',
    isPromoted: true,
  },
  {
    id: 'r2',
    name: 'Pizza Hut',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    rating: 4.1,
    deliveryTime: '35-40 mins',
    cuisines: ['Pizza', 'Italian'],
    priceRange: '₹600 for two',
  },
  {
    id: 'r3',
    name: 'Burger King',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
    rating: 4.3,
    deliveryTime: '20-25 mins',
    cuisines: ['Burgers', 'Fast Food'],
    priceRange: '₹350 for two',
  },
  {
    id: 'r4',
    name: 'Mainland China',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80',
    rating: 4.5,
    deliveryTime: '40-45 mins',
    cuisines: ['Chinese', 'Asian'],
    priceRange: '₹800 for two',
  },
  {
    id: 'r5',
    name: 'Starbucks',
    image: 'https://images.unsplash.com/photo-1544787210-2213d84ad964?w=800&q=80',
    rating: 4.6,
    deliveryTime: '15-20 mins',
    cuisines: ['Coffee', 'Backery'],
    priceRange: '₹500 for two',
    isPromoted: true,
  },
  {
    id: 'r6',
    name: 'Sardarji Baksh',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    rating: 4.2,
    deliveryTime: '30-35 mins',
    cuisines: ['North Indian', 'Curry'],
    priceRange: '₹450 for two',
  }
];

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  'r1': [
    { id: 'm1', name: 'Hyderabadi Chicken Biryani', description: 'Savory chicken and rice dish that includes layers of chicken, rice, and aromatics.', price: 299, image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400&q=80', category: 'Main Course', isVeg: false },
    { id: 'm2', name: 'Paneer Biryani', description: 'Soft paneer cubes cooked with fragrant basmati rice.', price: 249, image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400&q=80', category: 'Main Course', isVeg: true },
  ],
  'r2': [
    { id: 'm3', name: 'Margherita Pizza', description: 'Classic tomato and mozzarella pizza.', price: 199, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', category: 'Pizza', isVeg: true },
    { id: 'm4', name: 'Pepperoni Pizza', description: 'Spicy pepperoni slices over mozzarella.', price: 299, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', category: 'Pizza', isVeg: false },
  ]
};
