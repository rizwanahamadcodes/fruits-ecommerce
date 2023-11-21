import { IoChevronDown, IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

import { Product } from "../../data/products";
import { reviews } from "../../data/reviews";
import { Link } from "react-router-dom";

type StarRatingProps = {
    productId: Product["id"];
};

const StarRating = (props: StarRatingProps) => {
    const { productId } = props;
    const productReviews = reviews.filter(
        (review) => review.productId === productId
    );

    const ratings = {
        "5": productReviews.filter((review) => review.rating === 5).length,
        "4": productReviews.filter((review) => review.rating === 4).length,
        "3": productReviews.filter((review) => review.rating === 3).length,
        "2": productReviews.filter((review) => review.rating === 2).length,
        "1": productReviews.filter((review) => review.rating === 1).length,
    };

    const sumOfRatings = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    const averageRating = sumOfRatings / productReviews.length;

    const roundedRating = Math.round(averageRating * 2) / 2;

    const stars = {
        fullStars: Math.floor(roundedRating),
        halfStar: roundedRating % 1 !== 0,
        grayStars: 5 - Math.ceil(roundedRating),
    };

    return (
        <div className="relative flex items-end gap-2 w-full sm:w-auto">
            <div className="flex cursor-pointer items-end gap-1 peer/stars">
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
                            <IoStarSharp className="text-primary/40  text-1.25" />
                        ))}
                </div>
                <IoChevronDown className="text-gray-500 group-hover/ratings:text-gray-900" />
            </div>
            <Link
                className="font-medium leading-1 text-primary underline"
                to="#reviews">
                {productReviews.length} reviews
            </Link>
            <div className="absolute opacity-0 top-full left-0 invisible peer-hover/stars:visible  peer-hover/stars:opacity-100 transition-all hover:visible hover:opacity-100 bg-white backdrop-blur-sm z-20 overflow-hidden  shadow-soft rounded-0.5 border border-gray-100 p-1 mt-0.5 flex flex-col gap-0.5 min-h-content w-full sm:w-auto">
                <div className="flex items-end gap-1 min-w-max">
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
                                <IoStarSharp className="text-primary/40  text-1.25" />
                            ))}
                    </div>
                    <h4 className="font-medium grow">
                        {roundedRating} out of 5
                    </h4>
                </div>
                <p className="font-medium">{productReviews.length} reviews</p>
                <div>
                    <RatingBar
                        label="5 stars"
                        rating={`${
                            (ratings[5] / productReviews.length) * 100
                        }%`}
                    />
                    <RatingBar
                        label="4 stars"
                        rating={`${
                            (ratings[4] / productReviews.length) * 100
                        }%`}
                    />
                    <RatingBar
                        label="3 stars"
                        rating={`${
                            (ratings[3] / productReviews.length) * 100
                        }%`}
                    />
                    <RatingBar
                        label="2 stars"
                        rating={`${
                            (ratings[2] / productReviews.length) * 100
                        }%`}
                    />
                    <RatingBar
                        label="1 stars"
                        rating={`${
                            (ratings[1] / productReviews.length) * 100
                        }%`}
                    />
                </div>
            </div>
        </div>
    );
};

type RatingBarProps = {
    label: string;
    rating: string;
};

const RatingBar = (props: RatingBarProps) => {
    const { label, rating } = props;

    return (
        <div className="flex gap-0.5 items-center">
            <p className="min-w-[4rem]">{label}</p>
            <div className="overflow-hidden w-full sm:min-w-[15rem] rounded-full h-1 bg-gray-100">
                <div
                    style={{
                        height: "100%",
                        width: rating,
                    }}
                    className="bg-gradient-to-r from-primary to-primary-400 rounded-r-full"></div>
            </div>
        </div>
    );
};

export default StarRating;
