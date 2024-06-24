import React from "react";
import { useSelector } from "react-redux";
import UserAccountBtn from "./UserAccountBtn";
import LoginBtn from "./LoginBtn";

const User = () => {
  const userInfo = useSelector(
    (state) => state.userInfo.userInformation
  );
  return <div>{userInfo ? <UserAccountBtn /> : <LoginBtn />}</div>;
};

export default User;
