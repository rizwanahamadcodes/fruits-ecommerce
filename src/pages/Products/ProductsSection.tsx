import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, LinkProps } from "react-router-dom";
import { ReferenceContext } from "../../App";
import Button, { ButtonIcon } from "../../components/Button";
import Container from "../../components/Container";
import Counter from "../../components/Counter";
import Section, { SectionTitle } from "../../components/Section";
import SelectCategories from "../../components/SelectCategories";
import { Product } from "../../data/products";
import pathConstants from "../../routes/pathConstants";
import { RootState } from "../../store/rootReducer";
import { addItem, selectCartItemById } from "../../store/slices/cartSlice";
import { selectFilteredProducts } from "../../store/slices/productsSlice";
import { formatCurrency } from "../../utils/currency";
import clsx from "clsx";

// product card redesign strategy
// product description at 16pt low contrast paragraph
// product heading at 1.5*16 ie 24pt bold
// product price at 18 or 16 regular or bold if 18 not bold if 16 bold
// grayed out star rating at with review link
// only the links and the button should have color not the price, that's not the focus
// Longer product names
// group relevant information, create groups of groups thus spacing them with more and more distance, related details remain closer together

const ProductsSection = () => {
    const filteredProducts = useSelector((state: RootState) =>
        selectFilteredProducts(state)
    );

    const referenceContext = useContext(ReferenceContext);
    return (
        <Section
            ref={referenceContext.productsSectionReference}
            id="products-section"
            className="pt-1">
            <Container>
                <SectionTitle>Our Products</SectionTitle>

                <SelectCategories />

                {filteredProducts.length === 0 ? (
                    <p className="text-center">
                        Sorry no products match your search criteria
                    </p>
                ) : (
                    <ProductListLayout>
                        {filteredProducts.map((product) => (
                            <ProductWrapperWithLink
                                key={product.id}
                                to={`${pathConstants.PRODUCTS}/${product.id}`}>
                                <div className="flex flex-col gap-1">
                                    <ProductImage
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />

                                    <div className="flex flex-col gap-0.5">
                                        <ProductName>
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
                        ))}
                    </ProductListLayout>
                )}
            </Container>
        </Section>
    );
};

type ProductListLayoutProps = {
    children: React.ReactNode;
};
const ProductListLayout = (props: ProductListLayoutProps) => {
    const { children } = props;

    return (
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
};

type ProductWrapperWithLinkProps = LinkProps;

const ProductWrapperWithLink = (props: ProductWrapperWithLinkProps) => {
    const { children, ...otherProps } = props;

    return (
        <Link
            className="overflow-hidden p-1 shadow-soft border border-transparent hover:border-primary bg-white rounded-1 group"
            {...otherProps}>
            {children}
        </Link>
    );
};

type ProductImageProps = React.ComponentPropsWithoutRef<"img">;

const ProductImage = (props: ProductImageProps) => {
    const { className, ...otherProps } = props;

    return (
        <img
            {...otherProps}
            className={clsx("group-hover:scale-110 transition-all", className)}
        />
    );
};

type ProductNameProps = React.ComponentPropsWithoutRef<"h3">;

const ProductName = (props: ProductNameProps) => {
    const { className, ...otherProps } = props;

    return (
        <h3
            className={clsx("text-gray-900 relative z-[1]", className)}
            {...otherProps}
        />
    );
};

type ProductPriceProps = {
    unitOfSale: Product["unitOfSale"];
    price: Product["price"];
    className?: string;
};

const ProductPrice = (props: ProductPriceProps) => {
    const { className, unitOfSale, price } = props;

    return (
        <p className={clsx("text-1.25 leading-1 font-semibold", className)}>
            {formatCurrency(price)}
            <span className="text-1 font-medium text-gray-700">
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
        <p className="min-h-5 overflow-ellipsis" {...otherProps}>
            {children}
        </p>
    );
};

export default ProductsSection;
