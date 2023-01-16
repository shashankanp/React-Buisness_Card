import React from "react";
import instagram from "./Instagram Icon.png";
import facebook from "./Facebook Icon.png";
import github from "./GitHub Icon.png";
import twitter from "./Twitter Icon.png";

export default function Bottom() {
  return (
    <div className="bottom">
      <div className="icons">
        <img src={twitter} />
        <img src={facebook} />
        <img src={instagram} />
        <img src={github} />
      </div>
    </div>
  );
}
