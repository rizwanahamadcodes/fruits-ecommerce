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
        addReview: (state, action: PayloadAction<Review>) => {
            state.reviews.push(action.payload);
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

export const reviewsReducer = reviewsSlice.reducer;
export const { addReview } = reviewsSlice.actions;
