import React from "react";
import ComfortableRight from "./ComfortableRight/ComfortableRight";
import ComfortableLeft from "./ComfortableLeft/ComfortableLeft";
import "./comfortablesection.css";

function ComfortableSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        margin: "0 auto",
        marginTop: "120px",
      }}
    >
      <ComfortableLeft />
      <ComfortableRight />
    </div>
  );
}

export default ComfortableSection;
