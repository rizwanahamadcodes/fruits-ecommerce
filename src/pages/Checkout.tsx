import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Select, { OptionProps, components } from "react-select";
import Container from "../components/Container";
import Section, { SectionCategoryTitle } from "../components/Section";
import { countries } from "../data/countries";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { selectAllCartItems } from "../store/slices/cartSlice";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import { formatCurrency } from "../utils/currency";
import { selectAllProducts } from "../store/slices/productsSlice";
import { routes } from "../routes/pathConstants";
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from "react-router-dom";

type OptionType = {
    id: string;
    value: string;
    label: string;
};

const Checkout = () => {
    const location = useLocation();
    const cartItems = useSelector((state: RootState) =>
        selectAllCartItems(state)
    );

    const products = useSelector((state: RootState) =>
        selectAllProducts(state)
    );

    const totalInCart = cartItems.reduce((accumulator, currentValue) => {
        const product = products.find(
            (product) => product.id === currentValue.productId
        );
        if (product) {
            return accumulator + product.price * currentValue.quantity;
        }
        return accumulator;
    }, 0);
    return (
        <>
            <Breadcrumb routes={routes} pathname={location.pathname} />
            <div className="h-breadcrumbHeight"></div>
            <Section>
                <div className="h-navHeight"></div>
                <Container className="flex flex-col sm:flex-row gap-2">
                    <div className="grow">
                        <div className="">
                            <SectionCategoryTitle className="mb-1">
                                Billing Address
                            </SectionCategoryTitle>
                            <BillingForm />
                        </div>
                        <div className="h-[1px] bg-gray-300 my-2"></div>
                        <div>
                            <SectionCategoryTitle className="mb-1">
                                Payment
                            </SectionCategoryTitle>
                            <PaymentForm />
                        </div>
                    </div>

                    {/* Cart Items shown here */}
                    <div className="sm:w-1/3 max-h-[500px] sm:max-h-[70vh] flex flex-col">
                        <SectionCategoryTitle className="mb-1">
                            Your Cart
                        </SectionCategoryTitle>
                        <div className="flex overflow-y-auto flex-col gap-1">
                            {cartItems.map((item) => (
                                <CartItemCard
                                    key={item.productId}
                                    item={item}></CartItemCard>
                            ))}
                        </div>
                        {cartItems.length != 0 && (
                            <div className="flex justify-between font-medium mt-1">
                                <p className="text-gray-700 font-medium">
                                    Total in Cart:
                                </p>
                                <p className="text-gray-900  font-medium">
                                    {formatCurrency(totalInCart)}
                                </p>
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
        </>
    );
};
export default Checkout;

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = (props: InputProps) => {
    const { ...otherProps } = props;

    return (
        <input
            {...otherProps}
            className="border-gray-200 grow border hover:border-primary text-1 max-w-lg h-3 px-1 rounded-1 focus:outline-none  focus:shadow-primary-border focus:border-primary transition"
        />
    );
};

const BillingForm = () => {
    return (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-0.75">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Last Name" type="text" />
            <Input placeholder="Username" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Address Line 1" type="text" />
            <Input placeholder="Address Line 2" type="text" />
            <SelectCountry className="" />
            <div className="relative flex gap-1 cols-span-1 sm:col-span-2">
                <input
                    id="agreedToTerms"
                    type="checkbox"
                    className="peer cursor-pointer relative appearance-none shrink-0 w-1.25 h-1.25 border border-gray-200 bg-white
                    focus:outline-none focus:shadow-primary-border focus:border-primary checked:border-primary
                    disabled:border-gray-400 disabled:bg-gray-400"
                />
                <svg
                    className="absolute w-1 h-1 top-[0.125rem] left-[0.125rem] pointer-events-none hidden peer-checked:block stroke-primary outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <label
                    htmlFor="agreedToTerms"
                    className="text-gray-800 cursor-pointer font-medium">
                    Agree to terms and policeis policies
                </label>
            </div>
        </form>
    );
};

type SelectCountryProps = {
    className: string;
};

const SelectCountry = (props: SelectCountryProps) => {
    const { className } = props;

    const countriesOptions: OptionType[] = countries.map((country) => {
        return { id: country.code, value: country.code, label: country.name };
    });

    return (
        <div className={className}>
            <label htmlFor="" className="font-medium text-gray-800">
                Country:
            </label>
            <Select
                placeholder="Select Country"
                className=""
                options={countriesOptions}
                classNames={{
                    container: () => "max-w-lg cursor-pointer mt-0.25",
                    control: ({ isFocused }) =>
                        clsx(
                            "!rounded-1 !border-gray-200 !border px-0.5 h-3 bg-white !cursor-pointer",
                            !isFocused &&
                                "!border-transparent border-gray-200 hover:border-primary",
                            isFocused &&
                                "!border-primary !shadow-primary-border !border-1 outline-none"
                        ),
                    menu: () => "!rounded-1 overflow-hidden !border-[0]",
                    menuList: () => "!py-0",
                    option: ({ isSelected, isFocused }) =>
                        clsx(
                            "h-3 !pl-1 leading-[2rem] !cursor-pointer !rounded-1 !border border-transparent mb-0.25 last:mb-0",
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
    return (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-0.75">
            <div className="flex gap-1.5 col-span-1 sm:col-span-2">
                <span className="flex gap-0.5">
                    <input
                        name="paymentMethod"
                        id="paymentMethod1"
                        type="radio"
                        className="relative cursor-pointer flex items-center justify-center appearance-none h-1.25 w-1.25 bg-white rounded-full border-gray-200 border checked:border-primary checked:after:content-[''] checked:after:block checked:after:h-0.5 checked:after:w-0.5 checked:after:bg-primary checked:after:rounded-full focus:shadow-primary-border                     focus:outline-none"
                    />
                    <label
                        htmlFor="paymentMethod1"
                        className="text-gray-800 font-medium cursor-pointer">
                        Debit Card
                    </label>
                </span>
                <span className="flex gap-0.5">
                    <input
                        name="paymentMethod"
                        id="paymentMethod2"
                        type="radio"
                        className="relative cursor-pointer flex items-center justify-center appearance-none h-1.25 w-1.25 bg-white rounded-full border-gray-200 border checked:border-primary checked:after:content-[''] checked:after:block checked:after:h-0.5 checked:after:w-0.5 checked:after:bg-primary checked:after:rounded-full focus:shadow-primary-border                     focus:outline-none"
                    />
                    <label
                        htmlFor="paymentMethod2"
                        className="text-gray-800 font-medium cursor-pointer">
                        Credit Card
                    </label>
                </span>
            </div>
            <Input type="text" placeholder="Name on the card" />
            <Input type="text" placeholder="Card Number" />
            <Input type="text" placeholder="Expiration" />
            <Input type="text" placeholder="CVV" />
        </form>
    );
};
