/* eslint-disable eqeqeq */
import Navbar from "../Navbar/Navbar";
import  React, {Component} from 'react';
import { useLocation, useParams } from "react-router-dom";
import Cards from "./Cards/Cards";

const Product = () => {
  const location = useLocation()
  const { productId } = useParams()
  const links = [];

  for(var i = 0; i < location.state.data[productId - 1].images.length; i++){
    links.push(location.state.data[productId - 1].images[i])
  }

  return (
    <div className="App">
    <Navbar/>
    <Cards />
  </div>
  )
}


export default Product