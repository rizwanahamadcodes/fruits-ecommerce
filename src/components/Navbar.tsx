import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import pathConstants from "../routes/pathConstants";
import { RootState } from "../store/rootReducer";
import { selectNoOfItemsInCart } from "../store/slices/cartSlice";
import {
    selectSearchKeyword,
    updateSearchKeyword,
} from "../store/slices/productsSlice";
import BrandLogo from "./BrandLogo";
import Button, { ButtonIcon } from "./Button";
import Container from "./Container";

type NavbarProps = {
    onOpen?: () => void;
};

const Navbar = (props: NavbarProps) => {
    const { onOpen } = props;

    const [scrolledPast80, setScrolledPast80] = useState(false);
    const navSubstituteRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const searchBarRef = useRef(null);

    const dispatch = useDispatch();
    const searchKeyword = useSelector((state: RootState) =>
        selectSearchKeyword(state)
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSearchKeyword(e.target.value));
    };

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

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (location.pathname != pathConstants.PRODUCTS) {
            navigate(pathConstants.PRODUCTS);
        }
        if (searchBarRef.current) {
            (searchBarRef.current as HTMLElement).blur();
        }
    };

    const noOfItemsInCart = useSelector((state: RootState) =>
        selectNoOfItemsInCart(state)
    );
    return (
        <div>
            <nav
                className={clsx(
                    "h-navHeight bg-white/50 backdrop-blur-sm fixed top-0 flex w-full z-50 items-center transition-[box-shadow] duration-500",
                    scrolledPast80 && "shadow-soft",
                    location.pathname != pathConstants.HOME && ""
                )}>
                <Container className="flex gap-1 justify-between">
                    <BrandLogo />
                    <form
                        className="grow flex justify-center"
                        onSubmit={(e) => {
                            handleSearchSubmit(e);
                        }}>
                        <input
                            ref={searchBarRef}
                            value={searchKeyword}
                            onChange={(e) => {
                                handleSearchChange(e);
                            }}
                            type="search"
                            className="grow border border-transparent hover:border-primary w-0 max-w-lg h-3 px-1 shadow-soft rounded-full focus:outline-none  focus:shadow-primary-border focus:border-primary transition"
                            placeholder="Search products"
                        />
                    </form>

                    <Button colorScheme="white" onClick={onOpen}>
                        <ButtonIcon icon={BsCart3} className="text-primary" />
                        Cart
                    </Button>
                </Container>
            </nav>
            <div
                className={clsx(
                    "h-navHeight w-full",
                    location.pathname === pathConstants.HOME && "absolute"
                )}
                ref={navSubstituteRef}></div>
        </div>
    );
};

export default Navbar;
