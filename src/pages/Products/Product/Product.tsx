import { useParams } from "react-router-dom";
import pathConstants from "../../../routes/pathConstants";

import ProductViewSection from "./ProductViewSection";
import ReviewsSection from "./ReviewsSection";

const Product = () => {
    const param = useParams()[pathConstants.PRODUCT_DETAIL_PARAM];
    const productId = param ? parseInt(param) : null;

    return (
        <>
            {productId && (
                <>
                    <ProductViewSection productId={productId} />
                    <ReviewsSection productId={productId} />
                </>
            )}
        </>
    );
};

export default Product;
