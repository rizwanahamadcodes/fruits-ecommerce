import { useSelector } from "react-redux";
import Container from "../../components/Container";
import CountDownTimer from "../../components/CountDownTimer";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "../../components/Section";
import { Product } from "../../data/products";
import { RootState } from "../../store/rootReducer";
import { selectProductById } from "../../store/slices/productsSlice";
import ProductDetails from "../Products/Product/ProductDetails";
import { ProductImage } from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";

const FlashDealsSection = () => {
    const flashDealProductId = 1;

    const product = useSelector((state: RootState) => {
        return flashDealProductId
            ? selectProductById(state, flashDealProductId)
            : null;
    });

    console.log(flashDealProductId);
    const countDownTime = new Date("2024/2/10");

    return (
        <Section className="bg-[url('/images/flash.jpg')] bg-cover bg-bottom">
            <Container className="text-center">
                <SectionTitle defaultBottomMargin className="text-white">
                    Flash Deals
                </SectionTitle>
                <SectionSubtitle className="text-white">
                    Limited time offers on selected products
                </SectionSubtitle>
                {product ? (
                    <FlashDeal
                        product={product}
                        countDownTime={countDownTime}
                    />
                ) : (
                    <p className="text-white">"No deals right now"</p>
                )}
            </Container>
        </Section>
    );
};

type FlashDealsProps = {
    product: Product;
    countDownTime: Date;
};

const FlashDeal = (props: FlashDealsProps) => {
    const { product, countDownTime } = props;

    return (
        <div className="flex flex-col md:flex-row gap-2 bg-white rounded-0.5 p-2 shadow-soft">
            <div className="hidden md:flex">
                <CountDownTimer
                    direction="vertical"
                    countDownTime={countDownTime}
                />
            </div>
            <div className="md:hidden flex w-full justify-center">
                <CountDownTimer
                    direction="horizontal"
                    countDownTime={countDownTime}
                />
            </div>
            <div className="flex items-start gap-3 flex-col md:flex-row">
                <Link to={`${pathConstants.PRODUCTS.path}/${product.id}`}>
                    <ProductImage
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-auto md:w-2/5"
                    />
                </Link>
                <ProductDetails className="grow" product={product} />
            </div>
        </div>
    );
};

export default FlashDealsSection;
