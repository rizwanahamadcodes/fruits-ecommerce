type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
    children: React.ReactNode;
};
const Section = (props: SectionProps) => {
    const { children, ...otherProps } = props;

    return (
        <section className="p-2 scroll-mt-navHeight" {...otherProps}>
            {children}
        </section>
    );
};

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
