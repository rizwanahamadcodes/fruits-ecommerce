import { IoChevronDown, IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

import clsx from "clsx";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/products";
import { reviews } from "../../data/reviews";
import { useToggle } from "../../hooks/useToggle";
import PopOver from "../Popover/PopOver";

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
                        <RatingDetails productId={productId} />
                    </PopOver>
                </>
            )}
        </div>
    );
};

type RatingDetailsProps = {
    productId: Product["id"];
};

export const RatingDetails = (props: RatingDetailsProps) => {
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

    const ratings = {
        "5": productReviews.filter((review) => review.rating === 5).length,
        "4": productReviews.filter((review) => review.rating === 4).length,
        "3": productReviews.filter((review) => review.rating === 3).length,
        "2": productReviews.filter((review) => review.rating === 2).length,
        "1": productReviews.filter((review) => review.rating === 1).length,
    };

    const percentageRatings = {
        "5": noOfRatings === 0 ? 0 : (ratings["5"] / noOfRatings) * 100,
        "4": noOfRatings === 0 ? 0 : (ratings["4"] / noOfRatings) * 100,
        "3": noOfRatings === 0 ? 0 : (ratings["3"] / noOfRatings) * 100,
        "2": noOfRatings === 0 ? 0 : (ratings["2"] / noOfRatings) * 100,
        "1": noOfRatings === 0 ? 0 : (ratings["1"] / noOfRatings) * 100,
    };

    return (
        <div
            className={clsx(
                "bg-white overflow-hidden shadow-soft rounded-0.5 border border-gray-100 p-1 flex flex-col gap-0.5 min-h-content w-full ease-in-out"
            )}>
            <div className="flex items-end gap-1 min-w-max">
                <FiveStars rating={roundedAverageRating} />
                <h4 className="font-medium grow">
                    {roundedAverageRating} out of 5
                </h4>
            </div>
            <p className="font-medium">{noOfRatings} reviews</p>
            <div>
                <RatingBar
                    label="5 stars"
                    percentageRating={percentageRatings[5]}
                />
                <RatingBar
                    label="4 stars"
                    percentageRating={percentageRatings[4]}
                />
                <RatingBar
                    label="3 stars"
                    percentageRating={percentageRatings[3]}
                />
                <RatingBar
                    label="2 stars"
                    percentageRating={percentageRatings[2]}
                />
                <RatingBar
                    label="1 stars"
                    percentageRating={percentageRatings[1]}
                />
            </div>
        </div>
    );
};

type RatingBarProps = {
    label: string;
    percentageRating: number;
};

const RatingBar = (props: RatingBarProps) => {
    const { label, percentageRating } = props;

    return (
        <div className="flex gap-0.5 items-center">
            <p className="min-w-[4rem]">{label}</p>
            <div className="overflow-hidden w-full  rounded-full h-1 bg-gray-100">
                <div
                    style={{
                        height: "100%",
                        width: percentageRating + "%",
                    }}
                    className="bg-gradient-to-r from-primary to-primary-400 rounded-r-full"></div>
            </div>
            <p className="min-w-[2rem]">{`${Math.round(percentageRating)}%`}</p>
        </div>
    );
};

type FiveStarsProps = {
    rating: number;
};

export const FiveStars = (props: FiveStarsProps) => {
    const { rating } = props;

    const stars = {
        fullStars: Math.floor(rating),
        halfStar: rating % 1 !== 0,
        grayStars: 5 - Math.ceil(rating),
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
