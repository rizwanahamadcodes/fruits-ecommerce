import { Navigation, Thumbs, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Image } from "../../../data/images";

type ProductImageGalleryProps = {
    imageUrl: Image["url"];
    moreImages: Image["url"][];
};

const ProductImageGallery = (props: ProductImageGalleryProps) => {
    const { imageUrl, moreImages } = props;

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
    const [mainSwiper, setMainSwiper] = useState<SwiperType>();
    const [_, setInit] = useState(false);

    // This is a useless useEffect just so i am using the _ variable so that typescript does not complain
    useEffect(() => {
        setInit(_);
    }, []);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <Swiper
                onSwiper={setMainSwiper}
                className="border border-gray-100 rounded-1 mb-1"
                zoom={{
                    maxRatio: 5,
                }}
                onSlideChange={(swiper) => {
                    thumbsSwiper?.slideTo(swiper.activeIndex);
                }}
                spaceBetween={16}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                modules={[Thumbs, Zoom]}
                grabCursor={true}>
                <SwiperSlide className="pt-[100%] overflow-hidden relative">
                    <img
                        src={imageUrl}
                        alt=""
                        className="absolute top-0 left-0 width-full"
                    />
                </SwiperSlide>
                {moreImages.map((image, index) => (
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
                        mainSwiper?.slideTo(swiper.activeIndex);
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
                                src={imageUrl}
                                alt=""
                                className="absolute top-0 left-0 w-full"
                            />
                        </div>
                    </SwiperSlide>
                    {moreImages.map((image, index) => (
                        <SwiperSlide key={index} className="cursor-pointer">
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
                    className="text-primary text-1.5 disabled:text-gray-200">
                    <FaChevronRight />
                </button>
            </div>
        </>
    );
};

export default ProductImageGallery;
