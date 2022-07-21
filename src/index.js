/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Pages/Cards/CardUI';
import Cards from './Pages/Cards/Cards';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './Pages/OurTeam'
import Contact from './Pages/Contact'
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
        <Route path='about' element={<OurTeam />} />
        <Route path='service' element={<Contact />} />
        <Route path='basket' element={<Basket />} />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
