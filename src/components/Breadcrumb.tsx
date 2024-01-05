import { Link, matchPath } from "react-router-dom";
import Container from "./Container";

type RouteType = {
    path: string;
    breadcrumbLabel: string;
    dynamicBreadcrumbLabelGenerator?: (id: string) => string;
};

type BreadcrumbProps = {
    routes: RouteType[];
    pathname: string;
    separator?: string;
    breadcrumbLabelTransformer?: (label: string) => string;
};

const Breadcrumb = (props: BreadcrumbProps) => {
    const {
        routes,
        pathname,
        separator = "/",
        breadcrumbLabelTransformer = (label) => label,
    } = props;

    const getBreadCrumbs = () => {
        const crumbs = [];

        const pathnameWithoutQuery = pathname.split("?")[0];
        const pathnameParts = pathnameWithoutQuery
            .split("/")
            .filter((part) => part.length != 0);

        const pathnameLinks = pathnameParts.map((part, index) => {
            return "/" + pathnameParts.slice(0, index + 1).join("/");
        });

        for (let i = 0; i < pathnameLinks.length; i++) {
            for (let j = 0; j < routes.length; j++) {
                const match = matchPath(routes[j].path, pathnameLinks[i]);
                if (match) {
                    let crumb = {
                        label: routes[j].breadcrumbLabel,
                        href: match.pathname,
                    };
                    const labelGenerator =
                        routes[j].dynamicBreadcrumbLabelGenerator;

                    if (labelGenerator) {
                        const paramNames = Object.keys(match.params);
                        if (paramNames.length > 0) {
                            const pattern = match?.pattern.path;
                            const lastParamInPattern = pattern
                                .split(":")
                                .pop()
                                ?.split("/")[0];
                            crumb = {
                                ...crumb,
                                label: labelGenerator(
                                    match.params[
                                        lastParamInPattern as string
                                    ] as string
                                ),
                            };
                        }
                    }
                    crumbs.push(crumb);
                }
            }
        }

        return [{ label: "Home", href: "/" }, ...crumbs];
    };
    const crumbs = getBreadCrumbs();

    return (
        <div className="fixed top-navHeight w-full z-[200] border-y-[1px] backdrop-blur-sm border-gray-200 h-3.5 flex items-center ">
            <Container className="flex h-full px-1 items-center rounded-0.25">
                {crumbs.map((crumb, index) => {
                    const last = index === crumbs.length - 1;
                    return (
                        <>
                            <Crumb
                                last={last}
                                label={crumb.label}
                                href={crumb.href}
                            />
                            {!last ? <p>{separator}</p> : ""}
                        </>
                    );
                })}
            </Container>
        </div>
    );
};

type CrumbProps = {
    last?: boolean;
    label: string;
    href: string;
};

const Crumb = (props: CrumbProps) => {
    const { last = false, label, href } = props;
    const crumbClasses = "px-1 font-medium";

    return (
        <>
            {" "}
            {last ? (
                <span className={crumbClasses + " text-primary"}>{label}</span>
            ) : (
                <Link to={href} className={crumbClasses}>
                    {label}
                </Link>
            )}
        </>
    );
};

export default Breadcrumb;
