import formatDistance from "date-fns/formatDistance";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Button, { ButtonIcon } from "../../../components/Button";
import Card, { CardBody, CardTitle } from "../../../components/Card/Card";
import Container from "../../../components/Container";
import RatingDetails, {
    FiveRatingBars,
} from "../../../components/Rating/RatingDetails";
import { FiveStars } from "../../../components/Rating/StarRating";
import Section, { SectionCategoryTitle } from "../../../components/Section";
import { Product } from "../../../data/products";
import { Review } from "../../../data/reviews";
import { users } from "../../../data/user";
import { RootState } from "../../../store/rootReducer";
import {
    dislikeReview,
    likeReview,
    selectMostLikeReviewById,
    selectReviewsById,
} from "../../../store/slices/reviewsSlice";

type ReviewsSectionType = {
    productId: Product["id"];
};

const ReviewsSection = (props: ReviewsSectionType) => {
    const { productId } = props;

    const productReviews = useSelector((state: RootState) =>
        selectReviewsById(state, productId)
    );

    const mostLikedReview = useSelector((state: RootState) =>
        selectMostLikeReviewById(state, productId)
    );

    console.log(mostLikedReview);

    return (
        <>
            {productReviews.length === 0 ? null : (
                <Section className="bg-gray-50" id="reviews">
                    <Container className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <SectionCategoryTitle>Ratings</SectionCategoryTitle>
                            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] gap-1 items-stretch flex-wrap">
                                <Card>
                                    <CardTitle>Overall Rating</CardTitle>
                                    <CardBody>
                                        <OverallRating productId={productId} />
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
                                        <Review review={mostLikedReview} />
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <SectionCategoryTitle>Reviews</SectionCategoryTitle>
                            <div className="flex flex-col gap-1">
                                {productReviews.map((review) => (
                                    <Card>
                                        <CardBody>
                                            <Review review={review} />
                                        </CardBody>
                                    </Card>
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
    const dispatch = useDispatch();
    const { review } = props;
    const user = users.find((user) => user.id === review.userId);

    const getTimeAgo = (date: Date) => {
        return formatDistance(date, new Date(), {
            includeSeconds: true,
            addSuffix: true,
        });
    };

    return (
        <div className="flex gap-1 w-full">
            <img
                src={user?.profileImageUrl}
                alt={user?.name}
                className="shrink-0 h-2.75 w-2.75 rounded-full object-cover object-center"
            />
            <div className="flex flex-col gap-0.5 w-full">
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

                <div className="flex justify-end flex-col gap-0.5 sm:flex-row sm:items-end">
                    <p className="text-gray-500">Was this review helpful?</p>
                    <div className="flex gap-1">
                        <Button
                            variant="outline"
                            size="small"
                            colorScheme={
                                review.likedAsGuest ? "primary" : "gray-500"
                            }
                            onClick={() => dispatch(likeReview(review.id))}>
                            <ButtonIcon icon={BiSolidLike} /> |{" "}
                            <span>{review.likeCount}</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="small"
                            nature="circular"
                            colorScheme={
                                review.dislikedAsGuest ? "primary" : "gray-500"
                            }
                            onClick={() => dispatch(dislikeReview(review.id))}>
                            <ButtonIcon icon={BiSolidDislike} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

type OverallRatingProps = {
    productId: number;
};

const OverallRating = (props: OverallRatingProps) => {
    const { productId } = props;

    const productReviews = useSelector((state: RootState) =>
        selectReviewsById(state, productId)
    );

    const noOfRatings = productReviews.length;
    const sumOfRatings = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    const averageRating = noOfRatings === 0 ? 0 : sumOfRatings / noOfRatings;
    const roundedAverageRating = Math.round(averageRating * 2) / 2;

    return (
        <div className="flex flex-col items-center gap-0.5">
            <p className="text-2">
                <span className="text-gray-900 text-2.5">
                    {roundedAverageRating}
                </span>
                <span> /5</span>
            </p>
            <FiveStars rating={roundedAverageRating} />
            <p>{noOfRatings} reviews</p>
        </div>
    );
};
