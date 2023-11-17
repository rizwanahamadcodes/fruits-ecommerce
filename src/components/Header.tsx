import { useDispatch, useSelector } from "react-redux";
import pathConstants from "../routes/pathConstants";
import { RootState } from "../store/rootReducer";
import {
    CartItem,
    removeItem,
    selectAllCartItems,
} from "../store/slices/cartSlice";
import {
    selectAllProducts,
    selectProductById,
} from "../store/slices/productsSlice";
import { formatCurrency } from "../utils/currency";
import BrandLogo from "./BrandLogo";
import Button from "./Button";
import CloseButton from "./CloseButton";
import Counter from "./Counter";
import Drawer, {
    DrawerBody,
    DrawerFoot,
    DrawerHead,
    useDrawer,
} from "./Drawer";
import Navbar from "./Navbar";
import {
    ProductImage,
    ProductName,
    ProductPrice,
    ProductWrapperWithLink,
} from "./ProductCard/ProductCard";

const Header = () => {
    const { isOpen, onClose, onOpen } = useDrawer(false);
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
        </>
    );
};

type CartItemCardProps = {
    item: CartItem;
};

const CartItemCard = (props: CartItemCardProps) => {
    const { item } = props;
    const product = useSelector((state: RootState) =>
        selectProductById(state, item.productId)
    );
    const dispatch = useDispatch();

    return (
        <>
            {product && (
                <ProductWrapperWithLink
                    to={`${pathConstants.PRODUCTS}/${product.id}`}
                    className="relative">
                    <div className="flex items-center gap-1">
                        <div className="w-7">
                            <ProductImage src={product.imageUrl} />
                        </div>
                        <div className="z-[1] flex flex-col gap-0.5">
                            <div className="flex flex-col gap-0.25">
                                <ProductName size="sm">
                                    {product.name}
                                </ProductName>
                                <ProductPrice
                                    size="sm"
                                    unitOfSale={product.unitOfSale}
                                    price={product.price}
                                />
                            </div>
                            <Counter
                                productId={item.productId}
                                buttonSize="small"></Counter>
                            <p className="mt-auto font-medium">
                                Total:{" "}
                                <span className="text-gray-900">
                                    {formatCurrency(
                                        product.price * item.quantity
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                    <span className="absolute top-1 right-1">
                        <CloseButton
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                dispatch(removeItem(item.productId));
                            }}
                            size={"sm"}
                            colorScheme={"gray-300"}
                        />
                    </span>
                </ProductWrapperWithLink>
            )}
        </>
    );
};

export default Header;
