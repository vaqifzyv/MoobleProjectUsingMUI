import React from "react";
import "./subscribetop.css";
import Typography from "@mui/material/Typography";

function SubscribeTop() {
  return (
    <div className="SubscribeTop">
      <div className="SubscribeTopText">
        <Typography
          variant="h4"
          color="#fff"
          sx={{
            fontFamily: "Rubik",
            fontSize: "44px",
            fontWeight: 500,
            width: "350px",
          }}
        >
          Our Furniture Review
        </Typography>
        <Typography
          variant="p"
          color="#F6F6F6"
          sx={{
            fontFamily: "Rubik",
            fontSize: "18px",
            fontWeight: 400,
            width: "350px",
          }}
        >
          Our furniture is meticulously handcrafted to stand the test of time,
          ensuring it can be enjoyed for generations to come.
        </Typography>
      </div>
    </div>
  );
}

export default SubscribeTop;
