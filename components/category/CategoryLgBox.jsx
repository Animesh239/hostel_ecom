import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { useLanguage } from "../../hooks/useLanguage";

const CategoryLgBox = ({
  name,
  title,
  description,
  styles,
  href,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  // const { t } = useLanguage();

  return (
    <div
      key={title}
      className={`flex justify-around items-center rounded-md shadow-lg overflow-hidden`}
      style={styles}
    >
      <div className="mx-[0.5rem]">
        <h3 className="text-xl 2xl:text-2xl font-[500]">{`${title}`}</h3>
        <p className="text-sm mt-2">{`${description}`}</p>
        <Link href={href} legacyBehavior>
          <a className="inline-block py-3 px-2 2xl:px-4 mt-4 bg-palette-primary hover:scale-105 transition-transform duration-300 shadow-xl text-sm  text-palette-side rounded-lg">
            {"seeAllProducts"}
          </a>
        </Link>
      </div>
      <Image
        src={imgSrc}
        alt={name}
        width={imgWidth}
        height={imgHeight}
        className="drop-shadow-lg hover:scale-95 transition-transform duration-300 "
      />
    </div>
  );
};

export default CategoryLgBox;
