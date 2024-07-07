import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import { userInfoActions } from "../store/user-slice";
import { getError } from "../utilities/error";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const userInfo = useSelector((state) => {
    return state.userInfo.userInformation;
  });
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);
  async function LoginHandler(user) {
    const { email, password } = user;
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err) {
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }
  return (
    <EnteringBox
      title="login"
      submitHandler={LoginHandler}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
