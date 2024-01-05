import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import Section, {
    SectionCategoryTitle,
    SectionTitle,
} from "../../components/Section";
import SelectCategories from "../../components/SelectCategories";
import { RootState } from "../../store/rootReducer";
import { selectFilteredProducts } from "../../store/slices/productsSlice";

const ProductsSection = () => {
    const [searchParams] = useSearchParams();
    const filteredProducts = useSelector((state: RootState) =>
        selectFilteredProducts(state, searchParams)
    );

    return (
        <Section id="products-section" className="pt-2">
            <Container>
                <SectionTitle className="mb-1">Our Products</SectionTitle>
                <div className="flex w-full max-w-xl mb-2 gap-1 items-center">
                    <SectionCategoryTitle>Category: </SectionCategoryTitle>
                    <SelectCategories />
                </div>
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
export const ProductListLayout = (props: ProductListLayoutProps) => {
    const { children } = props;

    return (
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
};
