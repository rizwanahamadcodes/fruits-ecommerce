import formatDistance from "date-fns/formatDistance";
import { useSelector } from "react-redux";
import Card, { CardBody, CardTitle } from "../../../components/Card/Card";
import Container from "../../../components/Container";
import RatingDetails, {
    FiveRatingBars,
    FiveStarsAndRatingOutOfFive,
} from "../../../components/Rating/RatingDetails";
import { FiveStars } from "../../../components/Rating/StarRating";
import Section from "../../../components/Section";
import { Product } from "../../../data/products";
import { Review } from "../../../data/reviews";
import { users } from "../../../data/user";
import { RootState } from "../../../store/rootReducer";
import { selectReviewsById } from "../../../store/slices/reviewsSlice";

type ReviewsSectionType = {
    productId: Product["id"];
};

const ReviewsSection = (props: ReviewsSectionType) => {
    const { productId } = props;

    const productReviews = useSelector((state: RootState) =>
        selectReviewsById(state, productId)
    );

    return (
        <>
            {productReviews.length === 0 ? null : (
                <Section className="bg-gray-200" id="reviews">
                    <Container className="flex flex-col gap-2">
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] gap-1 items-stretch flex-wrap">
                            <Card>
                                <CardTitle>Ratings Breakdown</CardTitle>
                                <CardBody>
                                    <RatingDetails productId={productId}>
                                        <FiveStarsAndRatingOutOfFive />
                                    </RatingDetails>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardTitle>Ratings Breakdown</CardTitle>
                                <CardBody>
                                    <RatingDetails productId={productId}>
                                        <FiveRatingBars />
                                    </RatingDetails>
                                </CardBody>
                            </Card>
                            <Card className="sm:col-span-2 xl:col-auto">
                                <CardTitle>Most Helpful Review</CardTitle>
                                <CardBody>
                                    The thing is useful, trust be bro
                                </CardBody>
                            </Card>
                        </div>
                        <div className="flex flex-col gap-1">
                            {productReviews.map((review) => (
                                <Review review={review} />
                            ))}
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
        <Card>
            <CardTitle>I am a user</CardTitle>
            <CardBody>
                <div className="flex gap-1">
                    <img
                        src={user?.profileImageUrl}
                        alt={user?.name}
                        className="shrink-0 h-2.75 w-2.75 rounded-full object-cover object-center"
                    />
                    <div className="flex flex-col gap-0.5">
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
            </CardBody>
        </Card>
    );
};
