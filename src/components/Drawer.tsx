import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import cn from "../utils/cn";

type DrawerProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle?: () => void;
};

const Drawer = (props: DrawerProps) => {
    const { children, isOpen, onClose } = props;
    const location = useLocation();

    const staticOnClose = useCallback(() => {
        onClose();
    }, []);

    useEffect(() => {
        staticOnClose();
    }, [location.pathname, staticOnClose]);

    return (
        <DrawerBackground isOpen={isOpen} onClose={onClose}>
            <DrawerMain isOpen={isOpen}>{children}</DrawerMain>
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
            className={cn(
                "transition-all fixed top-0 left-0 invisible opacity-0 overflow-hidden z-20 min-h-full h-svh-screen w-full bg-gray-300/20 backdrop-blur-sm",
                isOpen && "visible opacity-100"
            )}
            onClick={(e) => handleBackgroundClick(e)}>
            {children}
        </div>
    );
};

type DrawerMainProps = {
    children?: React.ReactNode;
    isOpen: boolean;
};

const DrawerMain = (props: DrawerMainProps) => {
    const { children, isOpen } = props;

    return (
        <div
            className={cn(
                "transition-all flex flex-col h-full w-20 bg-white absolute top-0 right-0 shadow-soft-left translate-x-full",
                isOpen && "translate-x-0"
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
        <div className={cn(isSticky && "fixed", className)} {...otherProps}>
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
        <div className={cn("grow", className)} {...otherProps}>
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
        <div className={cn(className)} {...otherProps}>
            {children}
        </div>
    );
};

export { DrawerBody, DrawerFoot, DrawerHead };

export default Drawer;
