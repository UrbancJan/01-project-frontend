import React, { SyntheticEvent, useState } from "react";
import "./SignUp.css";
import DefaultAvatar from "../assets/DefaultAvatar.png";
import { Link, Navigate } from "react-router-dom";
import baseurl from "../baseURL/baseurl";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validate = () => {
    if (email === "") {
      setEmailError("email can not be empty");
    }
    if (name === "") {
      setNameError("name can not be empty");
    }
    if (lastname === "") {
      setLastnameError("lastname can not be empty");
    }
    if (password === "") {
      setPasswordError("password can not be empty");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("confirm password can not be empty");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("passwords must be the same");
    }
    if (
      emailError ||
      nameError ||
      lastnameError ||
      passwordError ||
      confirmPasswordError
    ) {
      return false;
    }
    return true;
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid === true) {
      try {
        const response = await baseurl.post(
          "/signup",
          JSON.stringify({
            email,
            name,
            lastname,
            password,
          })
        );
        setRedirect(true);
      } catch (error: any) {
        console.log(error);
        if (!error.response) {
          setErrorMessage("No server response");
        } else if (error.response?.status === 400) {
          setErrorMessage("User already exists");
        } else {
          setErrorMessage("SignUp failed");
        }
      }
    } else {
    }
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
            <div style={{ color: "red" }}>{emailError}</div>
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
            <div style={{ color: "red" }}>{nameError}</div>
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
            <div style={{ color: "red" }}>{lastnameError}</div>
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
            <div style={{ color: "red" }}>{passwordError}</div>
          </div>
          <div className="passwordItem2">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="example@net.com"
              className="input"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div style={{ color: "red" }}>{confirmPasswordError}</div>
          </div>
          <div className="submitButtonItem">
            <input type="submit" value="Sign Up" className="submitButton" />
          </div>
          {errorMessage && (
            <p style={{ color: "red" }} className="error">
              {errorMessage}
            </p>
          )}
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
