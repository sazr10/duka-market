import React from "react";
import "./main.css";
import BackgroundImage from "../../assets/Untitled-1.png";

import BgText from "./BgText";

export default function Main() {
  return (
    <div className="image-div">
      <img className="bg-image" src={BackgroundImage} alt="" />
      <BgText />
    </div>
  );
}
