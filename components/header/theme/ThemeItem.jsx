import { useTheme } from "next-themes";
import React from "react";
// import { useLanguage } from "../../../hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import { settingBoxActions } from "@/store/settingBox-slice";

const ThemeItem = ({ theme, Icon, currentTheme }) => {
  // const { t } = useLanguage();
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const isSettingBoxOpen = useSelector((state) => state.settingBox.isOpen);

  function onThemeClickHandler() {
    setTheme(theme);
    isSettingBoxOpen && dispatch(settingBoxActions.closeSettingBox());
  }

  return (
    <div
      className={`flex items-center justify-start py-1 ${
        currentTheme && currentTheme === theme ? "font-bold" : ""
      }`}
      onClick={onThemeClickHandler}
    >
      <button className="border-none" aria-label="theme-toggle" role="button">
        <Icon
          style={{
            fontSize: "1.3rem",
            filter: "drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3))",
          }}
        />
      </button>
      <h4 className="md:hidden ml-3">{`${theme}`}</h4>
    </div>
  );
};

export default ThemeItem;
