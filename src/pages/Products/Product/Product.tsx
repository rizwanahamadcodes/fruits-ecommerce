import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import pathConstants from "../../../routes/pathConstants";
import { RootState } from "../../../store/rootReducer";
import { selectProductById } from "../../../store/slices/productsSlice";
import ProductDetails from "./ProductDetails";
import ProductImageGallery from "./ProductImageGallery";

const Product = () => {
    const productId = useParams()[pathConstants.PRODUCT_DETAIL_PARAM];
    const product = useSelector((state: RootState) =>
        productId ? selectProductById(state, parseInt(productId)) : null
    );
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

export default Product;
