import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "../components/Auth/LoginCard";
import { loginUser } from "../modules/fetch";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(email, password);
      window.localStorage.setItem("token", token.token);
      navigate("/");
    } catch (err) {
      throw err;
    }
  };

  const emailOnChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="flex justify-center mt-32">
      <LoginCard
        title="Sign in"
        emailValue={email}
        loginHandler={loginHandler}
        passwordOnChange={passwordOnChange}
        emailOnChange={emailOnChange}
        passwordValue={password}
      />
    </div>
  );
};

export default Login;
