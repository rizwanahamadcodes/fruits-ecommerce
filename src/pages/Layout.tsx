import { Outlet, matchPath, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import pathConstants from "../routes/pathConstants";

const Layout = () => {
    const location = useLocation();
    const pathSegments = location.pathname
        .split("/")
        .filter((segment) => segment != "");
    const matches = matchPath(pathConstants.PRODUCTS, "/products");
    // console.log(matches);
    return (
        <>
            <Header />
            <ul className="mt-navHeight">
                <li>Home</li>
                {pathSegments.map((segment) => (
                    <li>{segment}</li>
                ))}
            </ul>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
