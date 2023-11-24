import formatDistance from "date-fns/formatDistance";
import Container from "../../../components/Container";
import {
    FiveStars,
    RatingDetails,
} from "../../../components/Rating/StarRating";
import Section, { SectionTitle } from "../../../components/Section";
import { Product } from "../../../data/products";
import { Review, reviews } from "../../../data/reviews";
import { users } from "../../../data/user";

type ReviewsSectionType = {
    productId: Product["id"];
};

const ReviewsSection = (props: ReviewsSectionType) => {
    const { productId } = props;

    const productReviews = reviews.filter(
        (review) => review.productId === productId
    );

    return (
        <>
            {productReviews.length === 0 ? null : (
                <Section className="bg-white" id="reviews">
                    <Container>
                        <SectionTitle className="mb-2">Reviews</SectionTitle>
                        <div>
                            <RatingDetails productId={productId} />
                            <div className="flex flex-col gap-2 min-h-[20rem]">
                                {productReviews.map((review) => (
                                    <Review review={review} />
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}
        </>
    );
};

export default ReviewsSection;

type ReviewProps = {
    review: Review;
};

const Review = (props: ReviewProps) => {
    const { review } = props;
    const user = users.find((user) => user.id === review.userId);

    const getTimeAgo = (date: Date) => {
        return formatDistance(date, new Date(), {
            includeSeconds: true,
            addSuffix: true,
        });
    };

    return (
        <div className="flex gap-1">
            <img
                src={user?.profileImageUrl}
                alt={user?.name}
                className="shrink-0 h-2.75 w-2.75 rounded-full object-cover object-center"
            />
            <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-0.25">
                    <div className="flex gap-0.75">
                        <h4>{user?.name}</h4>
                        <p className="leading-[1rem]">
                            {getTimeAgo(review.date)}
                        </p>
                    </div>

                    <div className="flex gap-1 items-end">
                        <FiveStars rating={review.rating} />
                    </div>
                </div>

                <p>{review.review}</p>
            </div>
        </div>
    );
};
