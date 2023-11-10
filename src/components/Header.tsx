import { useSelector } from "react-redux";
import BrandLogo from "./BrandLogo";
import Button from "./Button";
import CloseButton from "./CloseButton";
import Drawer, {
    DrawerBody,
    DrawerFoot,
    DrawerHead,
    useDrawer,
} from "./Drawer";
import Navbar from "./Navbar";
import { RootState } from "../store/rootReducer";
import { CartItem, selectAllCartItems } from "../store/slices/cartSlice";
import {
    selectAllProducts,
    selectProductById,
} from "../store/slices/productsSlice";
import Counter from "./Counter";

const Header = () => {
    const { isOpen, onClose, onOpen } = useDrawer(false);
    const cartItems = useSelector((state: RootState) =>
        selectAllCartItems(state)
    );

    const products = useSelector((state: RootState) =>
        selectAllProducts(state)
    );

    return (
        <>
            <Navbar onOpen={onOpen} />
            <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <DrawerHead className="pl-1 h-navHeight pr-[7vw] flex justify-between items-center">
                    <BrandLogo />
                    <CloseButton onClick={onClose} />
                </DrawerHead>
                <DrawerBody className="flex overflow-y-scroll flex-col p-1 gap-1">
                    {cartItems.map((item) => (
                        <CartItem item={item}></CartItem>
                    ))}
                </DrawerBody>
                <DrawerFoot className="flex flex-col p-1 gap-1">
                    {cartItems.length != 0 && (
                        <div className="flex justify-between font-medium">
                            <p>Subtotal:</p>
                            <p>
                                Rs.{" "}
                                {cartItems
                                    .reduce((accumulator, currentValue) => {
                                        const product = products.find(
                                            (product) =>
                                                product.id ===
                                                currentValue.productId
                                        );
                                        if (product) {
                                            return (
                                                accumulator +
                                                product.price *
                                                    currentValue.quantity
                                            );
                                        }
                                        return accumulator;
                                    }, 0)
                                    .toFixed(2)}
                            </p>
                        </div>
                    )}
                    <div className="flex gap-1">
                        <Button className="w-full" variant="outline">
                            View Cart
                        </Button>
                        <Button className="w-full" variant="outline">
                            Clear Cart
                        </Button>
                    </div>
                    <Button>Checkout</Button>
                </DrawerFoot>
            </Drawer>
        </>
    );
};

type CartItemProps = {
    item: CartItem;
};

const CartItem = (props: CartItemProps) => {
    const { item } = props;
    const product = useSelector((state: RootState) =>
        selectProductById(state, item.productId)
    );
    return (
        <div className="rounded relative shadow-soft flex p-1">
            <img
                src={product?.imageUrl}
                alt={product?.name}
                className=" h-7 w-7 me-1 object-contain"
            />
            <div className="font-medium flex gap-1 grow flex-col">
                <p>{product?.name}</p>
                <Counter
                    productId={item.productId}
                    buttonSize="small"></Counter>
                {product && (
                    <p className="mt-auto text-gray-600">
                        Rs. {(product?.price * item.quantity).toFixed(2)}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Header;
