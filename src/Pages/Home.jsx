import {Link} from 'react-router-dom'
import "../App.css";
import Navbar from "../Navbar/Navbar";
import cupcake from '../Images/1.jpg';
import cake from "../Images/cake.jpg";
import pops from "../Images/pops.jpg";

const Home = () => {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <div>
          <h1>Choose your sweet</h1>
        </div>
        <div className="sweets"> 
          <Link to="/product"> <img src = {cupcake} alt="img" width={200} height={300}></img> </Link>
          <Link to="/product"> <img src = {cake} alt="img" width={200} height={300}></img> </Link>
          <Link to="/product"> <img src = {pops} alt="img" width={200} height={300}></img> </Link>
        </div>
      </div>
    </div>
  )
}

export default Home