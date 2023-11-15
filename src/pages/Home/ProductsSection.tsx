import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReferenceContext } from "../../App";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Counter from "../../components/Counter";
import Section, { SectionTitle } from "../../components/Section";
import SelectCategories from "../../components/SelectCategories";
import { Products } from "../../data/products";
import pathConstants from "../../routes/pathConstants";
import { RootState } from "../../store/rootReducer";
import { addItem, selectCartItemById } from "../../store/slices/cartSlice";
import { selectFilteredProducts } from "../../store/slices/productsSlice";
import { formatCurrency } from "../../utils/currency";

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
                    <ProductWrapper>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductWrapper>
                )}
            </Container>
        </Section>
    );
};

type ProductWrapperProps = {
    children: React.ReactNode;
};
const ProductWrapper = (props: ProductWrapperProps) => {
    const { children } = props;

    return (
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
};

type ProductCardProps = {
    product: Products;
};
const ProductCard = (props: ProductCardProps) => {
    const { product } = props;
    const dispatch = useDispatch();

    const productInCart = useSelector((state: RootState) =>
        selectCartItemById(state, product.id)
    );

    return (
        <Link
            to={`${pathConstants.PRODUCTS}/${product.id}`}
            className="p-1 shadow bg-white rounded-1 group">
            <img
                src={product.imageUrl}
                alt=""
                className="group-hover:scale-110 transition-all mb-1"
            />
            <h3 className="text-gray-900">{product.name}</h3>
            <p className="text-1.5 text-primary font-semibold mb-1">
                {formatCurrency(product.price)}
                <span className="text-1 font-medium text-gray-700">
                    {" "}
                    /{product.unitOfSale}
                </span>
            </p>

            {productInCart ? (
                <Counter
                    formattedInfo
                    productId={product.id}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}></Counter>
            ) : (
                <Button
                    className="w-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        dispatch(addItem(product.id));
                    }}>
                    <BsCart3 className="text-1.25" />
                    Add to Cart
                </Button>
            )}
        </Link>
    );
};

export default ProductsSection;
