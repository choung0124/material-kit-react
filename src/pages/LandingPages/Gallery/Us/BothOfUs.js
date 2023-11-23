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

import img1 from "assets/images/gallery/BothOfUs/1.jpg";
import img2 from "assets/images/gallery/BothOfUs/2.jpg";
import img3 from "assets/images/gallery/BothOfUs/3.jpg";
import img4 from "assets/images/gallery/BothOfUs/4.jpg";
import img5 from "assets/images/gallery/BothOfUs/5.jpg";
import img6 from "assets/images/gallery/BothOfUs/6.jpg";
import img7 from "assets/images/gallery/BothOfUs/7.jpg";
import img8 from "assets/images/gallery/BothOfUs/8.jpg";
import img9 from "assets/images/gallery/BothOfUs/9.jpg";
import img10 from "assets/images/gallery/BothOfUs/10.jpg";
import img11 from "assets/images/gallery/BothOfUs/11.jpg";
import img12 from "assets/images/gallery/BothOfUs/12.jpg";
import img13 from "assets/images/gallery/BothOfUs/13.jpg";
import img14 from "assets/images/gallery/BothOfUs/14.jpg";
import img15 from "assets/images/gallery/BothOfUs/15.jpg";

function ImageGallery() {
  const [imageHeight, setImageHeight] = useState(0);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  const imageStyle = {
    width: "200px",
    maxHeight: "300px",
    objectFit: "cover",
    margin: "10px",
    transition: "transform 0.3s ease-in-out", // Animation effect
  };

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
            Pictures with the both of us :3
          </MKTypography>
        </MKBox>
        <MKBox display="flex" justifyContent="center" alignItems="center">
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
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index}`}
                  style={imageStyle}
                  className="animate-image"
                />
              ))}
            </MKBox>
            0
          </Card>
        </MKBox>
      </MKBox>
    </>
  );
}

export default ImageGallery;
