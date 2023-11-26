import React from "react";
import "./gallerysection.css";
import GalleryTop from "./GalleryTop/GalleryTop";
import GalleryPhotosFirst from "./GalleryPhotos/GalleryPhotosFirst";
import GalleryPhotosSecond from "./GalleryPhotos/GalleryPhotosSecond";

function GallerySection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "0px auto",
      }}
    >
      <GalleryTop />
      <GalleryPhotosFirst />
      <GalleryPhotosSecond />
    </div>
  );
}

export default GallerySection;
