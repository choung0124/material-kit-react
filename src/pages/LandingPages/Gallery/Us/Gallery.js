import React, { useState, useEffect } from "react";
import "./newGallery.css"; // Make sure to import the CSS file for styling
import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="newgallery">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={`gallery-image ${index === currentImageIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
