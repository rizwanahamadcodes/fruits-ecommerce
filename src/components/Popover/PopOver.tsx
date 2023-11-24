import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import clsx from "clsx";

type PopOverProps = {
    children: React.ReactNode;
    isOpen: boolean;
    close: () => void;
    toggleButtonRef: React.MutableRefObject<null>;
};

const PopOver = (props: PopOverProps) => {
    const { isOpen, close, toggleButtonRef, children } = props;

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
                "p-1 rounded-full border absolute",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
            {children}
        </div>
    );
};

export default PopOver;
