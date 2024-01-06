import clsx from "clsx";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export type DrawerProps = React.ComponentPropsWithoutRef<"div"> & {
    children: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle?: () => void;
};

const Drawer = (props: DrawerProps) => {
    const { children, isOpen, close, className } = props;
    const location = useLocation();

    const staticClose = useCallback(() => {
        close();
    }, []);

    useEffect(() => {
        staticClose();
    }, [location.pathname, staticClose]);

    return (
        <DrawerBackground isOpen={isOpen} close={close}>
            <DrawerMain className={className} isOpen={isOpen}>
                {children}
            </DrawerMain>
        </DrawerBackground>
    );
};

type DrawerBackgroundProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    close: () => void;
};

const DrawerBackground = (props: DrawerBackgroundProps) => {
    const { children, isOpen, close } = props;

    const handleBackgroundClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    return (
        <div
            className={clsx(
                "transition-all fixed top-0 left-0 overflow-hidden z-[2000] min-h-full h-svh-screen w-full bg-gray-500/20 backdrop-blur-sm",
                isOpen ? "visible opacity-100" : " invisible opacity-0"
            )}
            onClick={(e) => handleBackgroundClick(e)}>
            {children}
        </div>
    );
};

type DrawerMainProps = {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
};

const DrawerMain = (props: DrawerMainProps) => {
    const { children, isOpen, className } = props;

    return (
        <div
            className={clsx(
                "transition-all flex flex-col h-full w-20 bg-gray-100 absolute top-0 right-0 shadow-soft-left overflow-hidden",
                isOpen ? "translate-x-0" : "translate-x-full",
                className
            )}>
            {children}
        </div>
    );
};

type DrawerHeadProps = React.ComponentPropsWithoutRef<"div"> & {
    children?: React.ReactNode;
    isSticky?: boolean;
};

const DrawerHead = (props: DrawerHeadProps) => {
    const { children, isSticky, className, ...otherProps } = props;

    return (
        <div className={clsx(isSticky && "fixed", className)} {...otherProps}>
            {children}
        </div>
    );
};

type DrawerBodyProps = React.ComponentPropsWithoutRef<"div"> & {
    children?: React.ReactNode;
};

const DrawerBody = (props: DrawerBodyProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={clsx("grow", className)} {...otherProps}>
            {children}
        </div>
    );
};

type DrawerFootProps = React.ComponentPropsWithoutRef<"div"> & {
    children?: React.ReactNode;
};

const DrawerFoot = (props: DrawerFootProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={clsx(className)} {...otherProps}>
            {children}
        </div>
    );
};

export { DrawerBody, DrawerFoot, DrawerHead };

export default Drawer;
