import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products, initialProducts } from "../../data/products";

type ProductsState = {
    products: Products[];
    searchKeyword: string;
    selectedCategory: number;
};

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: initialProducts,
        searchKeyword: "",
        selectedCategory: 0,
    } as ProductsState,
    reducers: {
        addProduct: (state, action: PayloadAction<Products>) => {
            state.products.push(action.payload);
        },
        updateSearchKeyword: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload;
        },
        updateSelectedCategory: (state, action: PayloadAction<number>) => {
            state.selectedCategory = action.payload;
        },
        clearSearchKeyword: (state) => {
            state.searchKeyword = "";
        },
        clearSelectedCategory: (state) => {
            state.selectedCategory = 0;
        },
    },
});

export const productsReducer = productsSlice.reducer;
export const {
    addProduct,
    updateSearchKeyword,
    updateSelectedCategory,
    clearSelectedCategory,
    clearSearchKeyword,
} = productsSlice.actions;
