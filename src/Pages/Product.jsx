/* eslint-disable eqeqeq */
import Navbar from "../Navbar/Navbar";
import { useLocation, useParams } from "react-router-dom";

const Product = () => {
  const location = useLocation()
  const { productId } = useParams()

  return (
    <div className="App">
    <Navbar/>
    <div>
      Product detail: 
      {location.state.data.map( (item) => (
        <p>{(item.id == productId) ? item.name : ''}</p>
      ))}
    </div>
  </div>
  )
}

export default Product