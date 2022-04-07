import React, { useEffect, useState } from "react";
import "./Test.css";

import Top from "../assets/top.svg";
import Bottom from "../assets/bottom.svg";
import Left from "../assets/left.svg";

export const Test = () => {
  return (
    <div>
      <img className="top" src={Top} alt="" />
      <img className="bottom" src={Bottom} alt="" />
      <img className="left" src={Left} alt="" />
    </div>
  );
};
