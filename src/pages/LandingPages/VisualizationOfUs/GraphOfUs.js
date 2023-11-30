// @mui material components
import Card from "@mui/material/Card";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Presentation page components

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bgimage.jpg";

// DateTracker
import MKTypography from "components/MKTypography";
import { useEffect, useState } from "react";
import HeartAnimation from "./animation";
import GraphData from "./data";
import OurVis from "./Network";
import { Modal, Slide } from "@mui/material";
import OurVisText from "./NetworkText";
import OurVisTextLandscape from "./NetworkTextLandscape";
import MKAlert from "components/MKAlert";

// Custom hook to get window size
const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

function GraphOfUs() {
  const [imageHeight, setImageHeight] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const { width, height } = useWindowSize();
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  const modalStyle = {
    width: width > 600 ? "80%" : "90%",
    height: height > 600 ? "70vh" : "80vh",
    backgroundColor: "#fff",
    border: "2px solid #fff4e4",
    borderRadius: "10px",
    position: "relative",
    outline: "none",
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          display: "grid",
          placeItems: "top",
        }}
      >
        <HeartAnimation />
        <MKTypography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          color="lilac"
          sx={{
            marginTop: 2,
            marginBottom: 1,
            // Multiple shadows to create the outline effect
            textShadow: `
              -1px -1px 0 #fff,  
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff
            `,
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          We are connected on so many different levels :)
        </MKTypography>
        <MKBox>
          <Card
            sx={{
              py: 2,
              mx: { xs: 3, lg: 2 },
              backgroundColor: "#dbcbe9",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid #fff4e4",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MKBox
              sx={{
                backgroundColor: "#fff",
                border: "2px solid #fff4e4",
                borderRadius: "10px",
                position: "relative", // Add this line
              }}
              style={{ marginRight: "1rem", marginLeft: "1rem" }}
            >
              <OurVis data={GraphData} />
              <OpenInFullIcon
                style={{
                  position: "absolute", // Position the icon absolutely
                  top: 8, // Adjust top as per requirement
                  right: 8, // Adjust right as per requirement
                }}
                onClick={toggleModal}
              />
            </MKBox>
          </Card>
          <Modal
            open={showModal}
            onClose={toggleModal}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Slide direction="down" in={showModal}>
              {isLandscape ? (
                <MKBox
                  alignItems="center"
                  justifyContent="center"
                  sx={modalStyle}
                  style={{ marginRight: "1rem", marginLeft: "1rem" }}
                >
                  <OurVisTextLandscape data={GraphData} />
                </MKBox>
              ) : (
                <MKBox
                  alignItems="center"
                  justifyContent="center"
                  sx={modalStyle}
                  style={{ marginRight: "1rem", marginLeft: "1rem" }}
                >
                  <OurVisText data={GraphData} />
                  <MKAlert color="lilac">Turn your phone for a better view!</MKAlert>
                </MKBox>
              )}
            </Slide>
          </Modal>
        </MKBox>
      </MKBox>
    </>
  );
}

export default GraphOfUs;
