import React from "react";
import "./navbar.css";
import { AppBar } from "@mui/material";
import NavTop from "./Sides/NavTop";
import NavBottom from "./Sides/NavBottom";

function Navbar() {
  return (
    <>
      <div
        className="width-container navbar"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "0px auto",
          marginTop: "24px",
        }}
      >
        <NavTop />
        <NavBottom />
      </div>
    </>
  );
}

export default Navbar;
