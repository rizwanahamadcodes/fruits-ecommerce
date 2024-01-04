const paramConstants = {
    PRODUCTID: "productId",
};

const pathConstants = {
    HOME: "/",
    CART: "/cart",
    PRODUCTS: "/products",
    CHECKOUT: "/checkout",
    PRODUCT_DETAIL_PARAM: "productId",
};

const objectPathConstants = {
    HOME: {
        slug: "/",
        breadCrumbLabel: "Home",
    },
    CART: {
        slug: "/cart",
        breadCrumbLabel: "Cart",
    },

    PRODUCTS: {
        slug: "/products",
        breadCrumbLabel: "Products",

        PRODUCTID: {
            slug: `/:${paramConstants.PRODUCTID}`,
            breadCrumbLabel: "Product Details",
        },
    },

    CHECKOUT: {
        slug: "/checkout",
        breadCrumbLabel: "Checkout",
    },
};

const addParentPath = (pathConstants, parentPath = "") => {
    const pathTitles = Object.keys(pathConstants);
    let pathConstantsToBeReturned = {};

    pathTitles.forEach((title) => {
        if (typeof pathConstants[title] === "object") {
            let pathConstant = {
                [title]: {
                    path: parentPath + pathConstants[title].slug,
                    breadCrumbLabel: pathConstants[title].breadCrumbLabel,
                },
            };

            const innterPathTitles = Object.keys(pathConstants[title]);
            innterPathTitles.forEach((innterPathTitle) => {
                if (typeof pathConstants[title][innterPathTitle] === "object") {
                    pathConstant = {
                        [title]: {
                            ...pathConstant[title],
                            ...addParentPath(
                                pathConstants[title],
                                parentPath + pathConstants[title].slug
                            ),
                        },
                    };
                }
            });

            pathConstantsToBeReturned = {
                ...pathConstantsToBeReturned,
                ...pathConstant,
            };
        }
    });

    return pathConstantsToBeReturned;
};

console.log(addParentPath(objectPathConstants));
export default pathConstants;
