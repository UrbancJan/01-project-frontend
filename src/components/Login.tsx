import React from "react";
import "./Login.css";

const login = () => {
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

      <form>
        <div className="loginGrid-container">
          <div className="loginEmailItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@net.com"
              className="loginInput"
            />
          </div>
          <div className="loginPasswordItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="example@net.com"
              className="loginInput"
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

export default login;
