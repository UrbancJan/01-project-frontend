import React, { SyntheticEvent, useState } from "react";
import "./SignUp.css";
import DefaultAvatar from "../assets/DefaultAvatar.png";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        lastname,
        password,
      }),
    });

    setRedirect(true);
  };

  if (redirect != false) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="signUpFormContainer">
      <div className="textContainer">
        <h1 className="title1">
          What is your <span className="title2">name?</span>
        </h1>
        <p>Your name will appear on quotes and your public profile</p>
        <img src={DefaultAvatar} alt="" />
      </div>

      <form onSubmit={submit}>
        <div className="grid-container">
          <div className="emailItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@net.com"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="firstnameItem">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="example@net.com"
              className="input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="lastnameItem">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="example@net.com"
              className="input"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="passwordItem">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="example@net.com"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
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
      <div className="bottomText">
        <p>Already have an account?</p>

        <Link className="linkTo" to="/login">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
