import clsx from "clsx";
import {
    ProductCTA,
    ProductDescription,
    ProductName,
    ProductPrice,
} from "../../../components/ProductCard/ProductCard";
import StarRating from "../../../components/Rating/StarRating";
import { Product } from "../../../data/products";

type ProductDetailsProps = {
    withDescription?: boolean;
    product: Product;
    className?: string;
};

const ProductDetails = (props: ProductDetailsProps) => {
    const { withDescription = true, product, className } = props;

    return (
        <div
            className={clsx(
                "flex flex-col text-left items-start gap-1",
                className
            )}>
            <div className="flex flex-col gap-0.5 w-full">
                <ProductName size="lg">{product.name}</ProductName>
                <StarRating productId={product.id} />
                <ProductPrice
                    size="md"
                    price={product.price}
                    unitOfSale={product.unitOfSale}
                />
            </div>
            {withDescription ? (
                <ProductDescription>
                    {product.productDescription}
                </ProductDescription>
            ) : (
                ""
            )}
            <div className="self-stretch">
                <ProductCTA className="sm:w-16 w-auto" productId={product.id} />
            </div>
        </div>
    );
};

export default ProductDetails;
