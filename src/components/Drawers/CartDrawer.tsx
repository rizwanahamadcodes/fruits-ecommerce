import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { selectAllCartItems } from "../../store/slices/cartSlice";
import { selectAllProducts } from "../../store/slices/productsSlice";
import { formatCurrency } from "../../utils/currency";
import BrandLogo from "../BrandLogo";
import Button from "../Button";
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
    const { isOpen, onClose, onOpen } = props;

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
            onOpen={onOpen}
            className="bg-gray-50"
            onClose={onClose}>
            <DrawerHead className="pl-1 py-1 pr-[7vw] flex justify-between items-center">
                <BrandLogo />
                <CloseButton onClick={onClose} />
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
                <div className="flex gap-1">
                    <Button className="w-full" variant="outline">
                        View Cart
                    </Button>
                </div>
                <Button>Checkout</Button>
            </DrawerFoot>
        </Drawer>
    );
};

export default CartDrawer;