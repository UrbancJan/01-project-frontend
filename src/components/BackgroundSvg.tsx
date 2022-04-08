import React from "react";
import "./BackgroundSvg.css";
/*
import Top from "../assets/top.svg";
import Bottom from "../assets/bottom.svg";
import Left from "../assets/left.svg";
*/

import { ReactComponent as Top } from "../assets/top.svg";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Bottom } from "../assets/bottom.svg";

export const BackgroundSvg = () => {
  return (
    <div>
      <Top className="top" />
      <Left className="left" />
      <Bottom className="bottom" />
    </div>
    /*<div>
      <img className="top" src={Top} alt="" />
      <img className="bottom" src={Bottom} alt="" />
      <img className="left" src={Left} alt="" />
    </div>*/
  );
};
