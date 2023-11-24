import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../components/Container";
import Section, { SectionTitle } from "../../../components/Section";
import pathConstants from "../../../routes/pathConstants";
import { RootState } from "../../../store/rootReducer";
import { selectProductById } from "../../../store/slices/productsSlice";
import ProductDetails from "./ProductDetails";
import ProductImageGallery from "./ProductImageGallery";
import { Review, reviews } from "../../../data/reviews";
import { users } from "../../../data/user";
import { FiveStars } from "../../../components/Rating/StarRating";
import { useState } from "react";
import Button from "../../../components/Button";

const Product = () => {
    const [reviewPageNum, setreviewPageNum] = useState(2);

    const productId = useParams()[pathConstants.PRODUCT_DETAIL_PARAM];
    const product = useSelector((state: RootState) =>
        productId ? selectProductById(state, parseInt(productId)) : null
    );

    const productReviews = reviews.filter(
        (review) => review.productId === product?.id
    );

    const noOfReviewsPerPage = 3;
    const noOfPages = Math.floor(productReviews.length / noOfReviewsPerPage);

    const cutOutOfReviews = productReviews.slice(
        noOfReviewsPerPage * reviewPageNum,
        noOfReviewsPerPage * (reviewPageNum + 1)
    );

    return (
        <>
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

            <Section className="bg-white" id="reviews">
                <Container>
                    <SectionTitle className="mb-2">Reviews</SectionTitle>
                    <div className="flex flex-col gap-2">
                        {cutOutOfReviews.map((review) => (
                            <Review review={review} />
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
};

type ReviewProps = {
    review: Review;
};

const Review = (props: ReviewProps) => {
    const { review } = props;
    const user = users.find((user) => user.id === review.userId);

    const formattedDate = (date: Date) => {
        return new Intl.DateTimeFormat(undefined, {
            dateStyle: "medium",
        }).format(date);
    };

    const getTimeAgo = (date: Date) => {
        const now = new Date();

        const diffTime = now.getTime() - date.getTime();
        const diffDay = now.getUTCDay() - date.getUTCDay();
        const diffMonth = now.getUTCMonth() - date.getUTCMonth();
        const diffYear = now.getUTCFullYear() - date.getUTCFullYear();

        console.log(date.getUTCMonth());

        const timeInMilliseconds = {
            month: 1000 * 60 * 60 * 24 * 7 * 4,
            week: 1000 * 60 * 60 * 24 * 7,
            day: 1000 * 60 * 60 * 24,
            hour: 1000 * 60 * 60,
            minute: 1000 * 60,
            second: 1000,
        };

        if (diffTime < timeInMilliseconds.month) {
            for (const unit in timeInMilliseconds) {
                const particularTimeInMillisecond =
                    timeInMilliseconds[unit as keyof typeof timeInMilliseconds];

                if (diffTime > particularTimeInMillisecond) {
                    return {
                        unit: unit,
                        value: Math.floor(
                            diffTime / particularTimeInMillisecond
                        ),
                    };
                }
            }
        }
    };

    console.log(getTimeAgo(new Date("2023/8/31/14:27:00")));

    return (
        <div className="flex gap-1">
            <img
                src={user?.profileImageUrl}
                alt={user?.name}
                className="shrink-0 h-2.75 w-2.75 rounded-full object-cover object-center"
            />
            <div className="flex flex-col gap-0.25">
                <div className="flex gap-0.75">
                    <h4>{user?.name}</h4>
                    <p className="leading-[1rem]">
                        {formattedDate(review.date)}
                    </p>
                </div>
                <FiveStars
                    stars={{
                        fullStars: review.rating,
                        grayStars: 5 - review.rating,
                    }}
                />
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default Product;
