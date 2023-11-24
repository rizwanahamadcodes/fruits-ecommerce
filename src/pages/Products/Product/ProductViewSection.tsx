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
        <Section>
            <Container className="">
                <div className="bg-white rounded-1 p-1 shadow-soft flex gap-2 flex-col md:flex-row">
                    {product ? (
                        <>
                            <div className="md:w-2/5">
                                <ProductImageGallery
                                    imageUrl={product.imageUrl}
                                    moreImages={product.moreImages}
                                />
                            </div>
                            <div className="md:w-3/5 flex flex-col items-start gap-1">
                                <ProductDetails product={product} />
                            </div>
                        </>
                    ) : (
                        "Sorry the product was not found"
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default ProductViewSection;
