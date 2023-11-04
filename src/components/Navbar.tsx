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
                <Link to={pathContants.PRODUCTS_LIST}>Products List</Link>
            </li>
            <li>
                <ul>
                    <li>
                        <Link to={"/products/1"}>Products One</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default Navbar;
