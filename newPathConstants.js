export const PATHCONSTANTS = {
    PRODUCTS: {
        pathSegment: "products",
        path: `/${PATHCONSTANTS.pathSegment}`,
        name: "Products",
        param: "productId",
        buildHref: () => `/${PATHCONSTANTS.PRODUCTS}`,

        ADD: {
            pathSegment: "new",
            path: `/${PATHCONSTANTS.PRODUCTS}/${PATHCONSTANTS.PRODUCTS.ADD.pathSegment}`,
            name: "Add Product",
            buildHref: () =>
                `/${PATHCONSTANTS.PRODUCTS.path}/${PATHCONSTANTS.PRODUCTS.ADD.pathSegment}`,
        },
        EDIT: {
            pathSegment: "edit",
            path: `:${PATHCONSTANTS.PRODUCTS.param}/${PATHCONSTANTS.PRODUCTS.EDIT.pathSegment}`,
            name: "Edit Product",
            buildHref: (param) =>
                `/${param}/${PATHCONSTANTS.PRODUCTS.EDIT.pathSegment}`,
        },
        DELETE: {
            pathSegment: "delete",
            path: `:${PATHCONSTANTS.PRODUCTS.param}/${PATHCONSTANTS.PRODUCTS.DELETE.pathSegment}`,
            name: "Delete Product",
            buildHref: (param) =>
                `/${param}/${PATHCONSTANTS.PRODUCTS.DELETE.pathSegment}`,
        },
        DETAIL: {
            pathSegment: "detail",
            path: `:${PATHCONSTANTS.PRODUCTS.param}/${PATHCONSTANTS.PRODUCTS.DETAIL.pathSegment}`,
            name: "Detail Product",
            buildHref: (param) =>
                `/${param}/${PATHCONSTANTS.PRODUCTS.DETAIL.pathSegment}`,
        },
    },
    USERS: {
        pathSegment: "users",
        path: `/${PATHCONSTANTS.pathSegment}`,
        name: "Users",
        param: "userId",
        ADD: {
            pathSegment: "new",
            path: `/${PATHCONSTANTS.USERS}/${PATHCONSTANTS.USERS.ADD.pathSegment}`,
            name: "Add Product",
            buildHref: () =>
                `/${PATHCONSTANTS.USERS.path}/${PATHCONSTANTS.USERS.ADD.pathSegment}`,
        },
        EDIT: {
            pathSegment: "edit",
            path: `:${PATHCONSTANTS.USERS.param}/${PATHCONSTANTS.USERS.EDIT.pathSegment}`,
            name: "Edit Product",
            buildHref: (param) =>
                `/${param}/${PATHCONSTANTS.USERS.EDIT.pathSegment}`,
        },
        DELETE: {
            pathSegment: "delete",
            path: `:${PATHCONSTANTS.USERS.param}/${PATHCONSTANTS.USERS.DELETE.pathSegment}`,
            name: "Delete Product",
            buildHref: (param) =>
                `/${param}/${PATHCONSTANTS.USERS.DELETE.pathSegment}`,
        },
        DETAIL: {
            pathSegment: "detail",
            path: `:${PATHCONSTANTS.USERS.param}/${PATHCONSTANTS.USERS.DETAIL.pathSegment}`,
            name: "Detail Product",
            buildHref: (param) =>
                `/${param}/${PATHCONSTANTS.USERS.DETAIL.pathSegment}`,
        },
    },
};
