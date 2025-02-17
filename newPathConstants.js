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

export const PATHCONSTANTS = {
    PRODUCTS: {
        pathSegment: "products",
        param: "productId",
        ADD: {
            pathSegment: "new",
        },
        EDIT: {
            pathSegment: "edit",
        },
        DELETE: {
            pathSegment: "delete",
        },
        DETAIL: {
            pathSegment: "detail",
        },
    },
    USERS: {
        pathSegment: "users",
        param: "userId",
        ADD: {
            pathSegment: "new",
        },
        EDIT: {
            pathSegment: "edit",
        },
        DELETE: {
            pathSegment: "delete",
        },
        DETAIL: {
            pathSegment: "detail",
        },
    },
};

// Now assign the full paths after the basic structure is initialized
PATHCONSTANTS.PRODUCTS.path = `/${PATHCONSTANTS.PRODUCTS.pathSegment}`;
PATHCONSTANTS.PRODUCTS.ADD.path = `/${PATHCONSTANTS.PRODUCTS.pathSegment}/${PATHCONSTANTS.PRODUCTS.ADD.pathSegment}`;
PATHCONSTANTS.PRODUCTS.EDIT.path = `:${PATHCONSTANTS.PRODUCTS.param}/${PATHCONSTANTS.PRODUCTS.EDIT.pathSegment}`;
PATHCONSTANTS.PRODUCTS.DELETE.path = `:${PATHCONSTANTS.PRODUCTS.param}/${PATHCONSTANTS.PRODUCTS.DELETE.pathSegment}`;
PATHCONSTANTS.PRODUCTS.DETAIL.path = `:${PATHCONSTANTS.PRODUCTS.param}/${PATHCONSTANTS.PRODUCTS.DETAIL.pathSegment}`;

PATHCONSTANTS.USERS.path = `/${PATHCONSTANTS.USERS.pathSegment}`;
PATHCONSTANTS.USERS.ADD.path = `/${PATHCONSTANTS.USERS.pathSegment}/${PATHCONSTANTS.USERS.ADD.pathSegment}`;
PATHCONSTANTS.USERS.EDIT.path = `:${PATHCONSTANTS.USERS.param}/${PATHCONSTANTS.USERS.EDIT.pathSegment}`;
PATHCONSTANTS.USERS.DELETE.path = `:${PATHCONSTANTS.USERS.param}/${PATHCONSTANTS.USERS.DELETE.pathSegment}`;
PATHCONSTANTS.USERS.DETAIL.path = `:${PATHCONSTANTS.USERS.param}/${PATHCONSTANTS.USERS.DETAIL.pathSegment}`;

// Now, define the buildHref methods
PATHCONSTANTS.PRODUCTS.buildHref = () => `/${PATHCONSTANTS.PRODUCTS.pathSegment}`;
PATHCONSTANTS.PRODUCTS.ADD.buildHref = () =>
    `/${PATHCONSTANTS.PRODUCTS.pathSegment}/${PATHCONSTANTS.PRODUCTS.ADD.pathSegment}`;
PATHCONSTANTS.PRODUCTS.EDIT.buildHref = (param) =>
    `/${param}/${PATHCONSTANTS.PRODUCTS.EDIT.pathSegment}`;
PATHCONSTANTS.PRODUCTS.DELETE.buildHref = (param) =>
    `/${param}/${PATHCONSTANTS.PRODUCTS.DELETE.pathSegment}`;
PATHCONSTANTS.PRODUCTS.DETAIL.buildHref = (param) =>
    `/${param}/${PATHCONSTANTS.PRODUCTS.DETAIL.pathSegment}`;

PATHCONSTANTS.USERS.buildHref = () => `/${PATHCONSTANTS.USERS.pathSegment}`;
PATHCONSTANTS.USERS.ADD.buildHref = () =>
    `/${PATHCONSTANTS.USERS.pathSegment}/${PATHCONSTANTS.USERS.ADD.pathSegment}`;
PATHCONSTANTS.USERS.EDIT.buildHref = (param) =>
    `/${param}/${PATHCONSTANTS.USERS.EDIT.pathSegment}`;
PATHCONSTANTS.USERS.DELETE.buildHref = (param) =>
    `/${param}/${PATHCONSTANTS.USERS.DELETE.pathSegment}`;
PATHCONSTANTS.USERS.DETAIL.buildHref = (param) =>
    `/${param}/${PATHCONSTANTS.USERS.DETAIL.pathSegment}`;

