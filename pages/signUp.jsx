import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/user-slice";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import axios from "axios";
import { getError } from "../utilities/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const { redirect } = router.query;
  const userInfo = useSelector(
    (state) => state.userInfo.userInformation
  );
  useEffect(() => {
    if (userInfo) {
      router.push(redirect || "/");
    }
  }, [userInfo, redirect, router]);
  async function signUpHandler(user) {
    const { name, email, password } = user;
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err) {
      if (err.response.data.status == 500) {
        dispatch(userInfoActions.userLogin(user));
        jsCookie.set("userInfo", JSON.stringify(user));
      }
      setErrorMessage(getError(err));
      console.log(getError(err));
      // router.push("/");
    }
  }
  return (
    <EnteringBox
      title="signUp"
      submitHandler={signUpHandler}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;
