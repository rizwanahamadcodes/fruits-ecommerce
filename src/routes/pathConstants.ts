export const paramConstants = {
    PRODUCTID: "productId",
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
        dynamicBreadcrumbLabelGenerator: (id: string) => `${id}`,
    },
    {
        path: "/checkout",
        breadcrumbLabel: "Checkout",
    },
];

export default pathConstants;
