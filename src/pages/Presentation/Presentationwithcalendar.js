/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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
import Gallery from "./Gallery";
import MKTypography from "components/MKTypography";
import { SpeechBubble } from "react-kawaii";
import { useEffect, useState, useRef } from "react";
import NowPlaying from "./NowPlaying";
import NowPlayingChar from "./NowPlayingChar";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Presentation() {
  const [imageHeight, setImageHeight] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setMaxWidth(containerRef.current.offsetWidth - 40);
      }
    };

    // Calculate on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    { id: 1, src: require("assets/images/gallery1.jpg"), alt: "Description of image 1" },
    { id: 2, src: require("assets/images/gallery2.jpg"), alt: "Description of image 2" },
    { id: 3, src: require("assets/images/gallery3.jpg"), alt: "Description of image 2" },
    { id: 4, src: require("assets/images/gallery4.jpg"), alt: "Description of image 2" },
    // Add more images as necessary
  ];
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
        <MKBox
          marginTop={20}
          marginBottom={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <SpeechBubble color="#e6d7ff" mood="happy" size={100} />
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
            Welcome !
          </MKTypography>
        </MKBox>
        <MKBox>
          <Card
            sx={{
              py: 2,
              mx: { xs: 3, lg: 2 },
              mt: -60,
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
            }}
          >
            <Container ref={containerRef}>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={0}>
                <Gallery images={images} />
              </Grid>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={2}>
                <DateTrackerDating startDate="2023-04-16T21:00:00" />
                <DateTracker startDate="2023-11-21T20:17:00" />
              </Grid>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={0}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    sx={(theme) => ({
                      heigh: "auto",
                      maxWidth: `${maxWidth}px`,
                      ".MuiPickersCalendarHeader-labelContainer": {
                        justifyContent: "flex-start",
                        [theme.breakpoints.down("sm")]: {
                          // Additional styles for mobile screens
                          justifyContent: "center", // Adjusts the position for mobile
                        },
                      },
                      ".MuiPickersCalendarHeader-label": {
                        fontSize: "1rem",
                        textAlign: "left",
                        [theme.breakpoints.down("sm")]: {
                          // Additional styles for mobile screens
                          textAlign: "center", // Aligns the text to the center for mobile
                        },
                      },
                      ".MuiYearCalendar-root": {
                        maxWidth: `${maxWidth}px`,
                        height: "inherit",
                      },
                    })}
                  />
                </LocalizationProvider>
              </Grid>
            </Container>
          </Card>
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
            }}
          >
            Now Playing, for Charlotte
          </MKTypography>
          <MKBox
            sx={{
              mx: { xs: 3 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
              borderRadius: "16px",
            }}
            marginTop={0}
          >
            <NowPlayingChar />
          </MKBox>
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
            }}
          >
            Now Playing, for Andie
          </MKTypography>
          <MKBox
            sx={{
              mx: { xs: 3 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
              borderRadius: "16px",
            }}
            marginTop={0}
          >
            <NowPlaying />
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default Presentation;
