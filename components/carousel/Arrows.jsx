import React from "react";

export const NextArrow = ({
  className,
  style,
  onClick,
  to,
}) => {
  return (
    <div
      className={`${className} z-10 w-12 md:w-16 lg:w-28 h-full pt-10 !flex items-center justify-center left-auto right-0 hover:bg-palette-card/10 drop-shadow-lg before:content-['']`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={to}
    />
  );
};
export const PrevArrow = ({
  className,
  style,
  onClick,
  to,
}) => {
  return (
    <div
      className={`${className} z-10 w-12 md:w-16 lg:w-28 h-full pt-10 !flex items-center justify-center left-0 right-auto before:text-[20px] lg:before:text-[30px] before:content-[''] hover:bg-palette-card/10 drop-shadow-lg`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={to}
    />
  );
};
