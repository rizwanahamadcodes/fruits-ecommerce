import clsx from "clsx";

type HamburgerProps = React.ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "md" | "lg";
    colorScheme?: "primary" | "gray-300";
};

const Hamburger = (props: HamburgerProps) => {
    const { onClick, size = "lg", colorScheme = "primary" } = props;
    const sizeMap = {
        sm: " w-1",
        md: " w-1.25",
        lg: "w-1.75",
    };
    const colorSchemeMap = {
        primary: "bg-primary group-hover/hamburger:bg-primary-800",
        "gray-300": "bg-gray-300 group-hover/hamburger:bg-gray-500",
    };

    const barClasses = clsx(
        "h-[2px] w-full rounded-full",
        colorSchemeMap[colorScheme]
    );
    return (
        <div
            className={clsx(
                "relative cursor-pointer gap-[6px] flex flex-col group/hamburger",
                sizeMap[size]
            )}
            onClick={onClick}>
            <span className={clsx(barClasses)}></span>
            <span className={clsx(barClasses)}></span>
            <span className={clsx(barClasses)}></span>
        </div>
    );
};

export default Hamburger;
