import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "@/store/cartUI-slice";
import { inrCurrencyFormat } from "../../utilities/currencyFormat";
import CartItem from "./CartItem";

const CartBox = () => {
  const dispatch = useDispatch();

  const cartItemQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  const cartTotalAmount = useSelector(
    (state) => state.cart.totalAmount
  );

  const cartItems = useSelector((state) => state.cart.items);

  const userInfo = useSelector(
    (state) => state.userInfo.userInformation
  );

  function onCloseCartBoxHandler() {
    dispatch(cartUiActions.toggleCartBox(false));
  }

  return (
    <div className="hidden lg:flex flex-col absolute top-full right-0 min-h-[15rem] max-h-[25rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg overflow-auto">
      <div className="relative">
        <header className="flex items-center justify-between sticky top-0 left-0 right-0 text-sm font-normal z-10 bg-palette-card p-2">
          <span>
            {cartItemQuantity}{" "}
            {"Product"}
          </span>
          <span onClick={onCloseCartBoxHandler}>
            <Link href="/cart" legacyBehavior>
              <a className="text-cyan-500">{"See Cart"}</a>
            </Link>
          </span>
        </header>
        <hr className="mt-2" />
        <div>
          <>
            {cartItems.length ? (
              cartItems.map((item) => {
                return <CartItem key={item.slug.current} product={item} />;
              })
            ) : (
              <p className="mt-20 text-center text-palette-mute font-normal">
                {"Cart Is Empty"}
              </p>
            )}
          </>
        </div>
        {cartItems.length ? (
          <div className="flex items-center sticky bottom-0 left-0 right-0 bg-palette-card font-normal py-3 px-4">
            <div className="flex flex-col flex-grow mr-2 ">
              <p className="text-sm">{"Payable Amount"}</p>
              <p className="self-end text-sm font-bold">
                {
                   `₹ ${inrCurrencyFormat(cartTotalAmount)}`
                 }
              </p>
            </div>
            {!userInfo ? (
              <div onClick={onCloseCartBoxHandler}>
                <Link href={"/login"} legacyBehavior>
                  <a className="py-2 px-3 bg-palette-primary text-[12px] text-palette-side rounded-lg">
                    {"Login And Order"}
                  </a>
                </Link>
              </div>
            ) : (
              <div onClick={onCloseCartBoxHandler}>
                <Link href={"/cart"} legacyBehavior>
                  <a className="py-2 px-10 bg-palette-primary text-[12px] text-palette-side rounded-lg">
                    {"Order"}
                  </a>
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartBox;
