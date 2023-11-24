import { useEffect } from "react";

type useClickOutsideProps = {
    elementRef?: React.MutableRefObject<null>;
    excludeElementRef?: React.MutableRefObject<null>;
    onClickOutside?: () => void;
};

export const useClickOutside = (props: useClickOutsideProps) => {
    const { elementRef, excludeElementRef, onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                elementRef?.current &&
                !(elementRef.current as HTMLElement).contains(e.target as Node)
            ) {
                if (
                    excludeElementRef?.current &&
                    !(excludeElementRef.current as HTMLElement).contains(
                        e.target as Node
                    )
                ) {
                    onClickOutside && onClickOutside();
                }
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onClickOutside, excludeElementRef, elementRef]);
};
