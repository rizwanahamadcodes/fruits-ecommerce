export const paramConstants = {
    PRODUCTID: "productId",
};

const pathConstants = {
    HOME: { path: "/", breadcrumbLabel: "Home" },
    CART: { path: "/cart", breadcrumbLabel: "Cart" },
    CONTACT: { path: "/contact", breadcrumbLabel: "Contact" },
    FAQ: { path: "/faq", breadcrumbLabel: "Faq" },
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
    },
    {
        path: "/checkout",
        breadcrumbLabel: "Checkout",
    },
];

export default pathConstants;
