const Container = (props: React.ComponentPropsWithoutRef<"div">) => {
    const { children, className, ...otherProps } = props;

    return (
        <div
            {...otherProps}
            className={`m-auto w-[86%] max-w-7xl ${className}`}>
            {children}
        </div>
    );
};

export default Container;
