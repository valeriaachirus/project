import {Link} from 'react-router-dom'
import "../App.css";
import Navbar from "../Navbar/Navbar";
import cupcake from '../Images/1.jpg';
import cake from "../Images/cake.jpg";
import pops from "../Images/pops.jpg";

const Home = () => {

  const products = [
    {
      id: 1,
      name: 'ciscake',
      image: cupcake,
    },
    {
      id: 2,
      name: 'prajituri cu suc de nuc',
      image: cake,
    },
    {
      id: 3,
      name: 'bomboane africane',
      image: pops
    },
  ]

  return (
    <div className="App">
      <Navbar/>
      <div>
        <div>
          <h1>Choose your sweet</h1>
        </div>
        <div className="sweets"> 
          {
            products.map( (item) => (
              <Link to={`/product/${item.id}`} state={{data: products}}> 
                <img src={item.image} alt="img" width={200} height={300}></img> 
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home