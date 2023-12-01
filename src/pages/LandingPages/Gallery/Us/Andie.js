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

import img1 from "assets/images/gallery/Andie/1.jpg";
import img2 from "assets/images/gallery/Andie/2.jpg";
import img3 from "assets/images/gallery/Andie/3.jpg";
import img4 from "assets/images/gallery/Andie/4.jpg";
import img5 from "assets/images/gallery/Andie/5.jpg";

import cornerTopLeft from "assets/images/corner1.png";
import cornerBottomRight from "assets/images/corner4.png";

import { Modal } from "@mui/material";

import MKButton from "components/MKButton";

import HeartAnimation from "pages/Presentation/animation";

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

  const images = [img1, img2, img3, img4, img5];

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
        minHeight={`${imageHeight}px`}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex", // Changed to flex for more control
          flexDirection: "column", // Stack children vertically
          justifyContent: "flex-start", // Align children to the start of the container
        }}
      >
        <HeartAnimation />
        <MKBox
          marginTop={20}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 10,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff4e4,  
      1px -1px 0 #fff4e4,
      -1px 1px 0 #fff4e4,
      1px 1px 0 #fff4e4
    `,
            }}
          >
            Pictures of Andie :3
          </MKTypography>
        </MKBox>
        <MKBox display="flex" justifyContent="center" alignItems="center" marginBottom={5}>
          <Card
            sx={{
              width: { xs: "100%", sm: "50%", md: "33.333%", lg: "25%" }, // or fixed width in pixels
              py: 1,
              mx: { xs: 3, lg: 0 },
              backgroundColor: "#d3b8c3",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid #fff4e4",
            }}
          >
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
              {images.map((img, index) => {
                return (
                  <MKBox
                    key={index}
                    className="image-container"
                    sx={{ position: "relative" /* ...other styles... */ }}
                    style={{ ...imageStyle }}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        border: "2px solid #fff4e4",
                      }}
                      onClick={() => handleImageClick(img)}
                    />
                    {/* Top-left corner image */}
                    <img
                      src={cornerTopLeft}
                      alt="Decorative corner"
                      style={{
                        position: "absolute",
                        top: -10,
                        left: -10,
                        width: "70px",
                        height: "70px",
                      }}
                    />
                    {/* Bottom-right corner image */}
                    <img
                      src={cornerBottomRight}
                      alt="Decorative corner"
                      style={{
                        position: "absolute",
                        bottom: -10,
                        right: -10,
                        width: "70px",
                        height: "70px",
                      }}
                    />
                  </MKBox>
                );
              })}
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
