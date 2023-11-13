import { useEffect, useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import pathConstants from "../routes/pathConstants";
import { RootState } from "../store/rootReducer";
import {
    selectSearchKeyword,
    updateSearchKeyword,
} from "../store/slices/productsSlice";
import cn from "../utils/cn";
import BrandLogo from "./BrandLogo";
import Container from "./Container";
import { selectNoOfItemsInCart } from "../store/slices/cartSlice";

type NavbarProps = {
    onOpen?: () => void;
};

const Navbar = (props: NavbarProps) => {
    const { onOpen } = props;

    const [scrolledPast80, setScrolledPast80] = useState(false);
    const navSubstituteRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

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
    };

    const noOfItemsInCart = useSelector((state: RootState) =>
        selectNoOfItemsInCart(state)
    );
    return (
        <div>
            <nav
                className={cn(
                    "h-navHeight backdrop-blur-sm fixed top-0 flex w-full z-50 items-center transition-[box-shadow] duration-500",
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
                            value={searchKeyword}
                            onChange={(e) => {
                                handleSearchChange(e);
                            }}
                            type="search"
                            className="grow w-0 max-w-lg h-3 px-1 border-gray-200 border rounded-full focus:outline-none hover:border-primary focus:shadow-primary-border focus:border-primary transition"
                            placeholder="Search products"
                        />
                    </form>
                    <button
                        className={cn(
                            "relative flex items-center justify-center bg-white rounded-full h-3 w-3 cursor-pointer border border-white transition hover:border-primary active:scale-95 focus:shadow-primary-border focus:outline-none focus:border-primary border-gray-200"
                        )}
                        onClick={() => {
                            if (onOpen) {
                                console.log("hey");
                                onOpen();
                            }
                        }}>
                        <BsCart3 className="text-1.5 text-primary" />
                        {noOfItemsInCart != 0 && (
                            <span className="font-medium h-1.5 w-1.5 absolute text-white bg-primary right-0 translate-x-1/2 top-2 flex items-center justify-center rounded-full">
                                {noOfItemsInCart}
                            </span>
                        )}
                    </button>
                </Container>
            </nav>
            <div
                className={cn(
                    "h-navHeight w-full",
                    location.pathname === pathConstants.HOME && "absolute"
                )}
                ref={navSubstituteRef}></div>
        </div>
    );
};

export default Navbar;
