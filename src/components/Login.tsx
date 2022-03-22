import React from "react";
import "./Login.css";
import DefaultAvatar from "../assets/DefaultAvatar.png";

const login = () => {
  return (
    <div className="signUpFormContainer">
      <div className="textContainer">
        <h1 className="title1">
          What is your <span className="title2">name?</span>
        </h1>
        <p>Your name will appear on quotes and your public profile</p>
        <img src={DefaultAvatar} alt="" />
      </div>

      <form>
        <div className="grid-container">
          <div className="emailItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@net.com"
              className="input"
            />
          </div>
          <div className="firstnameItem">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="example@net.com"
              className="input"
            />
          </div>
          <div className="lastnameItem">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="example@net.com"
              className="input"
            />
          </div>
          <div className="passwordItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="example@net.com"
              className="input"
            />
          </div>
          <div className="passwordItem2">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="example@net.com"
              className="input"
            />
          </div>
          <div className="submitButtonItem">
            <input type="submit" value="Sign Up" className="submitButton" />
          </div>
        </div>
      </form>
      <div className="containerLinks">
        <p className="textLeft">Already have an account?</p>
        <p className="textRgiht">Sign in</p>
      </div>
    </div>
  );
};

export default login;
