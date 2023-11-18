import { useDispatch, useSelector } from "react-redux";
import { CartItem, removeItem } from "../../store/slices/cartSlice";
import { RootState } from "../../store/rootReducer";
import { selectProductById } from "../../store/slices/productsSlice";
import {
    ProductImage,
    ProductName,
    ProductPrice,
    ProductWrapperWithLink,
} from "../ProductCard/ProductCard";
import pathConstants from "../../routes/pathConstants";
import Counter from "../Counter";
import { formatCurrency } from "../../utils/currency";
import CloseButton from "../CloseButton";

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
                    className="flex relative items-center gap-1">
                    <ProductImage
                        src={product.imageUrl}
                        className="w-6 h-6 object-contain"
                    />
                    <div className="z-[1] flex flex-col gap-0.75 grow">
                        <div className="flex flex-col gap-0.5">
                            <ProductName size="sm">{product.name}</ProductName>
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
                                {formatCurrency(product.price * item.quantity)}
                            </span>
                        </p>
                    </div>

                    <span className="absolute top-1 z-[1] right-1">
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

export default CartItemCard;
