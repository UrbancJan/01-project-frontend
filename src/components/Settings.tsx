import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import baseurl from "../baseURL/baseurl";
import { BackgroundSvg } from "./BackgroundSvg";
import { useModal } from "./contexts/ModalContext";
import User from "./interface/user";
import "./Settings.css";

const Settings = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [user, setUser] = useState<User>();

  const { addProfile, setAddProfile } = useModal();
  function showSettings() {
    if (addProfile == false) {
      setAddProfile(true);
    } else {
      setAddProfile(false);
    }
  }

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/me");
        if (response) {
          setUser(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    data();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const newPasswordObject = JSON.stringify({
      password: newPassword,
      confirmPassword: confirmNewPassword,
    });

    try {
      const response = await baseurl.put(
        "/me/update-password",
        newPasswordObject
      );
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response);
    }
  };
  return (
    <>
      {/*<BackgroundSvg />*/}
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
                value={user?.email}
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
                value={user?.name}
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
                value={user?.lastname}
                disabled
              />
            </div>
            <div className="passwordItem">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="example@net.com"
                className="input"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="passwordItem2">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password"
                placeholder="example@net.com"
                className="input"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="settingButtonsContainer">
            <input type="submit" value="Submit" className="settingSubmitBtn" />
            <button className="settingCancelBtn" onClick={showSettings}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Settings;
