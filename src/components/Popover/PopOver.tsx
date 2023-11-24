import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import clsx from "clsx";

type PopOverProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    close: () => void;
    toggleButtonRef: React.MutableRefObject<null>;
    className?: string;
};

const PopOver = (props: PopOverProps) => {
    const { isOpen, close, className, toggleButtonRef, children } = props;

    const popOverRef = useRef(null);

    useClickOutside({
        elementRef: popOverRef,
        excludeElementRef: toggleButtonRef,
        onClickOutside: close,
    });

    return (
        <div
            ref={popOverRef}
            className={clsx(
                "absolute top-full z-20 transition-all",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
                className
            )}>
            {children}
        </div>
    );
};

export default PopOver;
