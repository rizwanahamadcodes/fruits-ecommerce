import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
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
        addItem: (state, action: PayloadAction<{ productId: number }>) => {
            const itemInCart = state.items.find(
                (item) => item.productId === action.payload.productId
            );

            if (itemInCart) {
                return;
            }

            state.items.push({
                productId: action.payload.productId,
                quantity: 1,
            });
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items.filter((item) => item.productId !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
