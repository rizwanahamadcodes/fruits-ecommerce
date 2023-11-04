import { lazy } from "react";
import pathContants from "./pathContants";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Products = lazy(() => import("../pages/Products"));
const ProductsList = lazy(() => import("../pages/ProductsList"));

const routes = [
    { path: pathContants.HOME, element: Home },
    { path: pathContants.CART, element: Cart },
    { path: pathContants.PRODUCTS, element: Products },
    { path: pathContants.PRODUCTS_LIST, element: ProductsList },
];

console.log(Home);
export default routes;
