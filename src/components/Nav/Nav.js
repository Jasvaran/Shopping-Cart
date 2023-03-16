import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import mysvg from '../../assets/cart.svg'
function Nav() {

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
                    <img src={mysvg} height='50' width='50' alt="" />
                    <div className="#ofitems"></div>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav