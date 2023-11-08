import { Outlet } from "react-router-dom";
import { Suspense, createContext, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type referenceType = React.MutableRefObject<null> | null;
type referenceContextType = {
    heroSectionReference: referenceType;
    productsSectionReference: referenceType;
};

export const ReferenceContext = createContext<referenceContextType>({
    heroSectionReference: null,
    productsSectionReference: null,
});

const Layout = () => {
    return (
        <ReferenceContext.Provider
            value={{
                heroSectionReference: useRef(null),
                productsSectionReference: useRef(null),
            }}>
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
