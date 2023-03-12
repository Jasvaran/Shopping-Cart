import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
