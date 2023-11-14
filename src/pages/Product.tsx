import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import Container from "../components/Container";
import { RootState } from "../store/rootReducer";
import { selectProductById } from "../store/slices/productsSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Product = () => {
    const { productId } = useParams();
    const product = useSelector((state: RootState) =>
        productId ? selectProductById(state, parseInt(productId)) : null
    );
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
    const [_, setInit] = useState(false);
    console.log(_);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Container className="">
            <div className="bg-white rounded-1 p-1 shadow-soft flex flex-col md:flex-row">
                {product ? (
                    <>
                        <div className="md:w-2/5">
                            <Swiper
                                className="border border-gray-100 rounded-1 mb-1"
                                spaceBetween={16}
                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                }}
                                modules={[Thumbs]}
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
                                    className="text-primary text-1.5 disabled:text-gray-300">
                                    <FaChevronLeft />
                                </button>
                                <Swiper
                                    style={{}}
                                    className="relative"
                                    onSwiper={setThumbsSwiper}
                                    slidesPerView={4}
                                    slideToClickedSlide
                                    spaceBetween={16}
                                    modules={[Thumbs, Navigation]}
                                    onInit={() => setInit(true)}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
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
                                    {product.moreImages.map((image, index) => (
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
                                    ))}
                                </Swiper>
                                <button
                                    ref={nextRef}
                                    className="text-primary text-1.5 disabled:text-gray-300">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-300"></div>
                    </>
                ) : (
                    "Sorry the product was not found"
                )}
            </div>
        </Container>
    );
};

export default Product;
