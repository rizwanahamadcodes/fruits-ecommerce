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

export default pathConstants;
