import { useLocation, useParams } from "react-router-dom";
import { paramConstants, routes } from "../../../routes/pathConstants";

import { useSelector } from "react-redux";
import Breadcrumb from "../../../components/Breadcrumb";
import { RootState } from "../../../store/rootReducer";
import { selectAllProducts } from "../../../store/slices/productsSlice";
import ProductViewSection from "./ProductViewSection";
import ReviewsSection from "./ReviewsSection";

const Product = () => {
    const location = useLocation();
    const param = useParams()[paramConstants.PRODUCTID];
    const productId = param ? parseInt(param) : null;
    const products = useSelector((state: RootState) =>
        selectAllProducts(state)
    );

    const getProductNameById = (id: string) => {
        const productId = parseInt(id);

        if (productId) {
            const foundProduct = products.find(
                (product) => product.id === productId
            );
            if (foundProduct) {
                return foundProduct.name;
            } else {
                return "Product Details";
            }
        } else {
            return "Product Details";
        }
    };

    return (
        <>
            {productId && (
                <>
                    <div className="h-navHeight"></div>
                    <Breadcrumb
                        routes={routes}
                        pathname={location.pathname}
                        dynamicBreadcrumbLabelGenerators={{
                            productId: (id: string) => getProductNameById(id),
                        }}
                    />

                    <ProductViewSection productId={productId} />
                    <ReviewsSection productId={productId} />
                </>
            )}
        </>
    );
};

export default Product;
