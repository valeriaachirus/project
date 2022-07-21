import {Link} from 'react-router-dom'
import "../App.css";
import Navbar from "../Navbar/Navbar";
import cake from '../Images/cake.jpg';
import cupcake from '../Images/cupcake.jpg';
import biscuit from '../Images/biscuit.jpg';


const Home = () => {

  const products = [
    {
      id: 1,
      name: 'ciscake',
      image: cake,
      images: [
        {
          id: 1,
          name: 'ciscake',
          image: "/static/2.jpg"
        },
        {
          id: 2,
          name: 'ciscake cu visina',
          image: "/static/3.jpg"
        },
        {
          id: 3,
          name: 'ciscake cu gust de ananas',
          image: "/static/4.jpg"
        },
      ]
    },
    {
      id: 2,
      name: 'prajituri cu suc de nuc',
      image: cupcake,
      images: [
        {
          id: 4,
          name: 'ciscake',
          image: "/static/4.jpg"
        },
        {
          id: 5,
          name: 'ciscake cu visina',
          image: "/static/5.jpg"
        },
        {
          id: 6,
          name: 'ciscake cu gust de ananas',
          image: "/static/6.jpg"
        },
        
      ]
    },
    {
      id: 3,
      name: 'bomboane africane',
      image: biscuit,
      images: [
        {
          id: 8,
          name: 'ciscake',
          image: "/static/8.jpg"
        },
        {
          id: 9,
          name: 'ciscake cu visina',
          image: "/static/9.jpg"
        },
        {
          id: 10,
          name: 'ciscake cu gust de ananas',
          image: "/static/10.jpg"
        },
      ]
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