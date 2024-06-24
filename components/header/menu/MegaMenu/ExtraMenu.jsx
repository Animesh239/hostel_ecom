import React from "react";
import Link from "next/link";
import { extraMenu } from "@/mock/menuItems";
// import { useLanguage } from "../../../../hooks/useLanguage";

const ExtraMenu = () => {
//   const { t } = useLanguage();
  return (
    <div className="flex items-center border-l-2 border-gray-300 grow ml-2">
      {extraMenu.map((menuItem) => {
        return (
          <div
            className="flex items-center text-base/90 mx-2"
            key={menuItem.title}
          >
            <menuItem.icon />
            <Link href={menuItem.href} legacyBehavior>
              <a>{`${menuItem.title}`}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
