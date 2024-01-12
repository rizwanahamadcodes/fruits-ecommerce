import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import Container from "./Container";

type dynamicBreadcrumbLabelGeneratorsType = {
    [key: string]: (id: string) => string;
};

type RouteType = {
    path: string;
    breadcrumbLabel: string;
};

type BreadcrumbProps = {
    routes: RouteType[];
    pathname: string;
    separator?: string;
    breadcrumbLabelTransformer?: (label: string) => string;
    dynamicBreadcrumbLabelGenerators?: dynamicBreadcrumbLabelGeneratorsType;
};

type crumbType = {
    label: string;
    href: string;
};

type preCrumbType = {
    label: string;
    href: string;
    lastParam?: {
        name: string;
        value: string;
    };
};

const Breadcrumb = (props: BreadcrumbProps) => {
    const {
        routes,
        pathname,
        separator = "/",
        // breadcrumbLabelTransformer = (label) => label,
        dynamicBreadcrumbLabelGenerators,
    } = props;
    const getPathnameParts = (pathname: string): string[] => {
        const pathnameWithoutQuery = pathname.split("?")[0];
        return pathnameWithoutQuery
            .split("/")
            .filter((part) => part.length != 0);
    };

    const getCrumbLinks = (pathnameParts: string[]): string[] => {
        return pathnameParts.map((_, index) => {
            return "/" + pathnameParts.slice(0, index + 1).join("/");
        });
    };

    const getPreCrumb = (pathnameLink: string): preCrumbType | null => {
        for (let i = 0; i < routes.length; i++) {
            const match = matchPath(routes[i].path, pathnameLink);
            if (match) {
                const preCrumb = {
                    label: routes[i].breadcrumbLabel,
                    href: match.pathname,
                };

                if (Object.keys(match.params).length != 0) {
                    const paramNames = Object.keys(match.params);
                    if (paramNames.length > 0) {
                        const pattern = match?.pattern.path;
                        const lastParamInPattern = pattern
                            .split(":")
                            .pop()
                            ?.split("/")[0];
                        Object.assign(preCrumb, {
                            lastParam: {
                                name: lastParamInPattern,
                                value: match.params[
                                    lastParamInPattern as string
                                ],
                            },
                        });
                    }
                }

                return preCrumb;
            }
        }

        return null;
    };

    const getBreadCrumbs = (): crumbType[] => {
        const preCrumbs: preCrumbType[] = [];

        const pathnameParts = getPathnameParts(pathname);
        const pathnameLinks = getCrumbLinks(pathnameParts);

        pathnameLinks.forEach((pathnameLink) => {
            const preCrumb = getPreCrumb(pathnameLink);
            if (preCrumb) {
                preCrumbs.push(preCrumb);
            }
        });

        const crumbs: crumbType[] = preCrumbs.map((preCrumb) => {
            if (preCrumb.lastParam) {
                if (dynamicBreadcrumbLabelGenerators) {
                    const dynamicBreadcrumbLabelGenerator =
                        dynamicBreadcrumbLabelGenerators[
                            preCrumb.lastParam.name
                        ];
                    if (dynamicBreadcrumbLabelGenerator) {
                        return {
                            href: preCrumb.href,
                            label: dynamicBreadcrumbLabelGenerator(
                                preCrumb.lastParam.value
                            ),
                        };
                    }
                }
            }

            return preCrumb;
        });

        return [{ label: "Home", href: "/" }, ...crumbs];
    };

    const crumbs = getBreadCrumbs();

    const [showBreadCrumb, setShowBreadCrumb] = useState(true);
    const prevWindowScrollY = useRef<number>(0);

    const handleWindowScroll = useCallback(() => {
        const windowScrollY = window.scrollY;

        if (windowScrollY >= prevWindowScrollY.current) {
            setShowBreadCrumb(false);
        } else {
            setShowBreadCrumb(true);
        }

        prevWindowScrollY.current = windowScrollY;
    }, [prevWindowScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll);

        return () => {
            window.removeEventListener("scroll", handleWindowScroll);
        };
    }, [handleWindowScroll]);

    return (
        <div>
            <div
                className={clsx(
                    "fixed w-full z-[500] bg-white/50 backdrop-blur-sm transition-all duration-[500] h-breadcrumbHeight border-y-[1px] shadow border-gray-900/10 flex",
                    showBreadCrumb
                        ? "top-navHeight opacity-1"
                        : "-top-breadcrumbHeight opacity-0"
                )}>
                <Container className="flex gap-1 overflow-x-auto">
                    {crumbs.map((crumb, index) => {
                        const last = index === crumbs.length - 1;
                        return (
                            <>
                                <Crumb crumb={crumb} last={last} />
                                {!last ? <p>{separator}</p> : ""}
                            </>
                        );
                    })}
                </Container>
            </div>
            <div className="h-breadcrumbHeight"></div>
        </div>
    );
};

type CrumbProps = {
    crumb: crumbType;
    last: boolean;
};

const Crumb = (props: CrumbProps) => {
    const { crumb, last } = props;

    const crumbClasses = "font-medium";

    if (last) {
        return (
            <span
                className={
                    crumbClasses + " " + "text-primary-900 whitespace-nowrap"
                }>
                {crumb.label}
            </span>
        );
    }

    return (
        <Link to={crumb.href} className={crumbClasses}>
            {crumb.label}
        </Link>
    );
};

export default Breadcrumb;
