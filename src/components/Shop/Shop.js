import React from "react";
import shopItems from "../../shop items/shopItems";
import ShopCard from "../Card/ShopCard";
import './Shop.css'
function Shop(){

    
    return (
        <div className="shop">
            {shopItems.map(obj => {
                return <ShopCard name={obj.name} price={obj.price} image={obj.image} key={obj.id} />
                
            })}
        </div>
    )
}

export default Shop