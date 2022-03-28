import React from "react";
import "./Footer.css";
import LogoIcon from "../assets/LogoIcon.png";

const Footer = () => {
  return (
    <div className="footerr">
      <img src={LogoIcon} alt="" />
      <div className="footerItem2">All Rights Reserved | skillupmentor.com</div>
    </div>
  );
};

export default Footer;
