import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import pathConstants from "../../../routes/pathConstants";
import { RootState } from "../../../store/rootReducer";
import { selectProductById } from "../../../store/slices/productsSlice";
import Section from "../../../components/Section";
import Container from "../../../components/Container";
import { formatCurrency } from "../../../utils/currency";
import { ProductCTA } from "../../../components/ProductCard/ProductCard";

const Product = () => {
    const productId = useParams()[pathConstants.PRODUCT_DETAIL_PARAM];
    const product = useSelector((state: RootState) =>
        productId ? selectProductById(state, parseInt(productId)) : null
    );
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
    const [mainSwiper, setMainSwiper] = useState<SwiperType>();
    const [_, setInit] = useState(false);
    useEffect(() => {
        setInit(_);
    }, []);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Section>
            <Container className="">
                <div className="bg-white rounded-1 p-1 shadow-soft flex gap-1 flex-col md:flex-row">
                    {product ? (
                        <>
                            <div className="md:w-2/5">
                                <Swiper
                                    onSwiper={setMainSwiper}
                                    className="border border-gray-100 rounded-1 mb-1"
                                    zoom={{
                                        maxRatio: 5,
                                    }}
                                    onSlideChange={(swiper) => {
                                        thumbsSwiper?.slideTo(
                                            swiper.activeIndex
                                        );
                                    }}
                                    spaceBetween={16}
                                    thumbs={{
                                        swiper:
                                            thumbsSwiper &&
                                            !thumbsSwiper.destroyed
                                                ? thumbsSwiper
                                                : null,
                                    }}
                                    modules={[Thumbs, Zoom]}
                                    grabCursor={true}>
                                    <SwiperSlide className="pt-[100%] overflow-hidden relative">
                                        <img
                                            src={product.imageUrl}
                                            alt=""
                                            className="absolute top-0 left-0 width-full"
                                        />
                                    </SwiperSlide>
                                    {product.moreImages.map((image, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className="pt-[100%] overflow-hidden relative">
                                            <img
                                                src={image}
                                                alt=""
                                                className="absolute top-0 left-0 width-full"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="flex gap-1">
                                    <button
                                        ref={prevRef}
                                        className="text-primary text-1.5 disabled:text-gray-200">
                                        <FaChevronLeft />
                                    </button>
                                    <Swiper
                                        style={{}}
                                        className="relative"
                                        onSwiper={setThumbsSwiper}
                                        slidesPerView={3}
                                        spaceBetween={16}
                                        centeredSlides
                                        onClick={() => {
                                            thumbsSwiper?.slideTo(
                                                mainSwiper?.activeIndex as number
                                            );
                                        }}
                                        onSlideChange={(swiper) => {
                                            mainSwiper?.slideTo(
                                                swiper.activeIndex
                                            );
                                        }}
                                        modules={[Thumbs, Navigation]}
                                        onInit={() => setInit(true)}
                                        navigation={{
                                            prevEl: prevRef.current,
                                            nextEl: nextRef.current,
                                        }}
                                        breakpoints={{
                                            // this is the sm breakpoint in tailwind
                                            640: {
                                                slidesPerView: 4,
                                            },
                                        }}>
                                        <SwiperSlide className="cursor-pointer">
                                            <div className="w-full pt-[100%] overflow-hidden relative border-gray-100 border rounded-1">
                                                <img
                                                    src={product.imageUrl}
                                                    alt=""
                                                    className="absolute top-0 left-0 w-full"
                                                />
                                            </div>
                                        </SwiperSlide>
                                        {product.moreImages.map(
                                            (image, index) => (
                                                <SwiperSlide
                                                    key={index}
                                                    className="cursor-pointer">
                                                    <div className="w-full pt-[100%] overflow-hidden relative border-gray-100 border rounded-1">
                                                        <img
                                                            src={image}
                                                            alt=""
                                                            className="absolute top-0 left-0 w-full"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )}
                                    </Swiper>
                                    <button
                                        ref={nextRef}
                                        className="text-primary text-1.5 disabled:text-gray-200">
                                        <FaChevronRight />
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-3/5 flex flex-col items-start">
                                <h2 className="font-medium">{product.name}</h2>
                                <p>
                                    <span className="font-medium text-primary text-2">
                                        {formatCurrency(product.price)}
                                    </span>
                                    <span className="font-medium">
                                        /{product.unitOfSale}
                                    </span>
                                </p>
                                <p className="mb-1">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Natus quas quidem magnam
                                    quaerat corporis ducimus saepe doloribus,
                                    quo ex facilis odio rerum aperiam quia
                                    perspiciatis quos libero aliquam officia et.
                                </p>
                                <div className="self-start">
                                    <ProductCTA
                                        className="w-16"
                                        productId={product.id}
                                    />
                                </div>
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
