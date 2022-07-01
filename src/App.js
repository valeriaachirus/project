/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Navbar from "./Navbar/Navbar";
import cupcake from './Images/1.jpg';
import cake from "./Images/cake.jpg";
import pops from "./Images/pops.jpg";
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route path={"Home"} element={
        <Home/>
    
      } />
      <Navbar/>
        <div>
          <h1>Choose your sweet</h1>
        </div>
        <div className="sweets"> 
          < Link to="page1"> <img src = {cupcake} width={200} height={300}></img> </Link>
           <Link> <img src = {cake} width={200} height={300}></img> </Link>
           <Link> <img src = {pops} width={200} height={300}></img> </Link>
        
        </div>
    </div>

    
  );
};

export default App;
