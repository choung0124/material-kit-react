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

function Presentation() {
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
        minHeight="75vh"
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
          marginBottom={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
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
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <Container>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={0}>
                <Gallery images={images} />
              </Grid>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={2}>
                <DateTrackerDating startDate="2023-04-16T21:00:00" />
                <DateTracker startDate="2023-11-21T20:17:00" />
              </Grid>
            </Container>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "top",
        }}
      ></MKBox>
    </>
  );
}

export default Presentation;
