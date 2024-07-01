import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
// import { useLanguage } from "../../hooks/useLanguage";
import ProductPrice from "../UI/ProductPrice";

const OrderSummaryBox = () => {
  // const { t, locale } = useLanguage();
  const totalAmount = useSelector(
    (state) => state.cart.totalAmount
  );
  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  return (
    <>
      {totalQuantity > 0 ? (
        <div className="flex-grow sticky bottom-0 left-0 right-0 md:top-36 shadow-lg bg-palette-card border-2 rounded-lg py-4 xl:py-12 px-4 xl:px-8 -mx-[1rem] md:mx-4 xl:mx-8 mt-2 w-[100vw] md:w-auto  md:min-w-[300px] md:max-w-[400px]">
          <h3 className="text-md sm:text-lg md:text-xl">{"orderSummary"}</h3>
          <div className="flex flex-col my-1 sm:my-2">
            <div className="flex items-center justify-between md:my-4">
              <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                {"totalQuantity"}
              </p>
              <p className="mr-1 font-bold">
                { totalQuantity }
              </p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between flex-grow md:my-4">
              <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                {"totalAmount"}
              </p>
              <ProductPrice price={totalAmount} />
            </div>
          </div>
          <Link href="/" legacyBehavior>
            <a className="block bg-palette-primary md:mt-8 py-3 rounded-lg text-palette-side text-center shadow-lg">
              {"order"}
            </a>
          </Link>
        </div>
      ) : (
        <p className="text-palette-mute text-lg mx-auto mt-12">
          {"cartIsEmpty"}
        </p>
      )}
    </>
  );
};

export default OrderSummaryBox;
