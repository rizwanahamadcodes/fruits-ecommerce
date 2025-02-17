export const PATH_CONSTANTS = {
  NEW: "new",
};

export const ROUTES = {
  PRODUCTS: {
    path: "products",  // Parent route path without leading slash
    name: "Products",
    param: ":id",
    LIST: {
      path: "/",  // Relative to parent
      name: "Product List",
    },
    ADD: {
      path: PATH_CONSTANTS.NEW,  // Reference the constant here
      name: "Add Product",
      buildHref: () => `${ROUTES.PRODUCTS.path}/${PATH_CONSTANTS.NEW}`,  // Use constant for buildHref
    },
    EDIT: {
      path: ":id/edit",  // Dynamic path
      name: "Edit Product",
      buildHref: (param) => `${ROUTES.PRODUCTS.path}/${param}/edit`,
    },
    DELETE: {
      path: ":id/delete",  // Dynamic path
      name: "Delete Product",
      buildHref: (param) => `${ROUTES.PRODUCTS.path}/${param}/delete`,
    },
    DETAIL: {
      path: ":id",  // Dynamic path
      name: "Product Detail",
      buildHref: (param) => `${ROUTES.PRODUCTS.path}/${param}`,
    },
  },
};
