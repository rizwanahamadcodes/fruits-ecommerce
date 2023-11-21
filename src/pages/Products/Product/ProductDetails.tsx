import {
    ProductCTA,
    ProductDescription,
    ProductName,
    ProductPrice,
} from "../../../components/ProductCard/ProductCard";
import StarRating from "../../../components/Review/StarRating";
import { Product } from "../../../data/products";

type ProductDetailsProps = {
    product: Product;
};

const ProductDetails = (props: ProductDetailsProps) => {
    const { product } = props;

    return (
        <>
            <div className="flex flex-col gap-0.5">
                <ProductName size="lg">{product.name}</ProductName>
                <StarRating productId={product.id} />
                <ProductPrice
                    size="lg"
                    price={product.price}
                    unitOfSale={product.unitOfSale}
                />
            </div>

            <ProductDescription>
                {product.productDescription}
            </ProductDescription>
            <div className="self-stretch">
                <ProductCTA className="sm:w-16 w-auto" productId={product.id} />
            </div>
        </>
    );
};

export default ProductDetails;
