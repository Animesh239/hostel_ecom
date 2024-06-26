import React from "react";

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center left-auto -right-2 before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-xl`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center -left-5 right-auto before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-lg`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
