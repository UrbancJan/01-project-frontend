import React from "react";
import "./BackgroundSvg.css";
import Top from "../assets/top.svg";
import Bottom from "../assets/bottom.svg";
import Left from "../assets/left.svg";

export const BackgroundSvg = () => {
  return (
    <div>
      <img className="top" src={Top} alt="" />
      <img className="bottom" src={Bottom} alt="" />
      <img className="left" src={Left} alt="" />
    </div>
  );
};
