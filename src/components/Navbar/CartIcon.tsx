import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { selectNoOfItemsInCart } from "../../store/slices/cartSlice";
import Button, { ButtonIcon } from "../Button";
import { DrawerProps } from "../Drawer";

type CartDrawerProps = {
    open?: DrawerProps["open"];
};

const CartIcon = (props: CartDrawerProps) => {
    const { open } = props;

    const noOfItemsInCart = useSelector((state: RootState) =>
        selectNoOfItemsInCart(state)
    );

    return (
        <>
            <Button
                colorScheme="white"
                onClick={open}
                className="relative hidden sm:flex !border-gray-100 hover:!border-primary border">
                <ButtonIcon icon={BsCart3} className="text-primary" />

                <span className="hidden sm:inline-block">Cart</span>

                {noOfItemsInCart != 0 && (
                    <NoOfItemsInCartBubble noOfItemsInCart={noOfItemsInCart} />
                )}
            </Button>
            <Button
                nature="circular"
                colorScheme="white"
                onClick={open}
                className="relative flex sm:hidden !border-gray-100 hover:!border-primary border">
                <ButtonIcon icon={BsCart3} className="text-primary" />

                {noOfItemsInCart != 0 && (
                    <NoOfItemsInCartBubble noOfItemsInCart={noOfItemsInCart} />
                )}
            </Button>
        </>
    );
};

type NoOfItemsInCartBubbleProps = {
    noOfItemsInCart: number;
};

const NoOfItemsInCartBubble = (props: NoOfItemsInCartBubbleProps) => {
    const { noOfItemsInCart } = props;

    return (
        <span className="font-medium h-1.5 w-1.5 absolute text-white bg-primary right-0 translate-x-1/2 top-2 flex items-center justify-center rounded-full">
            {noOfItemsInCart}
        </span>
    );
};

export default CartIcon;
