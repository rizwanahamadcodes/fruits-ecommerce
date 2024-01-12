import clsx from "clsx";
import { Product } from "../../data/products";
import { Review, reviews } from "../../data/reviews";
import { FiveStars } from "./StarRating";
import { createContext, useContext } from "react";

type RatingDetailsContextType = {
    averageRating: number;
    noOfRatings: number;
    productReviews: Review[];
};

const RatingDetailsContext = createContext<RatingDetailsContextType>({
    averageRating: 0,
    noOfRatings: 0,
    productReviews: [],
});

type RatingDetailsProps = {
    productId: Product["id"];
    children?: React.ReactNode;
};

const RatingDetails = (props: RatingDetailsProps) => {
    const { productId, children } = props;

    const productReviews = reviews.filter(
        (review) => review.productId === productId
    );
    const noOfRatings = productReviews.length;
    const sumOfRatings = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    const averageRating = noOfRatings === 0 ? 0 : sumOfRatings / noOfRatings;

    return (
        <RatingDetailsContext.Provider
            value={{
                averageRating: averageRating,
                noOfRatings: noOfRatings,
                productReviews: productReviews,
            }}>
            <div
                className={clsx(
                    "flex flex-col gap-0.5 min-h-content w-full ease-in-out"
                )}>
                {children}
            </div>
        </RatingDetailsContext.Provider>
    );
};

export default RatingDetails;

const useRatingDetailsContext = () => {
    const context = useContext(RatingDetailsContext);
    if (!context) {
        throw Error(
            "RatingDetails children should be used within RatingDetails component"
        );
    }

    return context;
};

export const NoOfRatings = () => {
    const { noOfRatings } = useRatingDetailsContext();

    return <p className="font-medium">{noOfRatings} reviews</p>;
};

export const FiveRatingBars = () => {
    const { productReviews } = useRatingDetailsContext();

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

    return (
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
    );
};

export const FiveStarsAndRatingOutOfFive = () => {
    const { averageRating } = useRatingDetailsContext();
    const roundedRating = Math.round(averageRating * 2) / 2;

    return (
        <div className="flex items-end gap-1 min-w-max">
            <FiveStars rating={averageRating} />
            <h4 className="font-medium grow">{roundedRating} out of 5</h4>
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
                    className="bg-gradient-to-r from-primary to-primary-500 rounded-r-full"></div>
            </div>
            <p className="min-w-[2rem]">{`${Math.round(percentageRating)}%`}</p>
        </div>
    );
};
