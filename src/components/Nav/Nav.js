import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import mysvg from '../../assets/cart.svg'
import { useState } from "react";


function Nav(props) {


    return (
        <nav className="Nav">
            <h1>JM SHOP</h1>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/cart'>
                    <div class="cart-nav">
                        <img src={mysvg} height='50' width='50' alt="" />
                        <div className="#ofitems">{props.incrementCart}</div>
                    </div>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav