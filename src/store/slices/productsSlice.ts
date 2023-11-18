import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, initialProducts } from "../../data/products";
import { RootState } from "../rootReducer";

type ProductsState = {
    products: Product[];
};

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: initialProducts,
    } as ProductsState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
    },
});

export const selectAllProducts = (state: RootState) => {
    return state.products.products;
};

export const selectFilteredProducts = (
    state: RootState,
    searchParams: URLSearchParams
) => {
    const searchKeyword = (searchParams.get("searchKeyword") || "").trim();
    const selectedCategory = parseInt(
        searchParams.get("selectedCategory") || "0"
    );

    const productsSelectedByCategory = state.products.products.filter(
        (product) => {
            if (selectedCategory === 0) {
                return true;
            }
            return product.categoryId === selectedCategory;
        }
    );

    const productsSelectedByCategoryAndKeyword =
        productsSelectedByCategory.filter((product) => {
            if (searchKeyword === "") {
                return true;
            }
            return product.name
                .toLowerCase()
                .includes(searchKeyword.toLowerCase());
        });

    return productsSelectedByCategoryAndKeyword;
};
export const selectProductById = (state: RootState, productId: number) => {
    return state.products.products.find((product) => product.id === productId);
};

export const productsReducer = productsSlice.reducer;
export const { addProduct } = productsSlice.actions;
