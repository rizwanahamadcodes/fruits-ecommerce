import { configureStore } from "@reduxjs/toolkit";
import { createContext, useRef } from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import pathConstants from "./routes/pathConstants";
import rootReducer from "./store/rootReducer";

const store = configureStore({
    reducer: rootReducer,
});

type referenceType = React.MutableRefObject<null> | null;
type referenceContextType = {
    heroSectionReference: referenceType;
    productsSectionReference: referenceType;
};

export const ReferenceContext = createContext<referenceContextType>({
    heroSectionReference: null,
    productsSectionReference: null,
});

const router = createBrowserRouter([
    {
        path: pathConstants.HOME,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: pathConstants.PRODUCTS,
                children: [
                    {
                        index: true,
                        element: <ProductsList />,
                    },
                    {
                        path: `${pathConstants.PRODUCTS}:${pathConstants.PRODUCT_DETAIL_PARAM}`,
                        element: <Product />,
                    },
                ],
            },
            {
                path: pathConstants.CART,
                element: <Cart />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <Provider store={store}>
                <ReferenceContext.Provider
                    value={{
                        heroSectionReference: useRef(null),
                        productsSectionReference: useRef(null),
                    }}>
                    <RouterProvider router={router} />
                </ReferenceContext.Provider>
            </Provider>
        </>
    );
}

export default App;
