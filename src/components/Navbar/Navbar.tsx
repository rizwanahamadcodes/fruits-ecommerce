import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import BrandLogo from "../BrandLogo";
import Container from "../Container";
import CartDrawer from "../Drawers/CartDrawer";
import CartIcon from "./CartIcon";
import Searchbar from "./Searchbar";

const Navbar = () => {
    const [scrolledPast80, setScrolledPast80] = useState(false);
    const navSubstituteRef = useRef(null);
    const location = useLocation();
    const { isOpen, close, open } = useToggle(false);

    useEffect(() => {
        const navSubstitute = navSubstituteRef.current;

        const callback: IntersectionObserverCallback = (entries) => {
            setScrolledPast80(!entries[0].isIntersecting);
        };

        const options: IntersectionObserverInit = {
            threshold: 1,
            rootMargin: "100px 0px 0px 0px",
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
            <nav
                className={clsx(
                    "h-navHeight backdrop-blur-sm fixed top-0 flex w-full z-50 items-center transition-[box-shadow] duration-500",
                    scrolledPast80 && "shadow-soft"
                )}>
                <Container className="flex gap-1 justify-between">
                    <BrandLogo />
                    <Searchbar />
                    <CartIcon open={open} />
                </Container>
            </nav>
            <div
                className={clsx("h-navHeight w-full absolute")}
                ref={navSubstituteRef}></div>
            <CartDrawer isOpen={isOpen} close={close} open={open} />
        </div>
    );
};

export default Navbar;
