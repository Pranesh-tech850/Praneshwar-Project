export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  priceRange: string;
  isPromoted?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
