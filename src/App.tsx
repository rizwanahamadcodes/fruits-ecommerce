import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Products/Product/Product";
import Products from "./pages/Products/Products";
import pathConstants from "./routes/pathConstants";
import rootReducer from "./store/rootReducer";
import Checkout from "./pages/Checkout";

const store = configureStore({
    reducer: rootReducer,
});

console.log(pathConstants.PRODUCT_DETAILS.path);
const router = createBrowserRouter([
    {
        path: pathConstants.HOME.path,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: pathConstants.PRODUCTS.path,
                children: [
                    {
                        index: true,
                        element: <Products />,
                    },
                    {
                        path: pathConstants.PRODUCT_DETAILS.path,
                        element: <Product />,
                    },
                ],
            },
            {
                path: pathConstants.CART.path,
                element: <Cart />,
            },
            {
                path: pathConstants.CHECKOUT.path,
                element: <Checkout />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
