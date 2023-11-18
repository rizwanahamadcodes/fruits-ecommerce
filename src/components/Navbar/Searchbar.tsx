import { useNavigate, useSearchParams } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { useRef, useState } from "react";

const Searchbar = () => {
    const navigate = useNavigate();
    const searchBarRef = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams({
        searchKeyword: "",
        selectedCategoty: "0",
    });
    const [searchInputValue, setSearchInputValue] = useState("");

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (location.pathname != pathConstants.PRODUCTS) {
            navigate(pathConstants.PRODUCTS);
        }
        if (searchBarRef.current) {
            (searchBarRef.current as HTMLElement).blur();
        }
        setSearchParams(
            (prev) => {
                prev.set("searchKeyword", searchInputValue);
                return prev;
            },
            { replace: true }
        );
    };

    return (
        <form
            className="grow flex justify-center"
            onSubmit={(e) => {
                handleSearchSubmit(e);
            }}>
            <input
                ref={searchBarRef}
                value={searchParams.get("searchKeyword") || ""}
                onChange={(e) => {
                    setSearchInputValue(e.target.value);
                    setSearchParams(
                        (prev) => {
                            prev.set("searchKeyword", e.target.value);
                            return prev;
                        },
                        { replace: true }
                    );
                }}
                type="search"
                className="border-gray-100 grow border hover:border-primary w-0 max-w-lg h-3 px-1 shadow-soft rounded-full focus:outline-none  focus:shadow-primary-border focus:border-primary transition"
                placeholder="Search products"
            />
        </form>
    );
};

export default Searchbar;
