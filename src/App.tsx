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
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const store = configureStore({
    reducer: rootReducer,
});
console.log("i was rerendered");
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
            {
                path: pathConstants.FAQ.path,
                element: <Faq />,
            },
            {
                path: pathConstants.CONTACT.path,
                element: <Contact />,
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
