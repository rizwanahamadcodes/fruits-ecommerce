import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { selectProductById } from "../store/slices/productsSlice";

export const paramConstants = {
    PRODUCTID: "productId",
};

const getProductNameFromId = (id: string) => {
    return useProductName(id);
};
const useProductName = (id: string) => {
    const productId = parseInt(id);
    const productName = useSelector((state: RootState) =>
        selectProductById(state, productId)
    )?.name;

    if (!productId) {
        return "Product Detail";
    }

    return productName;
};

const pathConstants = {
    HOME: { path: "/", breadcrumbLabel: "Home" },
    CART: { path: "/cart", breadcrumbLabel: "Cart" },
    PRODUCTS: { path: "/products", breadcrumbLabel: "Products" },
    PRODUCT_DETAILS: {
        path: `/products/:${paramConstants.PRODUCTID}`,
        breadcrumbLabel: "Product Details",
    },
    CHECKOUT: { path: "/checkout", breadcrumbLabel: "Checkout" },
};

export const routes = [
    {
        path: "/",
        breadcrumbLabel: "Home",
    },
    {
        path: "/cart",
        breadcrumbLabel: "Cart",
    },
    {
        path: "/products",
        breadcrumbLabel: "Products",
    },
    {
        path: "/products/:productId",
        breadcrumbLabel: "Product details",
        dynamicBreadcrumbLabelGenerator: getProductNameFromId,
    },
    {
        path: "/checkout",
        breadcrumbLabel: "Checkout",
    },
];

export default pathConstants;
