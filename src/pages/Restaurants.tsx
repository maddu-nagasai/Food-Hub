import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { RestaurantCard } from '../components/restaurant-card';
import type { Restaurant } from '../lib/types';

// Temporary mock data until backend is connected
const MOCK_RESTAURANTS: Restaurant[] = [
  {
    _id: '1',
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    cuisine: "Italian • Pizza",
    deliveryTime: "25-35 min",
    menu: []
  },
  {
    _id: '2',
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    cuisine: "Japanese • Sushi",
    deliveryTime: "30-40 min",
    menu: []
  },
  {
    _id: '3',
    name: "Burger Joint",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    cuisine: "American • Burgers",
    deliveryTime: "20-30 min",
    menu: []
  },
  {
    _id: '4',
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    cuisine: "Mexican • Tacos",
    deliveryTime: "15-25 min",
    menu: []
  },
  {
    _id: '5',
    name: "Thai Spice",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    cuisine: "Thai • Asian",
    deliveryTime: "35-45 min",
    menu: []
  },
  {
    _id: '6',
    name: "Mediterranean Delight",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    cuisine: "Mediterranean • Healthy",
    deliveryTime: "30-40 min",
    menu: []
  }
];

export function Restaurants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants] = useState<Restaurant[]>(MOCK_RESTAURANTS);

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Restaurants</h1>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant._id} to={`/restaurants/${restaurant._id}`}>
            <RestaurantCard {...restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}