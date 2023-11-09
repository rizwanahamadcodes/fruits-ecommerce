import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    return (
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
};

export default Layout;
