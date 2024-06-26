import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {cartItems.length
          ? cartItems.map((cartItem) => {
              return (
                <CartItem key={cartItem.slug.current} product={cartItem} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CartList;
