import React from "react";
import "./Profile.css";
import { ReactComponent as TopNavCover } from "../assets/ProfileSvg.svg";
import idk from "../assets/ProfileSvg.svg";
import QuoteCard from "./QuoteCard";
import Quotes from "./Quotes";

const Profile = () => {
  return (
    /*določ fiksno višino navbara pol veš koliko moraš dol it? */
    <>
      <div className="test">
        <TopNavCover className="svgContainer" />
        <div className="testTest">
          <div>John Scott</div>
          <div className="testKarma">
            <div>Quotastic karma</div>
            <div>100</div>
          </div>
        </div>
        <div className="userProfileQuoteCard">
          <QuoteCard />
        </div>
        <div>Likes</div>
        <Quotes />
      </div>
    </>
  );
};

export default Profile;
