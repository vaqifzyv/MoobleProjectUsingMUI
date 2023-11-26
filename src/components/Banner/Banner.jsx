import React from "react";
import BannerLeft from "./Sides/BannerLeft";
import BannerRight from "./Sides/BannerRight";
import SearchBar from "./Sides/SearchBar";
import Logos from "./Sides/Logos";

import "./banner.css";

function Banner() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "0px auto",
          marginTop: "64px",
        }}
      >
        <BannerLeft />
        <BannerRight />
      </div>
      <SearchBar />
      <Logos />
    </div>
  );
}

export default Banner;
