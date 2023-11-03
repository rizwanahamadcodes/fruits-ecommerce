import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => (
    <>
        <Header />
        <main>
            <Suspense fallback={<div>Loading</div>}>
                <Outlet />
            </Suspense>
        </main>
        <Footer />
    </>
);

export default Layout;
