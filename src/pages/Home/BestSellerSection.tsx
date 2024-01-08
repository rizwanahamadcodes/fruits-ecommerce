import { useSelector } from "react-redux";
import Container from "../../components/Container";
import { ProductImage } from "../../components/ProductCard/ProductCard";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "../../components/Section";
import { RootState } from "../../store/rootReducer";
import { selectProductById } from "../../store/slices/productsSlice";
import ProductDetails from "../Products/Product/ProductDetails";
import pathConstants from "../../routes/pathConstants";
import { Link } from "react-router-dom";

const BestSellerSection = () => {
    return (
        <Section className="border-gray-200 border-b-[1px] py-4">
            <Container>
                <SectionTitle defaultBottomMargin>Best Sellers</SectionTitle>
                <SectionSubtitle defaultBottomMargin>
                    Our best selling products in the lineup
                </SectionSubtitle>
            </Container>
            <Container className="flex gap-1 flex-col sm:flex-row">
                <BestSellingProduct productId={8} />
                <BestSellingProduct productId={2} />
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

    return (
        <>
            {product ? (
                <div className="bg-white p-1 rounded-1 border-[1px] hover:border-primary ">
                    <div className="flex items-center flex-col xl:flex-row">
                        <Link
                            to={`${pathConstants.PRODUCTS.path}/${product.id}`}>
                            <ProductImage
                                src={product?.imageUrl}
                                className="w-1/2"
                            />
                        </Link>
                        <div>
                            <ProductDetails
                                withDescription={false}
                                product={product}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default BestSellerSection;
