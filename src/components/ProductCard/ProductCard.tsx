import clsx from "clsx";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product } from "../../data/products";
import pathConstants from "../../routes/pathConstants";
import { RootState } from "../../store/rootReducer";
import { addItem, selectCartItemById } from "../../store/slices/cartSlice";
import { formatCurrency } from "../../utils/currency";
import Button, { ButtonIcon } from "../Button";
import Counter from "../Counter";

type ProductCardProps = {
    product: Product;
};

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;

    return (
        <ProductWrapperWithLink
            className="overflow-hidden block"
            key={product.id}>
            <div className="flex flex-col gap-1">
                <ProductImage
                    to={`${pathConstants.PRODUCTS.path}/${product.id}`}
                    src={product.imageUrl}
                    alt={product.name}
                />

                <div className="flex flex-col gap-0.5">
                    <ProductName
                        to={`${pathConstants.PRODUCTS.path}/${product.id}`}>
                        {product.name}
                    </ProductName>
                    <ProductPrice
                        unitOfSale={product.unitOfSale}
                        price={product.price}
                    />
                </div>

                <ProductCTA productId={product.id} />
            </div>
        </ProductWrapperWithLink>
    );
};

export default ProductCard;

type ProductWrapperProps = React.ComponentPropsWithoutRef<"div">;

export const ProductWrapperWithLink = (props: ProductWrapperProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div
            className={clsx(
                "p-1 shadow border border-transparent hover:border-primary bg-white rounded-1 group inline-block",
                className
            )}
            {...otherProps}>
            {children}
        </div>
    );
};

type ProductImageProps = React.ComponentPropsWithoutRef<"img"> & {
    to: string;
    scaleOnHover?: boolean;
};

export const ProductImage = (props: ProductImageProps) => {
    const { to, className, scaleOnHover = true, ...otherProps } = props;

    return (
        <Link to={to}>
            <img
                {...otherProps}
                className={clsx(
                    "rounded-1",
                    scaleOnHover ? "group-hover:scale-110 transition-all" : "",
                    className
                )}
            />
        </Link>
    );
};

type ProductNameProps = React.ComponentPropsWithoutRef<"h3"> & {
    size?: "sm" | "md" | "lg";
    to: string;
};

export const ProductName = (props: ProductNameProps) => {
    const { to, className, size = "md", ...otherProps } = props;
    const sizeMap = {
        sm: "text-1",
        md: "text-1.5",
        lg: "text-2",
    };

    return (
        <Link to={to}>
            <h3
                className={clsx(
                    "text-gray-900 font-medium relative z-[10]",
                    sizeMap[size],
                    className
                )}
                {...otherProps}
            />
        </Link>
    );
};

type ProductPriceProps = {
    unitOfSale: Product["unitOfSale"];
    price: Product["price"];
    className?: string;
    size?: "sm" | "md" | "lg";
};

export const ProductPrice = (props: ProductPriceProps) => {
    const { className, unitOfSale, size = "md", price } = props;
    const prizeSizeMap = {
        sm: "text-1",
        md: "text-1.25",
        lg: "text-1.75",
    };

    const unitOfSaleSizeMap = {
        sm: "text-1",
        md: "text-1",
        lg: "text-1.25",
    };
    return (
        <p
            className={clsx(
                "leading-1 relative z-[10] font-medium text-gray-700",
                prizeSizeMap[size],
                className
            )}>
            {formatCurrency(price)}
            <span
                className={clsx(
                    "font-medium text-gray-500",
                    unitOfSaleSizeMap[size]
                )}>
                {" "}
                /{unitOfSale}
            </span>
        </p>
    );
};

type ProductCTAProps = {
    productId: Product["id"];
    className?: string;
};

export const ProductCTA = (props: ProductCTAProps) => {
    const { productId, className } = props;
    const dispatch = useDispatch();

    const productInCart = useSelector((state: RootState) =>
        selectCartItemById(state, productId)
    );

    return (
        <div className={clsx("z-[10] relative", className)}>
            {productInCart ? (
                <Counter
                    className="w-full"
                    formattedInfo
                    productId={productId}
                />
            ) : (
                <Button
                    className="w-full"
                    onClick={() => {
                        dispatch(addItem(productId));
                    }}>
                    <ButtonIcon icon={BsCart3} />
                    Add to Cart
                </Button>
            )}
        </div>
    );
};

type ProductDescriptionProps = Omit<
    React.ComponentPropsWithoutRef<"p">,
    "children"
> & {
    children: Product["productDescription"];
};

export const ProductDescription = (props: ProductDescriptionProps) => {
    const { children, ...otherProps } = props;
    return (
        <p
            className="overflow-ellipsis font-medium relative z-[10]"
            {...otherProps}>
            {children}
        </p>
    );
};
