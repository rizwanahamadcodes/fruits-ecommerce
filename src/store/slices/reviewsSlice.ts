import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Review, reviews } from "../../data/reviews";
import { RootState } from "../rootReducer";
import { Product } from "../../data/products";

type ReviewsState = {
    reviews: Review[];
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: reviews,
    } as ReviewsState,
    reducers: {
        likeReview: (state, action: PayloadAction<Review["id"]>) => {
            state.reviews = state.reviews.map((review) => {
                if (review.id != action.payload) return review;

                if (!review.likedAsGuest) {
                    return {
                        ...review,
                        likeCount: review.likeCount + 1,
                        likedAsGuest: true,
                        dislikedAsGuest: false,
                        dislikeCount: review.dislikedAsGuest
                            ? review.dislikeCount - 1
                            : review.dislikeCount,
                    };
                } else {
                    return {
                        ...review,
                        likeCount: review.likeCount - 1,
                        likedAsGuest: false,
                    };
                }
            });
        },
        dislikeReview: (state, action: PayloadAction<Review["id"]>) => {
            state.reviews = state.reviews.map((review) => {
                if (review.id != action.payload) return review;

                if (!review.dislikedAsGuest) {
                    return {
                        ...review,
                        dislikeCount: review.dislikeCount + 1,
                        dislikedAsGuest: true,
                        likedAsGuest: false,
                        likeCount: review.likedAsGuest
                            ? review.likeCount - 1
                            : review.likeCount,
                    };
                } else {
                    return {
                        ...review,
                        dislikeCount: review.dislikeCount - 1,
                        dislikedAsGuest: false,
                    };
                }
            });
        },
    },
});

export const selectAllReviews = (state: RootState) => {
    return state.reviews.reviews;
};

export const selectReviewsById = (
    state: RootState,
    productId: Product["id"]
) => {
    return state.reviews.reviews.filter(
        (review) => review.productId === productId
    );
};

export const selectMostLikeReviewById = (
    state: RootState,
    productId: Product["id"]
) => {
    const productReviews = state.reviews.reviews.filter(
        (review) => review.productId === productId
    );
    if (productReviews.length != 0) {
        return productReviews.reduce((a, b) =>
            Math.max(a.likeCount, b.likeCount) === a.likeCount ? a : b
        );
    }

    return null;
};

export const reviewsReducer = reviewsSlice.reducer;
export const { likeReview, dislikeReview } = reviewsSlice.actions;
