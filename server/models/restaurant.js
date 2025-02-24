import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  menu: [{
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
  }],
}, {
  timestamps: true,
})

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);