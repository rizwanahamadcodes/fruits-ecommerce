import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import pathConstants from "../routes/pathConstants";
import cn from "../utils/cn";
import Container from "./Container";
import brandLogo from "/images/avocadoes-logo.png";

const Navbar = () => {
    return (
        <nav className="h-navHeight backdrop-blur-sm shadow-soft fixed top-0 flex w-screen z-10 items-center">
            <Container className="flex gap-2 justify-between">
                <Link
                    to={pathConstants.HOME}
                    className="flex h-3 w-3 basis-3 items-center justify-center rounded-full focus:outline-none focus:shadow-primary-border bg-white  border-gray-200 border">
                    <img
                        src={brandLogo}
                        alt="avocadoes logo"
                        className="h-2.5 w-2.5 object-contain object-center"
                    />
                </Link>
                <input
                    type="text"
                    className="grow w-0 max-w-lg h-3 px-1 border-gray-200 border rounded-full focus:outline-none hover:border-primary focus:shadow-primary-border focus:border-primary transition "
                    placeholder="Search products"
                />
                <button
                    className={cn(
                        "relative flex items-center justify-center bg-white rounded-full h-3 w-3 cursor-pointer border border-white transition hover:border-primary active:scale-95 focus:shadow-primary-border focus:outline-none focus:border-primary border-gray-200"
                    )}>
                    <BsCart3 className="text-1.5 text-primary" />
                    <span className="font-medium h-1.5 w-1.5 absolute text-gray-100 bg-primary right-0 translate-x-1/2 top-2 flex items-center justify-center rounded-full">
                        3
                    </span>
                </button>
            </Container>
        </nav>
    );
};

export default Navbar;
