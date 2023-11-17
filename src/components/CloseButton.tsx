import clsx from "clsx";

type CloseButtonProps = React.ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "md";
    colorScheme?: "primary" | "gray-300";
};

const CloseButton = (props: CloseButtonProps) => {
    const { onClick, size = "md", colorScheme = "primary" } = props;
    const sizeMap = {
        sm: "h-1.25 w-1.25",
        md: "h-1.75 w-1.75",
    };
    const colorSchemeMap = {
        primary: "bg-primary group-hover:bg-primary-600",
        "gray-300": "bg-gray-300 group-hover:bg-gray-400",
    };

    const barClasses = clsx(
        "absolute top-[50%] h-[2px] w-full translate-y-[-50%] rounded-full",
        colorSchemeMap[colorScheme]
    );
    return (
        <div
            className={clsx(
                "relative cursor-pointer flex flex-col justify-between group",
                sizeMap[size]
            )}
            onClick={onClick}>
            <span className={clsx(barClasses, "rotate-[45deg]")}></span>
            <span className={clsx(barClasses, "rotate-[-45deg]")}></span>
        </div>
    );
};

export default CloseButton;
