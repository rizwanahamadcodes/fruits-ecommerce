import { useLocation, useParams } from "react-router-dom";
import { paramConstants, routes } from "../../../routes/pathConstants";

import ProductViewSection from "./ProductViewSection";
import ReviewsSection from "./ReviewsSection";
import Breadcrumb from "../../../components/Breadcrumb";

const Product = () => {
    const location = useLocation();
    const param = useParams()[paramConstants.PRODUCTID];
    const productId = param ? parseInt(param) : null;

    return (
        <>
            {productId && (
                <>
                    <div className="h-navHeight"></div>
                    <Breadcrumb
                        routes={routes}
                        pathname={location.pathname}
                        dynamicBreadcrumbLabelGenerators={{
                            productId: (id: string) => "I was dynamic " + id,
                        }}
                    />

                    {/* <Breadcrumb routes={routes} pathname={location.pathname} /> */}
                    <div className="h-breadcrumbHeight"></div>
                    <ProductViewSection productId={productId} />
                    <ReviewsSection productId={productId} />
                </>
            )}
        </>
    );
};

export default Product;
