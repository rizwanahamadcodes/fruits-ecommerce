import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../store/slices/cartSlice";
import Button from "./Button";
import { RootState } from "../store/rootReducer";

type CounterProps = React.ComponentPropsWithoutRef<"div"> & {
    productId: number;
};

const Counter = (props: CounterProps) => {
    const { productId, ...otherProps } = props;

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const itemInCart = cartItems.find((item) => item.productId === productId);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex w-full justify-between" {...otherProps}>
            <Button
                className="rounded-r-0 z-10"
                onClick={() => {
                    dispatch(decreaseQuantity(productId));
                }}>
                <AiOutlineMinus className="text-1.25" />
            </Button>
            <input
                type="number"
                className="min-w-0 border-y border-y-gray-100 h-3 focus:outline-none text-center appearance-none"
                value={itemInCart ? itemInCart.quantity : 0}
                onChange={(e) => {
                    handleQuantityChange(e);
                }}
            />
            <Button
                className="rounded-l-0"
                onClick={() => {
                    dispatch(increaseQuantity(productId));
                }}>
                <AiOutlinePlus className="text-1.25" />
            </Button>
        </div>
    );
};

export default Counter;
