import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    selectCartItemById,
} from "../store/slices/cartSlice";
import Button from "./Button";
import { RootState } from "../store/rootReducer";
import cn from "../utils/cn";

type CounterProps = React.ComponentPropsWithoutRef<"div"> & {
    productId: number;
    className?: string;
    buttonSize?: "medium" | "small";
};

const Counter = (props: CounterProps) => {
    const {
        productId,
        className,
        buttonSize = "medium",
        ...otherProps
    } = props;

    const dispatch = useDispatch();
    const itemInCart = useSelector((state: RootState) =>
        selectCartItemById(state, productId)
    );

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    return (
        <div className={cn("flex justify-between", className)} {...otherProps}>
            <Button
                size={buttonSize}
                className="rounded-r-0 z-10"
                onClick={() => {
                    dispatch(decreaseQuantity(productId));
                }}>
                <AiOutlineMinus className="text-1.25" />
            </Button>
            {/* <input
                type="number"
                className="min-w-0 w-auto grow border-y border-y-gray-100 h-3 focus:outline-none text-center appearance-none"
                value={itemInCart ? itemInCart.quantity : 0}
                onChange={(e) => {
                    handleQuantityChange(e);
                }}
            /> */}
            <p className="bg-white grow border-y border-y-gray-100 flex items-center justify-center">
                {itemInCart ? itemInCart.quantity : 0}
            </p>
            <Button
                size={buttonSize}
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
