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

const NewArrivalsSection = () => {
    const bestSellingProducts = [24, 12, 7];

    const allProducts = useSelector((state: RootState) =>
        selectAllProducts(state)
    );
    // bg-[url('/images/backgrounds/grundge_bg.svg')]  bg-no-repeat bg-cover
    return (
        <Section>
            <Container>
                <SectionTitle defaultBottomMargin>New Arrivals</SectionTitle>
                <SectionSubtitle defaultBottomMargin>
                    All new addition to our basket
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

export default NewArrivalsSection;
