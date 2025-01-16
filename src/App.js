import { useState } from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Women from './pages/Women';
import Men from './pages/Men';
import Contact from './pages/Contact';
import Body from './pages/Body';
import About from './pages/About'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // Update the quantity of the existing product
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        // Add a new product to the cart
        return [...prevItems, { ...item, quantity: item.quantity }];
      }
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
        const item = prevItems.find((i) => i.id === itemId);

        if (item) {
            if (item.quantity > 1) {
                return prevItems.map((i) =>
                    i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                return prevItems.filter((i) => i.id !== itemId);
            }
        }

        return prevItems;  
    });
};

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartItems={cartItems} removeFromCart={removeFromCart}/>
        <Routes>
          <Route path='/' element={<Body items={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="collections" element={<Body items={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
