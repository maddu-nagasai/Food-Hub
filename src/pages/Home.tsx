import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { RestaurantCard } from '../components/restaurant-card';

const FEATURED_RESTAURANTS = [
  {
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    cuisine: "Italian • Pizza",
    deliveryTime: "25-35 min"
  },
  {
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    cuisine: "Japanese • Sushi",
    deliveryTime: "30-40 min"
  },
  {
    name: "Burger Joint",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    cuisine: "American • Burgers",
    deliveryTime: "20-30 min"
  }
];

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px] mt-16">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=60"
          alt="Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Delicious food delivered to your door</h1>
            <p className="text-xl mb-8">Order from the best local restaurants</p>
            <Link
              to="/restaurants"
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Restaurants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Restaurants</h2>
          <Link
            to="/restaurants"
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
          >
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_RESTAURANTS.map((restaurant) => (
            <Link key={restaurant.name} to={`/restaurants/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <RestaurantCard {...restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}