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
            state.reviews = state.reviews.map((review) =>
                review.id === action.payload
                    ? review.likedAsGuest
                        ? {
                              ...review,
                              likeCount: review.likeCount - 1,
                              likedAsGuest: false,
                          }
                        : {
                              ...review,
                              likeCount: review.likeCount + 1,
                              likedAsGuest: true,
                          }
                    : review
            );
        },
        dislikeReview: (state, action: PayloadAction<Review["id"]>) => {
            state.reviews = state.reviews.map((review) =>
                review.id === action.payload
                    ? review.dislikedAsGuest
                        ? {
                              ...review,
                              dislikeCount: review.dislikeCount - 1,
                              dislikedAsGuest: false,
                          }
                        : {
                              ...review,
                              dislikeCount: review.dislikeCount + 1,
                              dislikedAsGuest: true,
                          }
                    : review
            );
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
