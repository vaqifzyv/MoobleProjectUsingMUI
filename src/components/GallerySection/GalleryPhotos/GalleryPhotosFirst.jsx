import React, { useState } from "react";

const GalleryPhotosFirst = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const photos = [
    "src/assets/galleryPhotoOne.jfif",
    "src/assets/galleryPhotoTwo.jfif",
    "src/assets/galleryPhotoThird.jfif",
  ];

  return (
    <div style={{ display: "flex" }}>
      {photos.map((photo, index) => (
        <div
          key={index}
          style={{
            flex: index === hoveredIndex ? "2" : "1",
            margin: "8px",
            position: "relative",
            height: "30vh",
            transition: "0.5s",
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
              filter: index !== hoveredIndex ? "grayscale(100%)" : "none",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryPhotosFirst;
