import { useRef } from "react";
import PopOver from "../../../components/Popover/PopOver";
import {
    ProductCTA,
    ProductDescription,
    ProductName,
    ProductPrice,
} from "../../../components/ProductCard/ProductCard";
import StarRating from "../../../components/Rating/StarRating";
import { Product } from "../../../data/products";
import { useToggle } from "../../../hooks/useToggle";

type ProductDetailsProps = {
    product: Product;
};

const ProductDetails = (props: ProductDetailsProps) => {
    const { product } = props;
    const { isOpen, close, toggle } = useToggle(false);
    const toggleBtnRef = useRef(null);

    return (
        <>
            <div className="flex flex-col gap-0.5 w-full">
                <ProductName size="lg">{product.name}</ProductName>
                <StarRating productId={product.id} />
                <ProductPrice
                    size="md"
                    price={product.price}
                    unitOfSale={product.unitOfSale}
                />
            </div>

            <ProductDescription>
                {product.productDescription}
            </ProductDescription>
            <div className="relative">
                <button onClick={toggle} ref={toggleBtnRef}>
                    Open Popover
                </button>

                <PopOver
                    isOpen={isOpen}
                    close={close}
                    toggleButtonRef={toggleBtnRef}>
                    Hello
                </PopOver>
            </div>
            <div className="self-stretch">
                <ProductCTA className="sm:w-16 w-auto" productId={product.id} />
            </div>
        </>
    );
};

export default ProductDetails;
