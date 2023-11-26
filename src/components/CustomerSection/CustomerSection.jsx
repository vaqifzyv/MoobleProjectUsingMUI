import React from "react";
import "./customersection.css";
import CustomerTop from "./CustomerTop/CustomerTop";
import CustomerSay from "./CustomerSay/CustomerSay";

function CustomerSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBlock: "120px",
      }}
    >
      <CustomerTop />
      <CustomerSay />
    </div>
  );
}

export default CustomerSection;
