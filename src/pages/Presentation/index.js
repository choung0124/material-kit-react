// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

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
import DateTracker from "pages/Presentation/DateTracker";
import DateTrackerDating from "pages/Presentation/DateTrackerDating";
import MKTypography from "components/MKTypography";
import React, { useEffect, useState, useRef, Fragment } from "react";
import NowPlaying from "./NowPlaying";
import NowPlayingChar from "./NowPlayingChar";
import HeartAnimation from "./animation";
import Icon3 from "assets/images/icon3.png";
import Icon2 from "assets/images/icon2.png";
import { Modal } from "@mui/material";
import cornerTopLeft from "assets/images/corner1.png";
import cornerBottomRight from "assets/images/corner4.png";
import AdventData from "./AdventData";
import Slide from "@mui/material/Slide";

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

// Function to convert newlines in text to <br> elements for display
function renderTextWithNewlines(text) {
  if (!text) return null; // Check if text is undefined or empty

  return text.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
}

function Presentation() {
  const [imageHeight, setImageHeight] = useState(0);
  const containerRef = useRef(null);
  const dates = Array.from({ length: 24 }, (_, i) => i + 1);
  const [currentDate] = useState(new Date().getDate());
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ alt: "" });
  const { width, height } = useWindowSize();

  const modalStyle = {
    width: width > 600 ? "80%" : "90%",
    maxHeight: height > 600 ? "70vh" : "80vh",
    backgroundColor: "#fff",
    border: "2px solid #fff4e4",
    borderRadius: "10px",
    position: "relative",
    outline: "none",
  };

  const handleDateClick = (date) => {
    if (date <= currentDate) {
      const adventItem = AdventData.find((item) => item.id === date);
      if (adventItem) {
        setModalContent(adventItem);
        setOpenModal(true);
      }
    }
  };

  // Function to close modal
  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

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
            height: "10%",
          }}
          zIndex={1}
        >
          <MKBox display="flex" justifyContent="center">
            <img src={Icon3} alt="icon" width="150" />
          </MKBox>
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 0,
              // Multiple shadows to create the outline effect
              textShadow: `
            -1px -1px 0 #fff4e4,  
            1px -1px 0 #fff4e4,
            -1px 1px 0 #fff4e4,
            1px 1px 0 #fff4e4
          `,
            }}
          >
            Welcome !
          </MKTypography>
          <MKTypography
            variant="body2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 10,
              marginLeft: 2,
              marginRight: 2,
              // Multiple shadows to create the outline effect
              textShadow: `
            -1px -1px 0 #fff4e4,  
            1px -1px 0 #fff4e4,
            -1px 1px 0 #fff4e4,
            1px 1px 0 #fff4e4
          `,
            }}
          >
            This Website is an archive of everything about us, but its also a platform where I can
            express my love for you. I hope you enjoy it :)
          </MKTypography>
        </MKBox>
        <MKBox>
          <MKBox>
            <MKBox display="flex" flexDirection="row" justifyContent="center" alignItems="center">
              <Card
                sx={{
                  width: { xs: "100%", sm: "50%", md: "33.333%", lg: "25%" }, // or fixed width in pixels
                  py: 2,
                  mx: { xs: 3, lg: 0 },
                  backgroundColor: "#d3b8c3",
                  backdropFilter: "saturate(200%) blur(30px)",
                  boxShadow: ({ boxShadows: { xxl } }) => xxl,
                  border: "2px solid #fff4e4",
                }}
              >
                <MKBox display="flex" justifyContent="center" alignItems="center" marginTop={0}>
                  <MKTypography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    color="beige"
                    sx={{
                      marginTop: 0,
                      marginBottom: 0,
                      marginRight: 2,
                      // Multiple shadows to create the outline effect
                    }}
                  >
                    Dashboard
                  </MKTypography>
                  <img src={Icon2} alt="icon" width="75" />
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <Container ref={containerRef}>
                  <Grid
                    container
                    item
                    xs={12}
                    lg={4}
                    justifyContent="center"
                    mx="auto"
                    marginTop={1}
                  >
                    <DateTrackerDating startDate="2023-04-16T21:00:00" />
                  </Grid>
                </Container>
                <Container ref={containerRef}>
                  <Grid
                    container
                    item
                    xs={12}
                    lg={4}
                    justifyContent="center"
                    mx="auto"
                    marginTop={1}
                  >
                    <DateTracker startDate="2023-11-21T20:17:00" />
                    <MKTypography variant="body2" color="beige" pt={2}>
                      시간 금방가지? ㅋㅋ
                    </MKTypography>
                  </Grid>
                </Container>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <MKBox display="flex" alignItems="center" justifyContent="center">
                  <MKTypography variant="body2" color="beige" marginTop={1}>
                    Our Advent Calendar !
                  </MKTypography>
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <MKBox px={2.5} marginTop={2}>
                  <Grid container spacing={1}>
                    {dates.map((date) => (
                      <Grid item xs={2} key={date}>
                        <MKBox
                          onClick={() => handleDateClick(date)}
                          sx={{
                            position: "relative",
                            height: "3rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: date <= currentDate ? "#d3b8c3" : "#fff4e4",
                            cursor: date <= currentDate ? "pointer" : "default",
                          }}
                        >
                          <MKTypography
                            onClick={() => handleDateClick(date)}
                            variant="body2"
                            color={date <= currentDate ? "beige" : "lilac"}
                          >
                            {date}
                          </MKTypography>
                          <img
                            src={cornerTopLeft}
                            alt="Decorative corner"
                            style={{
                              position: "absolute",
                              top: -5,
                              left: -5,
                              width: "30px",
                              height: "30px",
                            }}
                            onClick={() => handleDateClick(date)}
                          />
                          {/* Bottom-right corner image */}
                          <img
                            src={cornerBottomRight}
                            alt="Decorative corner"
                            style={{
                              position: "absolute",
                              bottom: -5,
                              right: -5,
                              width: "30px",
                              height: "30px",
                            }}
                            onClick={() => handleDateClick(date)}
                          />
                        </MKBox>
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
                <Modal
                  open={openModal}
                  onClose={handleClose}
                  sx={{ display: "grid", placeItems: "center" }}
                  overflow="auto"
                >
                  <Slide direction="down" in={openModal}>
                    <MKBox
                      alignItems="center"
                      justifyContent="center"
                      sx={modalStyle}
                      style={{
                        marginRight: "1rem",
                        marginLeft: "1rem",
                        backgroundColor: "#d3b8c3",
                        border: "2px solid #fff4e4",
                      }}
                      overflow="auto"
                      p={3}
                    >
                      {/* Add any other content you want to display from modalContent */}
                      <MKTypography variant="h3" color="beige" textAlign="center">
                        {modalContent.id}
                      </MKTypography>
                      <MKTypography variant="body2" color="beige" textAlign="center">
                        {renderTextWithNewlines(modalContent.alt)}
                      </MKTypography>
                    </MKBox>
                  </Slide>
                </Modal>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <MKBox display="flex" alignItems="center" justifyContent="center">
                  <MKTypography variant="body2" color="beige" marginTop={1}>
                    Lets see what Charlotte is listening to :3
                  </MKTypography>
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "72%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <MKBox px={1} paddingRight={2}>
                  <NowPlayingChar />
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "72%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={1}
                  marginBottom={1}
                />
                <MKBox display="flex" alignItems="center" justifyContent="center">
                  <MKTypography variant="body2" color="beige" marginTop={1}>
                    Lets see what Andie is listening to :3
                  </MKTypography>
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "72%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <MKBox px={1} paddingRight={2}>
                  <NowPlaying />
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={1}
                  marginBottom={2}
                />
              </Card>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb", border: "2px solid #fff4e4" }}></MKBox>
    </>
  );
}

export default Presentation;
