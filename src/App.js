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
      setCartItems([...cartItems, item]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartItems={cartItems}/>
        <Routes>
          <Route path='/' element={<Body items={cartItems} addToCart={addToCart}/>}/>
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="collections" element={<Body items={cartItems} addToCart={addToCart}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
