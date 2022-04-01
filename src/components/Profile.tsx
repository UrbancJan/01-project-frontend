import React from "react";
import "./Profile.css";
import { ReactComponent as TopNavCover } from "../assets/ProfileSvg.svg";
import idk from "../assets/ProfileSvg.svg";

const Profile = () => {
  return (
    /*<div className="idk">
      <TopNavCover className="svgContainer" />
      <div className="userContainer">
        <div className="userNameProfile">John Scott</div>
        <div className="userKarmaCard">
          <div>Quotastic karma</div>
          <div>100</div>
        </div>
      </div>
    </div>*/
    <div>
      <div className="bg-svg"></div>
      <div className="userContainer">
        <div className="userNameProfile">John Scott</div>
        <div className="userKarmaCard">
          <div>Quotastic karma</div>
          <div>100</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
