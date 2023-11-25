import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { cartReducer } from "./slices/cartSlice";
import { reviewsReducer } from "./slices/reviewsSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
