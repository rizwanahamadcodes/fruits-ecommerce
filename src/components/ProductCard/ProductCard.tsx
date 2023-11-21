import clsx from "clsx";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, LinkProps } from "react-router-dom";
import { Product } from "../../data/products";
import pathConstants from "../../routes/pathConstants";
import { RootState } from "../../store/rootReducer";
import { addItem, selectCartItemById } from "../../store/slices/cartSlice";
import Button, { ButtonIcon } from "../Button";
import Counter from "../Counter";
import { formatCurrency } from "../../utils/currency";

type ProductCardProps = {
    product: Product;
};

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;

    return (
        <ProductWrapperWithLink
            className="overflow-hidden block"
            key={product.id}
            to={`${pathConstants.PRODUCTS}/${product.id}`}>
            <div className="flex flex-col gap-1">
                <ProductImage src={product.imageUrl} alt={product.name} />

                <div className="flex flex-col gap-0.5">
                    <ProductName>{product.name}</ProductName>
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

type ProductWrapperWithLinkProps = LinkProps;

export const ProductWrapperWithLink = (props: ProductWrapperWithLinkProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <Link
            className={clsx(
                "p-1 shadow-soft border border-transparent hover:border-primary bg-white rounded-1 group",
                className
            )}
            {...otherProps}>
            {children}
        </Link>
    );
};

type ProductImageProps = React.ComponentPropsWithoutRef<"img">;

export const ProductImage = (props: ProductImageProps) => {
    const { className, ...otherProps } = props;

    return (
        <img
            {...otherProps}
            className={clsx(
                "group-hover:scale-110 rounded-1 transition-all",
                className
            )}
        />
    );
};

type ProductNameProps = React.ComponentPropsWithoutRef<"h3"> & {
    size?: "sm" | "md" | "lg";
};

export const ProductName = (props: ProductNameProps) => {
    const { className, size = "md", ...otherProps } = props;
    const sizeMap = {
        sm: "text-1.25",
        md: "text-1.75",
        lg: "text-2.25",
    };

    return (
        <h3
            className={clsx(
                "text-gray-900 font-medium relative z-[1]",
                sizeMap[size],
                className
            )}
            {...otherProps}
        />
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
                "leading-1 font-medium text-gray-800",
                prizeSizeMap[size],
                className
            )}>
            {formatCurrency(price)}
            <span
                className={clsx(
                    "font-medium text-gray-700",
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
        <div className={className}>
            {productInCart ? (
                <Counter
                    className="w-full"
                    formattedInfo
                    productId={productId}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                />
            ) : (
                <Button
                    className="w-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

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
        <p className="overflow-ellipsis font-medium" {...otherProps}>
            {children}
        </p>
    );
};
