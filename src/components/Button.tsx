import React from "react";
import { IconType } from "react-icons";
import cn from "../utils/cn";

type ButtonProps = React.ComponentPropsWithoutRef<"a"> & {
    children: React.ReactNode;
    leftIcon?: IconType;
    rightIcon?: IconType;
    className?: string;
};

const Button = (props: ButtonProps) => {
    const {
        children,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        className,
    } = props;
    return (
        <a
            href="#products-section"
            className={cn(
                "flex focus:outline-none focus:shadow-primary-border h-3 px-1 bg-gradient-to-r from-primary to-primary-400 text-white items-center gap-0.5 rounded-full shadow-soft hover:to-primary group",
                className
            )}>
            {LeftIcon && <LeftIcon />}
            {children}
            {RightIcon && <RightIcon />}
        </a>
    );
};

export default Button;
