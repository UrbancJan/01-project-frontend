import React, { SyntheticEvent, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { isLoggedInContext } from "../Context/IsLoggedInContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(isLoggedInContext);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    setIsUserLoggedIn(true);
    setRedirect(true);
  };

  if (redirect != false) {
    return <Navigate to="/" />;
  }

  return (
    <div className="loginFormContainer">
      <div className="loginTextContainer">
        <h1 className="loginTitle1">
          Welcome <span className="loginTitle2">back!</span>
        </h1>
        <p>
          Thank you for coming back. Hope you have a good day and inspire
          others.
        </p>
      </div>

      <form onSubmit={submit}>
        <div className="loginGrid-container">
          <div className="loginEmailItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@net.com"
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginPasswordItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="example@net.com"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginSubmitButtonItem">
            <input type="submit" value="Login" className="loginSubmitButton" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
