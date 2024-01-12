import { Link, matchPath, useLocation } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import clsx from "clsx";

type navLinkType = {
    label: string;
    path: string;
};

const navLinks: navLinkType[] = [
    { label: "Home", path: pathConstants.HOME.path },
    { label: "Products", path: pathConstants.PRODUCTS.path },
    { label: "Contact", path: pathConstants.CONTACT.path },
    { label: "FAQs", path: pathConstants.FAQ.path },
];

type NavMenuProps = {
    direction?: "horizontal" | "vertical";
};

const NavMenu = (props: NavMenuProps) => {
    const { direction = "horizontal" } = props;

    return (
        <nav
            className={clsx(
                direction === "horizontal" ? "h-navHeight" : "w-full"
            )}>
            <ul
                className={clsx(
                    "flex",
                    direction === "horizontal" ? "flex-row h-full" : "flex-col"
                )}>
                {navLinks.map((navLink) => (
                    <NavItem navLink={navLink} direction={direction} />
                ))}
            </ul>
        </nav>
    );
};

type NavItemProps = {
    navLink: navLinkType;
    direction?: NavMenuProps["direction"];
};

const NavItem = (props: NavItemProps) => {
    const location = useLocation();
    const { navLink, direction = "horizontal" } = props;

    const match = matchPath(location.pathname, navLink.path);

    return (
        <li className={clsx(direction === "horizontal" ? "" : "")}>
            <Link
                to={navLink.path}
                className={clsx(
                    "flex font-semibold uppercase text-[14px] tracking-[2px] items-center transition-all",

                    direction === "horizontal"
                        ? "h-navHeight px-1"
                        : "px-2 py-1.25 border-b-gray-100 border-b",

                    match ? "text-primary-900 font-medium" : "text-gray-400",

                    direction === "vertical" && match
                        ? "bg-gray-100 border-l-[4px] border-l-primary"
                        : "",
                    direction === "horizontal" && match
                        ? "border-b-[4px] bg-white/90 text-primary-900 border-primary"
                        : ""
                )}>
                {navLink.label}
            </Link>
        </li>
    );
};

export default NavMenu;
