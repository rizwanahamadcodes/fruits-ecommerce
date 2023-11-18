import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import Section, { SectionTitle } from "../../components/Section";
import SelectCategories from "../../components/SelectCategories";
import { RootState } from "../../store/rootReducer";
import { selectFilteredProducts } from "../../store/slices/productsSlice";

const ProductsSection = () => {
    const [searchParams] = useSearchParams();
    const filteredProducts = useSelector((state: RootState) =>
        selectFilteredProducts(state, searchParams)
    );

    return (
        <Section id="products-section" className="pt-1">
            <Container>
                <SectionTitle>Our Products</SectionTitle>

                <SelectCategories />

                {filteredProducts.length === 0 ? (
                    <p className="bg-white rounded-1 p-1 shadow-soft">
                        Sorry no products match your search criteria
                    </p>
                ) : (
                    <ProductListLayout>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductListLayout>
                )}
            </Container>
        </Section>
    );
};

export default ProductsSection;

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
