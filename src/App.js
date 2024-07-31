import React from "react";
import './App.css';
import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from './Cart';
import Checkout from "./Checkout";

function App(){
  return(
    <Router> 
      <div className="App">
    <header className="App-header">
      Welcome to the E-commerce App
      <nav>
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to="/products">Prodcuts</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
        </header>
        </div>
   
          </Router>
  );
}
export default App;