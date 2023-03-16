import React from "react";
import './ShopCard.css'
function ShopCard({name, price, image}) {

    return (
        <div className="shopcard">
            <h1 className="name">{name}</h1>
            <img className="image" src={image} alt="" height='150' width='150' />
            <h2 className="price">${price}.00
                <button className="view">View Details</button>
            </h2>
        </div>
    )
}

export default ShopCard