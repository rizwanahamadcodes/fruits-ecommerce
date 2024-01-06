import { useNavigate, useSearchParams } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { useRef, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

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
        if (location.pathname != pathConstants.PRODUCTS.path) {
            navigate(pathConstants.PRODUCTS.path);
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
            <div className="relative w-full max-w-sm flex items-center">
                <button
                    type="submit"
                    className="w-2 h-2 rounded-full flex items-center justify-center absolute ml-0.5 hover:bg-gray-100">
                    <HiMagnifyingGlass className="text-gray-600 text-1.25" />
                </button>
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
                    className="border-gray-100 grow border hover:border-primary w-0 h-3 pl-3 pr-0.5 shadow-soft rounded-full focus:outline-none  focus:shadow-primary-border focus:border-primary transition"
                    placeholder="Search"
                />
            </div>
        </form>
    );
};

export default Searchbar;
