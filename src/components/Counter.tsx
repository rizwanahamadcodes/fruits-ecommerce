import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
    decreaseQuantity,
    increaseQuantity,
    selectCartItemById,
} from "../store/slices/cartSlice";
import { selectProductById } from "../store/slices/productsSlice";
import Button from "./Button";
import clsx from "clsx";

type CounterProps = React.ComponentPropsWithoutRef<"div"> & {
    formattedInfo?: boolean;
    productId: number;
    className?: string;
    buttonSize?: "medium" | "small";
};

const Counter = (props: CounterProps) => {
    const {
        productId,
        className,
        buttonSize = "medium",
        formattedInfo = false,
        ...otherProps
    } = props;

    const dispatch = useDispatch();
    const itemInCart = useSelector((state: RootState) =>
        selectCartItemById(state, productId)
    );
    const product = useSelector((state: RootState) =>
        selectProductById(state, productId)
    );

    const formattedUnit = (unitOfSale: string, itemQuantity: number) => {
        return itemQuantity > 1 ? unitOfSale + "s" : unitOfSale;
    };

    return (
        <div className={clsx("flex", className)} {...otherProps}>
            <Button
                size={buttonSize}
                className="rounded-r-0 z-10"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    dispatch(decreaseQuantity(productId));
                }}>
                <AiOutlineMinus className="text-1.25" />
            </Button>
            <p className="bg-white overflow-hidden whitespace-nowrap grow px-0.5 border-y border-y-gray-100 flex items-center justify-center text-gray-900 font-medium">
                {itemInCart
                    ? !formattedInfo
                        ? itemInCart.quantity
                        : `${itemInCart.quantity} ${formattedUnit(
                              product?.unitOfSale as string,
                              itemInCart.quantity
                          )} in cart`
                    : 0}
            </p>
            <Button
                size={buttonSize}
                className="rounded-l-0"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    dispatch(increaseQuantity(productId));
                }}>
                <AiOutlinePlus className="text-1.25" />
            </Button>
        </div>
    );
};

export default Counter;
