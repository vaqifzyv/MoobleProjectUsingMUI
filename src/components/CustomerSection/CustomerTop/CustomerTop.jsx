import React from "react";
import "./customertop.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CustomerTop() {
  return (
    <div
      className="GalleryTop"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        marginBottom: "64px",
      }}
    >
      <Button
        variant="text"
        sx={{
          borderColor: "#000",
          padding: "10px 20px",
          borderRadius: "25px",
          color: "#F73308",
          marginRight: "10px",
          fontFamily: "Poppins",
          backgroundColor: "#F5F5F5",
          transition: " 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#F73308",
            color: "#FFFFFF",
            borderColor: "#F73308",
          },
        }}
      >
        Testimonial Section
      </Button>
      <Typography
        variant="h2"
        color="#121212"
        sx={{ fontSize: "46px", fontWeight: 600, fontFamily: "Rubik" }}
      >
        What Our Customer Say
      </Typography>
      <Typography
        variant="p"
        color="#505050"
        sx={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: 400 }}
      >
        Discover the Stories and Experiences of Our Delighted Customers
      </Typography>
    </div>
  );
}

export default CustomerTop;
