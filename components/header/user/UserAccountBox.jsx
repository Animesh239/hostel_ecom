import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { userInfoActions } from "@/store/user-slice";
// import { useLanguage } from "../../../hooks/useLanguage";
import { AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import jsCookie from "js-cookie";


const UserAccountBox = ({ onClose }) => {
  // const { t } = useLanguage();
  const dispatch = useDispatch();
  function onLogoutClickHandler() {
    dispatch(userInfoActions.userLogout());
    jsCookie.remove("userInfo");
    onClose();
  }
  return (
    <div>
      <ul>
        <li className="my-1 py-1" onClick={onClose}>
          <Link href={"/favorite"} legacyBehavior>
            <a className="flex items-center hover:text-palette-primary">
              <AiOutlineHeart
                style={{
                  fontSize: "1.2rem",
                  width: "1.8rem",
                }}
              />
              <span className="font-normal ml-1">
                {"Favorites"}
              </span>
            </a>
          </Link>
        </li>
        <li className="my-1 py-1" onClick={onLogoutClickHandler}>
          <Link href={`/`} legacyBehavior>
            <a className="flex items-center hover:text-palette-primary">
              <IoLogOutOutline
                style={{
                  fontSize: "1.5rem",
                  width: "1.8rem",
                }}
              />
              <span className="font-normal ml-1">{"Logout"}</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountBox;
