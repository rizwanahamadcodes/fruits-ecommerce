import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { RootState } from "../../store/rootReducer";
import { selectAllCartItems } from "../../store/slices/cartSlice";
import { selectAllProducts } from "../../store/slices/productsSlice";
import { formatCurrency } from "../../utils/currency";
import BrandLogo from "../BrandLogo";
import { button } from "../Button";
import CartItemCard from "../CartItemCard/CartItemCard";
import CloseButton from "../CloseButton";
import Drawer, {
    DrawerBody,
    DrawerFoot,
    DrawerHead,
    DrawerProps,
} from "../Drawer";

type CartDrawerProps = Omit<DrawerProps, "children">;

const CartDrawer = (props: CartDrawerProps) => {
    const { isOpen, close, open } = props;

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
        <Drawer
            isOpen={isOpen}
            open={open}
            className="bg-gray-50"
            close={close}>
            <DrawerHead className="pl-1 py-1 pr-[7vw] flex justify-between items-center border-b border-b-gray-200">
                <BrandLogo />
                <CloseButton onClick={close} />
            </DrawerHead>
            <DrawerBody className="flex overflow-y-auto flex-col p-1 gap-1">
                {cartItems.map((item) => (
                    <CartItemCard
                        key={item.productId}
                        item={item}></CartItemCard>
                ))}
            </DrawerBody>
            <DrawerFoot className="flex flex-col p-1 gap-1">
                {cartItems.length != 0 && (
                    <div className="flex justify-between font-medium">
                        <p className="text-gray-700 font-medium">
                            Total in Cart:
                        </p>
                        <p className="text-gray-900  font-medium">
                            {formatCurrency(totalInCart)}
                        </p>
                    </div>
                )}
                <Link to={pathConstants.CHECKOUT.path} className={button()}>
                    Checkout
                </Link>
            </DrawerFoot>
        </Drawer>
    );
};

export default CartDrawer;
