import clsx from "clsx";
import formatDistance from "date-fns/formatDistance";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import { FiveStars } from "../../../components/Rating/StarRating";
import Section, { SectionTitle } from "../../../components/Section";
import { Review } from "../../../data/reviews";
import { users } from "../../../data/user";

type ReviewsSectionType = {
    productReviews: Review[];
};

const ReviewsSection = (props: ReviewsSectionType) => {
    const { productReviews } = props;

    const [reviewPageNum, setreviewPageNum] = useState(0);

    const noOfReviewsPerPage = 3;
    const noOfPages = Math.ceil(productReviews.length / noOfReviewsPerPage);

    const cutOutOfReviews = productReviews.slice(
        noOfReviewsPerPage * reviewPageNum,
        noOfReviewsPerPage * (reviewPageNum + 1)
    );

    return (
        <Section className="bg-white" id="reviews">
            <Container>
                <SectionTitle className="mb-2">Reviews</SectionTitle>

                <div className="flex flex-col gap-2 min-h-[20rem]">
                    {cutOutOfReviews.map((review) => (
                        <Review review={review} />
                    ))}
                </div>
                <div className="flex">
                    <Button
                        variant="ghost"
                        nature="circular"
                        rounding="none"
                        className="rounded-l-full border border-gray-200"
                        onClick={() => {
                            setreviewPageNum(reviewPageNum - 1);
                        }}>
                        <FaChevronLeft />
                    </Button>
                    {[...Array(noOfPages)].map((_, index) => {
                        return (
                            <Button
                                key={index}
                                variant="ghost"
                                nature="circular"
                                rounding="none"
                                className={clsx(
                                    "border-t-[1px] border-b-[1px] border-gray-200",
                                    index === reviewPageNum && "text-primary"
                                )}>
                                {index}
                            </Button>
                        );
                    })}
                    <Button
                        variant="ghost"
                        nature="circular"
                        rounding="none"
                        className="rounded-r-full border border-gray-200"
                        onClick={() => {
                            setreviewPageNum(reviewPageNum + 1);
                        }}>
                        <FaChevronRight />
                    </Button>
                </div>
            </Container>
        </Section>
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
            <div className="flex flex-col gap-0.25">
                <div className="flex gap-0.75">
                    <h4>{user?.name}</h4>
                    <p className="leading-[1rem]">{getTimeAgo(review.date)}</p>
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
