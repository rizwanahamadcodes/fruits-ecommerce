import cn from "../utils/cn";

const Container = (props: React.ComponentPropsWithoutRef<"div">) => {
    const { children, className, ...otherProps } = props;

    return (
        <div
            {...otherProps}
            className={cn("m-auto w-[86%] max-w-7xl", className)}>
            {children}
        </div>
    );
};

export default Container;
