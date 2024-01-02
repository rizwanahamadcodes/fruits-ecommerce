import clsx from "clsx";
import { forwardRef } from "react";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
    children: React.ReactNode;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    (props, ref) => {
        const { children, className, ...otherProps } = props;

        return (
            <section
                ref={ref}
                className={clsx("py-2 scroll-mt-navHeight", className)}
                {...otherProps}>
                {children}
            </section>
        );
    }
);

type SectionTitleProps = {
    children: React.ReactNode;
    className?: string;
};
export const SectionTitle = (props: SectionTitleProps) => {
    const { className, children } = props;

    return (
        <h2
            className={clsx(
                "text-2.25 font-normal text-primary-600",
                className
            )}>
            {children}
        </h2>
    );
};
type SectionCategoryTitleProps = {
    children: React.ReactNode;
    className?: string;
};
export const SectionCategoryTitle = (props: SectionCategoryTitleProps) => {
    const { className, children } = props;

    return (
        <h3 className={clsx("text-1.25 font-medium text-gray-800", className)}>
            {children}
        </h3>
    );
};

export default Section;
