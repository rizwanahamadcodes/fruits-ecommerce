import clsx from "clsx";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const Card = (props: CardProps) => {
    const { children, className } = props;

    return (
        <div
            className={clsx(
                "bg-white overflow-hidden shadow rounded-0.5 border border-gray-100 p-1 flex flex-col gap-1 min-h-content",
                className
            )}>
            {children}
        </div>
    );
};

type CardTitleProps = {
    children: React.ReactNode;
};

export const CardTitle = (props: CardTitleProps) => {
    const { children } = props;

    return <h4>{children}</h4>;
};

type CardBodyProps = {
    children: React.ReactNode;
};

export const CardBody = (props: CardBodyProps) => {
    const { children } = props;

    return <div className="w-full">{children}</div>;
};

export default Card;
