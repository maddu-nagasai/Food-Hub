import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
    address: String,
  },
  items: [{
    name: String,
    price: Number,
    quantity: Number,
  }],
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered'],
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
}, {
  timestamps: true,
})

export const Order = mongoose.model('Order', orderSchema);