import { IoChevronDown, IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

import clsx from "clsx";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/products";
import { reviews } from "../../data/reviews";
import { useToggle } from "../../hooks/useToggle";
import Card, { CardBody } from "../Card/Card";
import PopOver from "../Popover/PopOver";
import RatingDetails, {
    FiveRatingBars,
    FiveStarsAndRatingOutOfFive,
    NoOfRatings,
} from "./RatingDetails";

type StarRatingProps = {
    productId: Product["id"];
};

const StarRating = (props: StarRatingProps) => {
    const { isOpen, close, toggle } = useToggle(false);
    const showDetailsRef = useRef(null);

    const { productId } = props;
    const productReviews = reviews.filter(
        (review) => review.productId === productId
    );
    const noOfRatings = productReviews.length;
    const sumOfRatings = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    const averageRating = noOfRatings === 0 ? 0 : sumOfRatings / noOfRatings;
    const roundedAverageRating = Math.round(averageRating * 2) / 2;

    return (
        <div className="relative flex items-end gap-2 w-full sm:w-auto">
            <div
                className={clsx(
                    "flex items-end gap-1",
                    noOfRatings !== 0 && "cursor-pointer"
                )}
                ref={showDetailsRef}
                onClick={() => {
                    if (noOfRatings === 0) return;
                    toggle();
                }}>
                <FiveStars rating={roundedAverageRating} />
                {noOfRatings !== 0 && (
                    <IoChevronDown
                        className={clsx(
                            "text-gray-500 transition",
                            isOpen ? "rotate-180" : "rotate-0"
                        )}
                    />
                )}
            </div>

            <Link
                className="font-medium leading-1 text-primary underline"
                to="#reviews">
                {noOfRatings === 0
                    ? "Add a review"
                    : noOfRatings === 1
                    ? "1 review"
                    : `${noOfRatings} reviews`}
            </Link>

            {noOfRatings !== 0 && (
                <>
                    <PopOver
                        close={close}
                        toggleButtonRef={showDetailsRef}
                        isOpen={isOpen}
                        className="w-full mt-0.5 sm:w-[25rem]">
                        <Card>
                            <CardBody>
                                <RatingDetails productId={productId}>
                                    <FiveStarsAndRatingOutOfFive />
                                    <NoOfRatings />
                                    <FiveRatingBars />
                                </RatingDetails>
                            </CardBody>
                        </Card>
                    </PopOver>
                </>
            )}
        </div>
    );
};

type FiveStarsProps = {
    rating: number;
};

export const FiveStars = (props: FiveStarsProps) => {
    const { rating } = props;

    const roundedRating = Math.round(rating * 2) / 2;

    const stars = {
        fullStars: Math.floor(roundedRating),
        halfStar: roundedRating % 1 !== 0,
        grayStars: 5 - Math.ceil(roundedRating),
    };

    const { fullStars, halfStar = false, grayStars } = stars;

    return (
        <div className="flex gap-0.25">
            {fullStars > 0 &&
                [...Array(fullStars)].map(() => (
                    <IoStarSharp className="text-primary text-1.25" />
                ))}

            {halfStar && <IoStarHalfSharp className="text-primary text-1.25" />}
            {grayStars > 0 &&
                [...Array(grayStars)].map(() => (
                    <IoStarSharp className="text-gray-200  text-1.25" />
                ))}
        </div>
    );
};

export default StarRating;
