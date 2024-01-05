import Container from "../components/Container";
import Section, { SectionCategoryTitle } from "../components/Section";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { selectAllCartItems } from "../store/slices/cartSlice";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import { formatCurrency } from "../utils/currency";
import { selectAllProducts } from "../store/slices/productsSlice";
import Breadcrumb from "../components/Breadcrumb";
import { BillingForm, PaymentForm } from "./Checkout";

export const Checkout = () => {
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
