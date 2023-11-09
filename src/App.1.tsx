import { Router } from "react-router-dom";
import Layout from "./pages/Layout";
import Page404 from "./pages/Page404";
import { Provider } from "react-redux";
import { useRef } from "react";
import {
    store,
    ReferenceContext,
    Home,
    ProductsList,
    Products,
    Cart,
} from "./App";

export function App() {
    return (
        <>
            <Provider store={store}>
                <ReferenceContext.Provider
                    value={{
                        heroSectionReference: useRef(null),
                        productsSectionReference: useRef(null),
                    }}>
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="products"
                                    element={<ProductsList />}>
                                    <Route path=":id" element={<Products />} />
                                </Route>
                                <Route path="cart" element={<Cart />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </Layout>
                    </Router>
                </ReferenceContext.Provider>
            </Provider>
        </>
    );
}
