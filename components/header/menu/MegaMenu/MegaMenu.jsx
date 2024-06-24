import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "@/store/megaMenu-slice";
import { Transition } from "react-transition-group";
// import { useLanguage } from "../../../../hooks/useLanguage";
import { GoGrabber } from "react-icons/go";
import MenusContainer from "./MenusContainer";

const MegaMenu = () => {
  const nodeRef = useRef(null);
//   const { t } = useLanguage();
  const dispatch = useDispatch();

  function showMegaMenuHandler() {
    dispatch(megaMenuActions.openMegaMenu());
  }

  function closeMegaMenuHandler() {
    dispatch(megaMenuActions.closeMegaMenu());
  }

  const isMegaMenuOpen = useSelector(
    (state) => state.megaMenu.isMegaMenuOpen
  );

  return (
    <div
      className="flex items-center"
      onMouseOver={showMegaMenuHandler}
      onMouseOut={closeMegaMenuHandler}
    >
      <div className="flex items-center font-bold cursor-pointer">
        <GoGrabber style={{ fontSize: "2rem" }} />
        <h3 className="ml-1 ">{"Category of Goods"}</h3>
      </div>

      <Transition
        nodeRef={nodeRef}
        in={isMegaMenuOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div ref={nodeRef} className="z-[100]">
              <div
                className={`fixed top-[8.2rem] inset-0 bg-gray-600/60
                ${
                  state === "entering"
                    ? "animate-fadeEntering"
                    : state === "entered"
                    ? "opacity-100"
                    : "animate-fadeExit"
                }
                `}
                onClick={closeMegaMenuHandler}
              ></div>
              <div className="absolute top-full left-0 right-0 bg-palette-card z-[110] shadow-md rounded-br-lg rounded-bl-lg">
                <MenusContainer />
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default MegaMenu;
