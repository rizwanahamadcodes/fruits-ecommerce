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
                "transition-all duration-500 fixed top-0 left-0 invisible opacity-0 overflow-hidden z-20 h-screen w-full bg-gray-100/10 backdrop-blur-sm",
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
                "transition-all duration-500 h-full w-20 bg-white absolute top-0 right-0 shadow-soft-left translate-x-full",
                isOpen && "translate-x-0"
            )}>
            {children}
        </div>
    );
};

type DrawerHeadProps = {
    children?: React.ReactNode;
};

const DrawerHead = (props: DrawerHeadProps) => {
    const { children } = props;

    return <div className="p-4 text-white bg-blue-500">{children}</div>;
};

type DrawerBodyProps = {
    children?: React.ReactNode;
};

const DrawerBody = (props: DrawerBodyProps) => {
    const { children } = props;

    return <div className="p-4">{children}</div>;
};

type DrawerFootProps = {
    children?: React.ReactNode;
};

const DrawerFoot = (props: DrawerFootProps) => {
    const { children } = props;

    return <div className="p-4 text-white bg-primary-500">{children}</div>;
};

export { DrawerBody, DrawerFoot, DrawerHead };

export default Drawer;
