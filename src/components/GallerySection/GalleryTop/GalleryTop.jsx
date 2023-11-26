import React from "react";
import "./gallerytop.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GalleryTop() {
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
        Check Our Collection
      </Button>
      <Typography
        variant="h2"
        color="#121212"
        sx={{ fontSize: "46px", fontWeight: 600, fontFamily: "Rubik" }}
      >
        Our Furniture Gallery
      </Typography>
      <Typography
        variant="p"
        color="#505050"
        sx={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: 400 }}
      >
        Explore Our Gallery of Inspiring Designs
      </Typography>
    </div>
  );
}

export default GalleryTop;
