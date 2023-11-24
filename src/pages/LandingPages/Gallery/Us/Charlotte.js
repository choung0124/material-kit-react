import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Presentation page components

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bgimage.jpg";
import { useEffect, useState } from "react";

import "./imageStyle.css";

import img1 from "assets/images/gallery/Charlotte/1.jpg";
import img2 from "assets/images/gallery/Charlotte/2.jpg";
import img3 from "assets/images/gallery/Charlotte/3.jpg";
import img4 from "assets/images/gallery/Charlotte/4.jpg";
import img5 from "assets/images/gallery/Charlotte/5.jpg";
import img6 from "assets/images/gallery/Charlotte/6.jpg";

import Gallery from "./Gallery";

import { Modal } from "@mui/material";

import MKButton from "components/MKButton";

function ImageGallery() {
  const [imageHeight, setImageHeight] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  const galleryImages = [
    { id: 1, src: require("assets/images/gallery/Charlotte/1.jpg"), alt: "Description of image 1" },
    { id: 2, src: require("assets/images/gallery/Charlotte/2.jpg"), alt: "Description of image 2" },
    { id: 3, src: require("assets/images/gallery/Charlotte/3.jpg"), alt: "Description of image 2" },
    { id: 4, src: require("assets/images/gallery/Charlotte/4.jpg"), alt: "Description of image 2" },
    { id: 5, src: require("assets/images/gallery/Charlotte/5.jpg"), alt: "Description of image 2" },
    { id: 6, src: require("assets/images/gallery/Charlotte/6.jpg"), alt: "Description of image 2" },
  ];

  const images = [img1, img2, img3, img4, img5, img6];

  const imageStyle = {
    width: "80px",
    maxHeight: "150px",
    objectFit: "cover",
    margin: "5px",
    transition: "transform 0.3s ease-in-out", // Animation effect
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        maxHeight={`${imageHeight}px`}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "top",
        }}
      >
        <MKBox
          marginTop={18}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 3,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff
    `,
            }}
          >
            Pictures of Charlotte :3
          </MKTypography>
        </MKBox>
        <MKBox display="flex" justifyContent="center" alignItems="center" marginBottom={5}>
          <Card
            sx={{
              py: 2,
              mt: 10,
              mx: { xs: 3, lg: 2 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
            }}
          >
            <MKBox px={3} py={2}>
              <Gallery images={galleryImages} />
            </MKBox>
            <MKBox
              px={3}
              py={2}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // Two images per row
                gridGap: "1px",
              }}
              overflow="auto"
            >
              {images.map((img, index) => (
                <MKBox
                  key={index}
                  className="animate-image"
                  style={{ ...imageStyle }}
                  sx={{ border: "2px solid white" }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onClick={() => handleImageClick(img)}
                  />
                </MKBox>
              ))}
            </MKBox>
            <Modal
              open={isModalOpen}
              onClose={handleCloseModal}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <MKBox
                sx={{
                  outline: "none",
                  position: "relative",
                  maxWidth: "90%",
                  maxHeight: "90%",
                  overflow: "auto",
                }}
              >
                <img src={selectedImage} alt="Selected" style={{ width: "100%", height: "auto" }} />
                <a href={selectedImage} download style={{ textDecoration: "none" }}>
                  <MKButton>Download</MKButton>
                </a>
              </MKBox>
            </Modal>
          </Card>
        </MKBox>
      </MKBox>
    </>
  );
}

export default ImageGallery;
