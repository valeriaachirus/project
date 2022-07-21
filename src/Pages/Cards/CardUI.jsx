/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./card.css";

const Card = props =>{
    return(
       <div className="card text-center">
        <div className="overflow">
            <img style={{height: "400px"}} src={props.imgsrc} alt="Image 1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href="#" className="btn btn-outline-success">Add to cart</a>
        </div>
       </div>
    );
}

export default Card;