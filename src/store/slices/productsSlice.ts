import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products, initialProducts } from "../../data/products";
import { RootState } from "../rootReducer";

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

export const selectAllProducts = (state: RootState) => {
    return state.products.products;
};

export const selectSearchKeyword = (state: RootState) => {
    return state.products.searchKeyword;
};
export const selectSelectedCategory = (state: RootState) => {
    return state.products.selectedCategory;
};

export const selectFilteredProducts = (state: RootState) => {
    return state.products.products
        .filter((product) => {
            if (state.products.selectedCategory === 0) {
                return true;
            }
            return product.categoryId === state.products.selectedCategory;
        })
        .filter((productSelectedByCategory) => {
            if (state.products.searchKeyword === "") {
                return true;
            }
            return productSelectedByCategory.name
                .toLowerCase()
                .includes(state.products.searchKeyword.toLowerCase());
        });
};

export const productsReducer = productsSlice.reducer;
export const {
    addProduct,
    updateSearchKeyword,
    updateSelectedCategory,
    clearSelectedCategory,
    clearSearchKeyword,
} = productsSlice.actions;
