/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Pages/About'
import Service from './Pages/Service'
import Product from './Pages/Product'
import Home from './Pages/Home'
import Basket from './Pages/Basket'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  
  <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='basket' element={<Basket />} />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
