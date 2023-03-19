import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';


function App() {

const [cart, setCart] = useState([])
const [numOfItems, setNumOfItems] = useState(0)


function handleAdd(getInput){
  setCart((prevState) => ([...prevState, getInput]))

}



useEffect(() => {
  
  function displayNumOfItems(){
    let items = cart.length
    setNumOfItems(items)
  }
  displayNumOfItems()

}, [cart])

  return (
    <Router>
      <div className="App">
        <Nav incrementCart={numOfItems} />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/shop' element={<Shop addCallback={handleAdd} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
