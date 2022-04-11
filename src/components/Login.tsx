import React, { SyntheticEvent, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import baseurl from "../baseURL/baseurl";
import "./Login.css";

const Login = (props: { setIsUserLoggedIn: (status: boolean) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await baseurl.post(
        "/login",
        JSON.stringify({
          email,
          password,
        })
      );

      props.setIsUserLoggedIn(true);
      setRedirect(true);
    } catch (error: any) {
      console.log(error);
      if (!error.response) {
        setErrorMessage("No server response");
      } else if (error.response?.status === 400) {
        setErrorMessage("Invalid email or password");
      } else if (error.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Login failed");
      }
    }
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
          {errorMessage && (
            <p style={{ color: "red" }} className="error">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
