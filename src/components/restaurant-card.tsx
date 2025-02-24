import React from 'react';
import { Star, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  className?: string;
}

export function RestaurantCard({ name, image, rating, cuisine, deliveryTime, className }: RestaurantCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]", className)}>
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{cuisine}</p>
        <div className="flex items-center space-x-4 mt-3">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{deliveryTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}