import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Select, { OptionProps, components } from "react-select";
import Container from "../components/Container";
import Section, { SectionCategoryTitle } from "../components/Section";
import { countries } from "../data/countries";

type OptionType = {
    id: string;
    value: string;
    label: string;
};

const Checkout = () => {
    return (
        <Section>
            <Container className="flex flex-col sm:flex-row">
                <div className="grow">
                    <div className="mb-2">
                        <SectionCategoryTitle className="mb-1">
                            Billing Address
                        </SectionCategoryTitle>
                        <BillingForm />
                    </div>
                    <div>
                        <SectionCategoryTitle>
                            <PaymentForm />
                        </SectionCategoryTitle>
                        {/* <PaymentForm /> */}
                    </div>
                </div>
                <div className="sm:w-1/3">Cart</div>
            </Container>
        </Section>
    );
};
export default Checkout;

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = (props: InputProps) => {
    const { ...otherProps } = props;

    return (
        <input
            {...otherProps}
            className="border-gray-100 grow border hover:border-primary text-1 max-w-lg h-3 px-1 shadow-soft rounded-full focus:outline-none  focus:shadow-primary-border focus:border-primary transition"
        />
    );
};

const BillingForm = () => {
    return (
        <form className="grid grid-cols-2 gap-1">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Last Name" type="text" />
            <Input placeholder="Username" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Address Line 1" type="text" />
            <Input placeholder="Address Line 2" type="text" />
            <SelectCountry />
        </form>
    );
};

const SelectCountry = () => {
    const countriesOptions: OptionType[] = countries.map((country) => {
        return { id: country.code, value: country.code, label: country.name };
    });

    return (
        <div>
            <label htmlFor="" className="font-medium">
                Country:
            </label>
            <Select
                placeholder="Select Country"
                className="mb-2"
                options={countriesOptions}
                classNames={{
                    container: () => "max-w-lg cursor-pointer mt-0.5",
                    control: ({ isFocused }) =>
                        clsx(
                            "!rounded-full px-0.5 h-3 bg-white shadow-soft !cursor-pointer",
                            !isFocused &&
                                "!border-transparent border-gray-200 hover:border-primary",
                            isFocused &&
                                "!border-primary !shadow-primary-border !border-1 outline-none"
                        ),
                    menu: () => "!rounded-1.5 overflow-hidden !border-[0]",
                    menuList: () => "!py-0",
                    option: ({ isSelected, isFocused }) =>
                        clsx(
                            "h-3 !pl-1 leading-[2rem] !cursor-pointer !rounded-full !border border-transparent",
                            isSelected && "!bg-primary/50",
                            isFocused && "!border-primary",
                            isFocused && !isSelected && "!bg-transparent"
                        ),
                    dropdownIndicator: ({ isFocused }) =>
                        clsx("!transition-all", isFocused && "rotate-180"),
                }}
                components={{ Option: OptionWithIcon }}
            />
        </div>
    );
};

const OptionWithIcon = (props: OptionProps<OptionType>) => {
    const { data } = props;
    const { label } = data;
    const { Option } = components;

    return (
        <Option {...props} className={clsx("h-3")}>
            <span>{label}</span>
        </Option>
    );
};
const PaymentForm = () => {
    return <div>PaymentForm</div>;
};
