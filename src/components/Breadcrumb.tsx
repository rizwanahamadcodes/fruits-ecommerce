import { PathMatch, matchPath } from "react-router-dom";

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
        breadcrumbLabelTransformer = (label) => label,
        dynamicBreadcrumbLabelGenerators,
    } = props;
    const getPathnameParts = (pathname: string): string[] => {
        const pathnameWithoutQuery = pathname.split("?")[0];
        return pathnameWithoutQuery
            .split("/")
            .filter((part) => part.length != 0);
    };

    const getCrumbLinks = (pathnameParts: string[]): string[] => {
        return pathnameParts.map((part, index) => {
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
                            label: preCrumb.label,
                            href: dynamicBreadcrumbLabelGenerator(
                                preCrumb.lastParam.value
                            ),
                        };
                    }
                }
            }

            return preCrumb;
        });

        return crumbs;
    };

    const crumbs = getBreadCrumbs();
    console.log(crumbs);
    return <></>;
};

export default Breadcrumb;
