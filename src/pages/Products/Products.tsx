import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { routes } from "../../routes/pathConstants";
import ProductsSection from "./ProductsSection";

const Products = () => {
    const location = useLocation();

    return (
        <div>
            <div className="h-navHeight"></div>
            <Breadcrumb routes={routes} pathname={location.pathname} />
            <ProductsSection />
        </div>
    );
};

export default Products;
