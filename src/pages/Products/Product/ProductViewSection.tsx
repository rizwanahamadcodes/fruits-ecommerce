import { useSelector } from "react-redux";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { Product } from "../../../data/products";
import ProductDetails from "./ProductDetails";
import ProductImageGallery from "./ProductImageGallery";
import { RootState } from "../../../store/rootReducer";
import { selectProductById } from "../../../store/slices/productsSlice";

type ProductViewSectionType = {
    productId: Product["id"];
};

const ProductViewSection = (props: ProductViewSectionType) => {
    const { productId } = props;

    const product = useSelector((state: RootState) => {
        return productId ? selectProductById(state, productId) : null;
    });

    return (
        <Section className="bg-white border-b border-b-gray-200">
            <Container className="flex gap-2 flex-col md:flex-row">
                {product ? (
                    <>
                        <div className="md:w-2/5">
                            <ProductImageGallery
                                imageUrl={product.imageUrl}
                                moreImages={product.moreImages}
                            />
                        </div>
                        <ProductDetails product={product} />
                    </>
                ) : (
                    "Sorry the product was not found"
                )}
            </Container>
        </Section>
    );
};

export default ProductViewSection;
