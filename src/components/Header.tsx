import { useDispatch, useSelector } from "react-redux";
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
import {
    CartItem,
    clearCart,
    removeItem,
    selectAllCartItems,
} from "../store/slices/cartSlice";
import {
    selectAllProducts,
    selectProductById,
} from "../store/slices/productsSlice";
import Counter from "./Counter";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const { isOpen, onClose, onOpen } = useDrawer(false);
    const cartItems = useSelector((state: RootState) =>
        selectAllCartItems(state)
    );

    const products = useSelector((state: RootState) =>
        selectAllProducts(state)
    );

    const dispatch = useDispatch();

    return (
        <>
            <Navbar onOpen={onOpen} />
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
                        <CartItem item={item}></CartItem>
                    ))}
                </DrawerBody>
                <DrawerFoot className="flex flex-col p-1 gap-1">
                    {cartItems.length != 0 && (
                        <div className="flex justify-between font-medium">
                            <p className="text-gray-700">Total in Cart:</p>
                            <p className="text-gray-900">
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
                        <Button
                            colorScheme="gray-500"
                            className="w-full"
                            variant="outline"
                            onClick={() => {
                                dispatch(clearCart());
                            }}>
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
    const dispatch = useDispatch();

    return (
        <div className="rounded relative bg-white shadow-soft flex p-1">
            <img
                src={product?.imageUrl}
                alt={product?.name}
                className=" h-6 self-center w-6 me-1 object-contain"
            />
            <div className="font-medium flex gap-0.5 grow flex-col">
                <p className="text-gray-900">{product?.name}</p>
                <p>
                    <span className="text-primary">Rs. {product?.price}</span>
                    <span className="text-gray-700 text-0.75">
                        {" "}
                        /{product?.unitOfSale}
                    </span>
                </p>
                <Counter
                    productId={item.productId}
                    buttonSize="small"></Counter>
                {product && (
                    <p className="mt-auto">
                        <span className="text-gray-600">Total: </span>
                        <span className="text-gray-900">
                            Rs. {(product?.price * item.quantity).toFixed(2)}
                        </span>
                    </p>
                )}
            </div>
            <button
                className="absolute right-1 top-1 text-gray-300 active:text-[#cc0000]"
                onClick={() => {
                    dispatch(removeItem(item.productId));
                }}>
                <FaTimes />
            </button>
        </div>
    );
};

export default Header;
