import React from "react";
import { Link } from "react-router-dom";
import pathContants from "../routes/pathContants";

const Navbar = () => {
    return (
        <ul className="bg-primary">
            <li>
                <Link to={pathContants.HOME}>Home</Link>
            </li>
            <li>
                <Link to={pathContants.CART}>Cart</Link>
            </li>
            <li>
                <Link to={pathContants.PRODUCTS}>Products</Link>
            </li>
        </ul>
    );
};

export default Navbar;
