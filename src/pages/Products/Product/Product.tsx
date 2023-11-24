import { useParams } from "react-router-dom";
import pathConstants from "../../../routes/pathConstants";

import ProductViewSection from "./ProductViewSection";
import ReviewsSection from "./ReviewsSection";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { selectProductById } from "../../../store/slices/productsSlice";
import { reviews } from "../../../data/reviews";

const Product = () => {
    const productId = useParams()[pathConstants.PRODUCT_DETAIL_PARAM];

    const product = useSelector((state: RootState) =>
        productId ? selectProductById(state, parseInt(productId)) : null
    );

    const productReviews = reviews.filter(
        (review) => review.productId === product?.id
    );

    return (
        <>
            {product && <ProductViewSection product={product} />}
            {productReviews.length != 0 && (
                <ReviewsSection productReviews={productReviews} />
            )}
        </>
    );
};

export default Product;
