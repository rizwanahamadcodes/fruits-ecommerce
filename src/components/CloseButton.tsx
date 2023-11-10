import cn from "../utils/cn";

type CloseButtonProps = React.ComponentPropsWithoutRef<"div">;

const CloseButton = (props: CloseButtonProps) => {
    const { className, onClick } = props;

    const barClasses =
        "absolute top-[50%] h-[3px] w-full translate-y-[-50%] rotate-[45deg] rounded-full bg-primary";
    return (
        <div
            className={cn(
                "relative cursor-pointer flex h-2 w-2 flex-col justify-between",
                className
            )}
            onClick={onClick}>
            <span className={barClasses}></span>
            <span className={cn(barClasses, "rotate-[-45deg]")}></span>
        </div>
    );
};

export default CloseButton;
