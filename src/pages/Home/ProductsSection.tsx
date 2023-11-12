import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Section, { SectionTitle } from "../../components/Section";
import { Category, categories } from "../../data/categories";
import { Products } from "../../data/products";
import { RootState } from "../../store/rootReducer";
import {
    selectFilteredProducts,
    updateSelectedCategory,
} from "../../store/slices/productsSlice";
import cn from "../../utils/cn";
import productCategoryBackground from "/images/product-category-background.png";
import { ReferenceContext } from "../../App";
import { Link } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { addItem, selectCartItemById } from "../../store/slices/cartSlice";
import Counter from "../../components/Counter";

const ProductsSection = () => {
    const filteredProducts = useSelector((state: RootState) =>
        selectFilteredProducts(state)
    );

    const referenceContext = useContext(ReferenceContext);
    return (
        <Section
            ref={referenceContext.productsSectionReference}
            id="products-section">
            <Container>
                <SectionTitle>Our Products</SectionTitle>
                <CategoryTab>
                    <CategoryTabItem
                        category={{
                            id: 0,
                            name: "All",
                            imageUrl: "/images/icons/all.png",
                        }}
                    />
                    {categories.map((category) => (
                        <CategoryTabItem
                            key={category.id}
                            category={category}
                        />
                    ))}
                </CategoryTab>
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

type CategoryTabProps = {
    children: React.ReactNode;
};
const CategoryTab = (props: CategoryTabProps) => {
    const { children } = props;

    return (
        <div className="flex mb-2 flex-wrap gap-y-3 gap-1 justify-center">
            {children}
        </div>
    );
};

type CategoryTabItemProps = {
    category: Category;
};
const CategoryTabItem = (props: CategoryTabItemProps) => {
    const { category } = props;
    const { selectedCategory } = useSelector(
        (state: RootState) => state.products
    );
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(updateSelectedCategory(category.id))}
            key={category.id}
            className="group w-8 flex flex-col items-center">
            <span className="h-2 mb-1">
                <img
                    src={category.imageUrl}
                    alt=""
                    className="transition-all group-hover:scale-[1.2]"
                />
            </span>
            <span className="w-full flex items-center text-center ali relative">
                <img
                    src={productCategoryBackground}
                    alt=""
                    className={cn(
                        "opacity-0 transition-all -z-10  absolute h-2.5",
                        category.id === selectedCategory && " opacity-100"
                    )}
                />
                <h1
                    className={cn(
                        "font-medium relative text-primary grow text-center",
                        selectedCategory === category.id && "text-white"
                    )}>
                    {category.name}
                </h1>
            </span>
        </button>
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
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <p className="text-1.5 text-primary font-semibold mb-1">
                Rs. {product.price}
                <span className="text-0.75 text-gray-700">
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
