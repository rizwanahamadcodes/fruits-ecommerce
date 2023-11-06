import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import routes from "./routes";
import Page404 from "./pages/Page404";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <Page404 />,
            children: routes.map((route) => ({
                ...route,
                element: <route.element />,
            })),
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
