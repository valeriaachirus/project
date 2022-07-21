import React from "react"
import Card from './CardUI';
import { useLocation, useParams } from "react-router-dom";


const Cards = props =>{
    const location = useLocation()
    const { productId } = useParams()
    const links = []
    const title = []

    for(var i = 0; i < location.state.data[productId - 1].images.length; i++){
        links.push(location.state.data[productId - 1].images[i].image)
        title.push(location.state.data[productId - 1].images[i].name)
    }

    

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card-element row">
                {
                    links.map((link) => (
                        <div className="col-md-4">
                            <Card imgsrc={link} title="Cake"/>
                        </div>
                    ))
                }
                
                
            </div>
        </div>

    );
}

export default Cards;