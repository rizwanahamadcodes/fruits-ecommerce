type CloseButtonProps = React.ComponentPropsWithoutRef<"div">;

const CloseButton = (props: CloseButtonProps) => {
    const { onClick } = props;

    const barClasses =
        "absolute top-[50%] h-[3px] w-full translate-y-[-50%] rounded-full bg-primary";
    return (
        <div
            className="relative cursor-pointer flex h-1.75 w-1.75 flex-col justify-between"
            onClick={onClick}>
            <span className={`${barClasses}, rotate-[45deg]`}></span>
            <span className={`${barClasses}, rotate-[-45deg]`}></span>
        </div>
    );
};

export default CloseButton;
