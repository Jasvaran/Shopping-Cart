import React from "react";
import { useState } from "react";
import './ShopCard.css'
function ShopCard(props) {

    const [checkCart, setCheckCart] = useState(false)


    function add(){
        if (checkCart === false){
            props.addCallback(props.itemObj)
            setCheckCart(true)
        } else {
            alert('Item already in cart')
        }
    }

    return (
        <div className="shopcard">
            <h1 className="name">{props.name}</h1>
            <img className="image" src={props.image} alt="" height='150' width='150' />
            <h2 className="price">${props.price}.00
                <button className="view" onClick={add} id={props.id}>Add To Cart</button>
            </h2>
        </div>

    )
}

export default ShopCard