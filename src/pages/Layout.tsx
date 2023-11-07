import { Outlet } from "react-router-dom";
import { Suspense, createContext, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const ReferenceContext =
    createContext<React.MutableRefObject<null> | null>(null);

const Layout = () => {
    return (
        <ReferenceContext.Provider value={useRef(null)}>
            <Header />
            <main>
                <Suspense fallback={<div>Loading</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </ReferenceContext.Provider>
    );
};

export default Layout;
