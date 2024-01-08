import { useSelector } from "react-redux";
import Container from "../../components/Container";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "../../components/Section";
import { ProductListLayout } from "../Products/ProductsSection";
import { RootState } from "../../store/rootReducer";
import { selectAllProducts } from "../../store/slices/productsSlice";
import ProductCard from "../../components/ProductCard/ProductCard";

const BestSellerSection = () => {
    const bestSellingProducts = [2, 4, 11, 6];

    const allProducts = useSelector((state: RootState) =>
        selectAllProducts(state)
    );

    return (
        <Section className="bg-gray-200">
            <Container>
                <SectionTitle defaultBottomMargin>Best Sellers</SectionTitle>
                <SectionSubtitle defaultBottomMargin>
                    Our best selling products in the lineup
                </SectionSubtitle>
            </Container>
            <Container>
                <ProductListLayout>
                    {allProducts.map((product) =>
                        bestSellingProducts.includes(product.id) ? (
                            <ProductCard key={product.id} product={product} />
                        ) : null
                    )}
                </ProductListLayout>
            </Container>
        </Section>
    );
};

export default BestSellerSection;
