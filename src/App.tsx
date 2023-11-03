import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import routes from "./routes";

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: routes.map((route) => ({
                ...route,
                element: <route.element />,
            })),
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
