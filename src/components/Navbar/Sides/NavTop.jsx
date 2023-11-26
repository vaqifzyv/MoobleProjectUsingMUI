import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { display } from "@mui/system";
import "./navtop.css";

function NavTop() {
  return (
    <div className="NavTop">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default NavTop;
