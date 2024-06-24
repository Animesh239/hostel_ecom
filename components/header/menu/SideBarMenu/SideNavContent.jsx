import React from "react";
import Link from "next/link";
// import { useLanguage } from "../../../../hooks/useLanguage";
import { extraMenu } from "@/mock/menuItems";
import { useDispatch } from "react-redux";
import { sideNavBarActions } from "@/store/sideNavBar-slice";
import { activeMenuItemActions } from "@/store/activeMenuItem-slice";
import MenuItems from "@/components/UI/MenuItems/MenuItems";

const SideNavContent = () => {
//   const { t } = useLanguage();
  const dispatch = useDispatch();
  const openNav = (
    sidebarSideContent,
    activeItemName,
    activeItemIndex
  ) => {
    dispatch(sideNavBarActions.setSidebarEntries(sidebarSideContent));
    dispatch(sideNavBarActions.openSidebar());
    dispatch(activeMenuItemActions.setActiveMenuItemText(activeItemName));
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
  };
  return (
    <div className="absolute w-full">
      <div className="flex flex-col mt-3 pt-3 px-5 cursor-pointer">
        {extraMenu.map((menuItem) => {
          return (
            <div
              className="flex items-center py-3 text-palette-mute "
              key={menuItem.title}
            >
              <menuItem.icon />
              <Link href={menuItem.href} legacyBehavior>
                <a className="mx-4">{`${menuItem.title}`}</a>
              </Link>
            </div>
          );
        })}
        <hr className="mt-6 mb-4 border-gray-200" />
      </div>
      <h2 className="font-bold text-lg py-3 px-5">
        {"Category Of Goods"}
      </h2>
      <MenuItems onClick={openNav} />
    </div>
  );
};

export default SideNavContent;
