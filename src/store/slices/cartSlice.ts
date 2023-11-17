import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export type CartItem = {
    productId: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    } as CartState,
    reducers: {
        addItem: (state, action: PayloadAction<number>) => {
            const itemInCart = state.items.find(
                (item) => item.productId === action.payload
            );

            if (itemInCart) {
                return;
            }

            state.items.push({
                productId: action.payload,
                quantity: 1,
            });
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.productId !== action.payload
            );
        },

        increaseQuantity: (state, action: PayloadAction<number>) => {
            state.items = state.items.map((item) =>
                item.productId === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        },

        decreaseQuantity: (state, action: PayloadAction<number>) => {
            state.items = state.items.map((item) =>
                item.productId === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

            state.items = state.items.filter((item) => item.quantity > 0);
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addItem,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export const selectAllCartItems = (state: RootState) => {
    return state.cart.items;
};

export const selectCartItemById = (state: RootState, productId: number) => {
    return state.cart.items.find((item) => item.productId === productId);
};

export const selectNoOfItemsInCart = (state: RootState) => {
    return state.cart.items.length;
};
