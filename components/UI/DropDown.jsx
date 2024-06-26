import React, { useState, useRef } from "react";
import Link from "next/link";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { Transition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { sideNavBarActions } from "@/store/sideNavBar-slice";
import { useSelector } from "react-redux";
// import { useLanguage } from "../../hooks/useLanguage";


const DropDown = (({ dropDown }, ref) => {
  const [openDropdown, setOpenDropDown] = useState(false);
  const nodeRef = useRef(null);
  const dispatch = useDispatch();
//   const { t } = useLanguage();
  let ArrowDirection = !openDropdown ? HiChevronDown : HiChevronUp;

  const activeMenuItemText = useSelector(
    (state) => state.activeMenuItem.activeMenuItemText
  );

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  return (
    <div className="origin-top" ref={ref}>
      <div
        className="flex items-center cursor-pointer py-4 px-6"
        onClick={() => setOpenDropDown((prevState) => !prevState)}
      >
        <h3 className="mr-3 text-md font-bold grow">
          {`${dropDown.title}`}
        </h3>
        <ArrowDirection style={{ fontSize: "1.5rem" }} />
      </div>
      <Transition
        mountOnEnter
        unmountOnExit
        in={openDropdown}
        timeout={300}
        nodeRef={nodeRef}
      >
        {(state) => (
          <>
            <div
              ref={nodeRef}
              className={`origin-top ml-8 px-2 border-l-4 border-slate-400
          ${
            state === "entering"
              ? `animate-dropDown`
              : state === "entered"
              ? "scale-y-100 opacity-100"
              : "animate-dropDownExit"
          }
          `}
            >
              {dropDown.subtitles.map((item, index) => {
                return (
                  <div
                    className="pl-6  py-3"
                    ref={ref}
                    key={`${item}-${index}`}
                  >
                    <Link legacyBehavior
                      href={`/${activeMenuItemText}/${dropDown.title}/${item}`}
                    >
                      <a>
                        <div onClick={closeNavbar}>{`${item}`}</div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </Transition>
    </div>
  );
});

DropDown.displayName = "DropDown";
export default DropDown;
