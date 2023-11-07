import { forwardRef } from "react";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
    children: React.ReactNode;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    (props, ref) => {
        const { children, ...otherProps } = props;

        return (
            <section
                ref={ref}
                className="py-2 scroll-mt-navHeight"
                {...otherProps}>
                {children}
            </section>
        );
    }
);

type SectionTitleProps = {
    children: React.ReactNode;
};
export const SectionTitle = (props: SectionTitleProps) => {
    const { children } = props;

    return (
        <h2 className="text-center font-dancing text-3 font-medium text-primary-600 mb-1">
            {children}
        </h2>
    );
};

export default Section;
