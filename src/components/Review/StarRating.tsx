import { IoChevronDown, IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/products";
import { reviews } from "../../data/reviews";

type StarRatingProps = {
    productId: Product["id"];
};

const StarRating = (props: StarRatingProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const showDetailsRef = useRef(null);

    const { productId } = props;
    const productReviews = reviews.filter(
        (review) => review.productId === productId
    );

    const noOfRatings = productReviews.length;

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

    const sumOfRatings = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );

    const averageRating = noOfRatings === 0 ? 0 : sumOfRatings / noOfRatings;

    const roundedAverageRating = Math.round(averageRating * 2) / 2;

    const stars = {
        fullStars: Math.floor(roundedAverageRating),
        halfStar: roundedAverageRating % 1 !== 0,
        grayStars: 5 - Math.ceil(roundedAverageRating),
    };

    return (
        <div className="relative flex items-end gap-2 w-full sm:w-auto">
            <div
                className="flex cursor-pointer items-end group/stars gap-1 peer/stars"
                ref={showDetailsRef}
                onClick={() => {
                    setShowDetails(!showDetails);
                }}>
                <FiveStars stars={stars} />
                <IoChevronDown
                    className={clsx(
                        "text-gray-500 group-hover/stars:text-gray-700 group-hover/stars:rotate-180 transition",
                        showDetails ? "rotate-180" : "rotate-0"
                    )}
                />
            </div>

            <Link
                className="font-medium leading-1 text-primary underline"
                to="#reviews">
                {noOfRatings === 0
                    ? "review this product"
                    : noOfRatings === 1
                    ? "1 review"
                    : `${noOfRatings} reviews`}
            </Link>

            <RatingDetails
                onClickOutside={() => {
                    setShowDetails(false);
                }}
                showDetails={showDetails}
                noOfRatings={noOfRatings}
                percentageRatings={percentageRatings}
                roundedAverageRating={roundedAverageRating}
                stars={stars}
                toggleButtonRef={showDetailsRef}
            />
        </div>
    );
};

type RatingDetailsProps = {
    showDetails: boolean;
    roundedAverageRating: number;
    stars: {
        fullStars: number;
        halfStar: boolean;
        grayStars: number;
    };
    noOfRatings: number;
    percentageRatings: {
        "5": number;
        "4": number;
        "3": number;
        "2": number;
        "1": number;
    };
    onClickOutside: () => void;
    toggleButtonRef?: React.MutableRefObject<null>;
};

const RatingDetails = (props: RatingDetailsProps) => {
    const {
        showDetails,
        roundedAverageRating,
        stars,
        noOfRatings,
        percentageRatings,
        onClickOutside,
        toggleButtonRef,
    } = props;

    const ratingDetailsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                ratingDetailsRef.current &&
                !(ratingDetailsRef.current as HTMLElement).contains(
                    e.target as Node
                )
            ) {
                if (
                    toggleButtonRef?.current &&
                    !(toggleButtonRef.current as HTMLElement).contains(
                        e.target as Node
                    )
                ) {
                    onClickOutside && onClickOutside();
                }
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside, toggleButtonRef]);

    return (
        <div
            ref={ratingDetailsRef}
            className={clsx(
                "absolute top-full left-0 peer-hover/stars:visible  peer-hover/stars:opacity-100 transition-all hover:visible hover:opacity-100 bg-white backdrop-blur-sm z-20 overflow-hidden  shadow-soft rounded-0.5 border border-gray-100 p-1 mt-0.5 flex flex-col gap-0.5 min-h-content w-full sm:w-auto ease-in-out",
                showDetails ? "visible opacity-100" : "invisible opacity-0"
            )}>
            <div className="flex items-end gap-1 min-w-max">
                <FiveStars stars={stars} />
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
            <div className="overflow-hidden w-full sm:min-w-[15rem] rounded-full h-1 bg-gray-100">
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
    stars: {
        fullStars: number;
        halfStar: boolean;
        grayStars: number;
    };
};

const FiveStars = (props: FiveStarsProps) => {
    const { stars } = props;

    return (
        <div className="flex gap-0.25">
            {stars.fullStars > 0 &&
                [...Array(stars.fullStars)].map(() => (
                    <IoStarSharp className="text-primary text-1.25" />
                ))}

            {stars.halfStar && (
                <IoStarHalfSharp className="text-primary text-1.25" />
            )}
            {stars.grayStars > 0 &&
                [...Array(stars.grayStars)].map(() => (
                    <IoStarSharp className="text-gray-200  text-1.25" />
                ))}
        </div>
    );
};

export default StarRating;
