import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

    return (
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/cart'>
                    <li>Shopping Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav