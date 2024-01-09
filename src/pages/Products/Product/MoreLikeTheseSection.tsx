import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/Container";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "../../../components/Section";
import { RootState } from "../../../store/rootReducer";
import { selectAllProducts } from "../../../store/slices/productsSlice";
import { Autoplay, Navigation } from "swiper/modules";

const MoreLikeTheseSection = () => {
    const products = useSelector((state: RootState) =>
        selectAllProducts(state)
    );
    const tailwindBreakPoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    };
    return (
        <Section>
            <Container>
                <SectionTitle>More like these</SectionTitle>
                <SectionSubtitle>Explore similar products</SectionSubtitle>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        autoplay={{ delay: 3000 }}
                        loop
                        breakpoints={{
                            [tailwindBreakPoints.sm]: { slidesPerView: 2 },
                            [tailwindBreakPoints.md]: { slidesPerView: 3 },
                            [tailwindBreakPoints.lg]: { slidesPerView: 4 },
                            [tailwindBreakPoints.xl]: { slidesPerView: 4 },
                        }}
                        modules={[Navigation, Autoplay]}>
                        {products.map((product) => {
                            return (
                                <SwiperSlide>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </>
            </Container>
        </Section>
    );
};

export default MoreLikeTheseSection;
