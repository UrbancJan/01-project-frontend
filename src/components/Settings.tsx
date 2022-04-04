import React from "react";
import { BackgroundSvg } from "./BackgroundSvg";
import "./Settings.css";

const Settings = () => {
  return (
    <>
      <BackgroundSvg />
      <div className="settingsContainer">
        <div style={{ fontSize: "2rem" }}>
          Profile
          <span style={{ fontSize: "2rem", color: "#DE8667" }}> Settings</span>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Change your profile settings
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
          </div>
          <div className="settingButtonsContainer">
            <input type="submit" value="Submit" className="settingSubmitBtn" />
            <button className="settingCancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Settings;
