import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import BrandLogo from "../BrandLogo";
import Container from "../Container";
import CartDrawer from "../Drawers/CartDrawer";
import CartIcon from "./CartIcon";
import Searchbar from "./Searchbar";
import NavMenu from "./NavMenu";
import Drawer, { DrawerBody, DrawerHead } from "../Drawer";
import CloseButton from "../CloseButton";
import Hamburger from "../Hamburger";

const Navbar = () => {
    const [scrolledPast80, setScrolledPast80] = useState(false);
    const navSubstituteRef = useRef(null);
    const {
        isOpen: isCartDrawerOpen,
        close: closeCartDrawer,
        open: openCartDrawer,
    } = useToggle(false);

    const {
        isOpen: isNavMenuDrawerOpen,
        close: closeNavMenuDrawer,
        open: openNavMenuDrawer,
    } = useToggle(false);

    useEffect(() => {
        const navSubstitute = navSubstituteRef.current;

        const callback: IntersectionObserverCallback = (entries) => {
            setScrolledPast80(!entries[0].isIntersecting);
        };

        const options: IntersectionObserverInit = {
            threshold: 1,
            rootMargin: "0px 0px 0px 0px",
        };

        const observer = new IntersectionObserver(callback, options);

        if (navSubstitute) {
            observer.observe(navSubstitute);
        }

        return () => {
            if (navSubstitute) {
                observer.unobserve(navSubstitute);
            }
        };
    }, []);

    return (
        <div>
            <div
                className={clsx(
                    "h-navHeight bg-white/50 backdrop-blur-sm fixed top-0 flex w-full z-[1000] items-center transition-[box-shadow] duration-500",
                    scrolledPast80 && "shadow-soft"
                )}>
                <Container className="flex items-center gap-1 justify-between">
                    <BrandLogo />
                    <Searchbar />
                    <span className="hidden md:block">
                        <NavMenu direction="horizontal" />
                    </span>
                    <CartIcon open={openCartDrawer} />
                    <span className="md:hidden" onClick={openNavMenuDrawer}>
                        <Hamburger />
                    </span>
                </Container>
            </div>

            <div
                className={clsx("h-navHeight w-full absolute")}
                ref={navSubstituteRef}></div>

            <span className="md:hidden">
                <Drawer
                    close={closeNavMenuDrawer}
                    isOpen={isNavMenuDrawerOpen}
                    open={openNavMenuDrawer}>
                    <DrawerHead className="pl-[7vw] py-1 pr-[7vw] flex justify-between items-center border-b">
                        <BrandLogo />
                        <CloseButton onClick={closeNavMenuDrawer} />
                    </DrawerHead>
                    <DrawerBody className="">
                        <NavMenu direction="vertical" />
                    </DrawerBody>
                </Drawer>
            </span>

            <CartDrawer
                isOpen={isCartDrawerOpen}
                close={closeCartDrawer}
                open={openCartDrawer}
            />
        </div>
    );
};

export default Navbar;
