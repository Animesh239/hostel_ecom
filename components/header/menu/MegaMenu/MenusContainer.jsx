import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeMenuItemActions } from "@/store/activeMenuItem-slice";
import menuItems from "@/mock/menuItems";
import MenuItems from "@/components/UI/MenuItems/MenuItems";
import SubMenu from "./SubMenu";

const MenusContainer = () => {
  const [subMenuItems, setSubMenuItems] = useState();
  const dispatch = useDispatch();
  function activeItem(
    submenuList,
    activeItemIndex,
    activeItemName
  ) {
    setSubMenuItems(submenuList);
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
    dispatch(activeMenuItemActions.setActiveMenuItemText(activeItemName));
  }

  useEffect(() => {
    setSubMenuItems(menuItems[0].productsGroup);
    return () => {
      dispatch(activeMenuItemActions.setActiveMenuItemIndex(0));
      dispatch(activeMenuItemActions.setActiveMenuItemText("digital"));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" flex">
      <nav className="md:w-80 md:py-4 border-r-2 border-slate-300">
        <MenuItems onMouseOver={activeItem} />
      </nav>
      <SubMenu subMenuItems={subMenuItems} />
    </div>
  );
};

export default MenusContainer;
