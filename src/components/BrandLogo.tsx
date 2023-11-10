import { Link } from "react-router-dom";
import brandLogo from "/images/avocadoes-logo.png";
import pathConstants from "../routes/pathConstants";

const BrandLogo = () => {
    return (
        <Link
            to={pathConstants.HOME}
            className="flex h-3 w-3 basis-3 items-center justify-center rounded-full focus:outline-none focus:shadow-primary-border  border-gray-200">
            <img
                src={brandLogo}
                alt="avocadoes logo"
                className="h-3 w-3 object-contain object-center"
            />
        </Link>
    );
};

export default BrandLogo;
