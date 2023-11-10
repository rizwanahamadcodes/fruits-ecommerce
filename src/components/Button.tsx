import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";

export const button = cva(
    [
        "font-medium h-3 rounded-full flex justify-center items-center gap-0.75 px-1 shadow-soft focus:shadow-primary-border focus:outline-none active:scale-95",
    ],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-2 ",
            },
            colorScheme: {
                primary: "text-white",
                gray: "text-white",
            },
        },

        compoundVariants: [
            {
                variant: "solid",
                colorScheme: "primary",
                className:
                    " bg-gradient-to-r from-primary to-primary-400 hover:to-primary",
            },
            {
                variant: "solid",
                colorScheme: "gray",
                className:
                    "bg-gradient-to-r from-gray-900 to-gray-800 hover:to-gray-900",
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
        ],

        defaultVariants: {
            variant: "solid",
            colorScheme: "primary",
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const { children, className, variant, colorScheme, ...otherProps } = props;

    return (
        <button
            className={cn(button({ variant, colorScheme }), className)}
            {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
