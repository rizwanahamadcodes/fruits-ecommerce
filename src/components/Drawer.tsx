import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type DrawerProps = React.ComponentPropsWithoutRef<"div"> & {
    children: React.ReactNode;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle?: () => void;
};

const Drawer = (props: DrawerProps) => {
    const { children, isOpen, onClose, className } = props;
    const location = useLocation();

    const staticOnClose = useCallback(() => {
        onClose();
    }, []);

    useEffect(() => {
        staticOnClose();
    }, [location.pathname, staticOnClose]);

    return (
        <DrawerBackground isOpen={isOpen} onClose={onClose}>
            <DrawerMain className={className} isOpen={isOpen}>
                {children}
            </DrawerMain>
        </DrawerBackground>
    );
};

export const useDrawer = (initialDrawerState: boolean) => {
    const [isOpen, setIsOpen] = useState(initialDrawerState);

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, onOpen, onClose, onToggle };
};

type DrawerBackgroundProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

const DrawerBackground = (props: DrawerBackgroundProps) => {
    const { children, isOpen, onClose } = props;

    const handleBackgroundClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={clsx(
                "transition-all fixed top-0 left-0 overflow-hidden z-[100] min-h-full h-svh-screen w-full bg-gray-500/20 backdrop-blur-sm",
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
