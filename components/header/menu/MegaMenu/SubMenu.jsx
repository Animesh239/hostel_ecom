import React from "react";
import Link from "next/link";
// import { useLanguage } from "../../../../hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "@/store/megaMenu-slice";
import { HiChevronRight } from "react-icons/hi";

const SubMenu = ({ subMenuItems }) => {
//   const { t } = useLanguage();
  const ArrowDirection =  HiChevronRight ;
  const dispatch = useDispatch();

  const activeMenuItemText = useSelector(
    (state) => state.activeMenuItem.activeMenuItemText
  );

  return (
    <div className="flex flex-col px-6 py-5 w-full">
      <div className="flex items-center hover:text-palette-primary transition-color duration-300">
        {subMenuItems ? (
          <>
            <Link href={`/${activeMenuItemText}`} legacyBehavior>
              <a
                className="block mr-4 text-[16px] "
                onClick={() => dispatch(megaMenuActions.closeMegaMenu())}
              >
                {"See All product in this category"}
              </a>
            </Link>
            <ArrowDirection style={{ fontSize: "1rem", color: "inherit" }} />
          </>
        ) : null}
      </div>
      <br />
      <div className="relative grow md:columns-[188px] xl:columns-3 xl:max-w-4xl">
        {subMenuItems && activeMenuItemText ? (
          <>
            {subMenuItems.map((menuTitle, index) => {
              return (
                <div className="py-3" key={`${menuTitle}-${index}`}>
                  <Link legacyBehavior href={`/${activeMenuItemText}/${menuTitle.title}`}>
                    <a
                      className="block text-sm mr-10 font-bold px-2 border-l-4  border-palette-primary rounded-sm hover:text-palette-primary transition-color duration-300"
                      onClick={() => dispatch(megaMenuActions.closeMegaMenu())}
                    >
                      {`${menuTitle.title}`}
                    </a>
                  </Link>
                  {menuTitle.subtitles.map((subTitle, index) => {
                    return (
                      <Link
                        href={`/${activeMenuItemText}/${menuTitle.title}/${subTitle}`}
                        key={`${subTitle}-${index}`}
                        legacyBehavior
                      >
                        <a
                          className="block py-2 hover:text-palette-primary transition-color duration-200"
                          onClick={() =>
                            dispatch(megaMenuActions.closeMegaMenu())
                          }
                        >
                          {`${subTitle}`}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <p className="text-sm text-palette-mute absolute top-[45%] left-[30%] ">
            {"There are no products in this category yet! New products will be added soon."}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
