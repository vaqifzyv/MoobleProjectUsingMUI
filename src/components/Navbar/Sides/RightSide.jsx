import React, { Fragment } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./rightside.css";
import IconButton from "@mui/material/IconButton";
function RightSide() {
  return (
    <div className="rightSide">
      <a href="#">
        <IconButton>
          <InstagramIcon sx={{ color: "rgba(49, 49, 49, 1)" }} />
        </IconButton>
      </a>
      <a href="#">
        <IconButton>
          <FacebookIcon sx={{ color: "rgba(49, 49, 49, 1)" }} />
        </IconButton>
      </a>
      <a href="#">
        <IconButton>
          <TwitterIcon sx={{ color: "rgba(49, 49, 49, 1)" }} />
        </IconButton>
      </a>
      <a href="#">
        <IconButton>
          <LinkedInIcon sx={{ color: "rgba(49, 49, 49, 1)" }} />
        </IconButton>
      </a>
    </div>
  );
}

export default RightSide;
