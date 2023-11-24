import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconType } from "react-icons";

export const button = cva(
    [
        "font-medium flex justify-center items-center gap-0.75 focus:shadow-primary-border focus:outline-none active:scale-95 transition",
    ],
    {
        variants: {
            rounding: {
                full: "rounded-full",
                none: "",
            },
            variant: {
                solid: "shadow-soft",
                outline: " shadow-soft border-2 ",
                ghost: "",
            },
            colorScheme: {
                primary: "",
                gray: "",
                "gray-500": "",
                white: "",
            },
            size: {
                medium: "h-3 px-1",
                small: "h-2 px-0.5",
            },
            nature: {
                normal: "",
                circular: "!px-0",
            },
        },

        compoundVariants: [
            {
                variant: "solid",
                colorScheme: "primary",
                className:
                    "bg-gradient-to-r from-primary to-primary-400 hover:to-primary text-white hover:text-white",
            },
            {
                variant: "solid",
                colorScheme: "gray",
                className:
                    "bg-gradient-to-r from-gray-900 to-gray-800 hover:to-gray-900",
            },
            {
                variant: "solid",
                colorScheme: "gray-500",
                className:
                    "bg-gradient-to-r from-gray-500 to-gray-400 hover:to-gray-500",
            },
            {
                variant: "solid",
                colorScheme: "white",
                className:
                    "bg-white text-gray-900 border border-transparent hover:border-primary",
            },
            {
                variant: "outline",
                colorScheme: "primary",
                className: "text-primary border-primary",
            },
            {
                variant: "outline",
                colorScheme: "gray",
                className: "text-gray-900 border-gray-900",
            },
            {
                variant: "outline",
                colorScheme: "gray-500",
                className: "text-gray-500 border-gray-500",
            },
            {
                size: "medium",
                nature: "circular",
                className: "w-3",
            },
            {
                size: "small",
                nature: "circular",
                className: "w-2",
            },
        ],

        defaultVariants: {
            rounding: "full",
            variant: "solid",
            colorScheme: "primary",
            size: "medium",
            nature: "normal",
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const {
        children,
        rounding,
        variant,
        nature,
        className,
        colorScheme,
        size,
        ...otherProps
    } = props;

    return (
        <button
            className={clsx(
                button({ rounding, variant, colorScheme, size, nature }),
                className
            )}
            {...otherProps}>
            {children}
        </button>
    );
};

type ButtonIconProps = React.ComponentPropsWithoutRef<IconType> & {
    icon: IconType;
    className?: string;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return <Icon className={clsx("text-1.25", className)} {...otherProps} />;
};

export default Button;
