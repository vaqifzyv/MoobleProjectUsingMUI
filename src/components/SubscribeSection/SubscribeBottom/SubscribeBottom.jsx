import React from "react";
import "./subscribebottom.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SubscribeBottom() {
  return (
    <div
      className="SubscribeBottom"
      style={{
        background: "#353434",
        display: "flex",
        padding: "100px 120px 60px 120px",
        textAlignL: "center",
        gap: "40px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="SubscribeBottomLeft" style={{ width: "450px" }}>
        <Typography
          variant="p"
          color="#fff"
          sx={{ fontFamily: "Rubik", fontSize: "34px" }}
        >
          Subscribe to get attractive offers on our products
        </Typography>
      </div>
      <div
        className="SubscribeBottomRight"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          id="email"
          label="Email"
          variant="filled"
          placeholder="E.g. youremail@mail.com"
          sx={{ backgroundColor: "#F5F5F5", width: "400px" }}
        />
        <Button
          variant="contained"
          sx={{
            padding: "10px 20px",
            backgroundColor: "#F97316",
            fontFamily: "Poppins",
            marginLeft: "-105px",
            "&:hover": {
              backgroundColor: "rgba(251, 190, 60)",
              transition: "background-color 0.3s ",
            },
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SubscribeBottom;
