import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { CartProvider } from './context/CartContext';
import { Home } from './pages/Home';
import { Restaurants } from './pages/Restaurants';
import { Cart } from './pages/Cart';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App