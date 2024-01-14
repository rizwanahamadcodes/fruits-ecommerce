import { useSelector } from "react-redux";
import Container from "../../components/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "../../components/Section";
import { RootState } from "../../store/rootReducer";
import { selectProductById } from "../../store/slices/productsSlice";
import { ProductListLayout } from "../Products/ProductsSection";

const BestSellerSection = () => {
    return (
        <Section className="bg-gray-100 border-b border-b-gray-200">
            <Container>
                <SectionTitle defaultBottomMargin>Best Sellers</SectionTitle>
                <SectionSubtitle defaultBottomMargin>
                    Our best selling products in the lineup
                </SectionSubtitle>
            </Container>
            <Container>
                <ProductListLayout>
                    <BestSellingProduct productId={8} />
                    <BestSellingProduct productId={2} />
                </ProductListLayout>
            </Container>
        </Section>
    );
};

type BestSellingProductProps = {
    productId: number;
};

const BestSellingProduct = (props: BestSellingProductProps) => {
    const { productId } = props;
    const product = useSelector((state: RootState) =>
        selectProductById(state, productId)
    );

    return <>{product ? <ProductCard product={product} /> : ""}</>;
};

export default BestSellerSection;
