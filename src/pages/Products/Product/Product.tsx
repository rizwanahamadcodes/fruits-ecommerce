import { useParams } from "react-router-dom";
import { paramConstants } from "../../../routes/pathConstants";

import ProductViewSection from "./ProductViewSection";
import ReviewsSection from "./ReviewsSection";

const Product = () => {
    const param = useParams()[paramConstants.PRODUCTID];
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
