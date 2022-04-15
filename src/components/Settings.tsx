import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import baseurl from "../baseURL/baseurl";
import { BackgroundSvg } from "./BackgroundSvg";
import { useModal } from "./contexts/ModalContext";
import { useUser } from "./contexts/UserContext";
import "./Settings.css";

const Settings = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { userObj } = useUser();
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { addProfile, setAddProfile } = useModal();

  function showSettings() {
    if (addProfile == false) {
      setAddProfile(true);
    } else {
      //če kliknemo cancel se pobrišejo input fieldi
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordError("");
      setConfirmPasswordError("");
      setAddProfile(false);
    }
  }

  const validate = () => {
    if (newPassword === "") {
      setPasswordError("password can not be empty");
    }
    if (confirmNewPassword === "") {
      setConfirmPasswordError("confirm password can not be empty");
    }
    if (newPassword !== confirmNewPassword) {
      setConfirmPasswordError("passwords must be the same");
    }
    if (passwordError || confirmPasswordError) {
      return false;
    }
    return true;
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid === true) {
      const newPasswordObject = JSON.stringify({
        password: newPassword,
        confirmPassword: confirmNewPassword,
      });

      try {
        const response = await baseurl.put(
          "/me/update-password",
          newPasswordObject
        );

        setPasswordError("");
        setConfirmPasswordError("");
      } catch (error: any) {
        console.log(error.response);
      }
    } else {
    }
    setNewPassword("");
    setConfirmNewPassword("");
  };
  return (
    <>
      <div className="settingsContainer">
        <div style={{ fontSize: "2rem" }}>
          Profile
          <span style={{ fontSize: "2rem", color: "#DE8667" }}> Settings</span>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Change your profile settings
        </div>
        <form onSubmit={submit}>
          <div className="grid-container">
            <div className="emailItem">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@net.com"
                value={userObj?.email}
                className="input"
                disabled
              />
            </div>
            <div className="firstnameItem">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="example@net.com"
                className="input"
                value={userObj?.name}
                disabled
              />
            </div>
            <div className="lastnameItem">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="example@net.com"
                className="input"
                value={userObj?.lastname}
                disabled
              />
            </div>
            <div className="passwordItem">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div style={{ color: "red" }}>{passwordError}</div>
            </div>
            <div className="passwordItem2">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password"
                className="input"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <div style={{ color: "red" }}>{confirmPasswordError}</div>
            </div>
          </div>
          <div className="settingButtonsContainer">
            <input type="submit" value="Submit" className="settingSubmitBtn" />
          </div>
        </form>
        <button
          style={{ margin: 0, marginTop: "1rem" }}
          className="settingCancelBtn"
          onClick={showSettings}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Settings;
